// EventsContext.js
import { createContext, useContext, useState } from 'react';

export const EventsContext = createContext({
  eventsLength: 0,
  setEventsLength: () => {},
  todolist: '', // Add your additional variable here
  setToDoList: () => {}, // Add the setter for the additional variable
});

export const useEventsContext = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error('useEventsContext must be used within an EventsProvider');
  }
  return context;
};

export const EventsProvider = ({ children }) => {
  const [eventsLength, setEventsLength] = useState(0);
  const [todolist, setToDoList] = useState(''); // Set the initial value for the additional variable

  return (
    <EventsContext.Provider
      value={{ eventsLength, setEventsLength, todolist, setToDoList }}
    >
      {children}
    </EventsContext.Provider>
  );
};
