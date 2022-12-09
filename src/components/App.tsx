import React from 'react'
import * as AuthenticationContext from '../context/authenticationContext'
import { MainStack } from './MainStack'

const App = () => {

    return (
        <AuthenticationContext.AuthProvider>
            <MainStack />
        </AuthenticationContext.AuthProvider>
    )
}

export default App