// CreateContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateContactForm = ({ onCreate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [phoneType, setPhoneType] = useState('Mobile');

onst handleAddPhoneNumber = () => {
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
      const response = await axios.post('/contacts', {
        firstName,
        lastName,
        email,
        phoneNumbers
      });
      onCreate(response.data); // Assuming backend returns the created contact data
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumbers([]);
      setNewPhoneNumber('');
      setPhoneType('Mobile');
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for first name, last name, email, and phone numbers */}
      <button type="submit">Create Contact</button>
    </form>
  );
};

export default CreateContactForm;
