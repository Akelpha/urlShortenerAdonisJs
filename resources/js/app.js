// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { users_controller } from './controllers/users_controller'; 

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();
// const PORT = 3000;

// // Configurer le moteur de vue Edge
// app.set('view engine', 'edge');
// app.set('views', path.join(__dirname, '../views'));

// // Configurer le dossier public pour les fichiers statiques (CSS, JS)
// app.use(express.static(path.join(__dirname, '../resources'))); 

// // Page d'accueil : rendre la page avec Edge
// app.get('/', (_req, res) => {
//   res.render('home.edge');
// });

// // Route pour raccourcir l'URL et générer le QR code
// app.get('/shorten', users_controller.shorten); 

// // Démarrer le serveur
// app.listen(PORT, () => {
//   console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
// });
