import {
  VStack,
  SimpleGrid,
  Button,
  Input,
  HStack,
  IconButton,
  useColorModeValue,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaPhone, FaBackspace } from 'react-icons/fa';
import { useState } from 'react';

const keypadButtons = [
  { number: '1', letters: '' },
  { number: '2', letters: 'ABC' },
  { number: '3', letters: 'DEF' },
  { number: '4', letters: 'GHI' },
  { number: '5', letters: 'JKL' },
  { number: '6', letters: 'MNO' },
  { number: '7', letters: 'PQRS' },
  { number: '8', letters: 'TUV' },
  { number: '9', letters: 'WXYZ' },
];

export const Numpad = () => {
  const [number, setNumber] = useState('');
  const toast = useToast();
  const buttonBg = useColorModeValue('gray.100', 'gray.700');
  const buttonHoverBg = useColorModeValue('gray.200', 'gray.600');

  const handleNumberClick = (digit: string) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(20);
    }
    setNumber(prev => prev + digit);
  };

  const handleBackspace = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(20);
    }
    setNumber(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (number) {
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }
      toast({
        title: 'Calling...',
        description: number,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      console.log('Calling:', number);
      // Implement call functionality here
    }
  };

  return (
    <VStack spacing={4} w="full" maxW="400px" mx="auto" p={4}>
      <Input
        value={number}
        placeholder="Enter number"
        size="lg"
        textAlign="center"
        fontSize="2xl"
        readOnly
      />
      
      <SimpleGrid columns={3} spacing={3} w="full">
        {keypadButtons.map(({ number: digit, letters }) => (
          <Button
            key={digit}
            size="lg"
            height="70px"
            bg={buttonBg}
            _hover={{ bg: buttonHoverBg }}
            onClick={() => handleNumberClick(digit)}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xl">{digit}</Text>
            {letters && <Text fontSize="xs" color="gray.500">{letters}</Text>}
          </Button>
        ))}
      </SimpleGrid>

      <HStack spacing={3} w="full">
        <Button
          size="lg"
          height="70px"
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          onClick={() => handleNumberClick('*')}
        >
          *
        </Button>
        <Button
          size="lg"
          height="70px"
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          onClick={() => handleNumberClick('0')}
          display="flex"
          flexDirection="column"
        >
          <Text fontSize="xl">0</Text>
          <Text fontSize="xs" color="gray.500">+</Text>
        </Button>
        <Button
          size="lg"
          height="70px"
          bg={buttonBg}
          _hover={{ bg: buttonHoverBg }}
          onClick={() => handleNumberClick('#')}
        >
          #
        </Button>
      </HStack>

      <HStack spacing={3} w="full">
        <IconButton
          aria-label="Call"
          icon={<FaPhone />}
          colorScheme="green"
          size="lg"
          height="70px"
          flex={1}
          onClick={handleCall}
          isDisabled={!number}
        />
        <IconButton
          aria-label="Backspace"
          icon={<FaBackspace />}
          size="lg"
          height="70px"
          flex={1}
          onClick={handleBackspace}
          isDisabled={!number}
        />
      </HStack>
    </VStack>
  );
}; 