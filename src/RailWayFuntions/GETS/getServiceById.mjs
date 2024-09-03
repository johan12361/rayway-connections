import { Response } from '../fetch.mjs'

/**
 * Función GetServiceById
 *
 * Esta función realiza una consulta a la API de RayWay para obtener la información detallada de un servicio específico
 * utilizando su ID.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} id - El ID del servicio que se desea obtener.
 *
 * @returns {Promise<Object|Null>} Una promesa que se resuelve con los datos del servicio si la solicitud es exitosa, o `null` en caso de error.
 */
export async function getServiceById(RayWayUser, id) {
  // Definir la consulta para obtener el servicio por ID
  const query = `query service($id: String!) {
    service(id: $id) {
      __typename
      createdAt
      deletedAt
      featureFlags
      icon
      id
      name
      projectId
      templateServiceId
      templateThreadSlug
      updatedAt
    }
  }`

  try {
    // Definir las variables de la consulta
    const variables = { id }

    // Realizar la solicitud a la API usando la función Response
    const response = await Response(RayWayUser, query, variables)
    const data = await response.json()

    if (response.ok) {
      // Si la solicitud es exitosa, devolver los datos del servicio
      return data
    } else {
      console.error('GraphQL Error:', data.errors || 'No details available')
      return null
    }
  } catch (error) {
    // Manejo de errores en la solicitud
    console.error('Fetch Error:', error)
    return null
  }
}
