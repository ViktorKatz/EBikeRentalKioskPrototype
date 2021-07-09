<template>
    <div>
        <div class="salter">
            <div id="prozor">
                <h1>Dobrodošli u program za administraciju Beo-E-Bike</h1>
                <hr />

                <h2> Registracija novog korisnika</h2>
                <h5> Unesite ime i prezime novog korisnika </h5>
                <form>
                    <label for="regUsername">Ime i prezime: </label>
                    <input id="regUsername" name="regUsername" v-model="regUsername">
                </form>
                <span :style="'color:'+regMsgColor"> {{regMsg}} </span>
                <br>
                <button @click="register()">Registruj korisnika</button>
                <hr />

                <h2> Doplaćivanje kredita na nalog </h2>
                <h5> Unesite ID korisnika sa njegove kartice i uplaćenu sumu </h5>
                <form>
                    <label for="uplataID">ID: </label>
                    <input type="number" id="uplataID" name="uplataID" v-model="uplataID">
                    <label for="uplataNovac"> &nbsp;&nbsp; Novac za uplatu: </label>
                    <input type="number" id="uplataNovac" name="uplataNovac" v-model="uplataNovac">
                </form>
                <span :style="'color:'+uplataMsgColor"> {{uplataMsg}} </span>
                <br>
                <button @click="uplata()">Uplati</button>
                <hr />

                <h2> Brisanje korisnika iz sistema </h2>
            </div>
        </div>
        <div id="postolje" />
        <div id="koren" />
    </div>
</template>

<script>
    export default {
        name: 'Salter',
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
        },
        methods: {
            register() {
                if (this.regUsername == '') {
                    this.regMsg = "Morate uneti ime i prezime novog korisnika";
                    this.regMsgColor = "red";
                }

                let allIds = this.users.map(u => u.id);
                let maxId = allIds.reduce((id1, id2) => (Math.max(id1, id2)));
                let newId = maxId + 1;
                let newUser = {
                    id: newId,
                    name: this.regUsername,
                    credit: 0,
                    currentlyRenting: '',
                }

                this.users.push(newUser);
                localStorage.setItem('users', JSON.stringify(this.users));

                this.regUsername = "";
                this.regMsg = "Uspešno registrovan korisnik " + newUser.name + " sa ID-jem kartice " + newUser.id;
                this.regMsgColor = "green";
            }
        },
        data: function () {
            return {
                regUsername: "",
                regMsg: "",
                regMsgColor: "",

                uplataID: null,
                uplataNovac: 0,
                uplataMsg: "",
                uplataMsgColor: "",

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
        }
    }

</script>

<style>
    .salter {
        width: 800px;
        height: 450px;
        border: 7px #222 solid;
        border-top-color: #777;
        border-left-color: #666;
        border-bottom-color: #444;
        margin: auto;
    }

    #prozor {
        width: 794px;
        height: 428px;
        border-top-width: 20px !important;
        border: 3px SteelBlue solid;
        margin: auto;
        overflow: auto;
    }

    #postolje {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #666;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
        width: 150px;
        min-height: 30px;
    }

    #koren {
        background-color: #666;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
        width: 250px;
        height: 15px;
    }
</style>