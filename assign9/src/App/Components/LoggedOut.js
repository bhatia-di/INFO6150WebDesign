import React from "react";

export const LoggedOut = () => {

    return (
        <div className="jumbotron">
            <span href="#">
                <i className="fas-solid fas-triangle-exclamation color-red"></i>
                <h4 className="color-red">Please log in!</h4>
                <a href="/home">Click here to logg in</a>
            </span>
        </div>
    );

}