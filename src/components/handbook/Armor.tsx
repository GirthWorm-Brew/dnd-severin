import armorJson from "../../../data/armor/srd-2024_scale-mail.json";
import { Container } from "react-bootstrap";
import "../../../themes/V3/5ePHB/style.css";
import "../../../themes/V3/Blank/style.css";
import "../../../themes/V3/phb.standalone.css";

const armor = armorJson;

export default function Armor() {
  return (
    <Container className="phb page auto">
      <main className="">
        <h1>Armor</h1>
        <div className="columnWrapper">
          <h2 id="armor">{armor.name}</h2>
          <p className="wide">
            <em>{armor.category}</em>
          </p>
          {armor.ac_base > 0 ? (
            <p className="wide">
              <strong>AC: </strong>
              {armor.ac_display}{" "}
            </p>
          ) : null}
          <ul className="wide">
            {armor.grants_stealth_disadvantage ? (
              <li>Disadvantage on stealth checks</li>
            ) : null}
            {armor.strength_score_required != null ? (
              <li>
                <strong>Requires: </strong> {armor.strength_score_required}{" "}
                Strength
              </li>
            ) : null}
          </ul>
        </div>
        <a className="artist" href={armor.document.permalink}>
          {armor.document.publisher.name}
        </a>
        <div className="footnote">
          <p className="">{armor.document.name}</p>
        </div>
        <div className="pageNumber auto"></div>
      </main>
    </Container>
  );
}
