import React from 'react';

// Simple avatar component to show initials
const Avatar = ({ name }) => {
    const initials = name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    return <div className="avatar">{initials}</div>;
};

// --- NEW: Helper function to highlight matching text ---
const getHighlightedText = (text, highlight) => {
    // If no highlight text, just return the original text
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }

    // Create a case-insensitive regex to find the highlight text
    const regex = new RegExp(`(${highlight})`, 'gi');

    // Split the text into parts based on the match
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, index) =>
                // Check if the part matches the regex
                regex.test(part) ? (
                    // If it matches, wrap it in a <mark> tag
                    <mark key={index} className="highlight">{part}</mark>
                ) : (
                    // Otherwise, just render the text
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    );
};

// --- UPDATED: Accept searchTerm ---
function ContactCard({ contact, searchTerm }) {
    return (
        <div className="contact-card">
            <Avatar name={contact.name} />
            <div className="contact-details">
                {/* --- UPDATED: Use the highlighter function --- */}
                <h3 className="contact-name">
                    {getHighlightedText(contact.name, searchTerm)}
                </h3>
                <p className="contact-email">
                    {getHighlightedText(contact.email, searchTerm)}
                </p>
                <p className="contact-phone">
                    {getHighlightedText(contact.phone, searchTerm)}
                </p>
            </div>
        </div>
    );
}

export default ContactCard;