import React from "react";


function Profile() {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <h2>My Profile</h2>

        <img
          src="/me.png" 
          alt="Profile"
          className="profile-img"
          loading="lazy"
        />

        <h3>Priyanshu Yadav</h3>

        <p>
          Passionate Web Developer focused on building responsive,
          scalable and performance-optimized web applications using
          modern technologies like React and Node.js.
        </p>
      </div>
    </div>
  );
}

export default Profile;
