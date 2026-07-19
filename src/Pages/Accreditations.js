import React, { useRef, useEffect } from "react";
import Accreditations from "../Components/AccrediationText";
import { accreditationsDetails } from "../Details";
import "../index.css";
import { fadeIn } from "../utils/gsapReducedMotion";

function AccreditationsPage() {
  const headingRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    const tl = fadeIn([headingRef.current, listRef.current]);
    return () => tl?.kill();
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <div ref={headingRef} className="mb-10">
        <p className="section-label">{"// credentials"}</p>
        <h1 className="section-heading">Accreditations</h1>
      </div>

      <div ref={listRef}>
        {accreditationsDetails.map(
          ({ Position, Company, Credential_ID, Img, Duration, Hyperlink }) => (
            <Accreditations
              key={`${Position}-${Credential_ID}`}
              position={Position}
              company={Company}
              credential={Credential_ID}
              hyperlink={Hyperlink}
              accreditation={Img}
              duration={Duration}
            />
          )
        )}
      </div>
    </main>
  );
}

export default AccreditationsPage;
