import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
    }
    const token = JSON.parse(localStorage.getItem("auth-token"));

    options.headers.set("x-access-token", `${token}`);
    return fetchUtils.fetchJson(url, options);
};
export default httpClient;