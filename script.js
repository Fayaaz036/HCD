fetch('kleding.json')
    .then(response => response.json())
    .then(data => {
        // Functie om willekeurig een kledingstuk te kiezen
        function kiesWillekeurigKledingstuk(kledingstukken) {
            const randomIndex = Math.floor(Math.random() * kledingstukken.length);
            return kledingstukken[randomIndex];
        }

        document.getElementById('objectief').addEventListener('click', function (event) {
            const objectiefKleding = data.Objectief;
            // const subjectiefKleding = data.Subjectief;

            const willekeurigeObjectieveTrui = kiesWillekeurigKledingstuk(objectiefKleding.Truien);
            const willekeurigeObjectieveBroek = kiesWillekeurigKledingstuk(objectiefKleding.Broeken);
            const willekeurigObjectiefAccessoire = kiesWillekeurigKledingstuk(objectiefKleding.Accessoires);

            const outputDiv = document.getElementById('output');
            
            outputDiv.innerHTML = `
                <p>Je hebt de Objectieve stijl gekozen. Om te beginnen heb ik een <b>${willekeurigeObjectieveTrui}</b> gecombineerd met
                 een leuke <b>${willekeurigeObjectieveBroek}</b>, en natuurlijk 
                 hoort daar een schattige <b>${willekeurigObjectiefAccessoire}</b> bij! </p>
                `
            
            })


        document.getElementById('subjectief').addEventListener('click', function (event) {

            const subjectiefKleding = data.Subjectief;

            const willekeurigeSubjectieveTrui = kiesWillekeurigKledingstuk(subjectiefKleding.Truien);
            const willekeurigeSubjectieveBroek = kiesWillekeurigKledingstuk(subjectiefKleding.Broeken);
            const willekeurigSubjectieveAccessoire = kiesWillekeurigKledingstuk(subjectiefKleding.Accessoires);

            const outputDiv = document.getElementById('output');

            outputDiv.innerHTML =  `
                <p>Je hebt de Objectieve stijl gekozen. Om te beginnen heb ik een <b>${willekeurigeSubjectieveTrui}</b> gecombineerd met
                 een leuke <b>${willekeurigeSubjectieveBroek}</b>, en natuurlijk 
                 hoort daar een schattige <b>${willekeurigSubjectieveAccessoire}</b> bij! </p>
                `
        })
    })








