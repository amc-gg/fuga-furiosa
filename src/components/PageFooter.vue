<template>
    <footer class="footer">
      <p>&copy; {{ $t('footer') }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'PageFooter',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 0px;
    position: fixed;
    width: 100%;
    height: 5%;
    bottom: 0;
    margin-top: 10px; /* Add space above the footer */
  }
  </style>
  