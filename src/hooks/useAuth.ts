import { useContext } from 'react'
import AuthContext from '../context/authenticationContext'

const useAuth = () => useContext(AuthContext)

export default useAuth