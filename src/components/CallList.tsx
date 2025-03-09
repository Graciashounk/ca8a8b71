import {
  VStack,
  Button,
  Text,
  Box,
  HStack
} from '@chakra-ui/react';
import { Call } from '../types/call';
import { CallItem } from './CallItem';

/**
 * Props for the CallList component
 */
interface CallListProps {
  /** Array of calls to display */
  calls: Call[];
  /** ID of the currently selected call, if any */
  selectedCallId: string | null;
  /** Callback when a call is selected */
  onCallSelect: (call: Call) => void;
  /** Callback to toggle archive status of a call */
  onArchiveToggle: (id: string) => void;
  /** Callback to archive all calls */
  onArchiveAll: () => void;
  /** Callback to unarchive all calls */
  onUnarchiveAll: () => void;
  /** Current view mode (active or archived) */
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
