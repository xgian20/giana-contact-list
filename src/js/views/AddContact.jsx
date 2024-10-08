import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {

    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    let navigate = useNavigate();

    const submitContacts = (e) => {
        e.preventDefault();
        actions.setNewContact(name, email, phone, address);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        navigate("/");
    }

    return (
        <>
            <div>
                <h3>Name</h3>
                <input
                    type='text'
                    placeholder='Enter name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <h3>Email</h3>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder='Enter email'
                />
                <h3>Phone Number</h3>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="tel"
                    placeholder='Enter phone number'
                />
                <h3>Street Address</h3>
                <input
                    type='text'
                    placeholder='Enter street address'
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                />
                <br></br>
                <br></br>
                <button onClick={(e) => submitContacts(e)} type="submit" className="btn btn-primary">Create</button>
            </div>
        </>
    );
}

export default AddContact;