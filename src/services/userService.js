import { setToken } from './tokenService'
const BASE_URL = 'http://localhost:3001/api/users'


function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method:'POST',
        headers:new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res=>{
        if(res.ok) return res.json()
        throw new Error('Email already taken!')
    })
    .then(({token})=> setToken (token))
}

function getUser() {
}

function logout() {
}

function login(creds) {
    return fetch(BASE_URL + '/login', {
        method:'POST',
        headers:new Headers({'Content-Type': 'applications/json'}),
        body: JSON.stringify(creds)
    })
    .then(res=>{
        if(res.ok) return res.json()
        throw new Error('Wrong Email or Password')
    })
    .then(({token})=> setToken (token))
}

export { 
    signup,
    getUser,
    logout,
    login 
};