import React from "react";
import { HeaderSvg } from "../assets/icons.tsx";
import { useLocation, useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <header className="text-white font-title flex justify-between items-center p-2 mb-5">
            <div className="flex">
                <div dangerouslySetInnerHTML={{ __html: HeaderSvg }} />
                <h4 className="ml-2">AdaBoards</h4>
            </div>
            <div>
                {location.pathname !== '/' && (
                    <button onClick={handleLogout} className="bg-primary text-white font-title py-2 px-4 rounded">Log out</button>
                )}
            </div>
        </header>
    );
};
