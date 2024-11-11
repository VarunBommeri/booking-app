// App.js
import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import Loader from './components/Loader';
import './styles.css';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBookingSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      const data = await response.json();
      setBookingDetails({ ...formData, id: data.id });  // Use the fake response ID as booking ID
    } catch (error) {
      setError('There was an issue submitting your booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {!loading && !bookingDetails && (
        <BookingForm onSubmit={handleBookingSubmit} />
      )}
      {error && <p className="error-message">{error}</p>}
      {bookingDetails && <BookingConfirmation bookingDetails={bookingDetails} />}
    </div>
  );
};

export default App;
