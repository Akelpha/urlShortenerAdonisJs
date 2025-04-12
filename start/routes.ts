import router from '@adonisjs/core/services/router'

const UrlController = () => import('#controllers/url_controller')

router.on('/').render('home')
router.post('/return', [UrlController, 'index'])
router.get('/about', [UrlController, 'about']).as('about')
