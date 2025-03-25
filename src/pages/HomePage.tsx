import React, {useEffect, useState} from 'react';
import {ProjectCard} from "../components/ProjectCard.tsx";
import {Input} from "../components/Input.tsx";


export const HomePage: React.FC = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isConnected, setIsConnected] =useState<boolean>(false);

    const addEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const addPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const login = async () => {
        console.log("email", email);
        console.log("password", password);
        const response = await fetch('https://adaboards-api.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email: email,
                password: password,

            }),
        });
        const userData = await response.json();
        console.log("userData", userData);
        setEmail(userData.email);
        setPassword(userData.password);

        const token:string = userData.token;
        localStorage.setItem('authToken', token);
        setIsConnected(true);


        getBoards(token);
    }

    const getBoards = async (token:string) => {
        const response = await fetch('https://adaboards-api.vercel.app/api/boards', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },

        });
        const data = await response.json();
        console.log(data);
        setBoards(data);
    };

    useEffect(() => {
        //getBoards();
        if (localStorage.getItem('authToken') != null) {
            setIsConnected(true);
        }

    }, []);



    return (
        <div>
            <h1 className="text-text font-fancy">Hello, Ada Lovelace!</h1>
            {!isConnected && (
            <div>
                <Input label="Email" placeholder="Email" onChange={addEmail}/>
                <Input label="Password" placeholder="Password" onChange={addPassword}/>
                <button onClick={login} className="bg-primary text-white font-title py-2 px-4 rounded" >Login</button>
            </div>
            )}
            {isConnected &&  (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {boards.map((board) => (
                    <ProjectCard key={board.id} name={board.name} />
                ))}
            </div>

            )}
        </div>
    );
};
