const VALID_LOGIN_CREDS = {
    username: "tomsmith",
    password: "SuperSecretPassword!"
}

const INVALID_LOGIN_CREDS = {
    username: "asdfgh",
    password: "asdfgh"
}

const INVALID_LOGIN_USERNAME = {
    username: "!@#$%",
    password: "SuperSecretPassword!"
}

const INVALID_LOGIN_PASSWORD = {
    username: "tomsmith",
    password: "asdfghjwerty"
}

exports.VALID_LOGIN_CREDS = VALID_LOGIN_CREDS;
exports.INVALID_LOGIN_CREDS = INVALID_LOGIN_CREDS;
exports.INVALID_LOGIN_USERNAME = INVALID_LOGIN_USERNAME;
exports.INVALID_LOGIN_PASSWORD = INVALID_LOGIN_PASSWORD;