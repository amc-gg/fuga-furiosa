<template>
  <header>
    <div class="icon-container">
        <img src="@/assets/images/icons/cropped_logo.png" alt="Orchestra Icon" class="orchestra-icon" />
    </div>
    <h1>Fuga Furiosa</h1>
    <nav>
      <ul>
        <li><router-link to="/" exact-active-class="active">{{ $t('home') }}</router-link></li>
        <li><router-link to="/concert-program" exact-active-class="active">{{ $t('concertProgram') }}</router-link></li>
        <li><router-link to="/practical-info" exact-active-class="active">{{ $t('practicalInfo') }}</router-link></li>
        <li><router-link to="/apply" exact-active-class="active">{{ $t('apply') }}</router-link></li>
        <li><router-link to="/carousel" exact-active-class="active">{{ $t('carousel') }}</router-link></li>
        <li><router-link to="/contact" exact-active-class="active">Contact</router-link></li>
        <li>
            <select v-model="$i18n.locale" @change="changeLanguage">
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style scoped>

 header {
    background-color: #333;
    color: white;
    padding: 1px;
    text-align: center;
    position: fixed;
    z-index: 1000;
    width: 100%;
  }

  .icon-container {
  position: absolute;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
}

.orchestra-icon {
  width: 110px; /* Adjust the size as needed */
  height: auto;
}

  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 0 10px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }

  nav ul li a.active {
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }
</style>