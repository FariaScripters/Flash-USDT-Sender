"use client"

import { useState } from "react"
import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Badge,
  Link,
  SimpleGrid,
  InputGroup,
} from "@chakra-ui/react"
import { ShieldCheck, CheckCircle2, EyeOff, DollarSign, Clock, Globe } from "lucide-react"

export default function FlashUSDTSender() {
  const [accessKey, setAccessKey] = useState("")

  const bgColor = "gray.900"
  const cardBg = "gray.800"
  const textColor = "gray.300"

  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      desc: "End-to-end encryption and secure payment processing with blockchain verification",
    },
    {
      icon: Clock,
      title: "90-Day Validity",
      desc: "Transactions are valid for 90 days, giving you maximum utility and flexibility",
    },
    {
      icon: Globe,
      title: "Multi-Network Support",
      desc: "Compatible with multiple blockchain networks including TRC20, ERC20, and more",
    },
    {
      icon: EyeOff,
      title: "Undetectable Transfers",
      desc: "100% undetectable cryptocurrency transfers with advanced privacy features",
    },
  ]

  const plans = [
    {
      title: "Basic",
      desc: "Essential features for beginners",
      price: "$250",
      period: "one-time",
      features: [
        "Multi-network support",
        "Basic security features",
        "Email support",
        "Regular updates",
        "Single device license",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Professional",
      desc: "Advanced features for serious users",
      price: "$250",
      period: "one-time",
      features: [
        "Multi-network support",
        "Advanced security features",
        "24/7 priority support",
        "Regular updates",
        "Multiple device license",
        "Transaction anonymity",
        "Custom transaction routing",
      ],
      cta: "Get Access Now",
      highlight: true,
    },
    {
      title: "Enterprise",
      desc: "Custom solutions for businesses",
      price: "$250",
      period: "one-time",
      features: [
        "All Professional features",
        "Dedicated account manager",
        "Custom integration support",
        "API access",
        "Unlimited devices",
        "Advanced analytics",
        "Custom branding options",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ]

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero/Login Section */}
      <Box
        bgImage="url('/dark-abstract-digital-background-with-gears.jpg')"
        bgSize="cover"
        bgPosition="center"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "blackAlpha.700",
          zIndex: 1,
        }}
      >
        <Container maxW="md" position="relative" zIndex={2}>
          <Card.Root bg="blackAlpha.800" backdropFilter="blur(10px)" border="1px solid" borderColor="whiteAlpha.200">
            <Card.Body>
              <VStack spacing={6} p={8}>
                <Box
                  w={20}
                  h={20}
                  bg="teal.500"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <DollarSign size={40} color="black" />
                </Box>

                <VStack spacing={2} textAlign="center">
                  <Heading size="lg" color="white">
                    Flash USDT Sender
                  </Heading>
                  <Text color="whiteAlpha.700">Fast, secure, and reliable cryptocurrency payment processing</Text>
                </VStack>

                <VStack spacing={4} w="full">
                  <Box w="full">
                    <Text fontSize="sm" color="whiteAlpha.800" mb={2}>
                      Access Key
                    </Text>
                    <InputGroup>
                      <Input
                        type="password"
                        value={accessKey}
                        onChange={(e) => setAccessKey(e.target.value)}
                        placeholder="Enter your access key"
                        bg="blackAlpha.400"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        color="white"
                        _placeholder={{ color: "whiteAlpha.500" }}
                      />
                    </InputGroup>
                  </Box>

                  <Button
                    w="full"
                    bg="teal.500"
                    color="black"
                    _hover={{ bg: "teal.600" }}
                    size="lg"
                    fontWeight="semibold"
                  >
                    Authenticate
                  </Button>

                  <HStack spacing={6} fontSize="sm" color="whiteAlpha.600">
                    <Text>14433 views</Text>
                    <Text>0 active</Text>
                    <Text>0 txns</Text>
                  </HStack>
                </VStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Container>
      </Box>

      {/* Key Features Section */}
      <Box py={20} bg="gray.900">
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="white">
                Key Features
              </Heading>
              <Text color="gray.400" maxW="2xl">
                Flash USDT Sender comes with powerful features to make your cryptocurrency transactions secure and
                efficient
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {securityFeatures.map((feature, index) => (
                <Card.Root key={index} bg="gray.800" border="1px solid" borderColor="gray.700">
                  <Card.Body>
                    <VStack spacing={4} p={6} textAlign="center">
                      <feature.icon size={32} color="#38b2ac" />
                      <Heading size="md" color="white">
                        {feature.title}
                      </Heading>
                      <Text color="gray.400" fontSize="sm">
                        {feature.desc}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20} bg="black">
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="white">
                Simple, Transparent Pricing
              </Heading>
              <Text color="gray.400">One-time payment for lifetime access to all features</Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
              {plans.map((plan, index) => (
                <Card.Root
                  key={index}
                  bg="gray.800"
                  border="2px solid"
                  borderColor={plan.highlight ? "teal.500" : "gray.700"}
                  transform={plan.highlight ? "scale(1.05)" : "none"}
                  position="relative"
                >
                  {plan.highlight && (
                    <Badge
                      position="absolute"
                      top={-3}
                      left="50%"
                      transform="translateX(-50%)"
                      bg="teal.500"
                      color="black"
                      px={3}
                      py={1}
                      rounded="full"
                      fontSize="xs"
                      fontWeight="bold"
                    >
                      MOST POPULAR
                    </Badge>
                  )}

                  <Card.Body>
                    <VStack spacing={6} p={8}>
                      <VStack spacing={2} textAlign="center">
                        <Heading size="lg" color="white">
                          {plan.title}
                        </Heading>
                        <Text color="gray.400">{plan.desc}</Text>
                      </VStack>

                      <VStack spacing={1}>
                        <Text fontSize="3xl" fontWeight="bold" color="teal.400">
                          {plan.price}
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                          {plan.period}
                        </Text>
                      </VStack>

                      <VStack spacing={3} align="start" w="full">
                        {plan.features.map((feature, idx) => (
                          <HStack key={idx} spacing={3}>
                            <CheckCircle2 size={16} color="#38b2ac" />
                            <Text color="gray.300" fontSize="sm">
                              {feature}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>

                      <Button
                        w="full"
                        bg={plan.highlight ? "teal.500" : "gray.700"}
                        color={plan.highlight ? "black" : "white"}
                        _hover={{
                          bg: plan.highlight ? "teal.600" : "gray.600",
                        }}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* About/Support Section */}
      <Box py={20} bg="gray.900">
        <Container maxW="4xl">
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            <Card.Root bg="gray.800" border="1px solid" borderColor="gray.700">
              <Card.Body>
                <VStack spacing={4} p={6} align="start">
                  <Heading size="md" color="white">
                    About
                  </Heading>
                  <Text color="gray.400" fontSize="sm">
                    Flash USDT Sender is a secure cryptocurrency transaction tool for multiple blockchain networks
                    including BTC, ETH, USDT, BNB, SOL, TRX, LTC, DOGE and more.
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    <strong>Educational Use Only:</strong> This tool is designed for blockchain testing, learning, and
                    ethical usage. Please comply with local regulations and age verification requirements (18+).
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="gray.800" border="1px solid" borderColor="gray.700">
              <Card.Body>
                <VStack spacing={4} p={6} align="start">
                  <Heading size="md" color="white">
                    Refund Policy
                  </Heading>
                  <Text color="gray.400" fontSize="sm">
                    Due to the digital nature of our product, we do not offer refunds once the access key has been
                    delivered. Please review the product features before purchase.
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="gray.800" border="1px solid" borderColor="gray.700">
              <Card.Body>
                <VStack spacing={4} p={6} align="start">
                  <Heading size="md" color="white">
                    Support
                  </Heading>
                  <Text color="gray.400" fontSize="sm">
                    Our support team is available 24/7. Contact us via our support page or email us directly.
                  </Text>
                  <VStack spacing={2} align="start">
                    <Link href="/support" color="teal.400" _hover={{ color: "teal.300" }}>
                      Support Page
                    </Link>
                    <Link href="mailto:support@flashusdtsender.xyz" color="teal.400" _hover={{ color: "teal.300" }}>
                      support@flashusdtsender.xyz
                    </Link>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={8} bg="black" borderTop="1px solid" borderColor="gray.800">
        <Container maxW="6xl">
          <VStack spacing={4} textAlign="center">
            <Text color="gray.400">
              Powered by{" "}
              <Link href="https://t.me/RecentCoders" color="teal.400" _hover={{ color: "teal.300" }} isExternal>
                RecentCoders
              </Link>{" "}
              — A hub for developers, innovators, and tech enthusiasts shaping the future of coding.
            </Text>
            <Text color="gray.500" fontSize="sm">
              © 2025 Flash USDT Sender. All rights reserved.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
