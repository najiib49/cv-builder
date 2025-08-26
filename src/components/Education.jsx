export default function Education() {
  return (
    <>
      <h3>Education</h3>
      <label htmlFor="">
        School Name{" "}
        <input type="text" name="school" placeholder="University of Example" />
      </label>
      <label htmlFor="">
        Title of Study{" "}
        <input
          type="text"
          name="study"
          placeholder="B.Sc in Computing Science"
        />
      </label>
      <label htmlFor="">
        Date of Study{" "}
        <input type="text" name="studyDate" placeholder="2018 - 2022" />
      </label>
    </>
  );
}
