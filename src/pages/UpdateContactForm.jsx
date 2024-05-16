import React, { useState } from 'react';
import axios from 'axios';

const UpdateContactForm = ({ contact, onUpdate }) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumbers, setPhoneNumbers] = useState(contact.phoneNumbers);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [phoneType, setPhoneType] = useState('Mobile');

  const handleAddPhoneNumber = () => {
    if (newPhoneNumber.trim() === '') return;
    setPhoneNumbers([...phoneNumbers, { number: newPhoneNumber, type: phoneType }]);
    setNewPhoneNumber('');
  };

  const handleRemovePhoneNumber = (index) => {
    const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/contacts/${contact.id}`, {
        firstName,
        lastName,
        email,
        phoneNumbers
      });
      onUpdate(response.data); // Assuming backend returns the updated contact data
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for first name, last name, email, and phone numbers */}
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default UpdateContactForm;