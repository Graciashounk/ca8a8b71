import { Box, HStack, Text, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaArchive, FaInbox, FaPhone, FaPhoneSlash } from 'react-icons/fa';
import { Call } from '../types/call';
import { formatDuration, formatPhoneNumber, formatDate } from '../utils/formatters';

interface CallItemProps {
  call: Call;
  onArchiveToggle: (id: string) => void;
  onSelect: (call: Call) => void;
  isSelected: boolean;
}

export const CallItem = ({ call, onArchiveToggle, onSelect, isSelected }: CallItemProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const selectedBgColor = useColorModeValue('blue.50', 'blue.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p={4}
      bg={isSelected ? selectedBgColor : bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="md"
      cursor="pointer"
      onClick={() => onSelect(call)}
      _hover={{ bg: isSelected ? selectedBgColor : useColorModeValue('gray.50', 'gray.700') }}
      transition="all 0.2s"
    >
      <HStack spacing={4} justify="space-between">
        <HStack spacing={4}>
          {call.direction === 'inbound' ? (
            <FaPhone color="green" />
          ) : (
            <FaPhoneSlash color="blue" />
          )}
          <Box>
            <Text fontWeight="medium">{formatPhoneNumber(call.from)}</Text>
            <Text fontSize="sm" color="gray.500">
              {formatDate(call.timestamp)} • {formatDuration(call.duration)}
            </Text>
          </Box>
        </HStack>
        <IconButton
          aria-label={call.isArchived ? 'Unarchive call' : 'Archive call'}
          icon={call.isArchived ? <FaInbox /> : <FaArchive />}
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            onArchiveToggle(call.id);
          }}
        />
      </HStack>
    </Box>
  );
}; 