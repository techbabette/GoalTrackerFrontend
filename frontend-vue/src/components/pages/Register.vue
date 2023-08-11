<template>
    <form class="col-12 col-lg-4 container">
        <h2>Start your goal tracking journey!</h2>
        <TextInput v-model="registrationObject.username" :errorMessage="errorObject.usernameError" class="mb-3" type="text" label="Username"/>
        <TextInput v-model="registrationObject.email" :errorMessage="errorObject.emailError" class="mb-3" type="email" hint="We'll never share your email with anyone else." label="Email address"/>
        <TextInput v-model="registrationObject.password" :errorMessage="errorObject.passwordError" class="mb-3" type="password" label="Password"/>
        <TextInput v-model="registrationObject.repeatPassword" :errorMessage="errorObject.repeatPasswordError" class="mb-3" type="password" label="Repeat password"/>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="button" @click="createNewUser()" class="btn btn-primary">Register</button>
    </form>
</template>
<script>
export default{
    name: "RegistrationPage",
    data(){
        return {
            registrationObject: {
                username: "",
                password: "",
                repeatPassword: "",
                email: ""
            },
            errorObject: {
                usernameError: "",
                passwordError: "",
                repeatPasswordError: "",
                emailError: ""
            }
        }
    },
    methods:{
        async createNewUser(){
            let result = await this.$store.dispatch("registerNewUser", this.registrationObject);

            if(result.errors)
            this.errorObject = result.errors;

            this.$store.commit("addMessageToList", {text:result.message, success:result.success});
        }
    },
    mounted(){
        this.$store.commit("addMessageToList", {text: "Hello Everyone", success: true});

        console.log(this.$store.state.messages.messages);
    }
}
</script>