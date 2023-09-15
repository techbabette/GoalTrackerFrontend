import axios from "@/axios/axios";

export default {
    state: {
        activeUser :  {
            "token" : "",
            "username" : "",
            "role" : "logged out (blocked)",
            "userId" : 0
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
        async getUserInformation(){
            try{
                let result = await axios.get(`users/returning`)
                return result.data;
            }
            catch(e){
                if(e.response){
                    return e.response.data;
                }
                return {message: "Server error", success: false};
            }
        },
        // async getUserGoals(state){
        //     try{
        //         let result = await 
        //     }
        // },
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
        },
        async logout({commit}){
            commit("emptySession");
        }
    },
    mutations:{
        setUserToken(state, token){
            localStorage.setItem("JWT", token);
            state.activeUser.token = token;
        },
        setActiveUsername(state, newUsername){
            state.activeUser.username = newUsername;
        },
        setActiveUserRole(state, newRole){
            state.activeUser.role = newRole;
        },
        emptySession(state){
            localStorage.removeItem("JWT");
            state.activeUser.token = "";
            state.activeUser.username =  "";
            state.activeUser.role = "logged out (blocked)";
        }
    },
    getters: {
        activeUsername(state){
            return state.activeUser.username;
        },
        token(state){
            return state.activeUser.token;
        },
        role(state) {
            return state.activeUser.role
        },
        activeUserAccessLevel(state, getters){
            return state.userRoles[getters.role].accessLevel;
        }
    },
}