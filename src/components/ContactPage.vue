<template>
    <div class="contact">
      <h2>{{ $t('contactUs') }}</h2>
      <p>{{ $t('contactUsMessage') }}</p>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">{{ $t('name')}}:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">{{ $t('send') }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.form),
          });
  
          if (response.ok) {
            alert('Message sent successfully!');
          } else {
            alert('Failed to send message.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error sending message.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #333;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .contact h2 {
    text-align: center;
  }
  
  .contact div {
    margin-bottom: 15px;
  }
  
  .contact label {
    display: block;
    margin-bottom: 5px;
  }
  
  .contact input,
  .contact textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: #555;
    color: white;
  }
  
  .contact button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact button:hover {
    background-color: #555;
  }
  </style>
  