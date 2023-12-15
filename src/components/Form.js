import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

function Form(props) {
    // declare states for each of the fields
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const id = props.id;

    // create useEffect to load the contact data using the id and fetch
    useEffect(() => {
        if (id) {
            fetch("http://localhost:8080/contacts/" + id)
                .then((response) => response.json())
                .then((data) => {
                    setName(data.name);
                    setAddress(data.address);
                    setPhone(data.contactNo);
                    setEmail(data.email);
                })
                .catch((err) => console.error(err));
        }
    }, [id]);

    // declare a function to handle the submit event
    const handleSubmit = event => {
        event.preventDefault();

        // build the data
        const data = {
            name: name,
            address: address,
            contactNo: phone,
            email: email
        };

        props.onSubmit(data);
    }

    // return a form with fields for name, address, phone number, and email, and two buttons submit and cancel, using material ui
    return (
        <Container>
            <form onSubmit={handleSubmit} method="post">
                <TextField 
                    id="name" 
                    label="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required />
                <TextField
                    id="address"
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required />
                <TextField
                    id="phone"
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required />
                <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required />
                <Button 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    size="large">
                        Submit
                </Button>
                <Button 
                    onClick={() => navigate("/")}
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    style={{marginLeft: "10px"}}>
                        Cancel
                </Button>
            </form>
        </Container>
    );
}

export default Form;