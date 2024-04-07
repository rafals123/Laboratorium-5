Polecenie do budowy obrazu: docker build --build-arg VERSION=1.0.1 -t lab5:1 .
Polecenie do uruchomienia kontenera (uruchamiające serwer): docker run -it -p 8888:80 --name aplikacja_lab5 lab5:1
Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanie opracowanej aplikacji: docker ps | grep lab5 (kontener ma stan Healthy)