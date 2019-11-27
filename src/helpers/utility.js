import Cookies from "js-cookie";
import config from "../config";

const cookies = config.cookies;

export function clearCookies() {
    Cookies.remove(cookies.name, {
        domain: cookies.domain
    });
}
export function setCookies(data) {
    try {

        let cookie = {}
        if (data.token && data.token.accessToken)
            cookie.authKey = data.token.accessToken
        if(data._profile && data._profile.id)
            cookie.userId = data._profile.id
        if (data._profile && data._profile.email)
            cookie.email = data._profile.email
        else
            cookie.email = "";
        if (data._profile && data._profile.name)
            cookie.userName = data._profile.name;
        else
            cookie.userName = "";
        if (data._profile && data._profile.firstName)
            cookie.firstName = data._profile.firstName;
        if (data._profile && data._profile.lastName)
            cookie.lastName = data._profile.lastName;
        else
            cookie.avatarUrl=""
        Cookies.set(cookies.name, cookie, {
            expires: cookies.expiry,
            domain: cookies.domain
        });
    } catch (e) {
        console.log(e)
    }
}
export function updateCookies(data) {
    let currentToken = Cookies.getJSON(cookies.name);
    if (data && data.firstName) {
        currentToken.firstName = data.firstName;
    }if (data && data.lastName) {
        currentToken.lastName = data.lastName;
    }
}
export function getCookies() {
    return Cookies.get(cookies.name)
}
export function getJsonCookies() {
    let token = Cookies.getJSON(cookies.name);
    if (token)
        return token.authKey
}
export function getCookie() {
    let token = Cookies.getJSON(cookies.name);
    if (token)
        return token
}

