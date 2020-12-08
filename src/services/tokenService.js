function setToken(token) {
    if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
    } 
}

function GetUserFromToken() {
}

function getToken() {
}

function removeToken(token) {
    localStorage.removeItem('token');
}

export{
    setToken,
    GetUserFromToken,
    getToken,
    removeToken
}