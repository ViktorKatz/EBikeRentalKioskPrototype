<template>
    <div class="kiosk">
        <div class="kioskFrame">
            <div id="WaitForLogin" v-if="mode=='WaitForLogin'">
                <div class="header">
                    <button @click="$i18n.locale='sr';" class="langButton">Srpski</button>
                    <button @click="$i18n.locale='en';" class="langButton">English</button>
                </div>
                <div class="center">
                    <img alt="Logo" class="logo" src="../assets/bikeLogo.png">
                    <h1>{{ $t('cardToLogin') }}</h1>
                </div>
            </div>
            <div id="UserHome" v-if="mode=='UserHome'">
                asd
            </div>
        </div>
        <div class="kioskButtons" style="margin-top: 5px;">
            <div v-if="mode=='WaitForLogin'">
                <button @click="login(1);"> Simuliraj ubacivanje kartice korisnika 1 </button>
                <button @click="login(2);"> Simuliraj ubacivanje kartice korisnika 2 </button>
            </div>
            <div v-else>
                <button @click="logout();"> Simuliraj izvlacenje kartice </button>
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
        },
        methods: {
            login(userId) {
                let users = JSON.parse(localStorage.getItem('users'));
                localStorage.setItem('loggedUserId', userId);
                localStorage.setItem('loggedUserName', users[userId].name);
                this.mode = 'UserHome';
            },
            logout() {
                localStorage.removeItem('loggedUserId');
                localStorage.removeItem('loggedUserName');
                this.mode = 'WaitForLogin';
            }
        },
        data: function () {
            return {
                mode: "WaitForLogin",
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
                    },
                    {
                        id: 2,
                        name: "Jovana Jovanović",
                        credit: 200,
                    },
                ],
                stations: {
                    1: {
                        name: 'Ada Ciganlija',
                        freebikes: 7,
                    },
                    2: {
                        name: 'Vukov Spomenik',
                        freebikes: 0,
                    },
                    3: {
                        name: 'Karaburma 1',
                        freebikes: 13,
                    }
                }
            }
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
