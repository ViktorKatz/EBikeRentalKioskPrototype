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
            <div id="UserHome" style="height:100%;" v-if="mode=='UserHome'">
                <div>
                    <h1 style="text-align:left; margin-top:100px; margin-left:70px;"> {{ $t('welcome') }}, {{ loggedUserName }}!</h1>
                    <h1 style="text-align:left; margin-top:20px; margin-left:70px;"> {{ $t('yourCredit') }}: <span :style="userCredit<=0? 'color:red;' : '' ">{{ userCredit }} RSD</span></h1>
                </div>
                <div v-if="userCredit>0">
                    <div v-if="users[loggedUserId].currentlyRenting==''">
                        <button class="rentalButton" @click="rent('b')" :disabled="stations[$route.params.id].freebikes==0">{{ $t('rentBike') }} ({{ stations[$route.params.id].freebikes }})</button>
                        <button class="rentalButton" @click="rent('m')" :disabled="stations[$route.params.id].freemopeds==0">{{ $t('rentMoped') }} ({{ stations[$route.params.id].freemopeds }})</button>
                    </div>
                    <div v-else>
                        <button class="rentalButton" @click="unrent()">{{ $t('returnVehicle') }} (180 RSD)</button>
                    </div>
                </div>
                <div v-else>
                    <h1 style="color:red; width: 80%; margin:auto; margin-top:135px;"> {{ $t('pleaseDepositAtCentral') }} </h1>
                </div>

                <img alt="Logo" class="logoSmallBottom" src="../assets/bikeLogo.png">
            </div>
            <div v-if="mode=='PleaseRetrieveTheCard'">
                <div class="center">
                    <img alt="Logo" class="logo" src="../assets/bikeLogo.png">
                    <h1>{{ $t('retrieveCard') }}</h1>
                </div>
            </div>
        </div>
        <div class="kioskButtons">
            <div v-if="mode=='WaitForLogin'">
                <div v-for="u in users" v-bind:key="u.id" v-if="u.id!=0" style="display:inline-block">
                    <button v-on:click="login(u.id);"> Simuliraj ubacivanje kartice za {{u.name}} </button>
                </div>
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
            this.users = JSON.parse(localStorage.getItem('users')); // sync

            if (!localStorage.getItem('stations')) {
                localStorage.setItem('stations', JSON.stringify(this.stations));
            }
            this.stations = JSON.parse(localStorage.getItem('stations')); // sync

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
            rent(what) {
                this.users[this.loggedUserId].currentlyRenting = what;
                localStorage.setItem('users', JSON.stringify(this.users));

                if (what == 'b') {
                    this.stations[this.$route.params.id].freebikes -= 1;
                }
                else {
                    this.stations[this.$route.params.id].freemopeds -= 1;
                }
                localStorage.setItem('stations', JSON.stringify(this.stations));

                this.mode = "PleaseRetrieveTheCard";
            },
            unrent() {
                if (this.users[this.loggedUserId].currentlyRenting == 'b') {
                    this.stations[this.$route.params.id].freebikes += 1;
                }
                else {
                    this.stations[this.$route.params.id].freemopeds += 1;
                }
                localStorage.setItem('stations', JSON.stringify(this.stations));

                this.users[this.loggedUserId].currentlyRenting = '';
                this.users[this.loggedUserId].credit -= 180;
                localStorage.setItem('users', JSON.stringify(this.users));

                this.mode = "PleaseRetrieveTheCard";
            }
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
                        currentlyRenting: '',
                    },
                    {
                        id: 2,
                        name: "Jovana Jovanović",
                        credit: 200,
                        currentlyRenting: '',
                    },
                ],
                stations: [
                    {
                        name: 'Dummy Station',
                        freebikes: 0,
                        freemopeds: 0,
                        lang: 'sr'
                    },
                    {
                        name: 'Ada Ciganlija',
                        freebikes: 7,
                        freemopeds: 6,
                        lang: 'sr'
                    },
                    {
                        name: 'Vukov Spomenik',
                        freebikes: 0,
                        freemopeds: 2,
                        lang: 'sr'
                    },
                    {
                        name: 'Karaburma 1',
                        freebikes: 13,
                        freemopeds: 0,
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

            this.users = JSON.parse(localStorage.getItem('users')); // sync
            this.stations = JSON.parse(localStorage.getItem('stations')); // sync

            next();
        }
    }
</script>

<style>
    .kiosk {
        margin-bottom: 0px;
    }

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

    img.logoSmallBottom {
        width: 150px;
        height: auto;
        margin-top: 85px;
    }

    .kioskFrame {
        width: 800px;
        height: 600px;
        border: 15px #555 solid;
        border-top-color: #777;
        border-left-color: #666;
        border-bottom-color: #444;
        margin: auto;
        background-color: #9AF09D;
        border-radius: 3%;
        /* Disable text selection */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: moz-none;
        -ms-user-select: none;
        user-select: none;
    }

    .kioskButtons {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #666;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
        width: 750px;
        min-height: 50px;
    }

    .rentalButton {
        background-color: #157A6E;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 32px;
        margin-top: 120px;
        margin-left: 3px;
        margin-right: 3px;
    }

        .rentalButton:disabled {
            background-color: #799c98;
        }

    .langButton {
        background-color: #157A6E;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin-top: 10px;
        margin-left: 3px;
        margin-right: 3px;
    }
</style>
