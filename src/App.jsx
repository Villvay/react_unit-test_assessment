import {useCallback, useState} from "react";
import {UserProfile} from "./components/UserProfile.jsx";
import {debounce} from "./utils/index.js";

const App = () => {
    const [userId, setUserId] = useState('');

    const handleInputChange = useCallback(debounce((e) => {
        setUserId(e.target.value);
    }, 300), []);

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">User Profile Demo</h1>
            <div className="mb-4 flex space-x-2">
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Enter user ID (1, 2, or 3)"
                    className="flex-grow px-3 py-2 border rounded"
                />
                <button
                    onClick={() => setUserId('')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Clear
                </button>
            </div>
            <UserProfile userId={userId} />
        </div>
    );
};

export default App;