import { useState } from "react";
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

function TopControl(props) {
    const [key, setKey] = useState("");

    const handleSearchChange = key => {
        setKey(key);
        props.onSearch(key);
    }

    return (
        <Container style={{marginTop: "30px"}}>
            <Link to="/form">
                <Button variant="contained" color="primary" size="large">Add Contact</Button>
            </Link>
            <FormControl variant="outlined" sx={{float: "right"}}>
                <InputLabel htmlFor="search">Search</InputLabel>
                <OutlinedInput
                    id="search"
                    type="text"
                    label="Search"
                    value={key}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <IconButton onClick={() => handleSearchChange("")}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Container>
    )
}

export default TopControl;