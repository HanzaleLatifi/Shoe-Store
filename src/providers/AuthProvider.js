import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
const AuthContextDispatcher = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState("");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState")) || false;
    setAuth(userData);
  }, []); //even component mount(refresh) . look the localstotrga ...
  useEffect(() => {
    const userData = JSON.stringify(auth);
    localStorage.setItem("authState", userData);
  }, [auth]); // auth modify in login/signup

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
