import React, { useEffect, useReducer } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface AuthState {
    validating: boolean,
    token: string | null,
    username: string,
    fullName: string
}

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    fullName: ''
}

type LoginPayload = {
    username: string,
    fullName: string
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                fullName: '',
                username: ''
            }
        case 'login':
            const { fullName, username } = action.payload
            return {
                validating: false,
                token: 'ABC123',
                fullName,
                username
            }
        default:
            return state
    }
}

const Login = () => {

    const [{ validating, token, fullName }, dispatch] = useReducer(authReducer, initialState) // reducer es una funcion

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])

    if (validating) {
        return (
            <>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Login</Text>
                <View style={{ marginTop: 10, padding: 10, backgroundColor: '#33FFFF', borderRadius: 5 }}>
                    <Text style={{ color: 'black' }}>
                        Validando...
                    </Text>
                </View>
            </>
        )
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                fullName: 'Pepito',
                username: '@pepito98'
            }
        })
    }

    return (
        <>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Login</Text>

            {
                (token) ?
                    <>
                        <View style={{ marginTop: 5, padding: 10, backgroundColor: '#3CFF33', borderRadius: 5 }}>
                            <Text style={{ color: 'black' }}>
                                Atenticado como: {fullName}
                            </Text>
                        </View>
                    </>
                    :
                    <>
                        <View style={{ marginTop: 5, padding: 10, backgroundColor: '#FF9F6B', borderRadius: 5 }}>
                            <Text style={{ color: 'black' }}>
                                No autenticado...
                            </Text>
                        </View>
                    </>
            }

            <View style={{
                marginTop: 15, flexDirection: 'row'
            }}>
                {
                    (token) ?
                        (
                            <TouchableOpacity
                                onPress={logout}
                                style={{ backgroundColor: 'red', margin: 5, paddingVertical: 10, paddingHorizontal: 50, borderRadius: 25 }}>
                                <Text style={{ color: 'white' }}>
                                    Logout
                                </Text>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity
                                onPress={login}
                                style={{ backgroundColor: 'blue', margin: 5, paddingVertical: 10, paddingHorizontal: 50, borderRadius: 25 }}>
                                <Text style={{ color: 'white' }}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        )

                }
            </View>

        </>
    )
}

export default Login