import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"
import User from './User';



const Form = () => {
    let history = useHistory();
    //    const handleClickSignIn = e =>{
    //         console.log("come handle click fun");
    //         history.push( {pathname: "/user",
    //         state: { employee:e.target.value }});
    const [user, userState] = useState({
        username: '',
        password: ''
    });
    const [records, userRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        userState({ ...user, [name]: value })
        console.log(name, value)
    }
    const handelSubmit = (e) => {
        e.preventDefault();

        const newUser = { ...user, id: new Date().getTime().toString() }
        userRecords([...records, newUser])
        console.log(records)
        // history.push( {pathname: "/user",
        //         records: { us:"ajay" }});
    }
    return (
        <div>
            <div className="container my-3" id='aj'>
                <form onSubmit={handelSubmit}>
                    <div className="mb-3">

                        <label htmlFor="">username</label>
                        <input id="in" onChange={handleInput} value={user.username} name='username' autoComplete="off" type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">

                        <label htmlFor="">Password</label>
                        <input id="in" onChange={handleInput} value={user.password} name='password' type="password" className="form-control" required />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="">Decription</label>
                        <textarea id="in" name="" id="" cols="" rows="" className="form-control" required></textarea>
                    </div> */}
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
            <User records={records} />

            {/* {
                records.map((data) => {
                    return (
                        <div>
                            <User cods={data.username} />

                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default Form
