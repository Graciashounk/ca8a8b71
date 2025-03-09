import {
  Box,
  VStack,
  Text,
  Badge,
  IconButton,
  useColorModeValue,
  HStack,
  Textarea,
  Button
} from '@chakra-ui/react';
import { FaArchive, FaInbox, FaPhone, FaPhoneSlash } from 'react-icons/fa';
import { Call } from '../types/call';
import { formatDuration, formatPhoneNumber, formatDate } from '../utils/formatters';

/**
 * Props for the CallDetail component
 * Displays detailed information about a selected call
 */
interface CallDetailProps {
  /** The call data to display in detail */
  call: Call;
  /** Callback to toggle archive status of the call */
  onArchiveToggle: (id: string) => void;
}

/**
 * CallDetail Component
 * 
 * Displays detailed information about a call including:
 * - Call direction with visual indicator
 * - Phone numbers (from/to)
 * - Duration and timestamp
 * - Archive status with toggle
 * - Notes section
 * - Call status badge
 */
export const CallDetail = ({ call, onArchiveToggle }: CallDetailProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p={6}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="md"
      w="full"
    >
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between">
          <HStack>
            {call.direction === 'inbound' ? (
              <FaPhone color="green" size={20} />
            ) : (
              <FaPhoneSlash color="blue" size={20} />
            )}
            <Badge colorScheme={call.direction === 'inbound' ? 'green' : 'blue'}>
              {call.direction === 'inbound' ? 'Incoming' : 'Outgoing'}
            </Badge>
          </HStack>
          <IconButton
            aria-label={call.isArchived ? 'Unarchive call' : 'Archive call'}
            icon={call.isArchived ? <FaInbox /> : <FaArchive />}
            onClick={() => onArchiveToggle(call.id)}
          />
        </HStack>

        <Box>
          <Text fontSize="sm" color="gray.500">From</Text>
          <Text fontSize="lg" fontWeight="medium">
            {formatPhoneNumber(call.from)}
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.500">To</Text>
          <Text fontSize="lg" fontWeight="medium">
            {formatPhoneNumber(call.to)}
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.500">Duration</Text>
          <Text fontSize="lg">{formatDuration(call.duration)}</Text>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.500">Time</Text>
          <Text fontSize="lg">{formatDate(call.timestamp)}</Text>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.500" mb={2}>Notes</Text>
          <Textarea
            value={call.notes || ''}
            placeholder="No notes"
            isReadOnly
            resize="none"
            bg={useColorModeValue('gray.50', 'gray.700')}
          />
        </Box>
      </VStack>
    </Box>
  );
}; 