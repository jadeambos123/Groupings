import React from "react";
import "./Home.css"; // if you want to style it separately

import requestDocIcon from "../assets/Secure_File_Transfer_Homepage_Request_Icon-01.png";
import requestAidIcon from "../assets/1321724.png";
import complaintsIcon from "../assets/6553470.png"; // keep your old one for Complaints

export default function Home() {
  return (
    <div className="homepage">
      <div className="welcome">
        <h2>Welcome Jade!</h2>
        <p>Barangay: Consolacion</p>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={requestDocIcon} alt="Request Documents" />
          <p>REQUEST DOCUMENTS</p>
        </div>
        <div className="card">
          <img src={complaintsIcon} alt="Complaints" />
          <p>COMPLAINTS</p>
        </div>
        <div className="card">
          <img src={requestAidIcon} alt="Request Aid" />
          <p>REQUEST AID</p>
        </div>
      </div>

      <div className="announcements">
        <h3>📢 Barangay Announcements</h3>
        <ul>
          <li>Curfew hours updated to 10 PM starting April 15</li>
          <li>Free medical check-up every Thursday at the Barangay Hall</li>
          <li>Garbage collection moved to Mondays and Thursdays</li>
        </ul>
      </div>
    </div>
  );
}
