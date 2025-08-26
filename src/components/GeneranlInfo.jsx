export default function GeneralInfo() {
  return (
    <>
      <h3>General information</h3>
      <label htmlFor="">
        Full Name{" "}
        <input name="name" type="text" placeholder="Enter your full name" />
      </label>

      <label htmlFor="">
        Email{" "}
        <input name="email" type="email" placeholder="your.email@example.com" />
      </label>
      <label htmlFor="">
        Phone Number{" "}
        <input
          name="phone"
          type="phone number"
          placeholder="+1 (555) 123-4567"
        />
      </label>
    </>
  );
}
