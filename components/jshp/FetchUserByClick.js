import { useState } from 'react';
import OneUser from './OneUser';


export default function FetchUserByClick({ id }) {
  const
    [user, setUser] = useState(null),
    [error, setError] = useState(null),
    onClick = async () => {
      try {
        setError(null);
        const
          res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        if (!res.ok) throw new Error('fetch error');
        setUser(await res.json());
      } catch (err) {
        setError(err);
      }
    };

  return <>
    <button onClick={onClick}>fetch user #{id}</button>
    {error && <h2 style={{ color: 'red' }}>{error.toString()}</h2>}
    {user && <OneUser user={user} />}
  </>
}