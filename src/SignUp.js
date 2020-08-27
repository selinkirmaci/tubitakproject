import {Button} from "primereact/button";
import {Paper} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {InputText} from "primereact/inputtext";
import React from "react";
import {Link} from "react-router-dom";

export default function SignUp()
{
    const header =<span>
            <br/>
            <text class = "text"  style = {{left: '50%',margin: '15em'}} >WELCOME</text>
            </span>;
    const footer = <span>
                <Button label="Sign Up"  style={{marginLeft: '16em',marginRight: '.4em',color: 'white',backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)' , width : '25%'}}/>
                <Link to={"/login"}>
                        <Button style={{ color: 'white',backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)' , width : '25%'}} label="Cancel" className="p-button-secondary " />
                </Link>
                </span>;
    return(
        <div style={{height : '110vh', width : '100%',backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)'}}>
            <Paper style={{backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)'}}>
                <Card class="rounded-card"  header={header} footer={footer} style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40%',
                    minHeight: '60%',
                    justifyContent: "center",
                    borderRadius: '20px'
                }}>
                    <div className="p-fluid">
                        <br/>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="firstname6">Name</label>
                                <InputText id="firstname6" type="text" />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="lastname6">Surname</label>
                                <InputText id="lastname6" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">TC Kimlik No</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="email"/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Email</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="email"/>
                            </div>
                        </div>
                        <br/>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Username</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="username"/>
                            </div>
                        </div>
                        <br/>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Password</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="password"/>
                            </div>
                        </div>
                        <br/>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Password Confirm</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="password"/>
                            </div>
                        </div>
                    </div>

                </Card>
            </Paper>
        </div>
    );
}