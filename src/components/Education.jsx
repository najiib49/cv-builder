export default function Education() {
  return (
    <>
      <div className="card-container">
        <h3>Education</h3>
        <div className="fields">
          <div className="form-group">
            <label htmlFor="">School Name</label>
            <input
              type="text"
              name="school"
              placeholder="University of Example"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Title of Study</label>
            <input
              type="text"
              name="study"
              placeholder="B.Sc in Computing Science"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date of Study</label>
            <input type="text" name="studyDate" placeholder="2018 - 2022" />
          </div>
        </div>
      </div>
    </>
  );
}
