# HCD

IK heb een hulpmiddel gemaakt voor Petra om haar outfits uit te kiezen. 
## Functies
- Outfit generaten
- Kledingstukken toevoegen.
- Voiceover optimalized.

### Outfit generaten
Ik haal de data uit een JSON bestand. hier staan de kledingstukken gesorteerd op verschillende catagorieen.
```json
{
  "objectief": {
    "truien": [
      "Gestreepte trui in de kleur zwart en wit",
      "Gebreide grijze trui",
      "Gestreepte sweater in de kleur blauw en groen",
      "Gebloemde trui in de kleur geel en roze"
    ],
    "broeken": [
      "Gestreepte A-lijn rok in de kleur blauw en wit",
      "Gestreepte broek in de kleur zwart en grijs",
      "Wijde blauwe broek",
      "Korte roze broek"
    ],
    "schoenen": [
      "Zwarte en witte sneakers",
      "Grijze enkellaarsjes",
      "Blauwe instappers",
      "Roze ballerina's"
    ],
    "jassen": [
      "Zwarte lange jas",
      "Grijze gewatteerde jas",
      "Blauwe spijkerjas",
      "Roze bomberjack"
    ],
    "accessoires": [
      "Paisley print sjaal in de kleur groen en geel",
      "Gestreepte riem in de kleur zwart en wit",
      "Bijpassende roze haarband",
      "Bloemenprint tote tas in de kleur geel en roze",
      "Zilveren statement oorbellen",
      "Kralen armband in meerdere kleuren"
    ]
  }
```
Op de HTML pagina maak ik verschillende knoppen aan die zich bemoeien met de uitkomst van de gegenereede waarde. 

```html
<section id="keuzeForm">
    <h1>Welkom Petra!</h1>
    <h1>Wat wil je vandaag doen?</h1>
    <button id="nieuweoutfit" type="button">Ik heb een outfit nodig</button>
    <button id="gekocht" type="button">Ik heb nieuwe kleding gekocht</button>
</section>

<section id="newWindow" class="hidden">


    <section id="kledingForm" class="hidden">
        <h1>Kies welke stijl je vandaag wilt</h1>
        <button id="objectief" type="button">Casual</button>
        <button id="subjectief" type="button">Zakelijk en netjes</button>
        <button id="zomer" type="button">Zomers</button>
        <button id="winter" type="button">Winter</button>


        <section id="output" aria-live="assertive" class="hidden"></section>
    </section>
```
### Outfit Genereren.
Na het kiezen van de catagorie word er een outfit gegenereerd. 
```js
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
```


### Nieuwe kleding gekocht.
Wanneer je nieuwe kleding hebt gekocht, krijg je de keuze bij welke catagorie je kleding stuk hoort. of dat nou bij zomers/winters of een jas of broek is. 

```js
 <section id="addClothes" aria-live="assertive" class="hidden">
    <fieldset aria-labelledby="kledingstijlLabel">
        <h1 id="kledingstijlLabel">Welke catagorie wil je toevoegen?</h1>
        <label>
            <input type="radio" id="casual" value="casual" name="catagorie"> Casual stijl
        </label>
        <label>
            <input type="radio" id="zakelijk" value="zakelijk" name="catagorie"> Zakelijke stijl
        </label>
        <label>
            <input type="radio" id="zomers" value="zomers" name="catagorie"> Zomerse stijl
        </label>
        <label>
            <input type="radio" id="winters" value="winters" name="catagorie"> Winterse stijl
        </label>
    </fieldset>

    <fieldset aria-labelledby="kledingstukLabel">
        <h1 id="kledingstukLabel">Watvoor kledingstuk heb je gekocht Petra?</h1>
        <label>
            <input type="radio" id="jas" value="accessoires" name="keuze"> Ik heb een jas gekocht
        </label>
        <label>
            <input type="radio" id="truien" value="truien" name="keuze"> Ik heb een trui gekocht
        </label>
        <label>
            <input type="radio" id="broeken" value="broeken" name="keuze"> Ik heb een broek gekocht
        </label>
        <label>
            <input type="radio" id="schoenen" value="accessoires" name="keuze"> Ik heb schoenen gekocht
        </label>
        <label>
            <input type="radio" id="accessoires" value="accessoires" name="keuze"> Ik heb een accessoire gekocht
        </label>
    </fieldset>
    <fieldset aria-labelledby="kledingstukInput">
        <label id="kledingstukInput">
            <input type="text" id="kledingstuk" placeholder="Vul hier in watvoor kleding je hebt.">
        </label>
    </fieldset>

    <button id="addOutfit" type="button">Voeg toe aan mijn kledingkast</button>
    <p id="message" aria-live="polite"></p>
</section>
```

Als laatste krijg je een feedback die voorleest wat er allemaal is toegevoegd. 
```js
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
```

### Voiceover Optimalized 

Toegevoegde attributen voor toegankelijkheid:
- aria-label: Toegevoegd aan elementen zoals knoppen om een beschrijving te geven voor screenreaders.
- aria-live: Gebruikt om aan te geven dat bepaalde elementen dynamisch worden bijgewerkt en onmiddellijk aan de gebruiker moeten worden voorgelezen.
- aria-labelledby: Verwijst naar de ID van een element dat de titel of label bevat voor een bepaalde sectie.
- role="heading": Geeft aan dat een element een kop is en welk niveau van de kop het vertegenwoordigt.
- Toegevoegde tabindex-attributen: tabindex="-1": Hiermee wordt aangegeven dat een element wel focusbaar is, maar niet via de tabtoets kan worden bereikt.
- Gebruik van hidden-klasse: De hidden-klasse wordt gebruikt om bepaalde secties standaard verborgen te houden en ze alleen zichtbaar te maken wanneer dat nodig is.



