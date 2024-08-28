// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const hours = {
    'Lunes': '10:00 AM - 4:00 PM',
    'Martes': '10:00 AM - 4:00 PM',
    'Miércoles': '10:00 AM - 4:00 PM',
    'Jueves': '10:00 AM - 4:00 PM',
    'Viernes': '10:00 AM - 4:00 PM',
    'Sábado': '9:00 AM - 8:00 PM',
    'Domingo': '9:00 AM - 8:00 PM',
  };
  
  const today = new Date();
  const dayName = days[today.getDay()];
  const todayHours = hours[dayName];

  return (
    <div>
      <h2>Horas de hoy ({dayName}):</h2>
      <p>{todayHours}</p>
    </div>
  );
};

export default Hours;