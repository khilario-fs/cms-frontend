import { Container, Typography } from "@mui/material";
import Form from "../components/Form";
import { useLocation, useNavigate } from "react-router-dom";

function ContactForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = location.state || {id: null};
    const header = id ? "Edit" : "Add";

    // declare a function to handle the submit event
    const handleSubmit = data => {
        let url = "http://localhost:8080/contacts";

        // if id is not null, then it is an edit
        if (id) {
            url += "/" + id;
            data.id = id;
        }

        // send the data to the server
        fetch(url, {
            method: id ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then((response) => navigate("/"))
        .catch((err) => console.error(err));
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" align="left">{header} Contact</Typography>
            <Form onSubmit={handleSubmit} id={id} />
        </Container>
    );
}

export default ContactForm;