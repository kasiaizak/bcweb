![cover](https://raw.githubusercontent.com/kasiaizak/tastrona/master/github/screenshot.jpg)

# tastrona

Zadanie rekrutacyjne polegające na wykonaniu menu pełnoekranowego do strony www przedstawionej na rzucie graficznym w formacie tif - [widok on-line](https://kasiaizak.github.io/tastrona/).

## Użyte technologie

HTML5, CSS3 (w tym Flexbox) z użyciem preprocesora Sass, JavaScript (ES6 i biblioteka jQuery) oraz mark.js - *JavaScript keyword highlighter*.

## Uruchomienie strony lokalnie z podglądem zmian na żywo (dla developerów korzystających z Node.js)

Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... :) Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

W konsoli (terminalu) wpisujemy poniższe polecenie w celu instalacji tzw. *task runnera* GULP. Polecenie wykonujemy raz na danej maszynie, czyli jeśli robiłeś/aś to już wcześniej to pomiń ten krok i poniższą komendę. Ważne: na Windowsie terminal uruchamiamy z uprawnieniami administratora.

`npm install -g gulp-cli`

### Inicjowanie projektu

Po sklonowaniu repozytorium na swój komputer wchodzimy do głównego katalogu projektu i wykonujemy poniższe polecenia:

`npm install` - polecenie uruchamiane raz na dany projekt

### Podgląd na żywo ze śledzeniem zmian

`gulp` - start *task runnera*

#### Kończenie pracy

Aby przerwać pracę *gulp* wciskamy kombinację klawiszy **CTRL** + **C**.
