<template>
  <q-page class="flex flex-center" >
   
   
    <div class="q-pa-md">
    
      <div class="fixed-center">
        <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
        >
      </div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="username" standout="bg-teal text-white" text-align="center" aria-placeholder="title"/>
        <q-input v-model="password" standout="bg-teal text-white" text-align="center" aria-placeholder="title"/>
      </div>
      
      <div class="vertical-bottom" align="center"><q-btn @click="login"  color="secondary" label="Login" align="around"/></div>
    
    </div>
  
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      data: {},
      username: "",
      password: ""
    }
  },
    methods:{
      login(){
        if(this.username != this.data.username && this.password != this.data.password) alert("invalid username or password")
        else this.$router.push(`/home`)
      }

    },
    mounted(){
       this.$axios.get("http://localhost:3000/admin")
        .then(res => {
        console.log(res.data[0]);
        this.data = res.data[0]
        });
    }
  
}
</script>
<style></style>
