import {
  VStack,
  Grid,
  GridItem,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useCallsContext } from '../context/CallsContext';
import { CallList } from './CallList';
import { CallDetail } from './CallDetail';

/**
 * Activity Component
 * 
 * Displays the call history with:
 * - Tabs for active and archived calls
 * - List of calls with archive/unarchive functionality
 * - Detailed view of selected call
 * - Responsive layout (list view on mobile, split view on desktop)
 */
export const Activity = () => {
  const {
    calls,
    selectedCall,
    view,
    toggleArchiveCall,
    archiveAllCalls,
    unarchiveAllCalls,
    selectCall,
    setView,
  } = useCallsContext();

  return (
    <Tabs onChange={(index) => setView(index === 0 ? 'active' : 'archived')} colorScheme="blue">
      <TabList>
        <Tab>Active Calls</Tab>
        <Tab>Archived</Tab>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[12, 12, 5]}>
              <CallList
                calls={calls.filter(call => !call.isArchived)}
                selectedCallId={selectedCall?.id || null}
                onCallSelect={selectCall}
                onArchiveToggle={toggleArchiveCall}
                onArchiveAll={archiveAllCalls}
                onUnarchiveAll={unarchiveAllCalls}
                view="active"
              />
            </GridItem>
            <GridItem colSpan={[12, 12, 7]} display={['none', 'none', 'block']}>
              {selectedCall ? (
                <CallDetail
                  call={selectedCall}
                  onArchiveToggle={toggleArchiveCall}
                />
              ) : (
                <Box p={8} textAlign="center" color="gray.500">
                  Select a call to view details
                </Box>
              )}
            </GridItem>
          </Grid>
        </TabPanel>

        <TabPanel px={0}>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[12, 12, 5]}>
              <CallList
                calls={calls.filter(call => call.isArchived)}
                selectedCallId={selectedCall?.id || null}
                onCallSelect={selectCall}
                onArchiveToggle={toggleArchiveCall}
                onArchiveAll={archiveAllCalls}
                onUnarchiveAll={unarchiveAllCalls}
                view="archived"
              />
            </GridItem>
            <GridItem colSpan={[12, 12, 7]} display={['none', 'none', 'block']}>
              {selectedCall ? (
                <CallDetail
                  call={selectedCall}
                  onArchiveToggle={toggleArchiveCall}
                />
              ) : (
                <Box p={8} textAlign="center" color="gray.500">
                  Select a call to view details
                </Box>
              )}
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}; 