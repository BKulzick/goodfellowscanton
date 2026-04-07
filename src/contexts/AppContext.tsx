import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Child {
  id: string;
  name: string;
  age: number;
  gender: string;
  interests?: string[];
}

export interface Application {
  id: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'denied';
  familyName: string;
  email: string;
  phone: string;
  childrenCount: number;
  children: Child[];
  householdIncome: string;
  needDescription: string;
  documents: string[];
  submittedAt?: Date;
  reviewedAt?: Date;
  reviewerNotes?: string;
}

interface AppContextType {
  currentApplication: Partial<Application> | null;
  setCurrentApplication: (app: Partial<Application> | null) => void;
  applications: Application[];
  setApplications: (apps: Application[]) => void;
  addApplication: (app: Application) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  currentUser: { role: 'family' | 'admin' | 'sponsor' | null; id?: string } | null;
  setCurrentUser: (user: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentApplication, setCurrentApplication] = useState<Partial<Application> | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [currentUser, setCurrentUser] = useState<{ role: 'family' | 'admin' | 'sponsor' | null; id?: string } | null>(null);

  const addApplication = (app: Application) => {
    setApplications([...applications, app]);
  };

  const updateApplication = (id: string, updates: Partial<Application>) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, ...updates } : app
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        currentApplication,
        setCurrentApplication,
        applications,
        setApplications,
        addApplication,
        updateApplication,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
