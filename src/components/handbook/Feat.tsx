import { Container } from "react-bootstrap";
import { featsRetrieve } from "../../modules/open5e/sdk.gen";
import { Feat } from "../../modules/open5e/types.gen";
import { useState, useEffect } from "react";

export default function FeatPage({ id }: { id: string }) {
  const [feat, setFeat] = useState<Feat | null>(null);

  useEffect(() => {
    async function load() {
      const res = await featsRetrieve({
        path: {
          key: id,
        },
      });
      console.log(res.response);
      setFeat(res.data as Feat);
    }
    load();
  }, []);

  if (!feat) {
    return (
      <div>
        <p>...loading</p>
      </div>
    );
  } else {
    return (
      <Container className="phb page">
        <main className="">
          <h1>Feat</h1>
          <div className="columnWrapper"></div>
          <h2>{feat.name}</h2>
          <p className="wide">
            {feat.type}
            <br />
            <em>
              <strong> Requires: </strong>
              {feat.has_prerequisite ? feat.prerequisite : null}
            </em>
          </p>
          {feat.desc !== undefined && feat.desc.length > 1 ? (
            <p>{feat.desc}</p>
          ) : null}
          <ul>
            {feat.benefits.map((benefit, index) => (
              <li className="wide">{benefit.desc}</li>
            ))}
          </ul>
          <a className="artist" href={feat.document.permalink}>
            {feat.document.publisher.name}
          </a>
        </main>
        <div className="footnote">
          <p className="">{feat.document.display_name}</p>
        </div>
        <div className="pageNumber auto"></div>
      </Container>
    );
  }
}
