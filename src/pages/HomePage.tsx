import React, {useEffect, useState} from 'react';
import {ProjectCard} from "../components/ProjectCard.tsx";



export const HomePage: React.FC = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [isConnected, setIsConnected] =useState<boolean>(false);




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
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsConnected(true);
            getBoards(token);
        }
    }, []);



    return (
        <div>
            <h1 className="text-left ml-15">Hello,<span  style={{color:'var(--color-primary)'}}> Ada Lovelace</span>!</h1>

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
