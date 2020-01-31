<p>
Achraf LAHKIKY
<br>
Melvin JESIOLWSKI
<br>
Yassine JAA
</p>

<h1>TD3 Socket.IO<h1>

<h3>Il est conseillé d'utiliser le navigateur Chrome version  50.65.4 </h3>

<h3> En lançant son navigateur sur l’adresse de votre API, une page contenant un chat vous dit : </h3>

<li>1- Quel est votre nom ?</li>
<li>2- Quel est votre prénom ?</li>
<li>3- Quel est votre SNN ?</li>

    .
    ├── td2                 # API du TP2 : Only HTTP with MongoDB
        ├── server.js           
        ├── DockerFile          
        └── package.json  
    ├── td3                 

        ├── client          # Angular Project 
            ├── src           
            ├── angular.json          
            └── package.json

        ├── server          # API du Td3 : HTTP and socket with Front
            ├── server.js 
            ├── server.ts 
            ├── Dockerfile         
            └── package.json          
                     
    
<br>

<li>Un choix et proposé d’enregistrer les informations las la BDD</li>
<li>L'utilisateur peut supprimer les documents à partir de l'interface</li>
<li>Affiche des documents present dans la base de données</li>

<h3> Technologies : </h3>

<li>node.js</li>
<li>socketIO</li>
<li>mongoDB</li>
<li>Docker</li>
<li>RestApi</li>

<h3> Fonctionnalités TD2 : </h3>

<li>Verification de la conformité du SSN</li>
<li>Verification si le SSN est déja existant dans la base de données</li>
<li>Lecture du SSN (departement, date naissance etc..)</li>

<h3> Fonctionnalités TD3 : </h3>

<li>Communication avec socketIO</li>
<li>Choix d'enregistrement dans la base de données</li>
<li>Saisie des informations</li>
<li>Supprimer graphiquement les documents dans la Base de données</li>
<li>Affichage du contenu de la base de données </li>
<li>recherche dans base de données</li>

<br>
<h3>PHOTO Save : </h3>

![Alt text](Save.PNG?raw=true "On Start")
<br></br>

<h3>PHOTO Chat : </h3>

![Alt text](Chat.PNG?raw=true "On Start")
<br></br>
<h3>PHOTO Recherche : </h3>

![Alt text](Recherche.PNG?raw=true "On Start")
<br></br>
<h3>PHOTO Base de données : </h3>

![Alt text](BDD.PNG?raw=true "On Start")

<h2>IMAGE DOCKER</h2>

<H1>A ajouter</h1>

<h2>RUN PROJET </h2>
<h3> TO RUN server TD3 WITH ANGULAR FRONT  : </h3>

```javascript
cd ../td3/client   
npm install 
npm start
```

```javascript
cd ../td3/server 
npm install 
npm start dev 
```

<h3> TO RUN server TD2 : </h3>

```javascript
cd ../td2/ 
npm install 
npm start
```
<p>Exemple de SNN pour les tests</p>

```javascript
177023523800522
```