export default {
    state: {
        ActiveLinkName : "Home",
        navigationLinks : [
            {
                "text" : "Home",
                "path" : "/",
                "RouteName" : "Home page",
                "Position" : "Navbar",
                "Access level required" : 0
            },
            {
                "text" : "Goals",
                "path" : "/goals",
                "RouteName" : "My goals",
                "Position" : "Navbar",
                "Access level required" : 1
            },
            {
                "text" : "Login",
                "path" : "/login",
                "RouteName" : "Login",
                "Position" : "Navbar",
                "Access level required" : -1
            },
            {
                "text" : "Register",
                "path" : "/register",
                "RouteName" : "Register",
                "Position" : "Navbar",
                "Access level required" : -1
            }
        ]
    },
    mutations : {
        changeCurrentlyActiveRouteName(state, newActiveRouteName){
            state.ActiveLinkName = newActiveRouteName;
        }
    },
    getters: {
        getNavigationLinksForActiveUser(state, getters, rootState, rootGetters){
            let activeUserLevel = rootGetters.activeUserAccessLevel;

            //If user is logged out, show all links below or at access level
            if(activeUserLevel === 0){
                return state.navigationLinks.filter(link => link["Access level required"] <= activeUserLevel);
            }

            //If user is logged in, show all links below or at access level bar the ones only shown to logged out users (Where access level required is -1);
            return state.navigationLinks.filter(link => link["Access level required"] <= activeUserLevel && link["Access level required"] != -1);
        },
        getNavbarLinksForActiveUser(state, getters){
            return getters.getNavigationLinksForActiveUser.filter(Link => Link.Position === "Navbar");
        },
        getCurrentlyActiveLink(state){
            return state.currentlyActiveRouteName;
        }
    }
}