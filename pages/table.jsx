import { useEffect, useState, useReducer } from "react";
import {Table, Loader, Dimmer, Button} from "semantic-ui-react";
import _ from "lodash";

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

    const nandleDeleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id );
        setUsers(updatedUsers);
    }

    //TODO
    const handleUpdateUser = (id) => {
        const userToUpdate = users.find((user) => user.id === id);
        if (userToUpdate) {
            const updatedUser = {...userToUpdate, name: "Новое имя"};
            const updatedUsers = users.map((user)=>
                user.id === id? updatedUser : user
            );
            setUsers(updatedUsers);
        }
    };

    const Reducer = (state, action) =>{
        switch (action.type) {
            case "CHANGE_SORT":
                if (state.column === action.column) {
                    return {
                        ... state,
                        data: state.data.slice().reverse(),
                        direction:
                        state.direction === "ascending" ? "descending" : "ascending",
                    };
                }
                
                return {
                    column: action.column,
                    data: _.sortBy(state.data, [action.column]),
                    direction: "ascending",
                };
            case "SET_DATA":
                return {
                    ... state,
                    data: action.data,
                };
                default:
                    throw new Error();  
            
        
        }
    };

    const [state, dispatch]  = useReducer(Reducer, {
        column: null,
        data: [],
        direction: null,
    });
    const{column, data, direction} = state;

    useEffect(()=>{
        dispatch({type: "SET_DATA", data: users});
    }, [users]);

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