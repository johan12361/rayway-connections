import { Response } from '../fetch.mjs'

/**
 * Función DeleteService
 *
 * Esta función realiza una mutación en la API de RayWay para eliminar un servicio específico
 * utilizando su ID.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} id - El ID del servicio que se desea eliminar.
 * @param {string} [environmentId] - (Opcional) El ID del entorno asociado al servicio que se desea eliminar.
 *
 * @returns {Promise<Object|Null>} Una promesa que se resuelve con el resultado de la mutación si la solicitud es exitosa, o `null` en caso de error.
 */
export async function deleteService(RayWayUser, id, environmentId = null) {
  // Definir la consulta para eliminar el servicio
  const query = `mutation serviceDelete($environmentId: String, $id: String!) {
    serviceDelete(environmentId: $environmentId, id: $id)
  }`

  try {
    // Definir las variables de la mutación
    const variables = { id, environmentId }

    // Realizar la solicitud a la API usando la función Response
    const response = await Response(RayWayUser, query, variables)
    const data = await response.json()

    if (response.ok) {
      // Si la solicitud es exitosa, devolver el resultado de la mutación
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
