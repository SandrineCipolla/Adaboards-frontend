import React from "react";

interface InputProps {
    placeholder: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;

}

export const Input: React.FC<InputProps> = ({ placeholder ,label, onChange,className}) => {
    return (
            <div className="w-full">
                <label className="block p-1 m-1 text-sm font-medium text-text text-left">{label}</label>
                <input
                    type="text"
                    className={`border-2 p-2 m-2 border-card rounded-lg placeholder-card text-card ${className}`}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
    );
};