import login from "../../pages/Login.Page";
import credentials from "../../data/credentials";

export default (isValid, email) => {
    const password = credentials.find(creds => creds.email === email).password;
    if (isValid){
        console.log("account is valid");
    }
    else{
        console.log("invalid email");
    }
    login.signIn(email, password);
};