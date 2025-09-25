export default function Preview({data, setIsSubmitted, setIsEditing}) {
    console.log(
        "fullName:", data.fullName,
        "email:",data.email,
        "phone:", data.number
    )
    let lines = data.responsibility.split('\n').filter(line => line.trim() !=='')

    function handEdit(){
        setIsEditing(true)
        setIsSubmitted(false)
    }
    return (
    <>
      <div>
        <p>Resume  Preview</p>
        <button onClick={handEdit}>Edit Resume</button>
      </div>
      <div>
        <h1>{data.fullName}</h1>
        <p>{data.email}</p> <span>|</span> <p>{data.phone}</p>
        <br />
        <div>
            <h3>Education</h3>
            <h4>{data.school}</h4>
            <p>{data.study}</p>
            <p>{data.studyDate}</p>
        </div>
        <div>
            <h3>Experience</h3>
            <h4>{data.company}</h4>
            <p>{data.dateFrom}</p>
            <p>{data.dateTo}</p>
            <h5>{data.position}</h5>
            <ul>{lines.map(result => <li>{result}</li>)}</ul>
        </div>
      </div>
    </>
  );
}
