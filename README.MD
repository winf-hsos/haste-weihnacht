# hasteWeihnacht Markdown Dokumentation
<br>
Link zur Seite:
`https://hasteweihnacht.firebaseapp.com/`

## Folders & Files

**root Verzeichnis** | **css** | **js** | **img** |
-------- | -------- | -------- | -------|
index.html | style.css   | customer.js | diverse Bilder  |
seller.html  | styleseller.css   |
farmmanager.html | stylefarm.css | 
emailverify.html | styleemailverify.css |
registration.html | stylereg.css |
team.html | styleteam.css
productoffer.html| img folder
productmanager.html |
inprogress.html | 
database.rules.json |
deploy.sh |
firebase.json |
submit.sh |
validate. sh |

<hr>

## Funktionen der index.html
- `readProducts() `<br>
Liest die Produkte aus der Datenbank.
- `listProducts()` <br>
Sortiert die 5 zuletzt eingestellten Produkte aus den zuvor geladenen Produkten aus der Funktion `readProducts()` und sortiert diese nach der Zeit (Das letzte eingestellte zuerst).
- `updateModal(productId)` <br>
Holt die Produkte aus dem Array und lädt die jeweils zu einem Produkt gehörenden Daten in ein Modal,
welchse sich bei Klick auf "Details" öffnet.
- `createProductCard()` <br>
Erstellt auf Basis der Daten der 5 zuvor sortierten Produkte aus Funktion `listProducts()` für jedes eine Produktkarte.
- `initMap()` <br>
Lädt die google map auf die Index Seite.
- `getPosition(callback)` <br>
Fragt die aktuelle Position ab.
- `updateMap(latitude, longitude)` <br>
Zeigt die aktuelle Position an und richtet den Kartenausschnitt auf die Position aus.
- `getLocationsFromDatabase()` <br>
Holt die gespeicherten Positionen der Höfe aus der Datenbank.
- `addMarkersForLocations(locations)` <br>
Erstellt einen Marker für jeden aus der Datenbank geladene Position.
- `addMarkerAtAddress(addressText, title)` <br>
Zeigt die Adresse der Marker in einem Fenster an.
- `buy()` <br>
Öffnet bei klick auf den Einkaufswagen in einer Produktkarte ein Modal zur Bestätigung des Hinzufügens in den Warenkorb.
<hr>

## Funktionen der registration.html
- `firebasetools.onLoginChanged(loginChanged) --> loginChanged(user)`<br>
Prüft ob ein User eingeloggt ist, falls ja dann wird `getUser()` ausgelöst, wenn nicht wird zum Login aufgefordert.
- `getUser()` <br>
Prüft anhand der eingeloggten userId ob ein bereits ein Profil angelegt wurde, falls ja dann wird `fillFormValues()` ausgelöst. Wenn nicht, gibt es eine Meldung in der Konsole.
- `fillFormValues()` <br>
Lädt die Profildaten aus der Datenbank zum jeweiligen User in das Formular.
<hr>

## Funktionen der seller.html
- `firebasetools.onLoginChanged(loginChanged) --> loginChanged(user)`<br>
Prüft ob ein User eingeloggt ist und welchen Status er hat: Anbieter oder Käufer. Davon ist abhängig, welche Inhalte angezeigt werden.
<hr>

## Funktionen der farmmanager.html
- `getHofForUser()`<br>
Holt die Daten des Hofes des eingeloggten Users aus der Datenbank, wenn einer vorhanden ist dann wird die Funktion `fillFormValues()` ausgelöst.
Wenn nicht, wird die Funktion `createHofpage()` ausgelöst.
- `fillFormValues()` <br>
Die zuvor geladenen Daten des Hofes werden in das Formular geladen.
- `createHofpage()` <br>
Erstellt den Hof auf Basis der Daten die im Formular eingegeben wurden, wenn zuvor noch keiner angelegt war.
- `hofItemAdded()` <br>
Bestätigt in der Konsole das Hinzugfügen der Daten für den Hof und lädt die Seite neu.
- `updateHofpage()` <br>
Überschreibt und aktualisiert die Daten zum Hof, damit kein neuer angelegt wird.
- `getLocationUser()` <br>
Prüft ob ein User bereits eine Position des Hofes angegeben hat.
- `saveLocation()` <br>
Speichert die Lokation des Hofes in der Datenbank ab.
- `fillFormValuesLoc()` <br>
Die zuvor eingegebnen Daten zur Position werden in das Formular geladen.
- `locationItemAdded()` <br>
Gibt dem User eine Rückmeldung, das die Daten gespeichert wurden und lädt die Seite neu.
- `updateLocation()` <br>
Überschreibt und aktualisiert die Daten zur Position des Hofes, damit kein neuer angelegt wird.
- `handleError(error)` <br>
Zeigt aufgetretene Fehler in der Konsole an.
<hr>

