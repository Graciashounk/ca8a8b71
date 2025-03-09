import { createContext, useContext, useState, ReactNode } from 'react';
import { Call, CallsState } from '../types/call';
import { mockCalls } from '../data/mockCalls';

interface CallsContextType extends CallsState {
  toggleArchiveCall: (id: string) => void;
  archiveAllCalls: () => void;
  unarchiveAllCalls: () => void;
  selectCall: (call: Call | null) => void;
  setView: (view: 'active' | 'archived') => void;
  addNewCall: (phoneNumber: string, source: 'numpad' | 'contacts') => void;
}

const CallsContext = createContext<CallsContextType | undefined>(undefined);

export const CallsProvider = ({ children }: { children: ReactNode }) => {
  const [calls, setCalls] = useState<Call[]>(mockCalls);
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const [view, setView] = useState<'active' | 'archived'>('active');

  const toggleArchiveCall = (id: string) => {
    setCalls(calls.map(call =>
      call.id === id ? { ...call, isArchived: !call.isArchived } : call
    ));
  };

  const archiveAllCalls = () => {
    setCalls(calls.map(call => ({ ...call, isArchived: true })));
  };

  const unarchiveAllCalls = () => {
    setCalls(calls.map(call => ({ ...call, isArchived: false })));
  };

  const selectCall = (call: Call | null) => {
    setSelectedCall(call);
  };

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

    setCalls(prevCalls => [newCall, ...prevCalls]);
    setSelectedCall(newCall);
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

export const useCallsContext = () => {
  const context = useContext(CallsContext);
  if (context === undefined) {
    throw new Error('useCallsContext must be used within a CallsProvider');
  }
  return context;
}; 
