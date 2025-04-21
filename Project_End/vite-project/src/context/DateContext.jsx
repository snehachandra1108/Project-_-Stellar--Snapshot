import React, { createContext, useState } from 'react';

// Create a Context for sharing the selected date across components
export const DateContext = createContext();

export const DateProvider = ({ children }) => {

   // State to store the currently selected date
  const [selectedDate, setSelectedDate] = useState('');

  return (
    // Make the selectedDate and its updater function available
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};
