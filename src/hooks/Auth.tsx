import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api';


interface AuthState {
  token: string;
  user: object;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: signInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Profe:token');
    const user = localStorage.getItem('@Profe:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  // const [data, setData] = useState<AuthState>(() => {
  //   const token = localStorage.getItem('@Profe:token');
  //   const user = localStorage.getItem('@Profe:user');
  //   console.log(JSON.stringify(user));

  //   if (token && user) {
  //     return { token, user: JSON.parse(user) };
  //   }

  //   return {} as AuthState;
  // });

 
  const signIn = useCallback(async ({ password, email}) => {

        const response = await api.post('/sessions', {
            email,
            password,
          })

        const { token, user} = response.data.data;
  
        console.log("token: ", token);
        console.log("user: ", user);

        //const userData: any = token;
  
        //const user = userData.usr;
  
        localStorage.setItem('@Profe:token', token);
  
        localStorage.setItem('@Profe:user', JSON.stringify(user));

        console.log("token2: ", token);
        console.log("user2: ", user);

        setData({ token, user });
 

  }, []);


  const signOut = useCallback(() => {
    localStorage.removeItem('@Profe:token');
    localStorage.removeItem('@Profe:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };



