import { useState } from "react"
import './App.css'
import GeneralInfo from "./components/GeneranlInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <h1>Resume Builder</h1>
      <p>Create your profesional resume in minutes</p>
      <form id="resume-form" action="">
        <GeneralInfo />
        <br />
        <Education />
        <br />
        <Experience />
        <br />
      </form>
      <button className="submitBtn" type="submit" form="resume-form">Generate Resume</button>
    </>
  );
}

export default App;
