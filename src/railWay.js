//TT GETS
import { GetServices } from './RailWayFuntions/GETS/getServices.mjs'
import { GetEnviroments } from './RailWayFuntions/GETS/getEnviroments.mjs'
import { GetServiceById } from './RailWayFuntions/GETS/getServiceById.mjs'
import { GetDeploy } from './RailWayFuntions/GETS/getDeploy.mjs'
import { GetDeployById } from './RailWayFuntions/GETS/getDeployById.mjs'

//TT CREDENCIALES
import { RayWayUser } from './RailWayFuntions/config.mjs'
const railway = new RayWayUser(
  'https://backboard.railway.app/graphql/v2',
  'ca8b8d59-87b3-4258-b854-de427d105b78'
)
/*
const datos = await GetServices(railway)
console.log('SERVICIOS', datos)
*/
/*
const datos2 = await GetEnviroments(railway)
console.log('ENTORNOS', datos2)
*/
const datos3 = await GetServiceById(railway, '0d19604f-88bf-40af-ab9d-a67ec50899bd')
console.log('SERVICIOBYID', datos3)

/*
const deploys = await GetDeploy(
  railway,
  'e877b08f-6b8b-4816-aba8-1b76df504419',
  'db2c75fa-09ca-457c-a5d6-075749e1aaa0',
  '0d19604f-88bf-40af-ab9d-a67ec50899bd'
)
console.log('DEPLOYS', deploys)

const deploy = await GetDeployById(railway, '1fe5c012-8de0-405f-a03b-92abad30f66e')
console.log('DEPLOYBYID', deploy.data.deployment)
*/
