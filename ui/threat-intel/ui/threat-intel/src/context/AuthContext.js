javascript
import React, { createContext, useState } from 'react';
import { login as loginApi, signup as signupApi } from '../api/authApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (creds) => {
    const res = await loginApi(creds);
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
  };

  const signup = async (creds) => {
    await signupApi(creds);
    // optionally auto-login or navigate to /login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};