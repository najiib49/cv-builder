export default function Experience() {
  return (
    <>
      <div className="card-container">
        <h3>Work Experience</h3>
        <div className="fields">
          <div className="form-group">
            <label htmlFor="">Company Name</label>
            <input type="text" name="company" placeholder="Tech Company Inc." />
          </div>
          <div className="form-group">
            <label htmlFor="">Position Title</label>
            <input
              type="text"
              name="position"
              placeholder="Software Engineer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date From</label>
            <input type="date" name="dateFrom" placeholder="January 2020" />
          </div>
          <div className="form-group">
            <label htmlFor="">Date To</label>
            <input type="date" name="dateTo" placeholder="Present" />
          </div>
          <div className="form-group">
            <label htmlFor="">Main Responsibilities</label>
            <textarea
              type="text"
              name="responsibility"
              placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Participated in code reviews and mentored junior developers"
            />
          </div>
        </div>
      </div>
    </>
  );
}
