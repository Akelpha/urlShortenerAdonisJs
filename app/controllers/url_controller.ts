import QRCode from 'qrcode'
import fetch from 'node-fetch'
import type { HttpContext } from '@adonisjs/core/http'

export default class UrlController {
  public async index({ request, view }: HttpContext) {
    const originalUrl = request.input('url') // Récupère le paramètre 'url'

    if (!originalUrl) {
      return view.render('error', { error: 'Aucune URL fournie' })
    }

    try {
      const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`
      const fetchResponse = await fetch(apiUrl)
      const shortUrl = await fetchResponse.text()

      // Génération du QR code
      const qrCodeUrl = await QRCode.toDataURL(shortUrl)

      // Rendre la vue avec les données
      return view.render('pages/return', {
        shortUrl,
        qrCodeUrl,
      })
    } catch (error) {
      console.error("Erreur lors de la génération de l'URL courte ou du QR code", error)
      return view.render('error', {
        error: "Erreur lors de la génération de l'URL courte ou du QR code",
      })
    }
  }
  public async about({ view }: HttpContext) {
    return view.render('pages/about')
  }
}
