﻿<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Uputstvo za upotrebu prototipa</router-link> |
            <router-link to="/salter">Šalter (u ulozi zaposlenog)</router-link> |
            <router-link to="/kiosk/1">Stanica na Adi</router-link> |
            <router-link to="/kiosk/2">Stanica kod Vukovog spomenika</router-link> |
            <router-link to="/kiosk/3">Stanica na Karaburmi</router-link> |
        </div>
        <router-view />
    </div>
</template>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-bottom: 0px;
    }

    #nav {
        padding: 10px;
    }

        #nav a {
            font-weight: bold;
            color: #2c3e50;
        }

            #nav a.router-link-exact-active {
                color: #42b983;
            }
</style>
