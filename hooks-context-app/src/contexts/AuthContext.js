import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated : false,
     }
     authenticate = () => {
         this.setState({isAuthenticated : !this.state.isAuthenticated});
     }
    render() { 
        return ( 
            <AuthContext.Provider value = {{...this.state, authenticate : this.authenticate}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;
