import { createContext, useContext, useState, ReactNode } from 'react';
import { Call, CallsState } from '../types/call';
import { mockCalls } from '../data/mockCalls';

/**
 * Extended interface for CallsContext that includes all available actions
 */
interface CallsContextType extends CallsState {
  /** Toggle the archive status of a specific call */
  toggleArchiveCall: (id: string) => void;
  /** Archive all calls in the current view */
  archiveAllCalls: () => void;
  /** Unarchive all calls in the current view */
  unarchiveAllCalls: () => void;
  /** Select a call to view its details */
  selectCall: (call: Call | null) => void;
  /** Switch between active and archived views */
  setView: (view: 'active' | 'archived') => void;
  /** Add a new call to the call history */
  addNewCall: (phoneNumber: string, source: 'numpad' | 'contacts') => void;
}

// Create context with undefined default value
const CallsContext = createContext<CallsContextType | undefined>(undefined);

/**
 * Provider component that wraps the app and makes call data available to child components
 */
export const CallsProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state with mock data
  const [calls, setCalls] = useState<Call[]>(mockCalls);
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const [view, setView] = useState<'active' | 'archived'>('active');

  /**
   * Toggle the archive status of a specific call
   * @param id - The ID of the call to toggle
   */
  const toggleArchiveCall = (id: string) => {
    setCalls(calls.map(call =>
      call.id === id ? { ...call, isArchived: !call.isArchived } : call
    ));
  };

  /**
   * Archive all calls in the current list
   */
  const archiveAllCalls = () => {
    setCalls(calls.map(call => ({ ...call, isArchived: true })));
  };

  /**
   * Unarchive all calls in the current list
   */
  const unarchiveAllCalls = () => {
    setCalls(calls.map(call => ({ ...call, isArchived: false })));
  };

  /**
   * Select a call to view its details
   * @param call - The call to select, or null to deselect
   */
  const selectCall = (call: Call | null) => {
    setSelectedCall(call);
  };

  /**
   * Add a new call to the call history
   * @param phoneNumber - The phone number being called
   * @param source - Where the call was initiated from (numpad or contacts)
   */
  const addNewCall = (phoneNumber: string, source: 'numpad' | 'contacts') => {
    const newCall: Call = {
      id: Date.now().toString(),
      direction: 'outbound',
      from: '+1 (555) 765-4321', // Your default number
      to: phoneNumber,
      duration: 0, // Call just started
      timestamp: new Date().toISOString(),
      isArchived: false,
      source: source,
      notes: `Outbound call made from ${source}`
    };

    // Add new call to the beginning of the list
    setCalls(prevCalls => [newCall, ...prevCalls]);
    // Select the new call
    setSelectedCall(newCall);
    // Switch to active view to show the new call
    setView('active');
  };

  return (
    <CallsContext.Provider value={{
      calls,
      selectedCall,
      view,
      toggleArchiveCall,
      archiveAllCalls,
      unarchiveAllCalls,
      selectCall,
      setView,
      addNewCall,
    }}>
      {children}
    </CallsContext.Provider>
  );
};

/**
 * Custom hook to use the calls context
 * @throws {Error} If used outside of CallsProvider
 */
export const useCallsContext = () => {
  const context = useContext(CallsContext);
  if (context === undefined) {
    throw new Error('useCallsContext must be used within a CallsProvider');
  }
  return context;
}; 