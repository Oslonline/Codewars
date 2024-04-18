function validPass(password) {
    let result = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,19}$/.test(password)
    return result == true ? "VALID" : "INVALID";
}