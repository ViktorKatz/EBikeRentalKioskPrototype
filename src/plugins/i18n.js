import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// We group this by a page or a component.
const messages = {
    'sr': {
        cardToLogin: "Prislonite karticu kako biste se ulogovali",
        welcome: "Dobrodošli",
        yourCredit: "Vaše stanje na računu"
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