import { Router } from 'express'
import * as fillOutController from '../controllers/fillOutController'

const fillOutRouter: Router = Router()

/* GET requests */
fillOutRouter.get('/:formId/filteredResponses', fillOutController.getFilteredResponses)

export default fillOutRouter