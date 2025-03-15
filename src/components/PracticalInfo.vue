<template>
    <div class="practical-info">
      <section class="rehearsal-info">
        <h2>{{ $t('rehearsal') }}</h2>
        <p>{{ $t('rehearsal_time') }}</p>
        <p>Maison des Jeunes de Saint-Médard</p>
        <p>3 Rue du Gril, 75005 Paris</p>
        <div class="map-container">
          <iframe
            src = "https://maps.google.com/maps?q=maison%20des%20jeunes%20de%20saint%20m%C3%A9dard&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PracticalInfo',
  };
  </script>
  
  <style scoped>
  .practical-info {
    max-width: 800px;
    margin: auto;
  }
  
  .rehearsal-info,
  .location-info {
    margin-bottom: 20px;
  }
  
  .map-container {
    margin-top: 10px;
  }
  
  iframe {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  