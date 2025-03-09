import { createContext, useContext, useState, ReactNode } from 'react';
import { Contact, ContactsState } from '../types/contact';
import { mockContacts } from '../data/mockContacts';

interface ContactsContextType extends ContactsState {
  toggleFavorite: (id: string) => void;
  selectContact: (contact: Contact | null) => void;
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const toggleFavorite = (id: string) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ));
  };

  const selectContact = (contact: Contact | null) => {
    setSelectedContact(contact);
  };

  return (
    <ContactsContext.Provider value={{
      contacts,
      selectedContact,
      toggleFavorite,
      selectContact,
    }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContactsContext = () => {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error('useContactsContext must be used within a ContactsProvider');
  }
  return context;
}; 