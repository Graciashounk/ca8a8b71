import { createContext, useContext, useState, ReactNode } from 'react';
import { Call, CallsState } from '../types/call';
import { mockCalls } from '../data/mockCalls';

interface CallsContextType extends CallsState {
  toggleArchiveCall: (id: string) => void;
  archiveAllCalls: () => void;
  unarchiveAllCalls: () => void;
  selectCall: (call: Call | null) => void;
  setView: (view: 'active' | 'archived') => void;
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