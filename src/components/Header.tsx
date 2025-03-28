import React from "react";
import { HeaderSvg } from "../assets/icons.tsx";

export const Header: React.FC = () => {
    return (
        <header className="text-white font-title flex justify-between items-center p-2">
            <div className="flex">
                <div dangerouslySetInnerHTML={{ __html: HeaderSvg }} />
                <p className="text-l font-bold">AdaBoards</p>
            </div>
            <div>
                <button className="bg-primary text-white font-title py-2 px-4 rounded" >Log out</button>
            </div>
        </header>
    )
}
