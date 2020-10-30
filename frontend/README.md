# Dokumentasjon gruppe 70 prosjekt 3

For å kjøre prosjektet må man først clone prosjektet med 

`git clone git@gitlab.stud.idi.ntnu.no:it2810-h20/team-70/prosjekt3.git`

deretter starter man serveren i backend ved å gå inn i backend 

`cd backend/` 

`npm start` 

da skal det i terminalen stå at serveren kjører på http://localhost:4000
da kan man kjøre frontend ved å navigere til frontend 

`cd ../frontend/` og 

 `npm start`

Appen skal nå kjøre i nettleseren på http://localhost:3000

# Pangea 

Vår nettside er inspirert av superkontinentet Pangea og fungerer som en reisenettside. Her kan man søke og filtrere blant alle land i verden samt lage en bruker der man kan lagre alle land man selv har besøk. 

For å se en oversikt over alle land i verden trykker man på alle land i navigasjonsbaren på toppen. Filtrering gjøres ved å velge hvilket kontinent man er interessert i. Ved å trykke på knappen sorter land kan man velge mellom å sortere land stigende eller synkende. 

Er det et av landene som virker ekstra interessant kan man trykke på navnet for å få mer informasjon. 


# Navigasjon

Prosjektet er delt i 2, `frontend`og `backend`. Frontend er tett koblet opp mot brukeren. Databasen er koblet sammen med backend. Databasen ligger lagret på en virtuell maskin. 


# Teknologi

I vårt prosjekt har vi brukt MERN-teknologistakk. Mern består av Mongodb, Express, React, Node.js.
I tillegg har vi brukt andre biblioteker og tredjepartskomponenter som bootstrap, react-router, react-js-pagination og react-router-dom. 


## Apollo-server

I backend bruker vi apollo-server som grapgQl server, hovedgrunnen til at vi valgte apollo-server var på grunn av GrapgQL. Apollo-server er i tillegg veldig godt dokumenter og opens-source, noen som gjorde jobben lettere for oss. Apollo-server er kompatibel med alle graphQL-klienter, men kanskje spesielt med Apollo client som vil valgte å bruke i frontend. For oss var det viktig å velge teknologier som går godt sammen og som er godt dokumenter.

## GraphQL

Vi valgte å bruke graphQL i motsetning til REST fordi det er lett å bruke og har mange fordeler. Det er for det første nytt og kom for å løse noen av problemene med REST, som overflødig data. GrapgQL har et sterkt typet system som gjør det mer robust ved å definere hvordan en klient kan aksessere data. Med GrapgQL får man også tilgang til playground på localhost:port/graphql slik at man kan teste at data hentes riktig fra databasen.


## Mongodb

Grunnen til at vi valgte å bruke mongoDB er rett og slett at noen anbefalte det. Kombinasjonen MongoDB, React, Express og Node er mye brukt og virket detfor som det beste valget for oss. MongoDB er en NoSQL database i motsetning til for eksempel MySQL. Det betyr at man ikke kan bruke SQL til å hente data fra databasen. 
Vi brukte i tillegg mongoose til mongoDB objekt-modellering. 

## Apollo-client

Hovedgrunnen til at vi valgte Apollo-client i frontend var fordi vi allerede hadde tatt i bruk Apollo-server i backend.

## React
Hele prosjektet er basert på React og typescript er brukt til implementasjon. Prosjektet ble opprettet med kommandoen npm create-react-appsom setter opp struktur og lager et prosjekt for deg. Create react app ble satt opp med typescript.
De fleste komponentene vi har er skrevet som funksjonelle komponenter. Tidligere var funksjonelle komponenter uten tilstand, altså stateless, men med hooks kan man bruke useState og useEffect til å oppnå samme tilstandshåndtering som i en klassekomponent. Funksjonelle komponenter er korte, effektive og leselige.


# Git
Gjennom prosjektet har all kodedeling gått gjennom gitlab der vi har benyttet oss av issues og brancher på en hensiktsmessig måte. Hvert issue har fått en label som “to do”, “doing” og “review”. Når et issue er ferdig legges det under review og et annet gruppemedlem ser gjennom koden. Dette er for å sikre kvalitet og at alle på gruppa skal ha oversikt over hva som er blitt gjort. Hvert issue har fått sin egen branch, så langt det det er hensiktsmessig, for å unngå problemer ved merging av brancher. Vi har valgt å ha eller ha mange små issues enn få store fordi det har gjort arbeidsfordeling og samarbeid lettere.

# Testing
Vi har end-2-end testing


