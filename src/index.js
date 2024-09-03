//gets
import { getServices } from './RailWayFuntions/GETS/getServices.mjs'
import { getEnviroments } from './RailWayFuntions/GETS/getEnviroments.mjs'
import { getServiceById } from './RailWayFuntions/GETS/getServiceById.mjs'
import { getDeploy } from './RailWayFuntions/GETS/getDeploy.mjs'
import { getDeployById } from './RailWayFuntions/GETS/getDeployById.mjs'
//mut
import { disconnectService } from './RailWayFuntions/MUT/disconnectService.mjs'
import { removeDeploy } from './RailWayFuntions/MUT/removeDeploy.mjs'
import { restartDeploy } from './RailWayFuntions/MUT/restartDeploy.mjs'
import { reDeploy } from './RailWayFuntions/MUT/reDeploy.mjs'
import { deleteService } from './RailWayFuntions/MUT/deleteService.mjs'

export {
  //gets
  getDeployById,
  getDeploy,
  getServiceById,
  getEnviroments,
  getServices,
  //mut
  disconnectService,
  removeDeploy,
  restartDeploy,
  reDeploy,
  deleteService
}
