// ./helpers/sitemap.js
// import fetch from 'isomorphic-fetch'
// import h2p from 'html2plaintext'
// import config from '../config'

export const getRoutes = () => {
  // Attention, cette fonction DOIT retourner une Promise.
  return []
  // return async () => {
  //   // Je récupère les événements depuis mon API.
  //   const events = await fetchEvents()
  //   const routes = []

  //   for (const event of events) {
  //     // Pour chaque événement, je renseigne les informations indexées à partir des données que j'ai.
  //     const route = {
  //       url: `/events/${event.slug}`,
  //       lastmodISO: event.updated_at,
  //       priority: 1,
  //     }
  //     // Spécificité liée à mon application, l'événement n'a pas forcément sa propre image.
  //     if (event.thumbnail !== null) {
  //       // En revanche, s'il en a une, j'en indexe les informations.
  //       route.img = [
  //         {
  //           // La configuration de mon hostname ainsi que mon architecture pour distribuer les images sont très spécifiques à mon infrastructure, il est évidemment possible de simplifier.
  //           url: `${config.apiUrl}:${config.apiPort}/pictures/${event.thumbnail.hash}`,
  //           caption: h2p(event.short_description), // h2p me vient d'un module retirant les balises HTML.
  //           title: event.label,
  //           geoLocation: `${event.address.town}, ${event.address.zip_code.country}`,
  //         },
  //       ]
  //     }
  //     routes.push(route)
  //   }
  //   // Tout se passe bien, je résous ma Promise en renvoyant les routes ajoutées par ma fonction.
  //   return routes
  // }
}

// const fetchEvents = async () => {
//   return await fetch(`${config.apiUrl}/events`).then((response) =>
//     response.json()
//   )
// }
