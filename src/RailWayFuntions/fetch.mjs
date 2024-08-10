/**
 * Función Response
 *
 * Esta función realiza una solicitud POST a la API de RayWay utilizando la información de conexión
 * proporcionada por una instancia de la clase RayWayUser. Se utiliza para enviar consultas (queries)
 * y variables a la API.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} query - La consulta que se enviará a la API. Normalmente es una consulta en lenguaje GraphQL.
 * @param {Object} [variables={}] - Un objeto opcional que contiene las variables necesarias para la consulta.
 *
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta de la API.
 */
export async function Response(RayWayUser, query, variables = {}) {
  return await fetch(RayWayUser.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RayWayUser.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
}
