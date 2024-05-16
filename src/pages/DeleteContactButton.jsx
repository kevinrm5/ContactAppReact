// DeleteContactButton.js
import React from 'react';
import axios from 'axios';

const DeleteContactButton = ({ onDelete }) => {
  const handleClick = async () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await onDelete();
        // Handle successful deletion
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteContactButton;
