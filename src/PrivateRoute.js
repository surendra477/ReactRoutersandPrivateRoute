// PrivateRoute.js

import React from 'react';
import { Navigate,Outlet} from 'react-router-dom';

const isAuthenticated = () => {
    // Implement your authentication logic here (e.g., check if the user is logged in)
    // You can use localStorage, Redux, or any state management solution for this
    // For the sake of this example, we'll assume isLoggedIn is a boolean indicating authentication status
    const isLoggedIn = true; // Replace with your authentication check

    return isLoggedIn;
};

const PrivateRoute = ({ element: Component, ...rest }) => {
    return (
        // <Route
        //     {...rest}
        //     render={(props) =>
        //         isAuthenticated() ? <Component {...props} /> : <Navigate to="/login" />
        //     }
        // />

        isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoute;
