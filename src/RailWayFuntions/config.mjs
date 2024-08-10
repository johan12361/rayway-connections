/**
 * Clase RayWayUser
 *
 * Esta clase representa a un usuario de RayWay y se utiliza para manejar la información
 * de conexión necesaria para interactuar con la API de RayWay.
 */
export class RayWayUser {
  /**
   * Constructor de la clase RayWayUser.
   *
   * @param {string} url - La URL base de la API de RayWay a la que se conectará el usuario.
   * @param {string} token - El token de autenticación necesario para realizar solicitudes a la API.
   */
  constructor(url, token) {
    /**
     * @property {string} url - Almacena la URL base de la API de RayWay.
     */
    this.url = url

    /**
     * @property {string} token - Almacena el token de autenticación del usuario.
     */
    this.token = token
  }
}
