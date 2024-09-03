import { Response } from '../fetch.mjs'

/**
 * Función ReDeploy
 *
 * Esta función realiza una mutación en la API de RayWay para redeplegar un despliegue específico
 * utilizando su ID. La opción `usePreviousImageTag` determina si se debe utilizar la etiqueta de imagen previa.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 * @param {string} id - El ID del despliegue que se desea redeplegar.
 * @param {boolean} [usePreviousImageTag=false] - (Opcional) Si se debe utilizar la etiqueta de imagen previa en el redepliegue. El valor predeterminado es `false`.
 *
 * @returns {Promise<Object|Null>} Una promesa que se resuelve con los datos del despliegue después del redepliegue si la solicitud es exitosa, o `null` en caso de error.
 */
export async function reDeploy(RayWayUser, id, usePreviousImageTag = false) {
  // Definir la consulta para redeplegar el despliegue
  const query = `mutation deploymentRedeploy($id: String!, $usePreviousImageTag: Boolean) {
    deploymentRedeploy(id: $id, usePreviousImageTag: $usePreviousImageTag) {
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
    // Definir las variables de la mutación
    const variables = { id, usePreviousImageTag }

    // Realizar la solicitud a la API usando la función Response
    const response = await Response(RayWayUser, query, variables)
    const data = await response.json()

    if (response.ok) {
      // Si la solicitud es exitosa, devolver los datos del despliegue después del redepliegue
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
