import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth, firebaseApp } from './firebase';
import firebase from 'firebase';
export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    const [user, setUser] = useState(false);
    return (
        <Route
            {...rest}
            render={props => {
                firebaseApp.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        if (user.uid == "pwlRHfMsBZVTjO1XJyiRgmDhCWH2") {
                            setUser(true);
                        } else {
                            setUser(false);
                        }
                    }
                });
                console.log(user);
                if (user) {
                    return <Component {...props} />;
                }

            }}
        />
    );
};
export default ProtectedRoute