import { useState, useEffect } from 'react';
import { Box } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const allContacts = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      return (parsedContacts);
    } else {
       return allContacts;
    }
  });
  const [filter, setFilter] = useState('');
  
  const addContact = ({name, number}) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your Phonebook!`);
      return
    }
    setContacts(prevContacts => [...prevContacts, {id: nanoid(),
          name,
          number,}] 
    )
  }

  const deleteContact = contactId => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const searchContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),);
  }

  useEffect(() => {
    if(contacts.lengt === 0) return
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  const resultFilter = searchContact()

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={addContact}          
        />
        <h2>Contacts</h2>
        <Filter
          onChange={changeFilter}
          value={filter} 
        /> 
        <ContactList
          items={resultFilter}
          onDelete={deleteContact}
        />
      </Box>
    );
  }


App.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}.isRequired