import React, { useContext, useEffect } from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Contacts = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div>
                {
                    store.contacts.map(contact => {
                        return (
                            <div key={contact.id}>
                                <ContactCard key={contact.id} name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} />
                                <button onClick={() => actions.updateContact(contact.id, contact.name, contact.address, contact.phone, contact.email)}>
                                    <Link to={"/editcontact/" + contact.id}>
                                        Update
                                    </Link>
                                </button>
                                <button onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Contacts;