<template>
    <div class="home-page">
      <section class="donation-info">
        <h2>{{ $t('supportUs') }}</h2>
        <p>{{ $t('supportUsMessageLine1') }}<br>{{ $t('supportUsMessageLine2') }}</p>
        <a href="https://www.helloasso.com/associations/fuga-furiosa" target="_blank" class="donate-button">Donate</a>
    </section>
    <section>
        <h2>{{ $t('followUs') }}</h2>
        <p>{{ $t('followUsMessage') }}</p>
        <div class="social-links">
          <a href="https://www.facebook.com/people/Fuga-Furiosa/pfbid0BNjHgqtZCCUjUt1bbomxwJifnnLbTA2RbEtLY9T2hBFxVynwENd2sEjLUioPYFEul/" target="_blank" class="social-link icon">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="3x"/>
          </a>
          <a href="https://www.instagram.com/orchestre_fuga_furiosa/" target="_blank" class="social-link icon">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="3x"/>
          </a>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .home-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    margin: 10px 0;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #333;
    font-size: 1.2em;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }

  .follow-us .social-links {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-link {
  color: #8934eb;
  transition: color 0.3s;
  padding: 10px;
}

.social-link:hover {
  color: #FF5733;
}

  .donate-button {
  display: inline-block;
  margin-top: 10px;
  padding: 15px 30px;
  background-color: #FF5733; /* Bright orange color */
  color: white;
  text-decoration: none;
  border-radius: 30px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  font-size: 1.2em;
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.donate-button:hover {
  background-color: #FFC300; /* Change color on hover */
  transform: translateY(-2px); /* Slight lift effect */
}

  </style>
  