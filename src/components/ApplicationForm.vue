<template>
    <div class="application-form">
      <h2>{{ $t('applicationFormTitle') }}</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">{{ $t('name') }}:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="instrument">Instrument:</label>
          <input type="text" id="instrument" v-model="form.instrument" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">{{  $t('submit') }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ApplicationForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          instrument: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
      const emailBody = `
        Nom: ${this.form.name}\n
        Email: ${this.form.email}\n
        Instrument: ${this.form.instrument}\n
        Message: ${this.form.message}
      `;
      const subject = 'Inscription';
      window.location.href = `mailto:fugafuriosaparis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    },
  },
  };
  </script>
  
  <style scoped>
  .application-form {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #333;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .application-form h2 {
    text-align: center;
  }
  
  .application-form div {
    margin-bottom: 15px;
  }
  
  .application-form label {
    display: block;
    margin-bottom: 5px;
  }
  
  .application-form input,
  .application-form textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: #555;
    color: white;
  }
  
  .application-form button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .application-form button:hover {
    background-color: #555;
  }
  </style>
  