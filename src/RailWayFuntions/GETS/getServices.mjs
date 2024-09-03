import { Response } from '../fetch.mjs'

/**
 * Función GetServices
 *
 * Esta función realiza una consulta a la API de RayWay para obtener la lista de servicios asociados
 * a los proyectos del usuario autenticado.
 *
 * @async
 * @function
 * @param {RayWayUser} RayWayUser - Una instancia de la clase RayWayUser que contiene la URL de la API y el token de autenticación.
 *
 * @returns {Promise<Array|Null>} Una promesa que se resuelve con un array de objetos `edges` que contienen los servicios, o `null` en caso de error.
 */
export async function getServices(RayWayUser) {
  // Definir la consulta para listar los servicios
  const query = `{
    me {
      projects {
        edges {
          node {
            services {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }`

  try {
    // Realizar la solicitud a la API usando la función Response
    const response = await Response(RayWayUser, query)
    const data = await response.json()

    if (response.ok) {
      // Extraer los edges (resultados) de los servicios
      const servicesEdges = data?.data?.me?.projects?.edges?.[0]?.node?.services?.edges || []
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
