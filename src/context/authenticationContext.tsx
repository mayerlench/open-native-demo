import React, {
    createContext,
    useState
} from 'react'
import type { FC, ReactNode } from 'react'

interface AuthState {
    isAuthenticated: boolean
    login: () => void,
    logout: () => void,
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthState>({
    isAuthenticated: false,
    logout: () => { },
    login: () => { }
})


export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [state, setState] = useState<AuthState>({
        isAuthenticated: false,
        login: () => { },
        logout: () => { }
    })

    const login = () => {
        setState(state => ({
            ...state,
            isAuthenticated: true,
        }))
    }

    const logout = () => {
        setState(state => ({
            ...state,
            isAuthenticated: false
        }))
    }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
