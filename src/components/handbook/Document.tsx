import { Container } from "react-bootstrap";
import { documentsRetrieve } from "../../modules/open5e/sdk.gen";
import { Document } from "../../modules/open5e/types.gen";
import { useState, useEffect } from "react";

export default function DocumentPage({ id }: { id: string }) {
  const [document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    async function load() {
      const res = await documentsRetrieve({
        path: {
          key: id,
        },
      });
      console.log(res.response);
      setDocument(res.data as Document);
    }
    load();
  }, []);

  if (!document) {
    return (
      <div>
        <p>...loading</p>
      </div>
    );
  } else {
    return (
      <Container className="page tocDepthH3">
        <main id="p1" data-index="0">
          <h1>Document</h1>
          <h2 className="wide">
            {document.name} -{" "}
            {document.publication_date.substring(
              0,
              document.publication_date.indexOf("T"),
            )}
          </h2>
          <p>{}</p>
          <a className="artist" href={document.permalink}>
            {document.publisher.name}
          </a>
        </main>
        <div className="footnote">
          <p className="">{document.display_name}</p>
        </div>
        <div className="pageNumber auto"></div>
      </Container>
    );
  }
}
