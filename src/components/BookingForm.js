// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Book Your Stay</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Check-in Date:</label>
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
        required
      />
      <label>Check-out Date:</label>
      <input
        type="date"
        name="checkOut"
        value={formData.checkOut}
        onChange={handleChange}
        required
      />
      <label>Rooms:</label>
      <select
        name="rooms"
        value={formData.rooms}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
