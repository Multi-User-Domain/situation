import { useSession } from "@inrupt/solid-ui-react/dist";

import {
  Flex,
  Box,
  Button,
  Container,
  Heading
} from "@chakra-ui/react";

import {
  LogoutButton,
} from "@inrupt/solid-ui-react";

import SocialFeed from "../components/socialFeed";
import { LoginForm } from "../components/loginForm";
import { MudAccountProvider } from "../context/mudAccountContext";

export default function Home(): React.ReactElement {
  const { session } = useSession();

  if (!session.info.isLoggedIn) {
    return <LoginForm />;
  }

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

  return (
    <MudAccountProvider>
      <Container>
        {header}
      </Container>
      <Container>
        
      </Container>
    </MudAccountProvider>
    );
}
