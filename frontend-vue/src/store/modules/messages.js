export default {
    state: {
        messages : []
    },
    mutations : {
        addMessageToList(state, newMessage){
            state.messages.push(newMessage);
        },
        removeLastMessage(state){
            return state.messages.pop();
        }
    },
    getters:{
        getAllMessages(state){
            return state.messages;
        },
        getLastMessage(state){
            return state.messages[state.messages.length - 1];
        }
    }
}