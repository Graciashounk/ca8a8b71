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

interface CallDetailProps {
  call: Call;
  onArchiveToggle: (id: string) => void;
}

export const CallDetail = ({ call, onArchiveToggle }: CallDetailProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p={6}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      height="100%"
    >
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between">
          <Badge
            colorScheme={call.direction === 'inbound' ? 'green' : 'blue'}
            display="flex"
            alignItems="center"
            px={3}
            py={2}
            borderRadius="full"
          >
            {call.direction === 'inbound' ? (
              <><FaPhone style={{ marginRight: '8px' }} /> Inbound Call</>
            ) : (
              <><FaPhoneSlash style={{ marginRight: '8px' }} /> Outbound Call</>
            )}
          </Badge>
          <IconButton
            aria-label={call.isArchived ? 'Unarchive call' : 'Archive call'}
            icon={call.isArchived ? <FaInbox /> : <FaArchive />}
            onClick={() => onArchiveToggle(call.id)}
          />
        </HStack>

        <VStack spacing={4} align="stretch">
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
            <Text fontSize="lg" fontWeight="medium">
              {formatDuration(call.duration)}
            </Text>
          </Box>

          <Box>
            <Text fontSize="sm" color="gray.500">Time</Text>
            <Text fontSize="lg" fontWeight="medium">
              {formatDate(call.timestamp)}
            </Text>
          </Box>

          <Box>
            <Text fontSize="sm" color="gray.500" mb={2}>Notes</Text>
            <Textarea
              value={call.notes || ''}
              placeholder="No notes available"
              isReadOnly
              resize="none"
              minHeight="150px"
            />
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
}; 