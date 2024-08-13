import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContacts = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(""); 
    
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/xgian/contacts/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setName(data.name);
            setAddress(data.address);
            setEmail(data.email);
            setPhone(data.phone);
        });
    };

    const editContact = (e) => {
        e.preventDefault();
        const contactId = params.id; 
        actions.updateContact(contactId, { name, email, phone, address });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        navigate("/"); 
    };

    return (
        <>
            <div style={{textAlign: "center"}} >
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
                <button onClick={editContact} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </>
    );
}

export default EditContacts;