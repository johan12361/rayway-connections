import { Response } from '../fetch.mjs'

// Definir la consulta para reiniciar despliegues
const query = `mutation deploymentRestart($id: String!) {
  deploymentRestart(id: $id)
}`

/**
 * Función RestartDeploy
 *
 * Esta función realiza una mutación en la API de RayWay para reiniciar un despliegue específico
 * utilizando su ID.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} id - El ID del despliegue que se desea reiniciar.
 *
 * @returns {Promise<Object|Null>} Una promesa que se resuelve con el resultado de la mutación si la solicitud es exitosa, o `null` en caso de error.
 */
export async function restartDeploy(RayWayUser, id) {
  try {
    // Definir las variables de la mutación
    const variables = { id }

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
