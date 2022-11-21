import React from "react";
import { CardDetail } from "../Components/CardDetail";
import { LoggedOut } from "../Components/LoggedOut";

export const Contact = (ContactProps) => {

    if (ContactProps.loggedIn === false) {
        return <LoggedOut/>;
    }

    return (
        <div className="container">
        <CardDetail title={"Contact Us"} subtitle={"Our Contact details: "}
         body={"Twitter: @user_management_twitter \n Instagram: @user_management_instagram  \n Phone Number: +1 (849)849-8308 "} />

    </div>
    );


};

