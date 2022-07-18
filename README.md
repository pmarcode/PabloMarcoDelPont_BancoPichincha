# PabloMarcoDelPont_BancoPichincha

Luego de clonar el repositorio:
```
cd server
npm install
npm start
```

### Tests de API

Una vez que esté corriendo el servidor se pueden ejecutar los tests en una nueva terminal.
Se debe reiniciar el servidor antes de correr los tests para asegurar datos limpios.

```npm test```

### Usar un cliente REST para probar los endpoints.

Lista de organizaciones:

GET http://localhost:8080/organizations/getOrganizations

Traer una organización:

GET http://localhost:8080/organizations/getOrganization/1

Crear una organización:

POST http://localhost:8080/organizations/createOrganization

```{"name":"organization 4"}```

Editar una organización:

PUT http://localhost:8080/organizations/editOrganization/2

```{"name":"Organization edited"}```

Borrar una organización:

DELETE http://localhost:8080/organizations/deleteOrganization/3

Obtener los códigos de verificación de los repositorios:

GET http://localhost:8080/repositories/getVerificationCodes

Obtener las métricas de repositorio según tribu:

GET http://localhost:8080/metrics/getRepositoriesMetricsByTribe/1

### Reporte CSV

Para generar el reporte CSV con las métricas de repositorio según tribu hay que acceder en el navegador a la url:

http://localhost:8080/metrics/csv/getRepositoriesMetricsByTribe/1
