export default function Experience() {
  return (
    <>
      <h3>Work Experience</h3>
      <label htmlFor="">
        Company Name{" "}
        <input type="text" name="company" placeholder="Tech Company Inc." />
      </label>
      <label htmlFor="">
        Position Title{" "}
        <input type="text" name="position" placeholder="Software Engineer" />
      </label>
      <label htmlFor="">
        Date From{" "}
        <input type="date" name="dateFrom" placeholder="January 2020" />
      </label>
      <label htmlFor="">
        Date To <input type="date" name="dateTo" placeholder="Present" />
      </label>
      <label htmlFor="">
        Main Responsibilities{" "}
        <textarea
          type="text"
          name="responsibility"
          placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Participated in code reviews and mentored junior developers"
        />
      </label>
    </>
  );
}
