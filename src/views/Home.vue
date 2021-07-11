<template>
    <div class="home">
        <h2>Prototip sistema za automatsko izdavanje električnih bicikala i mopeda</h2>
        <h1>Beo-E-Bike</h1>
        <p>
            Projekat je zasnovan primarno na želji da se smanji zagađenje na teritoriji grada Beograda, kao i potrebi da se na teritoriji grada poboljša tok saobraćaja i samim tim i kvalitet života stanovnika.
            Osnova projekta predstavljaju laka električna vozila, primarno bicikli i mopedi. Projekat, pored dovođenja vozila na teritoriju grada, podrazumeva i izgradnju automatizovanih stanica širom grada, gde bi korisnici mogli da iznajme, odnosno ostave, vozilo. Na stanicama bi se takođe automatski obavljalo punjenje baterija stacioniranih vozila. Vozila bi bila opremljena EGNSS prijemnicima za višenamensko praćenje vozila (obezbeđenje od krađe, praćenje pređenog puta radi naplate, obezbeđenje balansiranih količina vozila kroz stanice itd.)
        </p>

        <h2>Uputstvo za upotrebu prototipa</h2>
        <p>U zaglavlju stranice, nalaze se tri lokacije stanica, kao i lokacija šaltera kojoj se pristupa u ulozi zaposlenog. Klikom na neku od njih biće "simuliran" odlazak na odgovarajuću lokaciju, gde se simulira interakcija aktera sa sistemom.</p>

        <h3>Uputstvo za simulaciju upotrebe od strane korisnika</h3>
        <p>Klikom na neku od stanica odlazi se na simulaciju interakcije sa kioskom pored stanice. Kiosci predstavljaju ekrane osetljive na dodir, koji imaju više mogućnosti interakcija sa sistemom.</p>
        <p>Da bi se pristupilo kiosku, potrebno je da je korisnik registrovan (na šalteru) i da poseduje karticu za pristup, koja mu se tom prilikom izdaje. Klikom na neko od tastera na dnu kioska, simulira se ubacivanje kartice za odgovarajućeg korisnika</p>
        <p>Nakon ubacivanja kartice, korisnik ima mogućnost da iznajmi vozilo, ukoliko na kartici ima kredita. Ukoliko nema, odgovarajuća poruka će se prikazati na ekranu i neće mu biti dozvoljeno iznajmljivanje. Iznajmljivanje takođe neće biti dozvoljeno, ukoliko se na stanici ne nalazi ni jedno vozilo željenog tipa.</p>
        <p>Ukoliko je vozilo već iznajmljeno, korisniku će se ponuditi samo opcija da vrati vozilo, i ispisaće se cena koja će mu biti skinuta sa kartice. Radi potreba simulacije, cena je u prototipu fiksirana na 180 dinara.</p>
        <p>Nakon svake od gore navedenih akcija, potrebno je da se simulira vađenje kartice iz kioska pritiskom na taster na dnu istog.</p>
        <p>Kiosci takođe poseduju i mogućnost prebacivanja jezika između engleskog i srpskog.</p>

        <h3>Uputstvo za simulaciju upotrebe od strane zaposlenog</h3>
        <p>Klikom na šalter, odlazi se u simulaciju interakcije sa programom za administraciju od strane zaposlenog, gde mu se nudi više mogućnosti administracije sistema.</p>
        <p>Prvo, zaposleni ima mogućnost da registruje novog korisnika unosom njegovog imena i tipa u odgovarajuća polja. Nakon registracije, zaposlenom će na ekranu biti ispisan identifikacioni broj novog korisnika, koji bi bio odštampan na njegovoj kartici, kako grafički, tako i na elektronskom čipu.</p>
        <p>Takođe, zaposleni ima mogućnost da doplati kredit korisniku, uz unos njegovog ID-ja kartice. Radi lakše simulacije, pri unosu ID-ja, biće ispisano ime korisnika kome taj ID pripada. Naravno, sve doplate se vrše po ličnom depozitu novca od strane korisnika</p>
        <p>Zaposleni ima još i mogućnost brisanja korisnika unosom njegovog identifikacionog broja u odgovarajuće polje i pritiskom na taster "obriši". Ova mogućnost je namenjena brisanju neaktivnih naloga, kao i naloga koji bivaju ugašeni usled neplaćanja dugova duže vreme.</p>
        <p>Na ekranu zaposlenog, takođe je prikazana i mapa, koja predstavlja trenutne lokacije svih iznajmljenih vozila. U svrhu prototipa, mapa je predstavljena statičkom slikom.</p>

        <img alt="Vue logo" src="../assets/bikeLogo.png">
    </div>
</template>

<script>

    export default {
        name: 'Home',
    }
</script>

<style scoped>
    p {
        width: 80%;
        margin: auto;
        text-align: justify;
    }
</style>