import React, {
    createContext,
    useState
} from 'react'
import type { FC, ReactNode } from 'react'
import { assoc } from 'ramda'


interface AuthState {
    isAuthenticated: boolean
    login: () => void,

}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthState>({
    isAuthenticated: false,
    login: () => { }
})


export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [state, setState] = useState<AuthState>({
        isAuthenticated: false,
        login: () => { }
    })

    const login = () => {
        setState(state => ({
            ...state,
            isAuthenticated: true,
        }))
    }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
