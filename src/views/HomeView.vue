<template>
    <AssistantsTitle/>
    <PeopleList/>

</template>


<script>
  import AssistantsTitle from '../components/AssistantsTitle.vue'
  import PeopleList from '../components/PeopleList.vue';
  export default {
    name: 'App',
    components: {
      AssistantsTitle,
      PeopleList,
  },
  methods: {
            logout: function(){
                this.$store.commit("status_session")
           
            },
  }
  }
  </script>