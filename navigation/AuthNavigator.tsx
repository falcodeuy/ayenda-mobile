import React, { useEffect, useState } from 'react'
import SignedOutNavigator from './SignedOutNavigator'
// import { SignedInStack, SignedOutStack } from './navigation'

const AuthNavigator: React.FC = () => {
    // const [currentUser, setCurrentUser] = useState<any>(null)

    // const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(() => {
        
    }, [])

    // return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
    return <SignedOutNavigator /> 
}

export default AuthNavigator