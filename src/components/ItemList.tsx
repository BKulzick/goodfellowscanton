import React, { useState, useEffect } from 'react';
import firestoreService, { FirebaseDocument } from '../services/firestoreService';
import { where } from 'firebase/firestore';
import './ItemList.css';

interface Item extends FirebaseDocument {
  title: string;
  description?: string;
  completed?: boolean;
}

export const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const COLLECTION_NAME = 'items';

  // Fetch items from Firestore
  const loadItems = async () => {
    try {
      setLoading(true);
      const fetchedItems = await firestoreService.getCollection(COLLECTION_NAME);
      setItems(fetchedItems as Item[]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load items');
      console.error('Error loading items:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load items on component mount
  useEffect(() => {
    loadItems();
  }, []);

  // Add new item
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;

    try {
      const newItemId = await firestoreService.add(COLLECTION_NAME, {
        title: newItemTitle,
        description: '',
        completed: false,
      });

      setItems([
        ...items,
        {
          id: newItemId,
          title: newItemTitle,
          description: '',
          completed: false,
        },
      ]);

      setNewItemTitle('');
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
      console.error('Error adding item:', err);
    }
  };

  // Delete item
  const handleDeleteItem = async (itemId: string) => {
    try {
      await firestoreService.delete(COLLECTION_NAME, itemId);
      setItems(items.filter((item) => item.id !== itemId));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
      console.error('Error deleting item:', err);
    }
  };

  // Toggle item completion
  const handleToggleCompleted = async (item: Item) => {
    try {
      const newCompletedStatus = !item.completed;
      await firestoreService.update(COLLECTION_NAME, item.id, {
        completed: newCompletedStatus,
      });

      setItems(
        items.map((i) =>
          i.id === item.id ? { ...i, completed: newCompletedStatus } : i
        )
      );
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update item');
      console.error('Error updating item:', err);
    }
  };

  if (loading) {
    return <div className="item-list-container">Loading items...</div>;
  }

  return (
    <div className="item-list-container">
      <h2>Firebase Firestore Example</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
          placeholder="Enter new item..."
          className="item-input"
        />
        <button type="submit" className="add-button">
          Add Item
        </button>
      </form>

      <div className="items-list">
        {items.length === 0 ? (
          <p className="empty-message">No items yet. Add one to get started!</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.completed || false}
                onChange={() => handleToggleCompleted(item)}
                className="item-checkbox"
              />
              <span className={`item-title ${item.completed ? 'completed' : ''}`}>
                {item.title}
              </span>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <div className="info">
        <p>
          <strong>Total items:</strong> {items.length}
        </p>
        <p>
          <strong>Completed:</strong> {items.filter((i) => i.completed).length}
        </p>
      </div>
    </div>
  );
};

export default ItemList;
