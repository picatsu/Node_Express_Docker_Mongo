<p>
Achraf LAHKIKY
<br>
Melvin JESIOLWSKI
<br>
Yassine JAA
</p>

<h1>TD3 Socket.IO<h1>
<a> http://localhost:4000/ </a>
<li> Td2: docker pull ezzefiohez/technologtd2 </li>
<li> Td3: docker pull ezzefiohez/technologtd3  </li>

<h3>Il est conseillé d'utiliser le navigateur Chrome version  50.65.4 </h3>
<p>https://hub.docker.com/r/ezzefiohez/technologtd2</p>
<h3> En lançant son navigateur sur l’adresse de votre API, une page contenant un chat vous dit : </h3>

<li>1- Quel est votre nom ?</li>
<li>2- Quel est votre prénom ?</li>
<li>3- Quel est votre SNN ?</li>


<br>

<li>Un choix et proposé d’enregistrer les informations las la BDD</li>
<li>L'utilisateur peut supprimer les documents à partir de l'interface</li>
<li>Affiche des documents present dans la base de données</li>

<h3> Technologies : </h3>

<li>Node.js/ExpressJs</li>
<li>Angular</li>
<li>RestApi</li>
<li>MongoDB</li>
<li>Docker</li>
<li>SocketIO</li>

    
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
            ├── server.ts 
            ├── server.js   (equivalent)
            ├── Dockerfile         
            └── package.json          
                     

<h2> Tester via DOCKER ou tester en LOCAL  </h2>
   <p>  Docker : </p>

```
 ./ChangeToDockerMode.sh && docker-compose build 

```
<p> Local :</p> 
     
```
./ChangeToLocalMode.sh && ./launchLocal.sh 

```
<p> Chat Marche Beaucoup Mieux en Locale </p>


<h2>RUN PROJET </h2>
<h3> TO RUN server TD3 WITH ANGULAR FRONT  : </h3>

```
chmod +777 launchLocal.sh && ./launchLocal.sh 
```
<h3> TO RUN server TD3 WITH ANGULAR FRONT in Different Bash : </h3>

```javascript
cd ../td3/client   
npm install 
npm start
```

```javascript
cd ../td3/server 
npm install 
npm start
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
   

<h3> Fonctionnalités TD2 : </h3>

<li>Verification de la conformité du SSN</li>
<li>Verification si le SSN est déja existant dans la base de données</li>
<li>Lecture du SSN (departement, date naissance etc..)</li>

<h3> Fonctionnalités TD3 : </h3>

<li>Communication avec socketIO entre front et back et HTTP entre back td3 et back td2 </li>
<li>Choix de sauvegarde dans la base de données</li>
<li>Saisie des informations</li>
<li>Supprimer graphiquement les documents dans la Base de données</li>
<li>Affichage du contenu de la base de données </li>
<li>Recherche dans base de données</li>

<br>
<h3>PHOTO Save : </h3>

![Alt text](./assets/dialog.PNG?raw=true "On Start")
<br></br>

<h3>PHOTO Chat : </h3>

![Alt text](./assets/chat.PNG?raw=true "On Start")
<br></br>
<h3>Affichage donnée avec filtre </h3>

![Alt text](./assets/table.PNG?raw=true "On Start")
<br></br>

<h3>Theme blanc </h3>

![Alt text](./assets/whiteTheme.PNG?raw=true "On Start")
<br></br>

<h3>Theme Dark (default) </h3>

![Alt text](./assets/darkTheme.PNG?raw=true "On Start")
<br></br>


<br>
<h1> Conclusion  </h1>
<p> A la compilation du projet angular, un fichier dist est generer puis servit par le server du td3 sur son localhost:4000  </p>
<h3> It Was Fun, it's been a good journey ... Docker Was Hell :)</h3>
