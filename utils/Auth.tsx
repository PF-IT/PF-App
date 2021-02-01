import React, { useReducer } from "react";
import useSWR from "swr";
import { graphql_fetcher } from "./api";
import { fetchBasicToken, getBasicToken, getUserToken, removeUserToken, setUserToken } from "./SecureTokenExpo";

// create a global auth reference to get access to auth actions outside components tree
export const AuthRef = React.createRef<AuthContextActions>()

interface AuthState {
    status: 'idle' | 'signIn' | 'signOut'
    authToken: string | undefined | null
    basicAuthToken: string | undefined | null // not sure we'll do it like this
}
type AuthPayload = string
interface AuthContextActions {
    signInUser: (data: AuthPayload) => void
    signOutUser: () => void
}
type AuthAction = { type: 'SIGN_IN_BASIC'; basicAuthToken: string } | { type: 'SIGN_IN_USER'; authToken: string } | { type: 'SIGN_OUT_USER' }
interface AuthContextInterface extends AuthState, AuthContextActions { }

// Authentication context
// manages the authentication state of the application and exposes the current role and token to the rest of it's component tree
const AuthContext = React.createContext<AuthContextInterface>({
    status: 'idle', // current role indicates the level of authority the current authToken has none|basic|user
    authToken: undefined,
    basicAuthToken: undefined,
    signInUser: () => { },
    signOutUser: () => { }
})
AuthContext.displayName = 'AuthDisplayName'

const AuthInitialState: AuthState = { status: 'idle', authToken: undefined, basicAuthToken: undefined }
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Explanation: since out AuthState contains multiple parameters we'll use the more complex useReducer instead of useState
    const [state, dispatch] = useReducer(AuthReducer, AuthInitialState)

    // Explanation: the side effect is to provide the app with an initial basic role state
    React.useEffect(() => {
        const initState = async () => {
            console.log("start auth");
            try {
                const basicAuthToken = await getBasicToken()
                if (basicAuthToken) {
                    console.log("got token from store:" + basicAuthToken);
                    dispatch( { type: 'SIGN_IN_BASIC', basicAuthToken: basicAuthToken } );
                } else {
                    const freshToken = await fetchBasicToken()
                    if (freshToken) {
                        console.log("got new basicToken:" + freshToken);
                        dispatch( {type: 'SIGN_IN_BASIC', basicAuthToken: freshToken} )
                    }
                }
                const authToken = await getUserToken()
                if (authToken) {
                    dispatch({ type: 'SIGN_IN_USER', authToken: authToken })
                } else {
                    dispatch({ type: 'SIGN_OUT_USER' })
                }
            } catch (e) {
                console.log(e);
            }
        }
        initState()
    }, [])

    // add auth actions to authRef
    React.useImperativeHandle(AuthRef, () => authActions)

    // Explanation: signIn and signOuts are considered expensive operations. So we'll memoize them for optimization purposes.
    const authActions: AuthContextActions = React.useMemo(
        () => ({
            signInUser: async (authToken: string) => {
                dispatch({ type: 'SIGN_IN_USER', authToken })
                await setUserToken(authToken)
            },
            signOutUser: async () => {
                await removeUserToken()
                dispatch({ type: 'SIGN_OUT_USER' })
            }
        }), []
    )

    // provider will pass state and authAction props to consumers
    return (
        <AuthContext.Provider value={{ ...state, ...authActions }}>
            {children}
        </AuthContext.Provider>
    )
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SIGN_IN_BASIC':
            return {
                ...state,
                basicAuthToken: action.basicAuthToken
            }
        case 'SIGN_IN_USER':
            return {
                ...state,
                status: 'signIn',
                authToken: action.authToken
            }
        case 'SIGN_OUT_USER':
            return {
                ...state,
                status: 'signOut',
                authToken: undefined
            }
    }
}

// auth hook
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth hook only works within an AuthProvider with values')
    }
    return context
}


var shouldFetch = true;
// get basicToken from secureStore or else fetch a new one from backend
async function fetchJWT() {
    const query: string = `
    mutation {
        login(input: { identifier: "app@pf.dk", password: "app123" }) {
        jwt
        }
    }`;
    const { data, error } = useSWR(() => shouldFetch ? query : null, graphql_fetcher)

    // temp solution to only get one token
    if (data) {
        shouldFetch = false;
    }

    return {
        token: data ? data.login.jwt : undefined,
        isLoading: !error && !data,
        isError: error
    }
};