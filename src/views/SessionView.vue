<template>
    <button @click="logout_session()">Iniciar sesión</button>
</template>


<script>
export default {

    methods: {
        logout_session(){

            this.$router.push({name:'list'})
            this.$store.commit("ADD_PERSON")
        }
    },
   
}
</script>