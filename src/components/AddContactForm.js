import React, { useState } from 'react'; // 'useEffect' removed

function AddContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // State for Validation Errors
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        // Name check
        if (!name) {
            newErrors.name = 'Name is required.';
        }

        // Phone check
        const phoneRegex = /^\d{10}$/; // exactly 10 digits
        if (!phone) {
            newErrors.phone = 'Phone is required.';
        } else if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Phone must be exactly 10 digits.';
        }

        setErrors(newErrors);
        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate first, and stop if it's not valid
        if (!validate()) {
            return;
        }

        // Pass the new contact object up to App.js
        onAddContact({ name, email, phone });

        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setErrors({});
    };

    return (
        <form className="add-contact-form" onSubmit={handleSubmit}>
            <h3>Add a New Contact</h3>
            <div className="form-group">
                {/* Name Input with Error */}
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={errors.name ? 'input-error' : ''} // Add error class
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                {/* Email Input (optional) */}
                <div>
                    <input
                        type="email"
                        placeholder="Email (Optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Phone Input with Error */}
                <div>
                    <input
                        type="tel"
                        placeholder="Phone (10 digits)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={errors.phone ? 'input-error' : ''} // Add error class
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
            </div>
            <button type="submit" className="submit-btn">Save Contact</button>
        </form>
    );
}

export default AddContactForm;