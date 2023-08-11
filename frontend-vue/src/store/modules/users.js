import axios from "@/axios/axios";

export default {
    state: {
      activeUserId: 0,
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
                return result;
            }
            catch(e){
                return e.response.data;
            }
        }
    },
    getters: {
        activeUser(state){
            if(!state.activeUserId) 
            return {
                "id" : 0,
                "username" : "Logged out",
                "role" : "logged out (blocked)",
            }
            return state.userAccounts.find(user => user.id === state.activeUserId);
        },
        role(state, getters) {
            return getters.activeUser.role
        },
        activeUserAccessLevel(state, getters){
            return state.userRoles[getters.role].accessLevel;
        }
    },
}