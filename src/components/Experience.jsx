export default function Experience({cvData, onChange}) {
  return (
    <>
      <div className="card-container">
        <h3>Work Experience</h3>
        <div className="fields">
          <div className="form-group">
            <label htmlFor="">Company Name</label>
            <input type="text" name="company" value={cvData.company} onChange={onChange} placeholder="Tech Company Inc." />
          </div>
          <div className="form-group">
            <label htmlFor="">Position Title</label>
            <input
              type="text"
              name="position" 
              value={cvData.position}
              onChange={onChange}
              placeholder="Software Engineer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date From</label>
            <input type="date" name="dateFrom" value={cvData.dateFrom} onChange={onChange} placeholder="January 2020" />
          </div>
          <div className="form-group">
            <label htmlFor="">Date To</label>
            <input type="date" name="dateTo" value={cvData.dateTo} onChange={onChange} placeholder="Present" />
          </div>
          <div className="form-group">
            <label htmlFor="">Main Responsibilities</label>
            <textarea
              type="text"
              name="responsibility"
              value={cvData.responsibility} 
              onChange={onChange}
              placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Participated in code reviews and mentored junior developers"
            />
          </div>
        </div>
      </div>
    </>
  );
}
