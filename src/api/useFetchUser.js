import {useState, useEffect} from 'react';

const users = {
    '1': {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer',
        avatarUrl: 'https://i.pravatar.cc/150?img=1'
    },
    '2': {
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Designer',
        avatarUrl: 'https://i.pravatar.cc/150?img=5'
    },
    '3': {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'Manager',
        avatarUrl: 'https://i.pravatar.cc/150?img=8'
    },
};

export const useFetchUser = (userId) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError(null);
            try {
                // Simulating an API call with a delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (users[userId]) {
                    setUser(users[userId]);
                } else {
                    throw new Error('User not found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (Boolean(userId)) {
            fetchUser();
        } else {
            setUser(null);
            setError(null);
        }
    }, [userId]);

    return {user, loading, error};
};