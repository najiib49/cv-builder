import { useState } from "react"
import './App.css'
import GeneralInfo from "./components/GeneranlInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Preview from './components/Preview';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [cvData, setCvData] = useState({
      "fullName": '',
      "email":"",
      "phone":"",
      "school":"",
      "study":"",
      "studyDate":"",
      "company":"",
      "position":"",
      "dateFrom":"",
      "dateTo":"",
      "responsibility":[],
  });
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    // console.log("HandleChange")
    // console.log("name:", name, "value:", value)
    setCvData({...cvData, [name]:value})

  }
  function handleSubmit (e){
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
    {isSubmitted ? (<Preview data={cvData}/>)
    :(
      <>
        <h1>Resume Builder</h1>
        <p>Create your profesional resume in minutes</p>
        <form id="resume-form" onSubmit={handleSubmit}>
          <GeneralInfo cvData={cvData} onChange={handleInputChange}/>
          <br />
          <Education cvData={cvData} onChange={handleInputChange}/>
          <br />
          <Experience cvData={cvData} onChange={handleInputChange}/>
          <br />
        </form>
        <button className="submitBtn" type="submit" form="resume-form">Generate Resume</button>
      </>
    )}
    </>
  );
}

export default App;
