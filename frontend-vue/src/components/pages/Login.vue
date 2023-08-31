<template>
    <form class="col-12 col-lg-4 container">
        <h2>Continue your goal tracking journey!</h2>
        <TextInput v-model="loginObject.email" :errorMessage="errorObject.emailError" class="mb-3" type="Email" label="Email address"/>
        <TextInput v-model="loginObject.password" :errorMessage="errorObject.passwordError" class="mb-3" type="password" label="Password"/>
        <button type="button" @click="attemptLogin()" class="btn btn-primary">Login</button>
    </form>
</template>
<script>
export default{
    name: "LoginPage",
    data(){
        return {
            loginObject: {
                password: "",
                email: ""
            },
            errorObject: {
                passwordError: "",
                emailError: ""
            }
        }
    },
    methods: {
        async attemptLogin(){
            let result = await this.$store.dispatch("attemptLogin", this.loginObject);

            if(result.errors)
            this.errorObject = result.errors;

            this.$store.commit("addMessageToList", {text:result.message, success:result.success});

            if(result.success){
                let token = result.body;
                let user = JSON.parse(atob(token.split(".")[1]));
                this.$store.commit("setActiveUsername", user.username);
                this.$store.commit("setActiveUserRole", "user");
                this.$store.commit("setUserToken", token);

                this.$router.push("/goals");
            }
        }
    },
    async mounted(){
        if (this.$route.params.activationLink){
            let result = await this.$store.dispatch("activateUser", this.$route.params.activationLink);

            this.$store.commit("addMessageToList", {text:result.message, success:result.success});
        }
    }
}
</script>