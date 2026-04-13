import { Container } from "react-bootstrap";
import spellListJson from "../../../data/spelllist/bard.json"

const spellList = spellListJson;




export default function SpellList() {
  return (
    <Container>
      <main className="page tocDepthH3" id="p1" data-index="0"></main>
    </Container>
  );
}
