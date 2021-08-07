import { useSession } from "@inrupt/solid-ui-react/dist";

import {
  Flex,
  Box,
  Button,
  Container,
  useDisclosure,
  Heading
} from "@chakra-ui/react";

import {
  LogoutButton,
} from "@inrupt/solid-ui-react";

import {
  LoginForm,
  MudAccountProvider
} from "@multi-user-domain/mud-lib";

export default function Home(): React.ReactElement {
  const { session } = useSession();
  const { webId } = session.info;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <MudAccountProvider webId={webId}>
      <Container>
        {header}
      </Container>
    </MudAccountProvider>
    );
}
