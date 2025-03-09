import {
  VStack,
  Button,
  Text,
  Box,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';
import { Call } from '../types/call';
import { CallItem } from './CallItem';

interface CallListProps {
  calls: Call[];
  selectedCallId: string | null;
  onCallSelect: (call: Call) => void;
  onArchiveToggle: (id: string) => void;
  onArchiveAll: () => void;
  onUnarchiveAll: () => void;
  view: 'active' | 'archived';
}

export const CallList = ({
  calls,
  selectedCallId,
  onCallSelect,
  onArchiveToggle,
  onArchiveAll,
  onUnarchiveAll,
  view
}: CallListProps) => {
  const filteredCalls = calls.filter(call => 
    view === 'active' ? !call.isArchived : call.isArchived
  );

  return (
    <Box>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          {view === 'active' ? 'Activity Feed' : 'Archived Calls'}
        </Text>
        <Button
          colorScheme={view === 'active' ? 'blue' : 'green'}
          size="sm"
          onClick={view === 'active' ? onArchiveAll : onUnarchiveAll}
        >
          {view === 'active' ? 'Archive All' : 'Unarchive All'}
        </Button>
      </HStack>

      <VStack spacing={3} align="stretch">
        {filteredCalls.length === 0 ? (
          <Text color="gray.500" textAlign="center" py={8}>
            {view === 'active'
              ? 'No active calls'
              : 'No archived calls'}
          </Text>
        ) : (
          filteredCalls.map(call => (
            <CallItem
              key={call.id}
              call={call}
              onArchiveToggle={onArchiveToggle}
              onSelect={onCallSelect}
              isSelected={call.id === selectedCallId}
            />
          ))
        )}
      </VStack>
    </Box>
  );
}; 