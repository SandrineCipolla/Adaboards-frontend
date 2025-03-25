import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
    name: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name }) => {
    return (
        <div className="p-4 rounded-lg shadow-md border-2 border-card">
            <div className="flex justify-between items-center">
                <h2 className="text-xl text-text font-bold">{name}</h2>
                <button className="text-white py-2 px-4 rounded flex items-center" aria-label="Delete">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                </button>
            </div>

            <p className="text-sm text-text">"Edit ...."</p>
            <div className="flex space-x-4 mt-2">
            <p className="mt-2 bg-text rounded-2xl"> Ada Lovelace</p>
            <p className="mt-2 bg-text rounded-2xl"> Dorothy Vaughan</p>
            </div>
        </div>
    );
};