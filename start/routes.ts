

import router from '@adonisjs/core/services/router';

const urlController = () =>import('#controllers/urlController');

router.on('/').render('pages/home');
router.post('/return', [urlController , 'index']);