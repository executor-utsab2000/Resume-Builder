import React, { useState } from 'react'
import UserContext from './UserContext'
import { data } from '../Data/data'

const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(data)
    // const [userData, setUserData] = useState({})


    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider