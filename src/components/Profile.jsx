 import React from 'react'
import dp from "../assets/dp.jpg"

const Profile = () => {
  return (
    <div className="profile-card">
      {/* Header with background */}
      <div className="profile-header">
        <img src={dp} alt="profile" className="profile-img" />
      </div>

      {/* Content */}
      <div className="profile-content">
        <h3>Abdul Sattar</h3>
        <p>Full Stack Developer | MERN Expert</p>
        <p>I build scalable and modern web applications.</p>

        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
