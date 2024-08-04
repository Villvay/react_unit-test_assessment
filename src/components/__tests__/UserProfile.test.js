import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, fireEvent} from "@testing-library/react";
import App from "../../App.jsx";
import {useFetchUser} from "../../api/useFetchUser.js";

jest.mock('../../api/useFetchUser.js');

test('renders the App component', () => {
    useFetchUser.mockReturnValue({user: null, loading: false, error: null});
    render(<App/>);
});
