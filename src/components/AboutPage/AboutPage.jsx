import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          This CogAT Quiz App helps kids practice for the CogAT assessment for
          grade K and 1.
        </p>
        <p>
          Caretakers and parents can review their child's score and support them
          in their learning.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
