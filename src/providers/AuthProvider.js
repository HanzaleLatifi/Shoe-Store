import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const AuthContextDispatcher = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState("");

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatcher);
