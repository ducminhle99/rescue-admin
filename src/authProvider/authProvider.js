import httpClient from "./httpClient";

const baseUrl = "http://localhost:5000";
const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        const request = new Request(`${baseUrl}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({ 'email': username, password }),
            headers: new Headers({ "Content-Type": "application/json" }),
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((user) => {
                localStorage.setItem("auth-token", JSON.stringify(user.accessToken));
                if (user.roles.includes("ROLE_ADMIN")) return Promise.resolve();
                return Promise.reject("LOGIN FAILED");
            })

            .catch(() => {
                throw new Error("email or password is incorrect");
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("auth-token");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            console.log("Loi o day");
            // return Promise.reject({ redirectTo: "/credentials-required" });
            return Promise.reject("Login failed");
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem("auth-token")
            ? Promise.resolve()
            : Promise.reject({ message: "login.required" });
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
export default authProvider;