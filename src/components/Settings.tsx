import {
  VStack,
  Box,
  Text,
  Switch,
  HStack,
  useColorMode,
  Select,
  Divider,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBell, FaMoon, FaGlobe, FaVolumeUp } from 'react-icons/fa';

export const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const SettingItem = ({ 
    icon: Icon, 
    title, 
    description, 
    control 
  }: { 
    icon: any, 
    title: string, 
    description: string, 
    control: React.ReactNode 
  }) => (
    <Box
      p={4}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="md"
      w="full"
    >
      <HStack justify="space-between" align="start">
        <HStack spacing={4}>
          <Icon size={20} />
          <Box>
            <Text fontWeight="medium">{title}</Text>
            <Text fontSize="sm" color="gray.500">
              {description}
            </Text>
          </Box>
        </HStack>
        {control}
      </HStack>
    </Box>
  );

  return (
    <VStack spacing={6} w="full" maxW="600px" mx="auto" p={4}>
      <Text alignSelf="start" fontSize="2xl" fontWeight="bold">
        Settings
      </Text>

      <VStack spacing={4} w="full">
        <Text alignSelf="start" fontWeight="bold" color="gray.500">
          Appearance
        </Text>
        <SettingItem
          icon={FaMoon}
          title="Dark Mode"
          description="Toggle between light and dark theme"
          control={
            <Switch
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
            />
          }
        />
      </VStack>

      <Divider />

      <VStack spacing={4} w="full">
        <Text alignSelf="start" fontWeight="bold" color="gray.500">
          Notifications
        </Text>
        <SettingItem
          icon={FaBell}
          title="Push Notifications"
          description="Get notified about incoming calls"
          control={<Switch defaultChecked />}
        />
        <SettingItem
          icon={FaVolumeUp}
          title="Ringtone"
          description="Choose your preferred ringtone"
          control={
            <Select w="150px" size="sm">
              <option>Classic Ring</option>
              <option>Digital</option>
              <option>Marimba</option>
            </Select>
          }
        />
      </VStack>

      <Divider />

      <VStack spacing={4} w="full">
        <Text alignSelf="start" fontWeight="bold" color="gray.500">
          Language & Region
        </Text>
        <SettingItem
          icon={FaGlobe}
          title="Language"
          description="Select your preferred language"
          control={
            <Select w="150px" size="sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </Select>
          }
        />
      </VStack>

      <Button colorScheme="red" w="full" mt={4}>
        Clear Call History
      </Button>
    </VStack>
  );
}; 