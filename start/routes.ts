import router from '@adonisjs/core/services/router'

const urlController = () => import('#controllers/url_controller')

router.on('/').render('pages/home')
router.post('/return', [urlController, 'index'])
