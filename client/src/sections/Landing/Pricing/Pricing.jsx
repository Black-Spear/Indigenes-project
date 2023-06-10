import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  createIcon,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { CardCTA } from '../../../components/CardCTA';
import { useTranslation } from 'react-i18next';

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" pt="5em">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading as="h1" size="2xl" fontWeight="bold" textAlign={'center'}>
          {t('pricing.membership')} <span>{t('pricing.plan')}</span>
        </Heading>

        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontSize="xl"
          color={mode('gray.600', 'gray.400')}
          textAlign={{
            base: 'center',
            sm: 'center',
          }}
        >
          {t('pricing.accessFeatures')}
        </Text>

        <Box mt={8}>
          <Flex
            rounded="md"
            mx={{
              base: '2',
              xl: '10',
            }}
            bg={'white'}
            _dark={{ bg: 'gray.900' }}
            shadow="xl"
            mb="100px"
            textAlign="left"
            direction={{
              base: 'column',
              lg: 'row',
            }}
          >
            <Stack spacing={8} p="45px" flex="0.7" overflow="hidden">
              <Text
                fontSize="3xl"
                fontWeight="bold"
                lineHeight="tight"
                textAlign={{
                  base: 'center',
                  sm: 'left',
                }}
              >
                {t('pricing.investRisk')}
              </Text>
              <Text
                fontSize={['sm', 'md']}
                color="gray.600"
                textAlign={{
                  base: 'center',
                  sm: 'left',
                }}
                _dark={{
                  color: 'gray.400',
                }}
              >
                {t('pricing.investmentPlatform')}
              </Text>
              <Flex align="center">
                <Text
                  fontFamily="body"
                  whiteSpace="nowrap"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  color="yellow.400"
                  textAlign={{
                    base: 'center',
                    sm: 'left',
                  }}
                  fontSize={{
                    base: '0.7em',
                    sm: '1.2em',
                  }}
                >
                  {t('pricing.becomeMember')}
                </Text>
                <Flex ml="15px" w="full" borderTopWidth="1px" h="3px" />
              </Flex>
              <SimpleGrid columns={[1, 2, 1, 2]} spacingY={4}>
                <Text>{t('pricing.exclusiveGuides')}</Text>
                <Text>{t('pricing.projectAnalytics')}</Text>
                <Text>{t('pricing.diverseInvestments')}</Text>
                <Text>{t('pricing.expertNetwork')}</Text>
              </SimpleGrid>
            </Stack>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'relative'}
                transform={{
                  base: 'rotate(-80deg)',
                  sm: 'rotate(-70deg)',
                }}
                right={{
                  base: '-13em',
                  sm: '-24.5em',
                }}
                top={{
                  base: '2em',
                  sm: '0em',
                }}
              />
              <Text
                textAlign={'right'}
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'relative'}
                transform={'rotate(-20deg)'}
                color={useColorModeValue('gray.800', 'gray.300')}
                right={{
                  base: '0em',
                  sm: '-20em',
                }}
                top={{
                  base: '0em',
                  sm: '-3.8em',
                }}
              >
                {t('pricing.startingPrice')}
              </Text>
            </Box>
            <Stack
              pt="4vh"
              pb="2vh"
              px="2vh"
              flex="0.3"
              justify="center"
              align="center"
              bg="white"
              _dark={{
                bg: 'gray.900',
              }}
              borderRightRadius="md"
            >
              <CardCTA />
              <Text fontSize="xs" textAlign="center" color="gray.600">
                {t('pricing.termsOfService')}
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
