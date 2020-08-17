<template>
  <div class="card v-card v-sheet theme--light" :subtitle="true" :image="true">
    <UserPhoto :photo="user.photo"/>
    <UserName :name="user.name"/>
    <UserEmail :email="user.email"/>
  </div>
</template>

<script>
  import UserPhoto from './UserPhoto'
  import UserName from './UserName'
  import UserEmail from './UserEmail'

  export default {
    name: 'UserCard',
    components: { UserPhoto, UserName, UserEmail },
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>
