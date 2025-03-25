import React from "react";

interface InputProps {
    placeholder: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder ,label, onChange}) => {
    return (
        <div>
            <label className="mr-2 text-text">{label}</label>
            <input
                type="text"
                className="border-2 p-2 m-2 border-card rounded-lg placeholder-card"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};