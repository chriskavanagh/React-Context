import React from "react";

// "Elvis" is default context.
const UserContext = React.createContext("Elvis");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
