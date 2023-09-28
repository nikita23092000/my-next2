import { useState } from 'react';
import OneUser from './OneUser';
import FetchUser from './FetchUser';

export default function Users({ propsUsers }) {
  const
    [stateUsers, setStateUsers] = useState([]);

  return <>
    <button onClick={evt=>setStateUsers(stateUsers.concat(1+propsUsers.length+stateUsers.length))}>addUser</button>
    {propsUsers.map(user => <OneUser user={user} />)}
    {stateUsers.map(id => <FetchUser id={id} />)}
  </>
}