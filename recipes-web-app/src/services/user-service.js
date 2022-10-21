const REGISTER_URL = "http://localhost:3001/api";

export const register = (credentials) => {
    return fetch(`${REGISTER_URL}/register`, {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const login = (credentials) => {
    return fetch(`${REGISTER_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    register, login

}