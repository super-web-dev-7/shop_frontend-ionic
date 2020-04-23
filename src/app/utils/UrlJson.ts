import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;
const apiUrl = environment.apiUrl;

export const UrlJSON = {
    loginUrl: apiUrl + 'auth/login',
    signupUrl: apiUrl + 'auth/signup',
    getCountry: apiUrl + 'country',

    getAllUsers: apiUrl + 'user/getAll',
    userUrl: apiUrl + 'user',
    languageUrl: apiUrl + 'language',
    countryUrl: apiUrl + 'country',
    shopUrl: apiUrl + 'shop',
    profileUrl: apiUrl + 'profile',
    assignUrl: apiUrl + 'assign'
};
