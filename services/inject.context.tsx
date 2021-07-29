import { Container, interfaces } from "inversify";
import React, { useContext } from "react";

interface ContainerContext {
    container: Container | null;
}

interface ContainerProviderProps {
    container: Container;
}

const IOCContext = React.createContext<ContainerContext>({
    container: null,
});

export const ContainerProvider: React.FC<ContainerProviderProps> = ({ container, children }) => {
    return (
        <IOCContext.Provider value={{container}}>
            {children}
        </IOCContext.Provider>
    )
};

export function useInjection<T> (identifier: interfaces.ServiceIdentifier<T>) {
    const { container } = useContext(IOCContext);

    if(!container) {
        throw new Error('Null Reference Exception: The container must not be null.');
    }

    try {
        return container.get<T>(identifier);
    } catch(e) {
        return container.resolve<T>(identifier as interfaces.Newable<T>);
    }
}