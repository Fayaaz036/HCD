fetch('kleding.json')
    .then(response => response.json())
    .then(data => {
        // Functie om willekeurig een kledingstuk te kiezen
        function kiesWillekeurigKledingstuk(kledingstukken) {
            const randomIndex = Math.floor(Math.random() * kledingstukken.length);
            return kledingstukken[randomIndex];
        }

        document.getElementById('objectief').addEventListener('click', function (event) {
            const objectiefKleding = data.objectief;

            const willekeurigeObjectieveTrui = kiesWillekeurigKledingstuk(objectiefKleding.truien);
            const willekeurigeObjectieveBroek = kiesWillekeurigKledingstuk(objectiefKleding.broeken);
            const willekeurigObjectiefAccessoire = kiesWillekeurigKledingstuk(objectiefKleding.accessoires);

            const outputDiv = document.getElementById('output');
            document.getElementById('output').classList.add('show');
            document.getElementById('output').classList.remove('hidden');
            
            outputDiv.innerHTML = `
                <p>Je bent voor de casual stijl gegaan. Om te beginnen heb ik een <b>${willekeurigeObjectieveTrui}</b> gecombineerd met
                 een leuke <b>${willekeurigeObjectieveBroek}</b>, en natuurlijk 
                 hoort daar een schattige <b>${willekeurigObjectiefAccessoire}</b> bij! </p>
                `
            })


        document.getElementById('subjectief').addEventListener('click', function (event) {

            const subjectiefKleding = data.subjectief;

            const willekeurigeSubjectieveTrui = kiesWillekeurigKledingstuk(subjectiefKleding.truien);
            const willekeurigeSubjectieveBroek = kiesWillekeurigKledingstuk(subjectiefKleding.broeken);
            const willekeurigSubjectieveAccessoire = kiesWillekeurigKledingstuk(subjectiefKleding.accessoires);

            const outputDiv = document.getElementById('output');
            
            document.getElementById('output').classList.add('show');
            document.getElementById('output').classList.remove('hidden');

            outputDiv.innerHTML =  `
                <p>Je hebt voor een zakelijke outfit gekozen. Om te beginnen heb ik een <b>${willekeurigeSubjectieveTrui}</b> gecombineerd met
                 een leuke <b>${willekeurigeSubjectieveBroek}</b>, en natuurlijk 
                 hoort daar een schattige <b>${willekeurigSubjectieveAccessoire}</b> bij! </p>
                `
        })



        document.getElementById('gekocht').addEventListener('click', function (event) {
            const addClothes = document.getElementById('addClothes');

            if (addClothes.classList.contains('show')) {
                addClothes.classList.remove('show');
                addClothes.classList.add('hidden');
            } else {
                addClothes.classList.add('show');
                addClothes.classList.remove('hidden');
            }
        });
        

    })


document.getElementById('addOutfit').addEventListener('click', function() {
    const text = document.getElementById('kledingstuk').value;

    // Maak een AJAX-verzoek naar een server-side script om de tekst naar de JSON-bestand te sturen
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'saveData.php'); // Vervang 'saveData.php' door de naam van je server-side script
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ text: text }));
});








