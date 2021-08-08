import { Container, Center } from "@chakra-ui/react";
import { Thing, getStringNoLocale } from "@inrupt/solid-client";
import { RDF } from "@inrupt/lit-generated-vocab-common";
import { ThingDepiction, getThingName } from "@multi-user-domain/mud-lib";

/*
*   A component for rendering a generic Thing
*/

interface IThingView {
    thing: Thing;
}

export default function ThingView({thing} : IThingView) : React.ReactElement {

    return (
        <Container marginBottom="20px">
            <Center><ThingDepiction thing={thing} maxHeight="10vh" marginBottom="10px"></ThingDepiction></Center>
            <Center><h1>{getThingName(thing)}</h1></Center>
            <Center><h3>{getStringNoLocale(thing, RDF.type)}</h3></Center>
        </Container>
    );
}