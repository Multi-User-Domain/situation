import { Container } from "@chakra-ui/react";
import { ThingList, useMudAccount } from "@multi-user-domain/mud-lib";
import ThingProfileRow from "../thingProfileRow";

/*
*   Rendering storytelling elements into a simple scroll-feed
*/

interface ISocialFeed {

}

export default function SocialFeed({} : ISocialFeed) : React.ReactElement {

    const { characters } = useMudAccount();

    return (
        <Container>
            <ThingList things={characters} rowComponent={ThingProfileRow} />
        </Container>
    );
}