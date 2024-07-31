import React from "react";

import '../CSS/Home.css'



export const Home = () => {
  return (
    <>
    
    <div>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              userId
            </th>
            <th>
              email
            </th>
            <th>password</th>
            <th>role</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>dob</th>
            <th>address</th>
            <th>phoneNo</th>
          </tr>
        </thead>
       
       
      </table>
    </div></>
  );
};
