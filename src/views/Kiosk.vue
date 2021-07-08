<template>
    <div class="kioskFrame">
        <div class="center">
            <img alt="Logo" class="logo" src="../assets/bikeLogo.png">
            <h1>Prislonite karticu kako biste se ulogovali</h1>
            <p>Pritisnite x da biste simulirali prislanjanje kartice</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Kiosk',
        components: {

        }
    }
</script>

<style>
    .center {
        margin-top:20%;
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
    }

</style>
