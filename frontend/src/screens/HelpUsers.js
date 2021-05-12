import React from 'react'

const HelpUsers = () => {
    return (
        
        <div className="overall">
            <ul className="helpStyle">
                How To Edit User Profiles:
                <li>
                1.	Enter the user’s name under “Name”
                <li></li>
                2.	Enter the user’s email under “Email”
                <li></li>
                3.	Create a password
                <li></li>
                4.	Confirm the same password

                </li>
            </ul>
            <div className="marginBottom"></div>
           <ul className="helpStyle">
           Next you can enter the sellers information by providing:
                <li>
                1.	Enter sellers name under “Seller Name”
                <li></li>
                2.	Upload an image of the sellers logo under “Seller Logo”
                <li></li>
                3.	Add a seller description under “Seller Description”
                <li></li>
                4.	Click “Update”
                </li>
            </ul>
        </div>
    );
    }
export default HelpUsers;