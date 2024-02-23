<template>
	<h1>ADMIN VIEW COMPONENT</h1>
	<h3>Cette "Page" (Component) n'est visible que par l'utilisateur connecté</h3>
  <articles-list></articles-list>
  </template>

<script setup>
  import firebase from 'firebase'
  import { useRouter } from 'vue-router'
  import { onMounted,onBeforeUnmount} from 'vue'
  import ArticlesList from '../components/ArticlesList.vue'

  const router = useRouter()
  console.log(router);
  const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
          alert('VOUS PAS ETRE ADMIN !!!')
          router.push('/register')
      }
  })

//   const stopWatch = watch(
// 	() => route.path,(newPath, oldPath) => {
//     console.log(oldPath);
//     if(oldPath){
//       console.log('undeff');
//       router.push('/register')
//     }
//     console.log(newPath);
// 		// do something
// 	},
// 	{
// 		immediate: true
// 	}
// );

  onMounted(() => {
    // stopWatch();
	authListener();
});
  onBeforeUnmount(() => {
      // clear up listener
      authListener();
      // stopWatch();

  })

  
</script>

<style scoped lang="css">
</style>