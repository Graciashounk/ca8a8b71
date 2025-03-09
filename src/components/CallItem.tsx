import { Box, HStack, Text, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaArchive, FaInbox, FaPhone, FaPhoneSlash } from 'react-icons/fa';
import { Call } from '../types/call';
import { formatDuration, formatPhoneNumber, formatDate } from '../utils/formatters';

/**
 * Props for the CallItem component
 * Represents a single call in the call history list
 */
interface CallItemProps {
  /** The call data to display */
  call: Call;
  /** Callback to toggle archive status of the call */
  onArchiveToggle: (id: string) => void;
  /** Callback when this call is selected */
  onSelect: (call: Call) => void;
  /** Whether this call is currently selected */
  isSelected: boolean;
}

/**
 * CallItem Component
 * 
 * Displays a single call entry with:
 * - Call direction indicator (inbound/outbound)
 * - Phone number
 * - Duration
 * - Timestamp
 * - Archive/unarchive toggle
 * - Selection state
 */
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
      <HStack justify="space-between">
        <HStack spacing={4}>
          {call.direction === 'inbound' ? (
            <FaPhone color="green" />
          ) : (
            <FaPhoneSlash color="blue" />
          )}
          <Box>
            <Text fontWeight="medium">
              {formatPhoneNumber(call.direction === 'inbound' ? call.from : call.to)}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {formatDuration(call.duration)} • {formatDate(call.timestamp)}
            </Text>
          </Box>
        </HStack>
        <IconButton
          aria-label={call.isArchived ? 'Unarchive call' : 'Archive call'}
          icon={call.isArchived ? <FaInbox /> : <FaArchive />}
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onArchiveToggle(call.id);
          }}
        />
      </HStack>
    </Box>
  );
}; 