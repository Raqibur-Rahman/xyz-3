import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      zIndex={5}
      backgroundColor={
        colorMode === "light"
          ? "rgba(247, 250, 252, 0.8)"
          : "rgba(26, 32, 44, 0.8)"
      }
      layerStyle="blur-bg"
      width="full"
    >
      <Flex
        layerStyle="layoutBlock"
        marginX="auto"
        maxWidth="800px"
        as="header"
        alignItems="center"
        justifyContent="space-around"
      >
        <Link href="/" passHref>
          <Text
            style={{ fontWeight: "bolder" }}
            as="a"
            cursor="pointer"
            fontSize={["md", "xl"]}
          >
            Md. Raqibur Rahman Roni
          </Text>
        </Link>

        <Navigation />


        <a
          style={{ textDecoration: "none" }}
          href="https://drive.google.com/file/d/1FCZRmnKTeiOCbEjf1eSvW4W2aUT3TX96/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button leftIcon={<FaExternalLinkSquareAlt />}>
            Resume
          </Button>
        </a>


        <ThemeToggle />
      </Flex>
    </Box>
  );
};

export default Header;
