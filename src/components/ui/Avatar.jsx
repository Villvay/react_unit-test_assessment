import {useState} from "react";

export const Avatar = ({ name, src }) => {
    const [imageError, setImageError] = useState(false);

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    };

    return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-300 text-xl font-bold text-white overflow-hidden">
            {!imageError ? (
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                />
            ) : (
                getInitials(name)
            )}
        </div>
    );
};
