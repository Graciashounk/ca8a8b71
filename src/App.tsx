import { Container, Grid, GridItem, Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { FaPhone, FaAddressBook, FaCalculator, FaCog } from 'react-icons/fa';
import { CallList } from './components/CallList';
import { CallDetail } from './components/CallDetail';
import { Contacts } from './components/Contacts';
import { Numpad } from './components/Numpad';
import { Settings } from './components/Settings';
import { CallsProvider, useCallsContext } from './context/CallsContext';
import { ContactsProvider } from './context/ContactsContext';
import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Activity } from './components/Activity';

/**
 * Main App Component
 * 
 * Provides the application structure with:
 * - Chakra UI theme provider
 * - Global state providers (Contacts and Calls)
 * - Tabbed navigation interface
 * - Responsive container layout
 * 
 * The app is divided into four main sections:
 * 1. Numpad - For dialing numbers directly
 * 2. Contacts - For managing and calling contacts
 * 3. Activity - For viewing call history
 * 4. Settings - For app configuration
 */
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ContactsProvider>
        <CallsProvider>
          <Container maxW="container.md" py={4}>
            <Tabs isFitted variant="enclosed">
              <TabList mb={4}>
                <Tab>Numpad</Tab>
                <Tab>Contacts</Tab>
                <Tab>Activity</Tab>
                <Tab>Settings</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Numpad />
                </TabPanel>
                <TabPanel>
                  <Contacts />
                </TabPanel>
                <TabPanel>
                  <Activity />
                </TabPanel>
                <TabPanel>
                  <Settings />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </CallsProvider>
      </ContactsProvider>
    </ChakraProvider>
  );
};

export default App;
