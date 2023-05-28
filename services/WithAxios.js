import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { createContext, useContext, useEffect } from 'react';

export const auth = require('./Auth');

export const MyContext = createContext(null);

const WithAxios = ({ children }) => {
    const { setPhone } = useContext(MyContext);

    useEffect(() => {
        // Use interceptor to inject the token to requests
        axios.interceptors.request.use((request) => {
            request.headers['Authorization'] = `Bearer ${auth.getAccessToken()}`;
            return request;
        });

        // Function that will be called to refresh authorization
        const refreshAuthLogic = (failedRequest) =>
        auth.refreshToken(auth.getRefreshToken()).then(async (tokenRefreshResponse) => {
            if (tokenRefreshResponse.status !== 201) {
                await auth.removeTokens();
                setPhone("");
                return Promise.reject();
            }

            auth.setTokens(tokenRefreshResponse.data.accessToken, 
                tokenRefreshResponse.data.refreshToken, 
                tokenRefreshResponse.data.phone);
            setPhone(tokenRefreshResponse.data.phone);
            failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.accessToken;
            return Promise.resolve();
        }).catch(async (error) => {
            await auth.removeTokens();
            setPhone("");
            return Promise.reject();
        });

        // Instantiate the interceptor
        createAuthRefreshInterceptor(axios, refreshAuthLogic);
    }, [setPhone])

    return children
}

export default WithAxios;