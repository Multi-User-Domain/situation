import { useSession } from "@inrupt/solid-ui-react/dist";

import {
  Flex,
  Box,
  Button,
  Container,
  Heading,
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

import {
  LogoutButton,
} from "@inrupt/solid-ui-react";

import { Map } from "../components/map";
import { LoginForm } from "../components/loginForm";
import { MudAccountProvider } from "../context/mudAccountContext";

const theme = extendTheme({
  components:  {
    Container: {
      baseStyle: {
        padding: "0px"
      },
    },
  },
});

export default function Home(): React.ReactElement {
  const { session } = useSession();

  let content = null;
  if (!session.info.isLoggedIn) content = (
    <Container marginTop={10}>
      <Flex marginBottom={10}>
          <Box alignSelf="flex-start">
            <Heading>Situation</Heading>
          </Box>
      </Flex>

      <LoginForm />
    </Container>
  );

  else {
    const header = (
      <Container marginBottom={4} textAlign="left">
        <Flex>
          <Box alignSelf="flex-start">
            <Heading>Situation</Heading>
          </Box>
  
          <Box w="100vw"></Box>
  
          <Box alignSelf="flex-end">
            <LogoutButton>
              <Button variant="contained">
                  Log&nbsp;out
              </Button>
            </LogoutButton>
          </Box>
        </Flex>
      </Container>
    );

    content = (
      <>
      <Container>
        {header}
      </Container>
      <Container>
        <Map></Map>
      </Container>
      </>
    );
  }

  

  return (
    <ChakraProvider theme={theme}>
      <MudAccountProvider>
        {content}
      </MudAccountProvider>
    </ChakraProvider>
    );
}
