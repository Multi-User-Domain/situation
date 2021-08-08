import { 
    Grid,
    GridItem,
    Center,
    Text
} from "@chakra-ui/react";
import { IRowComponent, ThingDepiction, getThingName } from "@multi-user-domain/mud-lib";
import styles from "./thingProfileRow.module.css";

export default function ThingProfileRow({thing, selectHandler} : IRowComponent): React.ReactElement {  
  const onRowSelect = (event) => {
    selectHandler(thing);
  }
  
  return (
  <Grid templateColumns="repeat(6, 1fr)" w="80%" margin="auto" marginBottom="10px" gap={1}>
    <GridItem w="100px" h="100px" colSpan={1} className={styles.profilePic}
        tag="a" onClick={onRowSelect} style={{ cursor: "pointer" }}>
      <ThingDepiction thing={thing} />
    </GridItem>

    <GridItem colSpan={5} className={styles.rowField} 
        tag="a" onClick={onRowSelect} style={{ cursor: "pointer" }}>
      <Center h="100%"><Text verticalAlign="middle">{getThingName(thing)}</Text></Center>
    </GridItem>
  </Grid>);
  }