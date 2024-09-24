# GoStore

Site de vente de vêtements. Ceci est une démo.

## Fonctionnalité présentes

- Base de données MongoDB (3 collections)
- Système d'authentification 
- Système d'autorisation via JSON Web Token
- 11 endpoints 
- Hash de mot de passe
- Tests unitaires du server Express
- 8 écrans
- Store pinia
- Tests unitaires 
- Test Cypress
- 2 pipelines de Github Action 

Un dump de la base de données est inclus dans le repository du server

### Problème 
Du a un problème avec la librairie axios, les tests unitaire de l'UI n'ont pas pu être inclus dans la pipeline. 
En cas de problème lors de l'execution des ces tests, modifier le fichier node_modules/axios/lib/helpers/isURLSameOrigin.js:41:44 et retirer la condition ternaire

## Enjoy