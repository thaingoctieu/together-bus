import { useReducer, useEffect, useState, useCallback } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppContext } from './authContext'

function AppProvider({ children }) {

    return (
        <AppContext.Provider value={''}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider