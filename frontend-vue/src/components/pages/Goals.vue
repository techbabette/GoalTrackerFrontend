<template>
    <div id="goalsPage">
        <h2>This is the goals page</h2>
        <button type="button" class="btn btn-success w-75 p-2 my-2">Add goal</button>
        <div v-for="goal, key in goals" :key="key">
            {{ goal.name }}
        </div>
    </div>
</template>
<script>
export default{
    name: "GoalsPage",
    computed: {
        goals(){
            return this.$store.getters.goals;
        }
    },
    async mounted(){
        let result = await this.$store.dispatch("getUserGoals");

        this.$store.commit("addMessageToList", {text:result.message, success:result.success});

        console.log(result);

        this.$store.dispatch("setLocalGoals", result.data);
    }
}
</script>
<style scoped>
#goalsPage{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>