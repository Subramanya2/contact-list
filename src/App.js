import React, { useState, useMemo, useEffect } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';
import './App.css';

// Toast component defined locally
const Toast = ({ message, visible }) => {
  if (!visible) return null;
  return <div className="toast">{message}</div>;
};

// Initial hardcoded data to mimic API fetch
const INITIAL_CONTACTS = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '1234567890' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '2345678901' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '3456789012' },
  { id: 4, name: 'David Lee', email: 'david@example.com', phone: '4567890123' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', phone: '5678901234' },
];

function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // State for the Toast
  const [toastMessage, setToastMessage] = useState('');

  // Effect to clear the toast after 3 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage('');
      }, 3000); // 3000ms = 3 seconds

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [toastMessage]); // Run this effect when toastMessage changes

  // UPDATED SEARCH LOGIC
  const filteredContacts = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    // If search is empty, return all contacts
    if (!lowerSearchTerm) {
      return contacts;
    }

    // Otherwise, filter based on all three fields
    return contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(lowerSearchTerm);
      const emailMatch = contact.email.toLowerCase().includes(lowerSearchTerm);
      const phoneMatch = contact.phone.toLowerCase().includes(lowerSearchTerm);

      return nameMatch || emailMatch || phoneMatch; // Return true if any field matches
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts, searchTerm]); // Dependencies are correct

  // Handler to add a new contact
  const handleAddContact = (newContact) => {
    const contactWithId = { id: Date.now(), ...newContact };
    setContacts(prevContacts => [
      ...prevContacts,
      contactWithId
    ]);
    setShowAddForm(false);

    // Set the toast message on success
    setToastMessage(`Contact "${newContact.name}" added successfully!`);
  };

  return (
    <div className="app-container">
      {/* Render the Toast component */}
      <Toast message={toastMessage} visible={!!toastMessage} />

      <header className="app-header">
        <h1>My Contact List</h1>
        <button
          className="toggle-form-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Contact'}
        </button>
      </header>

      {/* Conditionally render the AddContactForm */}
      {showAddForm && <AddContactForm onAddContact={handleAddContact} />}

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* --- UPDATED: searchTerm is now passed down --- */}
      <ContactList contacts={filteredContacts} searchTerm={searchTerm} />
    </div>
  );
}

export default App;