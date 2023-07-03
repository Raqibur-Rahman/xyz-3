import { FaExternalLinkSquareAlt } from "react-icons/fa";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const Container = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const HeroSection = () => {
  const nameColor = useColorModeValue("#000", "#fff");

  return (
    <Container
      height="90vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        width={["100%"]}
        marginTop={[8, 0]}
      >

        <Heading
          as="h1"
          color="#808080"
          size="xl"
          textAlign="center"
          paddingBottom={11}
        >
          Hi, I&apos;m{" "}
          <Box color={nameColor} display="inline-block">
            Md. Raqibur Rahman Roni
          </Box>{" "}
          from Bangladesh
        </Heading>
        <Text textAlign="center" fontWeight="bold" fontSize={["md", "xl"]}>
          Full Stack Developer
        </Text>


        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://i.ibb.co/n7mNJ1J/1.png"
          alt="Personal Logo Md. Raqibur Rahman Roni "
          marginTop={[8, 4]}
          marginBottom={[8, 4]}
        />
      
      </Flex>
    </Container>
  );
};

export default HeroSection;
