
import AsyncStorage from "@react-native-async-storage/async-storage";

const logIn = async (user) => {
    console.log("User Info", user);
    const { username, password } = user;

    if (username === "Admin" && password === "123pass") {
        AsyncStorage.setItem("user", JSON.stringify(user));
        return {
            status: "success",
            message: "Redirecting to Home Page",
            user: username,
        };
    }
}

const logOut = async () => {
    AsyncStorage.clear();
    return {
        status: "success",
        message: "You are logged out",
    };
};


export default {
    logIn,
    logOut,
};