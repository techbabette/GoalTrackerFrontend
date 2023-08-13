import axios from "@/axios/axios";

export default {
    state: {
        token: "",
        activeUser :  {
            "username" : "Logged out",
            "role" : "logged out (blocked)",
        },
        userRoles : {
            "admin" : {
                accessLevel : 2
            },
            "user" : {
                accessLevel : 1
            },
            "logged out (blocked)" : {
                accessLevel : 0
            }
        },
    },
    actions:{
        async registerNewUser(state, newUserObject){
            try{
                let result = await axios.post("/users/register", newUserObject);
                return result.data;
            }
            catch(e){
                if(e.response){
                    return e.response.data
                }
                return {message: "Server error", success: false};
            }
        },
        async activateUser(state, activationLink){
            try{
                let result = await axios.get(`users/activate/${activationLink}`);
                return result.data;
            }
            catch(e){
                if(e.response){
                    return e.response.data;
                }
                return {message: "Server error", success: false};
            }
        },
        async attemptLogin(state, loginInformation){
            try{
                let result = await axios.post("/users/login", loginInformation);
                return result.data;
            }
            catch(e){
                if(e.response){
                    return e.response.data
                }
                return {message: "Server error", success: false};
            }
        }
    },
    mutations:{
        setUserToken(state, token){
            state.token = token;
        },
        setActiveUsername(state, newUsername){
            state.activeUser.username = newUsername;
        },
        setActiveUserRole(state, newRole){
            state.activeUser.role = newRole;
        }
    },
    getters: {
        activeUser(state){
            return state.activeUser
        },
        activeUsername(state, getters){
            return getters.activeUser.username;
        },
        role(state, getters) {
            return getters.activeUser.role
        },
        activeUserAccessLevel(state, getters){
            return state.userRoles[getters.role].accessLevel;
        }
    },
}