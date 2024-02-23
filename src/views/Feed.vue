<template>
	<h1>FEED COMPONENT</h1>
	<h3>Cette "Page" (Component) n'est visible que par l'utilisateur connecté</h3>
  </template>

<script setup>
  import firebase from 'firebase'
  import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router'
  import { onMounted,onBeforeUnmount } from 'vue'
  const router = useRouter();
  const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
          alert('Vous devez être connecté pour voir ceci. redirection à la home page')
          router.push('/')
      }
  });



  onMounted(() => {
	authListener();
});
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
  })

  
</script>

<style scoped lang="css">
</style>