import {
  Center,
  Box,
  Flex,
  HStack,
  Grid,
  Image,
  Text,
  Skeleton,
  SkeletonText,
  Stack,
  Button,
  Badge,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HiOutlineBriefcase, HiLocationMarker, HiMail } from 'react-icons/hi';
const SkeletonCard = () => {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        maxW={{ base: '20em', sm: '26em' }}
        h={'30em'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={{ base: '3', sm: '6' }}
        overflow={'hidden'}
      >
        <Skeleton w="full" h="50%" my="1rem"></Skeleton>
        <Box>
          <Stack>
            <SkeletonText noOfLines={2}>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
                minH={{ base: '4.5em', sm: '3em' }}
              >
                {/* {a.subtitle} */}
              </Text>
            </SkeletonText>
            <Skeleton>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                height="1rem"
                fontFamily={'body'}
              >
                {/* {a.titre} */}
              </Heading>
            </Skeleton>
          </Stack>

          <Stack direction={'column'} spacing={0} fontSize={'sm'} my="1rem">
            <SkeletonText>
              <Text color={'gray.500'} pt="0.3em" pb={'1em'}>
                Feb 08, 2021 · Agriculture
              </Text>
            </SkeletonText>
          </Stack>
          <Skeleton w="10rem">
            <Button colorScheme="yellow" mx={3} right="0.8em">
              See details
            </Button>
          </Skeleton>
        </Box>
      </Box>
    </Center>
  );
};
export const Profile = () => {
  return (
    <Flex
      p={{ base: '1rem', sm: '5rem' }}
      w="100%"
      bg="gray.500"
      _dark={{ bg: 'gray.700' }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        //card body
        w="100%"
        shadow="lg"
        borderRadius={'3xl'}
        pb="2rem"
        bg="#edf3f8"
        _dark={{
          bg: 'gray.800',
        }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="#edf3f8"
          _dark={{
            bg: '#3e3e3e',
          }}
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          height="100%"
          width="100%"
          borderRadius={'3xl'}
          p={8}
          display="flex"
          justifyContent={'space-between'}
        >
          <Image
            src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/274480513_1179989572537674_7273953419814914029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xDTFmiBn02IAX-1XDnG&_nc_ht=scontent.ftun9-1.fna&oh=00_AfAQwJNV-oFibY1QuFnKW-h045deGOYtRf13x0WuONUUBA&oe=63CF5731"
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="5px solid"
            mb={-20}
            borderColor="gray.800"
            _dark={{
              borderColor: 'gray.200',
            }}
          />
          <ColorModeSwitcher h="6.5vh" w="4vw" />
        </Box>
        <Box
          gridColumn="span 8"
          p={{base:'5',sm:'8'}}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={10}
        >
          <HStack spacing={5}>
            <Text
              my={'1rem'}
              fontSize={{base:'xl',md:'lg',lg:'xl'}}
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: 'white',
              }}
            >
              Mohamed Ashref Ben Abdallah
            </Text>
            <Badge ml="1" colorScheme="yellow">
              Verified
            </Badge>
          </HStack>
          <HStack
            my={'1rem'}
            spacing={3}
            color="gray.800"
            _dark={{
              color: 'gray.200',
            }}
          >
            <HiOutlineBriefcase size={24} color="yellow" />
            <Text
              fontSize="2xl"
              fontWeight="normal"
              color="gray.800"
              _dark={{
                color: 'gray.200',
              }}
            >
              Tech Entrepreneur
            </Text>
          </HStack>
          <HStack
            my={'1rem'}
            spacing={3}
            color="gray.700"
            _dark={{
              color: 'gray.200',
            }}
          >
            <HiLocationMarker size={24} color="yellow" />
            <Text fontSize="xl">Tunis, Tunisia</Text>
          </HStack>
          <HStack
            my={'1rem'}
            spacing={3}
            color="gray.700"
            _dark={{
              color: 'gray.200',
            }}
          >
            <HiMail size={24} color="yellow" />
            <Text fontSize={{base:'xl',md:'lg',lg:'xl'}} >MohamedAshrefBenAbdallah@gmail.com</Text>
          </HStack>
        </Box>
        <Box
          w="80%"
          display={'flex'}
          flexDir="row"
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Text
            my={'1.5rem'}
            fontSize="4xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{
              color: 'white',
            }}
          >
            Your Ongoing projects
          </Text>
          <Text
            my={'1'}
            fontSize="xl"
            fontWeight="light"
            color="gray.800"
            _dark={{
              color: 'white',
            }}
          >
            My finished projects
          </Text>
        </Box>
        <Grid //!el grid elli fih el cardsss
          w="100%"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </Grid>
      </Flex>
    </Flex>
  );
};
