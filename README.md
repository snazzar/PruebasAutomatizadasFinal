# PruebasAutomatizadasFinal

# Instrucciones para Ejecución de Pruebas E2E

## Cypress
Luego de haber clonado el repositorio debe:
1.	Reemplazar la base de datos de la versión local de ghost (3.42.5) con la base de datos Databases/ghost-local 
2.	Cambiar la propiedad “baseUrl” del archivo cypress/cypress.json para que apunte a la versión local de ghost (3.42.5)
3.	Ubicarse en la carpeta cypress
4.	Ejecutar el comando npm install
5.	Ejecutar el comando npx cypress open

## Kraken
Luego de haber clonado el repositorio debe:
1.	Reemplazar la base de datos de la versión local de ghost (3.42.5) con la base de datos Databases/ghost-local 
2.	Cambiar el contenido del archivo kraken/.baseUrl para que apunte a la versión local de ghost (3.42.5)
3.	Ubicarse en la carpeta kraken
4.	Ejecutar el comando bundle exec kraken-mobile run

# Instrucciones para Ejecución de Pruebas de Reconocimiento

## RIPuppet
Luego de haber clonado el repositorio debe:
1.	Reemplazar la base de datos de la versión local de ghost (3.42.5) con la base de datos Databases/ghost-local
2.	Ubicarse en la carpeta RIPuppet
3.	Cambiar la propiedad “url” del archivo config.json para que apunte a la versión local de ghost (3.42.5)
4.	Ejecutar el comando npm install
5.	Ejecutar el comando node index.js

# Instrucciones para Ejecución de Pruebas VRT

Luego de haber clonado el repositorio debe:
1.	Reemplazar la base de datos de la versión local de ghost (3.42.5) con la base de datos Databases/ghost-local
2.  Ubicarse en la carpeta cypress
3.	Ejecutar la prueba cypress/integration/create-post.spec.js
4.	En la carpeta cypress/screenshots encontrara las imagenes para comparar con la versión anterior de la aplicación

# Sistema de Registro de Incidencias

https://dev.azure.com/snazzar/Ghost/_workitems/recentlyupdated/

# Inventario de Pruebas Exploratorias

https://uniandes-my.sharepoint.com/:x:/g/personal/s_nazzar_uniandes_edu_co/EWOrcCIXtVBIiS1YkhsTwUYBz5R4GKgmmjsO0mgA-ggo0g?e=hpQmaS

# Estrategia de Pruebas

https://uniandes-my.sharepoint.com/:w:/g/personal/s_nazzar_uniandes_edu_co/EWtzfBuwlYBPj8crnFa9DPsBZZSAdGlZ3DK_LSjhHPjIfQ?e=aBAeFL