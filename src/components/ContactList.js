import React from 'react';
import ContactCard from './ContactCard';

// --- UPDATED: Accept searchTerm ---
function ContactList({ contacts, searchTerm }) {
  return (
    <div className="contact-list">
      {contacts.length > 0 ? (
        contacts.map(contact => (
          // --- UPDATED: Pass searchTerm to ContactCard ---
          <ContactCard
            key={contact.id}
            contact={contact}
            searchTerm={searchTerm}
          />
        ))
      ) : (
        <p className="no-results">No contacts found.</p>
      )}
    </div>
  );
}

export default ContactList;