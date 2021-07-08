import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// We group this by a page or a component.
const messages = {
    'sr': {
        cardToLogin: "Ubacite karticu kako biste se ulogovali",
        welcome: "Dobrodošli",
        yourCredit: "Vaše stanje na računu",
        rentBike: "Iznajmi e-bicikl",
        rentMoped: "Iznajmi moped",
        retrieveCard: "Uspešno! Molimo izvadite karticu.",
        returnVehicle: "Vrati vozilo",
        pleaseDepositAtCentral: "Molimo uplatite kredit na šalteru da biste iznajmili vozilo",
    },
    'en': {

    }
};

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;