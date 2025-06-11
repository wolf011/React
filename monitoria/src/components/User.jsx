import { useEffect, useState } from "react";
import axios from 'axios';

export const User = () => {
    const [users, setUsers] = useState({});

    useEffect(() => {
        const GetUsers = async () => {
            const response = await axios.get('https://api.github.com/users/');
            console.log(response.data)
        };

        GetUsers();
    }, []);

  return (
    <>
        <h2>Bonde do Git</h2>
        <ul>
            {users.map(user => (
                <li>key={user.id}
                    <img src={user.avatar_url} alt=""/>
                </li>
            ))}
            {/* <img src={users.avatar_url}/> */}
        </ul>
    </>
  )
}
