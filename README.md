# Focus

Focus est une application de gestion de tâches collaborative qui permet aux utilisateurs de créer et gérer des projets, d'assigner des tâches, de laisser des commentaires et de suivre les activités grâce à un système de journalisation des requêtes.

---

## Fonctionnalités

- **Gestion des tâches** : Créez, mettez à jour, et gérez les tâches associées à différents projets.
- **Authentification** : Authentification sécurisée avec OAuth2 et JWT.
- **Journalisation** : Enregistrement des requêtes et actions utilisateur pour une meilleure traçabilité.
- **Responsivité** : Interface adaptative aux différents formats d’écran pour une utilisation mobile et bureau.
- **Accessibilité** : Conformité aux standards d’accessibilité WCAG.

---

## Prérequis

Pour utiliser ou contribuer à ce projet, assurez-vous de disposer des versions logicielles suivantes :

- **Node.js** (version 16.x ou supérieure)
- **PostgreSQL** (version 12.x ou supérieure)
- **NPM** (version 7.x ou supérieure)

---

## Installation

1. **Clonez le dépôt :**

   Clonez le projet en local, puis accédez au dossier principal.

   ```bash
   git clone https://github.com/mamealassane/Focus-App.git
   cd Focus-App
   ```

2. **Installez les dépendances NPM :**

   - Accédez au dossier **backend** et installez les dépendances nécessaires au serveur :

     ```bash
     cd backend
     npm install
     ```

   - Revenez au dossier principal et accédez au dossier **frontend** pour installer les dépendances de l’interface utilisateur :

     ```bash
     cd ../frontend
     npm install
     ```

3. **Configurez l'environnement :**

   - Dans chaque dossier (backend et frontend), copiez le fichier `.env.example` et renommez-le `.env`.
   - Configurez les paramètres requis dans le fichier `.env` du backend (connexion à la base de données PostgreSQL, informations d'authentification OAuth2/JWT, etc.) et les variables d'environnement nécessaires pour le frontend.

4. **Effectuez les migrations de la base de données :**

   Dans le dossier **backend**, utilisez Prisma pour appliquer les migrations et créer les tables et relations dans la base de données :

   ```bash
   cd ../backend
   npx prisma migrate dev --name init
   ```

5. **Lancez le serveur de développement :**

   - **Backend** : Assurez-vous d'être dans le dossier backend, puis démarrez le serveur backend :

     ```bash
     npm run dev
     ```

   - **Frontend** : Ouvrez un autre terminal, accédez au dossier frontend, puis lancez le serveur de développement :

     ```bash
     cd ../frontend
     npm run dev
     ```

L'application est maintenant accessible sur `http://localhost:3000`.

---

## Contributions

Pour contribuer à ce projet, veuillez consulter les fichiers [CONTRIBUTING.md](CONTRIBUTING.md) et [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## Sécurité

Merci de signaler tout problème de sécurité à [lahialassane99@gmail.com](mailto:lahialassane99@gmail.com) en suivant le fichier [SECURITY.md](SECURITY.md).

---

## Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.