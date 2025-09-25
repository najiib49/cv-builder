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
      <div className="preview-edit">
        <p>Resume  Preview</p>
        <button onClick={handEdit}>Edit Resume</button>
      </div>
      <main className="resume-container">
        <header className="resume-header">
            <h1>{data.fullName}</h1>
            <p className="tagline"><em>{data.email} | {data.phone}</em></p>
        </header>
        <section>
            <h2>Experience</h2>
            <h3>{data.position}</h3>
            <p>{data.company} | <em>{data.dateFrom} &mdash; {data.dateTo}</em></p>
            <ul>{lines.map(result => <li>{result}</li>)}</ul>
        </section>
        <section>
            <h2>Education</h2>
            <article>
                <h3>{data.study}</h3>
                <p>{data.school} | <em>{data.studyDate}</em></p>
            </article>
        </section>
      </main>
    </>
  );
}
