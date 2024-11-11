// BookingConfirmation.js
import React from 'react';

const BookingConfirmation = ({ bookingDetails }) => (
  <div className="container">
    <h2>Booking Confirmed!</h2>
    <p>Thank you, {bookingDetails.name}.</p>
    <p>Your booking is confirmed.</p>
    <div>
      <strong>Booking Details:</strong>
      <p>Email: {bookingDetails.email}</p>
      <p>Check-in Date: {bookingDetails.checkIn}</p>
      <p>Check-out Date: {bookingDetails.checkOut}</p>
      <p>Rooms: {bookingDetails.rooms}</p>
    </div>
  </div>
);

export default BookingConfirmation;
