import { Response } from '../fetch.mjs'

/**
 * Función GetDeploy
 *
 * Esta función realiza una consulta a la API de RayWay para obtener la información de los despliegues
 * (deployments) de un proyecto específico en un entorno y servicio determinados.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} projectId - El ID del proyecto para el cual se desea obtener los despliegues.
 * @param {string} environmentId - El ID del entorno en el cual se está ejecutando el proyecto.
 * @param {string} serviceId - El ID del servicio asociado al proyecto.
 *
 * @returns {Promise<Array|Null>} Una promesa que se resuelve con un array de objetos `edges` que contienen los datos del despliegue, o `null` en caso de error.
 */
export async function GetDeploy(RayWayUser, projectId, environmentId, serviceId) {
  const query = `{
        deployments(
          first: 1
          input: {
            projectId: "${projectId}"
            environmentId: "${environmentId}"
            serviceId: "${serviceId}"
          }
        ) {
          edges {
            node {
              id
              staticUrl
            }
          }
        }
      }`

  try {
    // Realiza la solicitud a la API usando la función Response
    const response = await Response(RayWayUser, query)
    const data = await response.json()

    if (response.ok) {
      // Extrae los edges (resultados) del despliegue
      const servicesEdges = data?.data?.deployments?.edges || []
      return servicesEdges
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
