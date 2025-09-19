import { useState } from "react"

export default function GeneralInfo({cvData, onChange}) {
    
  return (
    <>
      <div className="card-container">
          <h3>General information</h3>
          <div className="fields">
              <div className="form-group-full-name">
                <label htmlFor="fullName">Full Name</label>
                <input name="fullName" value={cvData.fullName} type="text" onChange={onChange} placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input name="email" type="email" value={cvData.email} onChange={onChange} placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="">Phone Number{" "}</label>
                <input
                    name="phone"
                    type="tel"
                    value={cvData.phone}
                    onChange={onChange}
                    placeholder="+1 (555) 123-4567"
                />
              </div>
          </div>
      </div>
    </>
  );
}
