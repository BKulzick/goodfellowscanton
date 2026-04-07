#!/bin/bash
# Git pre-commit hook to ensure Firebase config is properly set up

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  Warning: .env.local file not found!"
    echo "Firebase credentials are required to run this project."
    echo ""
    echo "To set up Firebase:"
    echo "1. Copy .env.example to .env.local: cp .env.example .env.local"
    echo "2. Add your Firebase credentials to .env.local"
    echo ""
    echo "See FIREBASE_SETUP.md for detailed instructions."
    echo ""
    read -p "Continue with commit? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

exit 0
