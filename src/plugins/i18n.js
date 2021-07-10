import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// We group this by a page or a component.
const messages = {
    'sr': {
        cardToLogin: "Molimo, ubacite karticu",
        welcome: "Dobrodošli",
        yourCredit: "Vaše stanje na računu",
        rentBike: "Iznajmi e-bicikl",
        rentMoped: "Iznajmi moped",
        retrieveCard: "Uspešno! Molimo izvadite karticu.",
        returnVehicle: "Vrati vozilo",
        pleaseDepositAtCentral: "Molimo uplatite kredit na šalteru da biste iznajmili vozilo",
    },
    'en': {
        cardToLogin: "Please insert your card",
        welcome: "Welcome",
        yourCredit: "Your credit",
        rentBike: "Rent an e-bike",
        rentMoped: "Rent a moped",
        retrieveCard: "Success! Please retrieve your card.",
        returnVehicle: "Return the vehicle",
        pleaseDepositAtCentral: "Please make a deposit at the counter to rent a vehicle",
    }
};

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;