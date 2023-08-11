<template>
    <form class="col-12 col-lg-4 container">
        <h2>Start your goal tracking journey!</h2>
        <TextInput class="mb-3" type="text" label="Username"/>
        <TextInput class="mb-3" type="email" hint="We'll never share your email with anyone else." label="Email address"/>
        <TextInput class="mb-3" type="password" label="Password"/>
        <TextInput class="mb-3" type="password" label="Repeat password"/>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</template>
<script>
export default{
    name: "RegistrationPage"
}
</script>