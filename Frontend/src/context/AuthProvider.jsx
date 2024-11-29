import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ childern }){
   const initialAuthUser = localStorage.getItem("Users");
   const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
   );
   return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
      {childern}
    </AuthContext.Provider>
   )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>useContext(AuthContext);