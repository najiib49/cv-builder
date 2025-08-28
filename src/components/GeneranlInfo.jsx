
export default function GeneralInfo() {
  return (
    <>
      <div className="card-container">
          <h3>General information</h3>
          <div className="fields">
              <div className="form-group-full-name">
                <label htmlFor="fullName">Full Name</label>
                <input name="name" type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input name="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="">Phone Number{" "}</label>
                <input
                    name="phone"
                    type="phone number"
                    placeholder="+1 (555) 123-4567"
                />
              </div>
          </div>
      </div>
    </>
  );
}
