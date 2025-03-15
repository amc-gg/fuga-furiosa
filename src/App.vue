<template>
    <div id="app">
      <PageHeader />
      <PageFooter />
    </div>
  </template>
  
  <script>
  import PageHeader from './components/PageHeader.vue';
  import PageFooter from './components/PageFooter.vue';
  
  export default {
    name: 'App',
    components: {
      PageHeader,
      PageFooter,
    },
  };
  </script>
  
  <style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  body {
    background: linear-gradient(#0C3765 50%, #F85534 );
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    color: white;
  }
  
  main {
    flex: 1;
    box-sizing: border-box;
    padding: 50px 20px 100px; /* Increase bottom padding to ensure content is not hidden */
    padding: 150px 20px 100px; /* Adjust top padding to account for the fixed header height */

  }
  </style>
  