<template>
  <div>
    <UserCard :user="user"/>
  </div>
</template>

<script>
  import UserCard from '@/components/User/UserCard'

  export default {
    name: 'user',
    layout: 'user',
    middleware: ['auth'],
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    async asyncData ({ $axios, params }) {
      const user = await $axios.$get(`/users/${params.id}`)
      return {
        user,
      }
    },
    components: {
      UserCard,
    },
    head: {
      title: `Страница пользователя`
    }
  }
</script>

<style scoped>
  .card {
    width: 200px;
  }
</style>
