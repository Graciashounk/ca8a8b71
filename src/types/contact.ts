export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  favorite: boolean;
}

export interface ContactsState {
  contacts: Contact[];
  selectedContact: Contact | null;
} 