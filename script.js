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
                <p>Je bent voor de casual stijl gegaan. Om te beginnen heb ik een ${willekeurigeObjectieveTrui} gecombineerd met
                 een leuke ${willekeurigeObjectieveBroek}, en natuurlijk 
                 hoort daar een schattige ${willekeurigObjectiefAccessoire} bij! </p>
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
                <p>Je hebt voor een zakelijke outfit gekozen. Om te beginnen heb ik een ${willekeurigeSubjectieveTrui}</b> gecombineerd met
                 een leuke ${willekeurigeSubjectieveBroek}, en natuurlijk 
                 hoort daar een schattige ${willekeurigSubjectieveAccessoire} bij! </p>
                `
        })



        
        

    })

document.getElementById('nieuweoutfit').addEventListener('click', function (event) {
    const addClothes = document.getElementById('kledingForm');
    const newWindow = document.getElementById('newWindow');

    if (addClothes.classList.contains('show')) {
        
        addClothes.classList.remove('show');
        addClothes.classList.add('hidden');
    } else {
        newWindow.classList.add('show');
        newWindow.classList.remove('hidden');

        addClothes.classList.add('show');
        addClothes.classList.remove('hidden');
    }
});
document.getElementById('gekocht').addEventListener('click', function (event) {
    const addClothes = document.getElementById('addClothes');
    const newWindow = document.getElementById('newWindow');


    if (addClothes.classList.contains('show')) {
        addClothes.classList.remove('show');
        addClothes.classList.add('hidden');
    } else {
        newWindow.classList.add('show');
        newWindow.classList.remove('hidden');

        addClothes.classList.add('show');
        addClothes.classList.remove('hidden');
    }
});

document.getElementById('addOutfit').addEventListener('click', function() {
    const selectedValue = document.querySelector('input[name="keuze"]:checked');
    const text = document.getElementById('kledingstuk').value;
    const message = document.getElementById('message');

    if (!selectedValue || !text) {
        message.innerText = 'Selecteer een categorie en voer een kledingstuk in.';
    } else {
        message.innerText = `Gelukt! Ik heb ${text} toegevoegd aan de categorie ${selectedValue.value}.`;
    }
});








