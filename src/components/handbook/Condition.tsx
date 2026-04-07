import { Container } from "react-bootstrap";
import { conditionsRetrieve } from "../../modules/open5e/sdk.gen";
import {
  Condition,
  ConditionDescription,
  GameSystem,
} from "../../modules/open5e/types.gen";
import { useState, useEffect } from "react";

export default function ConditionPage({ id }: { id: string }) {
  const [condition, setCondition] = useState<Condition | null>(null);

  useEffect(() => {
    async function load() {
      const res = await conditionsRetrieve({
        path: {
          key: id,
        },
      });
      console.log(res.response);
      setCondition(res.data as Condition);
    }
    load();
  }, []);

  if (!condition) {
    return (
      <div>
        <p>...loading</p>
      </div>
    );
  } else {
    return (
      <Container className="page tocDepthH3">
        <main id="p1" data-index="0">
          <h1>condition</h1>
          <div className="columnWrapper"></div>
          <h2>{condition.name}</h2>
          <ul className="wide">
            {condition.descriptions.map((desc, indes) => (
              <li>
                <strong>{desc.gamesystem}:</strong> {desc.desc}
                <p>
                  <em>{desc.document}</em>
                </p>
                <br />
              </li>
            ))}
          </ul>
          <a className="artist" href={condition.document.permalink}>
            {condition.document.publisher.name}
          </a>
        </main>
        <div className="footnote">
          <p className="">{condition.document.display_name}</p>
        </div>
        <div className="pageNumber auto"></div>
      </Container>
    );
  }
}
