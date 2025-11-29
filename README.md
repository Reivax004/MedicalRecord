# Bienvenue sur Medical Record !

Ce projet a été crée dans le but d'apporter à tous les utilisateurs un suivi médical détaillé dans lequel on y retrouve les informations de santé du patient telles que le groupe sanguin, le poids, la taille, les maladies, les vaccins, les rendez-vous médicaux, etc...

## Comment accéder au projet ?

Pour lancer l'application en local plusieurs étapes sont à effectuer.
### Lancer le backend MongoDB : Ouvrir un terminal dans le répertoire "backend" du projet et exécuter la commande suivante: 
```bash
node index.js
```

### Une fois le serveur de la base de données lancé, exécuter la commande suivante dans le même répertoire dans un nouveau terminal pour accéder à MongoSH:
```bash
mongosh mongodb://localhost:27017/MedicalRecord
```

### Lancer le frontend Angular: Ouvrir un troisième terminal dans le répertoire "medicalrecord" du projet et exécuter la commande suivante:
```bash
ng serve
```

### Une fois les trois commandes lancées, ouvrir le navigateur et tapper le lien suivant `http://localhost:4200`. 
