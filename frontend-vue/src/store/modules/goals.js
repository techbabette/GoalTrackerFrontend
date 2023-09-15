import axios from "@/axios/axios";

export default {
    state: {
        goals : []
    },
    actions:{
        async getUserGoals(){
            try{
                let result = await axios.get("goals/");
                return result.data; 
            }
            catch(e){
                if(e.response){
                    return e.response.data;
                }
                return {message: "Server error", success: false};
            }
        },
        async setLocalGoals({commit}, goals){            
            commit("setGoals", goals);
        }
    },
    mutations:{
        setGoals(state, goals){
            state.goals = goals;
        }
    },
    getters: {

    },
}