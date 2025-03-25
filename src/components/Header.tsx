import React from "react";
import { HeaderSvg } from "../assets/icons.tsx";

export const Header: React.FC = () => {
    return (
        <header className="text-white flex justify-between items-center p-2">
            <div className="flex">
                <div dangerouslySetInnerHTML={{ __html: HeaderSvg }} />
                <p className="text-l font-bold">AdaBoards</p>
            </div>
            <div>
                <button className="bg-primary text-white py-2 px-4 rounded" >Sign in</button>
            </div>
        </header>
    )
}
