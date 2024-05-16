// ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = ({ onDelete }) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`/contacts`);
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      onDelete(contactId);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Contacts"
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.email}
            <DeleteContactButton onDelete={() => handleDelete(contact.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