## Funktionen der productmanager.html
- `firebasetools.onLoginChanged(loginChanged) --> loginChanged()` <br>
Prüft ob ein Nutzer eingeloggt ist, wenn nicht wird zum Login aufgeforert.
- `saveProduct()` <br>
Speichert die im Formular eingegebenen Daten eines Produktes in der Datenbank.
- `updateProduct()` <br>
Dient der aktualisierung von gespeicherten Produktdaten.
- `deleteProduct()` <br>
Löscht ein ausgewähltes Produkt aus der Datenbank.
- `updateView()` <br>
Aktualisiert die Daten in der Produktübersichtstabelle eines Users.
- `productDropdownChanged()` <br>
Funktion zum akutalisieren des dropdowns und der Eingabefelder.
- `clear(domElement)` <br>
Säubert die Tabelle.
- `newProduct()` <br>
Zeigt das Formular zur Produkteinpfelge an.
- `closeAddNewProduct()` <br>
Schließt das Formular der Produkteinpfelge ohne ein Produkt hinzuzufügen.
- `goToAddNewProductConfirmation()` <br>
Bestätigt dem Nutzer die erfolgreiche Produkteinpflege.
- `closeAddNewProductConfirmation()` <br>
Schließt die Bestätigung der erfolgreichen Produkteinpflege und zeigt den Ausgangstand an.
- `goToProductChangeOrDelete()` <br>
Zeigt die Option des ändern oder löschen eines Produktes an.
- `changeAProduct()` <br>
Öffnet das Formular zum ändern eines Produktes.
- `goToChangeAProductCofirmation()` <br>
Bestätigt dem Nutzer die erfolgreiche Änderung eines Produktes.
- `closeChangeAProductConfirmation()` <br>
Schließt die Besätigung der erfolgreichen Produktänderung.
- `closeChangeAProduct()` <br>
Schließt das Formular der Produktänderung ohne etwas zu ändern.
- `backToProductChangeOrDeleteFromChange()` <br>
Ermöglicht das Zurückkehren zum Optionsfenster zur Änderung oder Löschen eines Produktes.
- `deleteAProduct()` <br>
Zeigt das Auswahldropdown zur Löschung eines Produktes aus der Datenbank an.
- `backToProductChangeOrDeleteFromDelete()` <br>
Ermöglicht das Zurückkehren zum Optionsfenster zur Änderung oder Löschen eines Produktes.
- `goToDeleteAProductConfirmation()` <br>
Bestätigt dem Nutzer die erfolgreiche Löschung eines produktes aus der Datenbank.
- `closeDeleteAProductConfirmation()` <br>
Schließt die Besätigung der erfolgreichen Löschung eines Produkts aus der Datenbank.
- `closeDeleteAProduct()` <br>
Schließt das Auswahldropdown zur Löschung eines Produktes.
- `showAllProduct()` <br>
Zeigt die Tabelle der aller eingetragenenen Produkte eines Users aus der Datenbank an.
- `closeShowAllProduct()` <br>
Schließt die Übersichtstabelle.
<hr>

## Funktionen der productoffer.html
- `performSearch()` <br>
Wird ausgelöst bei der Suche nach einem bestimmten Produkt z.B. Kartoffel.
Dabei werden alles Produkte aus der Datenbank geladen.
  - `productsReady()` <br>
Filtert das Ergebnis auf Basis des Suchterms.
  - `createProductCard(product)` <br>
Erzeugt eine Produktkarte für jedes gefilterte Ergebnis und lädt die Produktdaten in die jeweilige Karte.
- `readProducts()` <br>
Wird ausgelöst, wenn kein Suchterm eingegeben wurde. Und lädt alle Produkte aus der Datenbank.
- `listProducts()` <br>
Listet alle Produkte geordnet nach dem Einstelldatum (letztes zuerst) auf.
- `createProductCard()` <br>
Hier wird für jedes gefunden Produkt eine Karte ertellt und die jeweiligen Daten in eine Produktkarte geladen.
- `updateModal(productId)` <br>
Holt die Produkte aus dem Array und lädt die jeweils zu einem Produkt gehörenden Daten in ein Modal,
welche sich bei Klick auf "Details" in einer Produktkarte öffnen.
-`buy()` <br>
Öffnet bei klick auf den Einkaufswagen in einer Produktkarte ein Modal zur Bestätigung des Hinzufügens in den Warenkorb.
<hr>

## Funktionen der customer.js
Initialisiert Firebase und stellt die Verbindung zwischen Webseite und Firebase her.
```js
var config = {
apiKey: "AIzaSyCqHknms_mfUAZ7K2r2yCkmw2IWFJtPiQc",
authDomain: "hasteweihnacht.firebaseapp.com",
databaseURL: "https://hasteweihnacht.firebaseio.com",
projectId: "hasteweihnacht",
storageBucket: "hasteweihnacht.appspot.com",
messagingSenderId: "485313714646"};
```
- `validate()` <br>
Bezieht die eingegebenen Daten aus dem Login-Formular und loggt den User ein.
- `loginChanged(user)` <br>
Je nachdem ob ein User eingeloggt ist oder nicht, verändern sich die Auswahloptionen der Navigationsleiste.
- `logout()` <br>
Loggt den User aus und leitet auf die index.html weiter.
- `handleError(error)` <br>
Zeigt durch eine Meldung an, ob der User bei der Eingabe seiner Logindaten Fehler gemacht hat.
- `register()` <br>
Ein neuer User wird registriert und angelegt. Dabei wird er eingeloggt und auf die Benutzerprofilseite weitergeleitet.
- `checkEmailVerified()` <br>
Prüft ob ein User seine Email verifiziert hat. Falls ja, wird er weitergeleitet,
wenn nicht, verbeleibt er bis zur Verifizierung auf dieser Seite.
- `sendVerificationEMail()` <br>
Sendet bei Regisrierung eine Verfikationsmail an die angegebene Email Adresse.
- `emailSuccess()` <br>
Zeigt in der Konsole an, ob die Verifikationsmail versendet wurde.
-`createUser()` <br>
Erstellt einen User anhand der angebenden persönlichen Daten im Benutzerprofilformular.
- `startSearch()` <br>
Startet die Suche nach dem Suchterm, der auf der Landingpage eingegeben wurde und übergibt dieses Parameter an die productoffer.html
und löst `performSearch()` aus.
- `goToVerify()` <br>
Leitet den User von der register.html auf die emailverify.html.
- `function goToProfile()` <br>
Löst bei Klick auf den Button "Fortfahren" auf der emailverify.html,
die Funktion `checkEmailVerified()` aus.
<hr>