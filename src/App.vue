<template>
  <div id="app">
    <h3>Hola mundo</h3>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/session" @click="logout">{{$store.state.session}}</router-link>
  </nav>
  <router-view/>
</div>
</template>



<script>

  export default {
  methods: {
            logout: function(){
                this.$store.commit("status_session")
           
            },
  }
  }
  </script>
