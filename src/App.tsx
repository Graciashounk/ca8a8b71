import { Container, Grid, GridItem, Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { FaPhone, FaAddressBook, FaCalculator, FaCog } from 'react-icons/fa';
import { CallList } from './components/CallList';
import { CallDetail } from './components/CallDetail';
import { Contacts } from './components/Contacts';
import { Numpad } from './components/Numpad';
import { Settings } from './components/Settings';
import { CallsProvider, useCallsContext } from './context/CallsContext';
import { ContactsProvider } from './context/ContactsContext';

const CallsApp = () => {
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
    <Container maxW="container.xl" py={8}>
      <Tabs variant="enclosed" colorScheme="blue">
        <TabList>
          <Tab><Box as={FaPhone} mr={2} /> Calls</Tab>
          <Tab><Box as={FaAddressBook} mr={2} /> Contacts</Tab>
          <Tab><Box as={FaCalculator} mr={2} /> Numpad</Tab>
          <Tab><Box as={FaCog} mr={2} /> Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Tabs onChange={(index) => setView(index === 0 ? 'active' : 'archived')} colorScheme="blue" mb={6}>
              <TabList>
                <Tab>Activity Feed</Tab>
                <Tab>Archived</Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={0}>
                  <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={[12, 12, 5]}>
                      <CallList
                        calls={calls}
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
                        calls={calls}
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
          </TabPanel>

          <TabPanel>
            <Contacts />
          </TabPanel>

          <TabPanel>
            <Numpad />
          </TabPanel>

          <TabPanel>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

const App = () => {
  return (
    <CallsProvider>
      <ContactsProvider>
        <CallsApp />
      </ContactsProvider>
    </CallsProvider>
  );
};

export default App;
