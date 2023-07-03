import { Divider, Flex, Link, Stack, Text } from "@chakra-ui/react";

import Links from "../pages/about/Links/index";

const Footer = () => {
  return (
    <Stack as="footer" width="full" layerStyle="layoutBlock" spacing={6}>
      <Divider />
      <Flex justify="center">
        <Links />
      </Flex>

      {/* <Text align="center" fontSize={["xs", "sm"]}>
        Built with{" "}
        <span style={{ marginRight: "5px", marginLeft: "5px" }}>💜</span> by{" "}
        <Link
          href="https://https://raqibur-portfolio.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Md. Raqibur Rahman Roni
        </Link>
      </Text> */}
    </Stack>
  );
};

export default Footer;
