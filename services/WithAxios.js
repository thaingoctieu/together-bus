import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { createContext, useContext, useEffect } from 'react';

export const auth = require('./Auth');

export const MyContext = createContext(null);

const WithAxios = ({ children }) => {
    const { setPhone } = useContext(MyContext);

    useEffect(() => {
        // Use interceptor to inject the token to requests
        axios.interceptors.request.use(async (request) => {
            request.headers['Authorization'] = `Bearer ${await auth.getAccessToken()}`;
            console.log("Request: ", request);
            return request;
        });

        // Function that will be called to refresh authorization
        const refreshAuthLogic = async (failedRequest) =>
        auth.refreshToken(await auth.getRefreshToken()).then(async (tokenRefreshResponse) => {
            if (tokenRefreshResponse.status !== 201) {
                await auth.removeTokens();
                setPhone("");
                return Promise.reject();
            }

            await auth.setTokens(tokenRefreshResponse.data.accessToken, 
                tokenRefreshResponse.data.refreshToken, 
                tokenRefreshResponse.data.phone);
            setPhone(tokenRefreshResponse.data.phone);
            console.log("token in storage: ", await auth.getAccessToken());
            failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.accessToken;
            return Promise.resolve();
        }).catch(async (error) => {
            console.log("Refresh token failed");
            console.log(error);
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