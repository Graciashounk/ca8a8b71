export interface Call {
  id: string;
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  duration: number; // in seconds
  timestamp: string;
  isArchived: boolean;
  notes?: string;
}

export interface CallsState {
  calls: Call[];
  selectedCall: Call | null;
  view: 'active' | 'archived';
} 