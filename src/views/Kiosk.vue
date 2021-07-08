<template>
    <div class="kiosk">
        <div class="kioskFrame">
            <div id="WaitForLogin" v-if="mode=='WaitForLogin'">
                <div class="header">
                    <button @click="changeLang('sr')" class="langButton">Srpski</button>
                    <button @click="changeLang('en')" class="langButton">English</button>
                </div>
                <div class="center">
                    <img alt="Logo" class="logo" src="../assets/bikeLogo.png">
                    <h1>{{ $t('cardToLogin') }}</h1>
                </div>
            </div>
            <div id="UserHome" v-if="mode=='UserHome'">
                <h1 style="text-align:left; margin-top:100px; margin-left:70px;"> {{ $t('welcome') }}, {{ loggedUserName }}!</h1>
                <h1 style="text-align:left; margin-top:20px; margin-left:70px;"> {{ $t('yourCredit') }}: {{ userCredit }} RSD</h1>
            </div>
        </div>
        <div class="kioskButtons" style="margin-top: 5px;">
            <div v-if="mode=='WaitForLogin'">
                <button @click="login(1);"> Simuliraj ubacivanje kartice korisnika 1 </button>
                <button @click="login(2);"> Simuliraj ubacivanje kartice korisnika 2 </button>
            </div>
            <div v-else>
                <button @click="logout();"> Simuliraj izvlačenje kartice </button>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Kiosk',
        components: {

        },
        created() {
            if (!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify(this.users));
            }
            if (!localStorage.getItem('stations')) {
                localStorage.setItem('stations', JSON.stringify(this.stations));
            }

            let allStations = JSON.parse(localStorage.getItem('stations'));
            let lang = allStations[this.$route.params.id].lang;

            this.$i18n.locale = lang;
        },
        methods: {
            login(userId) {
                let users = JSON.parse(localStorage.getItem('users'));
                localStorage.setItem('loggedUserId', userId);
                this.loggedUserId = userId;
                localStorage.setItem('loggedUserName', users[userId].name);
                this.loggedUserName = users[userId].name;
                this.userCredit = users[userId].credit;

                this.mode = 'UserHome';
            },
            logout() {
                localStorage.removeItem('loggedUserId');
                this.loggedUserId = "";
                localStorage.removeItem('loggedUserName');
                this.loggedUserName = "";
                this.userCredit = 0;
                this.mode = 'WaitForLogin';
            },
            changeLang(lang) {
                this.$i18n.locale = lang;

                let allStations = JSON.parse(localStorage.getItem('stations'));
                allStations[this.$route.params.id].lang = lang;
                localStorage.setItem('stations', JSON.stringify(allStations));
            },
        },
        data: function () {
            return {
                mode: "WaitForLogin",
                loggedUserId: "",
                loggedUserName: "",
                userCredit: 0,
                users: [
                    {
                        id: 0,
                        name: "DummyUser",
                        credit: 0,
                    },
                    {
                        id: 1,
                        name: "Petar Petrović",
                        credit: 2400,
                        currentlyRenting: false,
                    },
                    {
                        id: 2,
                        name: "Jovana Jovanović",
                        credit: 200,
                        currentlyRenting: false,
                    },
                ],
                stations: [
                    {
                        name: 'Dummy Station',
                        freebikes: 0,
                        lang: 'sr'
                    },
                    {
                        name: 'Ada Ciganlija',
                        freebikes: 7,
                        lang: 'sr'
                    },
                    {
                        name: 'Vukov Spomenik',
                        freebikes: 0,
                        lang: 'sr'
                    },
                    {
                        name: 'Karaburma 1',
                        freebikes: 13,
                        lang: 'sr'
                    }
                ]
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.mode = "WaitForLogin";
            this.loggedUserId = "";
            this.loggedUserName = "";
            this.userCredit = 0;

            let allStations = JSON.parse(localStorage.getItem('stations'));
            let lang = allStations[to.params.id].lang;

            this.$i18n.locale = lang;

            next();
        }
    }
</script>

<style>
    div.header {
        margin-top: 0px;
    }

    .center {
        margin-top: 15%;
    }

    img.logo {
        width: 300px;
        height: auto;
    }

    .kioskFrame {
        width: 800px;
        height: 600px;
        border: 3px black solid;
        margin: auto;
        background-color: #9AF09D;
        /* Disable text selection */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: moz-none;
        -ms-user-select: none;
        user-select: none;
    }

    .langButton {
        background-color: #157A6E;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-left: 3px;
        margin-right: 3px;
    }
</style>
