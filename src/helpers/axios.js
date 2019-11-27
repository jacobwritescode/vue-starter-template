import axios from "axios";
import config from "../config";
// import { history } from "../store";
import {getJsonCookies } from "./utility";

const customHeader = () => ({
    // Authorization: getJsonCookies() || undefined,
});

export function api() {
    let opts = {
        baseURL: config.api.trim(),
        headers: customHeader(),
    };
    return axios.create(opts);
}

export function catchHandler(e) {
    // let res = JSON.parse(JSON.stringify(e)).response;
    // if (res.status === 401) {
    //   history.push("/login");
    // }
    throw e.response.data.message ;
}
