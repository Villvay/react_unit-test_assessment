import {Avatar} from "./ui/Avatar.jsx";
import {useFetchUser} from "../api/useFetchUser.js";

export const UserProfile = ({userId}) => {
    const { user, loading, error } = useFetchUser(userId);

    if (loading) return <div className="text-center py-4">Loading...</div>;
    if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;
    if (!user) return <div className="text-center py-4">No user data available</div>;

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
                <Avatar name={user.name} src={user.avatarUrl}/>
                <div>
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-500">{user.role}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm">Email: {user.email}</p>
            </div>
        </div>
    );
};