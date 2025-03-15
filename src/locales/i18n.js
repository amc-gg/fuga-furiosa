import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: 'Home',
    carousel: 'Gallery',
    practicalInfo: 'Practical Information',
    apply: 'Join us',
    concertProgram: 'Incoming Concerts',
    footer: '2025 Fuga Furiosa. All rights reserved.',
    date: 'Date',
    time: 'Time',
    venue: 'Venue',
    first_concert_date: 'June 28, 2025',
    first_concert_time: '7:00 PM',
    second_concert_date: 'June 29, 2025',
    second_concert_time: '4:00 PM',
    come_and_see_us: 'Come and see us !',
    program: 'Program',
    symphony: 'Symphony',
    name: 'Name',
    submit: 'Submit',
    rehearsal: 'Rehearsals',
    rehearsal_time: '8:00PM to 10:00PM every Tuesday except school holidays',
    application_form_title: 'Join the adventure !',
    supportUsMessageLine1: "We are a non-profit organization relying on donations for our concerts' logistics. Your generosity help us continue our musical journey.",
    supportUsMessageLine2: "Thank you for your support!",
    supportUs: 'Support Us!',
    followUs: 'Follow us',
    followUsMessage: "Let's stay in touch:",
    contactUs: 'Contact Us',
    contactUsMessage: 'If you have any questions or need further information, feel free to reach out to us via email or with the link below:',
    send: 'Send'

  },
  fr: {
    home: 'Accueil',
    carousel: 'Gallerie',
    practicalInfo: 'Informations Pratiques',
    apply: 'Inscription',
    concertProgram: 'Prochain Concerts',
    footer: '2025 Fuga Furiosa. Tous droits réservés.',
    date: 'Date',
    time: 'Heure',
    venue: 'Salle',
    first_concert_date: '28 juin 2025',
    first_concert_time: '19h00',
    second_concert_date: '29 juin 2025',
    second_concert_time: '16h00',
    come_and_see_us: 'Retrouvez nous en concert !',
    program: 'Programme',
    symphony: 'Symphonie',
    name: 'Nom',
    submit: 'Envoyer',
    rehearsal: 'Répétitions',
    rehearsal_time: '20h à 22h tous les mardis hors vacances scolaires',
    application_form_title: "Rejoignez nous !",
    supportUsMessageLine1: "Nous sommes une organisation à but non lucratif dépendant des dons pour la logistique de nos concerts. Votre générosité nous permet de poursuivre notre mission en toute sérénité.",
    supportUsMessageLine2: "Merci de votre soutien !",
    supportUs: 'Nous soutenir',
    followUs: 'Nous suivre',
    followUsMessage: "Restez à l'affut de nos prochains concerts !",
    contactUs: 'Nous contacter',
    contactUsMessage: 'Pour toute question, vous pouvez nous contacter via email à fugafuriosaparis@gmail.com ou avec le lien ci-dessous:',
    send: 'Envoyer'
  },
  // Add more languages as needed
};

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Set the default language
  messages,
});

export default i18n;
