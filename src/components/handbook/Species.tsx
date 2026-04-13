import { Container } from "react-bootstrap";
import { Species } from "../../modules/open5e/types.gen";
import { speciesRetrieve } from "../../modules/open5e/sdk.gen";
import { useState, useEffect } from "react";

export default function Race({ id }: { id: string }) {
  const [feat, setSpecies] = useState<Species | null>(null);

  useEffect(() => {
    async function load() {
      const res = await speciesRetrieve({
        path: {
          key: id,
        },
      });
      console.log(res.response);
      setSpecies(res.data as Species);
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
      <Container>
        <main className="page tocDepthH3" id="p1" data-index="0"></main>
      </Container>
    );
  }
}
