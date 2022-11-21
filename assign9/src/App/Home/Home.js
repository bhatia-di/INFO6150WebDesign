import React, {useState} from "react";
import ReactDOM from "react-dom";



export const Home = (HomeProps) => {

    const [username, setUsername] = useState(null);

    const [password, setPassword] = useState(null);

    const onClickLoggIn = () => {
        console.log("clic login");
        HomeProps.login(username, password);
    };

    

    return (
    <div className="jumbotron jumbotron-fluid">

   
            <div className="row mt-2">
                <div className="col-6">
                    <input type="text" id="login" className="form-control w-20" name="login" placeholder="login" onChange={(e) => {setUsername(e.target.value)}} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <input type="text" id="password" className="form-control w-20" name="login" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <button className="btn btn-primary" 
                        onClick={onClickLoggIn}>
                            Submit</button>
                </div>
            </div>
     
            

    </div>
    );


};

