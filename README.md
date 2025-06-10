# TopicDiscuss

### Czym jest projekt?

**TopicDiscuss** to platforma forum dyskusyjnego zbudowana przy użyciu **Nest.js**, która umożliwia użytkownikom odkrywanie interesujących ich tematów i angażowanie się w wartościowe rozmowy ze społecznością. Aplikacja pozwala użytkownikom przeglądać tematy, uczestniczyć w dyskusjach oraz tworzyć własne wątki konwersacji.

### Dokumentacja API

`http://localhost:3000/swagger`

### Funkcjonalności:

- Uwierzytelnianie użytkowników (rejestracja i logowanie)
- Przeglądanie i tworzenie tematów
- Komunikację w czasie rzeczywistym między użytkownikami na temat konkretnych tematów

### Zrealizowane wymagania projektowe:

- skrócony opis projektu
- skrócona dokumentacja (głównie do czego służy projekt i jak korzystać z jego API)
- system autentykacji i użytkowników (model użytkownicy, logowanie, rejestracja itd.)
- co najmniej dwie dodatkowe domeny danych poza użytkownikami (np. posty i grupy w przypadku serwisu społecznościowego)
- crudowe endpointy do obsługi modeli danych oraz wszystkie wymagane do realizowania logiki projektu
- konteneryzacja aplikacji
- zawarta obsługa websocketów w projekcie, realizująca jakąś logikę w projekcie (np. czat, powiadomienia itd.)

# Jak odpalić?

### Development (Docker)

1. Najpierw sklonuj repozytorium, jeśli jeszcze tego nie zrobiłeś
2. Wykonaj `cd topic-discuss-v2`
3. Uruchom `docker compose up`, aby uruchomić bazę danych i aplikację, opcjonalnie dodaj `-d`, aby uruchomić w tle.
