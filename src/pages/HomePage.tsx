import React, {useEffect, useState} from 'react';
import {ProjectCard} from "../components/ProjectCard.tsx";


export const HomePage: React.FC = () => {
    const [boards, setBoards] = useState<Board[]>([]);

    const fetchBoards = async () => {
        const response = await fetch('https://adaboards-api.vercel.app/api/boards', {
            method: 'GET',
            headers: {
                'X-No-Auth': 'true',
            },
        });
        const data = await response.json();
        console.log(data);
        setBoards(data);
    };

    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <div>
            <h1 className="text-text font-fancy">Hello, Ada Lovelace!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {boards.map((board) => (
                    <ProjectCard key={board.id} name={board.name} />
                ))}
            </div>
        </div>
    );
};
