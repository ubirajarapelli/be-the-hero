const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({
    retorno: 'Alô Comunidade'
  })
});

/** Routes of Ongs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** Routes of Incidents */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/** Routes from Profiles */
routes.get('/profile', ProfileController.index);

/** Routes of Session (Login) */
routes.post('/sessions', SessionController.create)


module.exports = routes
