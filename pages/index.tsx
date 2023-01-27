import { SessionProvider } from "@inrupt/solid-ui-react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components:  {
    Container: {
      baseStyle: {
        padding: "0px"
      },
    },
  },
});

export default function Index({children} : {children: any}): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider sessionId="situation">
        {children}
      </SessionProvider>
    </ChakraProvider>
  );
}
