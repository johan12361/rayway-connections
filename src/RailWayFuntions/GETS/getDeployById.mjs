import { Response } from '../fetch.mjs'

/**
 * Función GetDeployById
 *
 * Esta función realiza una consulta a la API de RayWay para obtener la información de un despliegue específico
 * utilizando su ID.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} id - El ID del despliegue que se desea obtener.
 *
 * @returns {Promise<Object|Null>} Una promesa que se resuelve con los datos del despliegue si la solicitud es exitosa, o `null` en caso de error.
 */
export async function getDeployById(RayWayUser, id) {
  // Definir la consulta para obtener el despliegue por ID
  const query = `query deployment($id: String!) {
    deployment(id: $id) {
      __typename
      canRedeploy
      canRollback
      createdAt
      environmentId
      id
      meta
      projectId
      serviceId
      snapshotId
      staticUrl
      status
      suggestAddServiceDomain
      updatedAt
      url
    }
  }`

  try {
    // Definir las variables de la consulta
    const variables = { id }

    // Realizar la solicitud a la API usando la función Response
    const response = await Response(RayWayUser, query, variables)
    const data = await response.json()

    if (response.ok) {
      // Si la solicitud es exitosa, devolver los datos del despliegue
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
