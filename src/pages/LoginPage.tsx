import React, {useState} from 'react';
import {Input} from "../components/Input.tsx";
import {useNavigate} from "react-router-dom";


export const LoginPage:React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

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
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const userData = await response.json();
        console.log("userData", userData);
        setEmail(userData.email);
        setPassword(userData.password);

        const token: string = userData.token;
        localStorage.setItem('authToken', token);
        navigate('/boards');
    };

    return (
        <div className="flex flex-col items-center space-y-4 mt-50">
            <h3>Welcome back</h3>
            <h4>Sign in to continue to your boards</h4>
            <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
                <div className="w-full">
                    <Input label="Email*"placeholder="Email" onChange={addEmail} className="w-full"/>
                </div>
                <div className="w-full">
                    <Input label="Password*" placeholder="Password" onChange={addPassword} className="w-full"/>
                </div>
                <div className="w-full">
                    <button onClick={login} className="bg-primary text-currentColor font-body font-bold py-2 px-4 rounded mt-2 w-full ml-2">Login</button>
                </div>

            </div>
            <p>No account yet? Sign up</p>
        </div>
    )
}