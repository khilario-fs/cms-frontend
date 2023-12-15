import { TableContainer, TableRow, TableHead, TableCell, IconButton, Tooltip } from "@mui/material";
import { Table, TableBody, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactTable(props) {
    // create a four-column table using material-ui with row
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Contact Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Actions</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { props.contacts.map((contact, id) => (
                    <TableRow key={id}>
                        <TableCell>
                            <IconButton color="warning" onClick={e => props.onUpdate(contact.id)}>
                                <Tooltip title="Edit" placement="top">
                                    <EditIcon aria-label="Edit" />
                                </Tooltip>
                            </IconButton>
                            <IconButton color="error" onClick={e => props.onDelete(contact.id)} >
                                <Tooltip title="Delete" placement="top">
                                    <DeleteIcon aria-label="Delete" />
                                </Tooltip>
                            </IconButton>
                        </TableCell>
                        <TableCell>{ contact.name }</TableCell>
                        <TableCell>{ contact.address }</TableCell>
                        <TableCell>{ contact.contactNo }</TableCell>
                        <TableCell>{ contact.email }</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ContactTable;