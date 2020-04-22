import React, { useContext } from "react";

export const UserContext = React.createContext();

export const useUser = () => {
    const userState = useContext(UserContext);
    return userState.user;
};

export const useUserSetter = () => {
    const userState = useContext(UserContext);
    return userState.setUser;
};

export const useLoading = () => {
    const userState = useContext(UserContext);
    return userState.loading;
};

export const useSetLoading = () => {
    const userState = useContext(UserContext);
    return userState.setLoading;
};