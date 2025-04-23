import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    // Commons
    footer: '2025 Fuga Furiosa. All rights reserved.',
    date: 'Date',
    time: 'Time',
    name: 'Name',
    submit: 'Submit',
    send: 'Send',

    // Home page
    home: 'Home',
    supportUsMessageLine1: "We are a non-profit organization relying on donations for our concerts' logistics. Your generosity help us continue our musical journey.",
    supportUsMessageLine2: "Thank you for your support!",
    supportUs: 'Support Us!',
    followUs: 'Follow us',
    followUsMessage: "Let's stay in touch:",

    // Concerts page
    concertProgram: 'Incoming Concerts',
    venue: 'Venue',
    firstConcertDate: 'June 28, 2025',
    firstConcertTime: '7:00 PM',
    secondConcertDate: 'June 29, 2025',
    secondConcertTime: '4:00 PM',
    comeAndSeeUs: 'Come and see us !',
    program: 'Program',
    symphony: 'Symphony',

    // Gallery page
    carousel: 'Gallery',

    // Practical info page
    practicalInfo: 'Practical Information',
    rehearsal: 'Rehearsals',
    rehearsalTime: '8:00PM to 10:00PM every Tuesday except school holidays',

    // Application page
    apply: 'Join us',    
    applicationFormTitle: 'Join the adventure !',

    // Contact page
    contactUs: 'Contact Us',
    contactUsMessage: 'If you have any questions or need further information, feel free to reach out to us via email or with the link below:'

  },
  fr: {
    // Commons
    footer: '2025 Fuga Furiosa. Tous droits réservés.',
    date: 'Date',
    time: 'Heure',
    name: 'Nom',
    submit: 'Envoyer',
    send: 'Envoyer',

    // Home page
    home: 'Accueil',
    supportUsMessageLine1: "Nous sommes une organisation à but non lucratif dépendant des dons pour la logistique de nos concerts. Votre générosité nous permet de poursuivre notre mission en toute sérénité.",
    supportUsMessageLine2: "Merci de votre soutien !",
    supportUs: 'Nous soutenir',
    followUs: 'Nous suivre',
    followUsMessage: "Restez à l'affut de nos prochains concerts !",

    // Concert page
    concertProgram: 'Prochain Concerts',
    venue: 'Lieu',
    firstConcertDate: '28 juin 2025',
    firstConcertTime: '19h00',
    secondConcertDate: '29 juin 2025',
    secondConcertTime: '16h00',
    comeAndSeeUs: 'Retrouvez-nous en concert !',
    program: 'Programme',
    symphony: 'Symphonie',

    // Gallery page
    carousel: 'Gallerie',

    // Practical info page
    practicalInfo: 'Informations Pratiques',
    rehearsal: 'Répétitions',
    rehearsalTime: '20h à 22h tous les mardis hors vacances scolaires',

    // Application page
    apply: 'Inscription',
    applicationFormTitle: "Rejoignez nous !",

    // Contact page
    contactUs: 'Nous contacter',
    contactUsMessage: 'Pour toute question, vous pouvez nous contacter via email à fugafuriosaparis@gmail.com ou avec le lien ci-dessous:'
  },
};

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Set the default language
  messages,
});

export default i18n;
