import { Contact } from '../types/contact';

/**
 * Mock contacts data for development and testing
 * Includes a mix of contacts with:
 * - Both favorite and non-favorite contacts
 * - Some contacts with email addresses and some without
 * - Different name formats and phone number patterns
 * Used as initial data for the ContactsContext
 */
export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'John Smith',
    phoneNumber: '+1 (555) 123-4567',
    email: 'john.smith@email.com',
    favorite: true
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    phoneNumber: '+1 (555) 987-6543',
    email: 'sarah.j@email.com',
    favorite: false
  },
  {
    id: '3',
    name: 'Michael Brown',
    phoneNumber: '+1 (555) 246-8135',
    email: 'michael.b@email.com',
    favorite: true
  },
  {
    id: '4',
    name: 'Emily Davis',
    phoneNumber: '+1 (555) 369-2580',
    favorite: false
  }
]; 