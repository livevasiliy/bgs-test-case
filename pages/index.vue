<template>
  <div>
    <h1>Добро пожаловать на решённое тестовое задание</h1>
    <a
      class="github"
      rel="noreferrer nofollow"
      href="https://github.com/livevasiliy/bgs-test-case"
      target="_blank"
    >
      Github
    </a>
  </div>
</template>

<script>
  import AuthFormTitle from '@/components/Auth/AuthFormTitle'
  import ErrorMessage from '@/components/Auth/ErrorMessage'
  import AuthForm from '@/components/Auth/AuthForm'

  export default {
    layout: 'home',
  }
</script>

<style scoped>
  .github {
    display: inline-block;
    padding: 10px 40px;
    background-color: #212121;
    color: #ffffff;
    text-decoration: none;
    outline: none;
  }

  .github:hover {
    cursor: pointer;
  }

  .github:active,
  .github:visited {
    text-decoration: none;
    background-color: #212121;
    color: #ffffff;
  }
</style>
