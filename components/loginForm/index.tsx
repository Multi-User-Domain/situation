import React, { useState } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Container,
  Text,
} from "@chakra-ui/react";

export function LoginForm({
  defaultIdP = "https://inrupt.net",
  redirectUrl = "http://localhost:3000",
}): React.ReactElement {
  const [idp, setIdp] = useState(defaultIdP);

  return (
    <Container fixed="true">
      <Text marginBottom={15}>
        The identity provider below is hosted by Inrupt, who will provide free
        hosting for Solid accounts, but you can also chnage this value to
        another provider
      </Text>
      <InputGroup>
        <Input
          label="Identity Provider"
          placeholder="Identity Provider"
          type="url"
          value={idp}
          onChange={(e) => setIdp(e.target.value)}
        />
        <InputRightAddon>
          <LoginButton oidcIssuer={idp} redirectUrl={redirectUrl} onError={(err) => {console.error("arg!"); console.error(err);}}>
            <Button variant="contained" color="primary">
              Log&nbsp;in or Signup
            </Button>
          </LoginButton>
        </InputRightAddon>
      </InputGroup>
    </Container>
  );
}
