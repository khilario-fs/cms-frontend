import { Container } from "@mui/material";
import TopControl from "../components/TopControl";
import ContactTable from "../components/ContactTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [key, setKey] = useState("");
    const [contacts, setContacts] = useState([]);
    const base_url = "http://localhost:8080/contacts";
    const navigate = useNavigate();

    const loadContacts = key => {
        let url = base_url;
        if (key) {
            url += "?name=" + key;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        loadContacts(key);
    }, [key]);

    const handleSearch = key => {
        setKey(key);
    }

    // create a handleDelete function to handle the delete event
    const handleDelete = id => {
        fetch(base_url + "/" + id, {
            method: "DELETE"
        })
        .then((response) => loadContacts(key))
        .catch((err) => console.error(err));
    }

    const handleUpdate = id => {
        navigate("/form", { state: { id: id } });
    }
        


    return (
        <Container>
            <TopControl onSearch={handleSearch} />
            <ContactTable contacts={contacts} onDelete={handleDelete} onUpdate={handleUpdate} />
        </Container>
    );
}

export default Home;