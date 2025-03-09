import {
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
  IconButton,
  HStack,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { FaSearch, FaStar, FaRegStar, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import { Contact } from '../types/contact';
import { useContactsContext } from '../context/ContactsContext';

export const Contacts = () => {
  const { contacts, toggleFavorite } = useContactsContext();
  const [searchQuery, setSearchQuery] = useState('');
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phoneNumber.includes(searchQuery)
  );

  const favorites = filteredContacts.filter(contact => contact.favorite);
  const others = filteredContacts.filter(contact => !contact.favorite);

  const ContactItem = ({ contact }: { contact: Contact }) => (
    <Box
      p={4}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="md"
      _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
      transition="all 0.2s"
    >
      <HStack justify="space-between">
        <VStack align="start" spacing={1}>
          <Text fontWeight="medium">{contact.name}</Text>
          <Text fontSize="sm" color="gray.500">
            {contact.phoneNumber}
          </Text>
          {contact.email && (
            <Text fontSize="sm" color="gray.500">
              {contact.email}
            </Text>
          )}
        </VStack>
        <HStack>
          <IconButton
            aria-label="Call contact"
            icon={<FaPhone />}
            colorScheme="green"
            variant="ghost"
            size="sm"
            onClick={() => console.log('Calling:', contact.phoneNumber)}
          />
          <IconButton
            aria-label={contact.favorite ? 'Remove from favorites' : 'Add to favorites'}
            icon={contact.favorite ? <FaStar /> : <FaRegStar />}
            color={contact.favorite ? 'yellow.400' : 'gray.400'}
            variant="ghost"
            size="sm"
            onClick={() => toggleFavorite(contact.id)}
          />
        </HStack>
      </HStack>
    </Box>
  );

  return (
    <VStack spacing={4} w="full" maxW="600px" mx="auto" p={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>

      {favorites.length > 0 && (
        <>
          <Text alignSelf="start" fontWeight="bold" color="gray.500">
            Favorites
          </Text>
          <VStack w="full" spacing={2}>
            {favorites.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </VStack>
          <Divider />
        </>
      )}

      <Text alignSelf="start" fontWeight="bold" color="gray.500">
        All Contacts
      </Text>
      <VStack w="full" spacing={2}>
        {others.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </VStack>
    </VStack>
  );
}; 