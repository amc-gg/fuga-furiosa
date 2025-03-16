<template>
    <div class="concert-program">
      <h2>{{ $t('comeAndSeeUs')}}</h2>
      <div class="container">
        <div class="performance">
          <p><strong>{{ $t('date') }}:</strong> {{ $t('firstConcertDate') }}</p>
          <p><strong>{{ $t('time') }}:</strong> {{ $t('firstConcertTime') }}</p>
          <p><strong>{{ $t('venue') }}:</strong> Eglise Notre-Dame du Travail</p>
        </div>
        <div class="performance">
          <p><strong>{{ $t('date') }}:</strong> {{ $t('secondConcertDate') }}</p>
          <p><strong>{{ $t('time') }}:</strong> {{ $t('secondConcertTime') }}</p>
          <p><strong>{{ $t('venue') }}:</strong> Eglise Notre-Dame du Travail</p>
        </div>
      </div>
      <h3>{{ $t('program') }}:</h3>
      <ul>
        <li>Johannes Brahms - Akademische Festouvertüre op. 80</li>
        <li>Bedrich Smetana - Vlata</li>
        <li>Antonin Dvorak - {{ $t('symphony') }} n°8 op. 88</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConcertProgram',
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }

  .performance {
  flex: 1;
  padding: 20px;
  margin-left:5px;
  border: solid white;
  }

  .concert-program {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #333;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .concert-program h2,
  .concert-program h3 {
    text-align: center;
  }
  
  .concert-program ul {
    list-style-type: none;
    padding: 0;
  }
  
  .concert-program ul li {
    margin-bottom: 10px;
  }
  </style>
  