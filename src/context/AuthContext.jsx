import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const register = (name, email, password) => {

    const newUser = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(newUser)
    );

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };

  const login = (email, password) => {

    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      throw new Error("No account found. Please register first.");
    }

    const registeredUser = JSON.parse(savedUser);

    if (
      registeredUser.email !== email ||
      registeredUser.password !== password
    ) {
      throw new Error("Invalid email or password.");
    }

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(registeredUser)
    );

    setUser(registeredUser);
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}