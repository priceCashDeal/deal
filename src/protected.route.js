// import React from "react";
// import { Route, Redirect } from "react-router-dom";
//import { auth,firebaseApp } from '../firebase';
// var user = firebaseApp.auth().currentUser;


// export const ProtectedRoute = ({
//     component: Component,
//     ...rest
// }) => {
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 if (user == "") {
//                     return <Component {...props} />;
//                 } else {
//                     return (
//                         <Redirect
//                             to={{
//                                 pathname: "/",
//                                 state: {
//                                     from: props.location
//                                 }
//                             }}
//                         />
//                     );
//                 }
//             }}
//         />
//     );
// };
