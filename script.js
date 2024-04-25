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

        document.getElementById('winter').addEventListener('click', function (event) {

            const winterKleding = data.winter;

            const willekeurigeWinterTrui = kiesWillekeurigKledingstuk(winterKleding.truien);
            const willekeurigeWinterBroek = kiesWillekeurigKledingstuk(winterKleding.broeken);
            const willekeurigWinterAccessoire = kiesWillekeurigKledingstuk(winterKleding.accessoires);
            const willekeurigWinterJassen = kiesWillekeurigKledingstuk(winterKleding.jassen);
            const willekeurigWinterSchoenen = kiesWillekeurigKledingstuk(winterKleding.schoenen);


            const outputDiv = document.getElementById('output');

            document.getElementById('output').classList.add('show');
            document.getElementById('output').classList.remove('hidden');

            outputDiv.innerHTML =  `
                <p>Je hebt voor een winterse outfit gekozen. Om te beginnen heb ik een ${willekeurigeWinterTrui}</b> gecombineerd met
                 een leuke ${willekeurigeWinterBroek}, ${willekeurigWinterSchoenen} en een ${willekeurigWinterJassen}  natuurlijk 
                 hoort daar een schattige ${willekeurigWinterAccessoire} bij! </p>
                `
        })

        document.getElementById('zomer').addEventListener('click', function (event) {

            const zomerKleding = data.zomer;

            const willekeurigeZomerTrui = kiesWillekeurigKledingstuk(zomerKleding.truien);
            const willekeurigeZomerBroek = kiesWillekeurigKledingstuk(zomerKleding.broeken);
            const willekeurigZomerAccessoire = kiesWillekeurigKledingstuk(zomerKleding.accessoires);
            const willekeurigZomerSchoenen = kiesWillekeurigKledingstuk(zomerKleding.schoenen);


            const outputDiv = document.getElementById('output');

            document.getElementById('output').classList.add('show');
            document.getElementById('output').classList.remove('hidden');

            outputDiv.innerHTML =  `
                <p>Je hebt voor een zomerse outfit gekozen. Om te beginnen heb ik een ${willekeurigeZomerTrui}</b> gecombineerd met
                 een leuke ${willekeurigeZomerBroek}, ${willekeurigZomerSchoenen} en natuurlijk 
                 hoort daar een schattige ${willekeurigZomerAccessoire} bij! </p>
                 
                `
            
        })
        
        

    })

document.getElementById('nieuweoutfit').addEventListener('click', function (event) {
    const addClothes = document.getElementById('kledingForm');
    const newWindow = document.getElementById('newWindow');
    const headingNew = newWindow.querySelector('h1');
    const outputDiv = document.getElementById('newWindow');

    const sectionId = this.getAttribute('data-scroll-to');
    const section = document.getElementById(sectionId);


    if (addClothes.classList.contains('show')) {
        
        addClothes.classList.remove('show');
        addClothes.classList.add('hidden');

        outputDiv.classList.add('hidden');


    } else {
        newWindow.classList.add('show');
        newWindow.classList.remove('hidden');

        addClothes.classList.add('show');
        addClothes.classList.remove('hidden');

        const delay = 200;

        setTimeout(() => {
            headingNew.focus();
        }, delay);
        
    }
    section.scrollIntoView({ behavior: 'smooth' });

});
document.getElementById('gekocht').addEventListener('click', function (event) {
    const outputDiv = document.getElementById('newWindow');
    const addClothes = document.getElementById('addClothes');
    const newWindow = document.getElementById('addClothes');
    const headingNew = newWindow.querySelector('h1');

    const sectionId = this.getAttribute('data-scroll-to');
    const section = document.getElementById(sectionId);


    if (addClothes.classList.contains('show')) {
        addClothes.classList.remove('show');
        addClothes.classList.add('hidden');
        outputDiv.classList.add('hidden');

    } else {
        newWindow.classList.add('show');
        newWindow.classList.remove('hidden');

        addClothes.classList.add('show');
        addClothes.classList.remove('hidden');

        outputDiv.classList.add('show');
        outputDiv.classList.remove('hidden');



        const delay = 200;

        setTimeout(() => {
            headingNew.focus();
        }, delay);
    }
    section.scrollIntoView({ behavior: 'smooth' });

});

document.getElementById('addOutfit').addEventListener('click', function() {
    const selectedCata = document.querySelector('input[name="catagorie"]:checked');
    const selectedValue = document.querySelector('input[name="keuze"]:checked');
    const text = document.getElementById('kledingstuk').value;
    const message = document.getElementById('message');
    
    if (!selectedValue || !text) {
        message.innerText = 'Selecteer een categorie en voer een kledingstuk in.';
    } else {
        message.innerText = `Gelukt! Ik heb ${text} toegevoegd aan de categorie ${selectedValue.value}, in de stijl  ${selectedCata.value}.`;
    }
});






