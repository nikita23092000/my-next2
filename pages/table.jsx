import { useEffect, useState } from "react";
import {Table, Loader, Dimmer} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function Index(){
    const [users, setUsers] = useState([]),
    [error, setError] = useState(null),
    URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        fetch(URL)
        .then((response)=> response.json())
        .then((json)=> setUsers(error))
        .catch((error)=> setError(error));
    }, []);

    if (error) 
    return (
        <Dimmer active inverted>
            <Loader active inline size="huge">
                Loading...
            </Loader>
        </Dimmer>
    );
    
    return(
        <Table celled structured>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell rowSpan="1">Name</Table.HeaderCell>
                    <Table.HeaderCell rowSpan="1">Product</Table.HeaderCell>
                    <Table.HeaderCell rowSpan="1">Marker</Table.HeaderCell>
                    <Table.HeaderCell rowSpan="2">Category</Table.HeaderCell>

                    <Table.HeaderCell rowSpan="1">User</Table.HeaderCell>
                    <Table.HeaderCell rowSpan="1">Price</Table.HeaderCell>
                    <Table.HeaderCell rowSpan="2">Country</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                <Table.HeaderCell>Shop</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Street</Table.HeaderCell>

                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>CatchPhrase</Table.HeaderCell>
                <Table.HeaderCell>BS</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {users.Row((user)=>(
                    <Table.Row key={user.id}>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.Product}</Table.Cell>
                        <Table.Cell>{user.Marker}</Table.Cell>
                        <Table.Cell>{user.Category}</Table.Cell>
                        <Table.Cell>{user.category.shop}</Table.Cell>
                        <Table.Cell>{user.category.city}</Table.Cell>
                        <Table.Cell>{user.category.street}</Table.Cell>
                        <Table.Cell>{user.user}</Table.Cell>
                        <Table.Cell>{user.price}</Table.Cell>
                        <Table.Cell>{user.company.name}</Table.Cell>
                        <Table.Cell>{user.company.catchPhrase}</Table.Cell>
                        <Table.Cell>{user.company.bs}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
    
}