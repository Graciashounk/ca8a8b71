/**
 * Represents a phone call in the system
 */
export interface Call {
  /** Unique identifier for the call */
  id: string;
  /** Direction of the call (incoming or outgoing) */
  direction: 'inbound' | 'outbound';
  /** Phone number that initiated the call */
  from: string;
  /** Phone number that received the call */
  to: string;
  /** Duration of the call in seconds */
  duration: number;
  /** ISO timestamp when the call was made */
  timestamp: string;
  /** Whether the call has been archived */
  isArchived: boolean;
  /** Optional notes about the call */
  notes?: string;
  /** The interface from which the call was initiated */
  source?: 'numpad' | 'contacts' | 'activity';
}

/**
 * Represents the global state for calls in the application
 */
export interface CallsState {
  /** List of all calls */
  calls: Call[];
  /** Currently selected call for viewing details */
  selectedCall: Call | null;
  /** Current view mode (active or archived calls) */
  view: 'active' | 'archived';
} 