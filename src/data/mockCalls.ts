import { Call } from '../types/call';

/**
 * Mock call history data for development and testing
 * Includes a variety of calls with:
 * - Both inbound and outbound calls
 * - Different durations and timestamps
 * - Some calls with notes and some without
 * - All calls initially unarchived
 * Used as initial data for the CallsContext
 */
export const mockCalls: Call[] = [
  {
    id: '1',
    direction: 'inbound',
    from: '+1 (555) 123-4567',
    to: '+1 (555) 765-4321',
    duration: 300,
    timestamp: '2024-03-15T10:30:00Z',
    isArchived: false,
    notes: 'Customer inquiry about new product features'
  },
  {
    id: '2',
    direction: 'outbound',
    from: '+1 (555) 765-4321',
    to: '+1 (555) 987-6543',
    duration: 180,
    timestamp: '2024-03-15T11:15:00Z',
    isArchived: false,
    notes: 'Follow-up on service request'
  },
  {
    id: '3',
    direction: 'inbound',
    from: '+1 (555) 246-8135',
    to: '+1 (555) 765-4321',
    duration: 420,
    timestamp: '2024-03-15T13:45:00Z',
    isArchived: false,
    notes: 'Technical support call'
  },
  {
    id: '4',
    direction: 'outbound',
    from: '+1 (555) 765-4321',
    to: '+1 (555) 135-7924',
    duration: 240,
    timestamp: '2024-03-15T15:20:00Z',
    isArchived: false
  },
  {
    id: '5',
    direction: 'inbound',
    from: '+1 (555) 369-2580',
    to: '+1 (555) 765-4321',
    duration: 360,
    timestamp: '2024-03-15T16:00:00Z',
    isArchived: false,
    notes: 'Sales inquiry'
  }
]; 