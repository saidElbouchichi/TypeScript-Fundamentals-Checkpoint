# Checkpoint TypeScript Fundamentals — GOMYCODE

- Interface `Vehicle` : `make` (string), `model` (string), `year` (number), `start(): void`.
- Classe `Car implements Vehicle` : constructeur qui initialise `make`, `model`, `year` ; `start()` affiche **"Car engine started"**.
- Une instance de `Car` est créée puis `start()` est appelée.

## Compiler et exécuter

```bash
npm install
npm start        # tsc puis node dist/index.js
```

Sortie attendue :

```
Voiture : Dacia Logan (2022)
Car engine started
```
