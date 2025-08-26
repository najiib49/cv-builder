import { useState } from "react";
import GeneralInfo from "./components/GeneranlInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <h1>Resume Builder</h1>
      <h2>Create your profesional resume in minutes</h2>
      <form action="">
        <GeneralInfo />
        <br />
        <Education />
        <br />
        <Experience />
        <br />
        <button>Generate Resume</button>
      </form>
    </>
  );
}

export default App;
