# devops-primera-clase
This is my readme, Ill do it later. 

Desde nuestro cliente se nos pide que la 'SUPERAPI' que tenemos desarrollada sea desplegada siempre que se haga un push a la rama 'CICD'. La API debe ser desplegada en nuestro proyecto de fly.io para que cumpla con nuestros requisitos. La aplicación en fly.io NO está creada, por lo que debemos crear una nueva aplicación con fly.io. Recordad que tenemos el comando 'fly launch' para crear una aplicación nueva.
 
Los pasos a seguir son los siguientes:
 
    1) Necesitamos crear una nueva rama que se llame CICD
    2) Necesitamos eliminar todo lo que hay excepto la carpeta .github y su contenido. IMPORTANTE ESTAR EN LA RAMA CICD antes de eliminar nada.
    3) Debemos pegar el proyecto base que tenemos desde el primer día que está compuesto por la carpeta src y test y los archivos jest.config.js, package.json y README.md. (Si venimos desde la rama flyio del otro día lo que debemos hacer es eliminar los siguinetes archivos: .dockerignore, Dockerfile, fly.toml y fly-deploy.yml[que está en .github/workflows])
    4) Debemos primero crear nuestra aplicación en fly.io(No deberíamos necesitar token ya ni configuraciones 'extrañas') la aplicación debería llamarse 'mi-primer-cicd-completo'. Recordad usar 'fly launch' para crear la aplicación.
    5) Con el paso 4 se crea un fly-deploy.yml, y usamos este para introducir los pasos necesarios para que este 'programita' ejecute las acciones necesarias para hacer CI(Integración continua). Las acciones que debemos hacer son:
        5.1) Checkout del codigo, instalación de dependencias y ejecución de test.
    6) Hacer que fly-deploy.yml SOLO se ejecute cuando haya cambios en mi nueva rama llamada 'CICD'
    7) Hacer un cambio 'tonto' en el repositorio en la rama CICD y comprobar que esto ejecuta el Gitaction y despliega todo correctamente en fly.io.
    8) Vamos a modificar el texto 'Hello World from fly.io!' del archivo app.js por 'Hello, we are devops'
    9) Listo lo tenemos todo.



name: Fly Deploy

on:
  push:
    branches: 
      - CICD
  pull_request:
    branches: ["CICD"]
  workflow_dispatch:

jobs:
  deploy:
    name: mi-primer-cicd-completo-bitter-wind-624
    runs-on: ubuntu-latest
    concurrency: deploy-group  # optional: ensure only one action runs at a time
    steps:
      - uses: actions/checkout@v4
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - name: Instalar dependencias
        run: npm install
      - name: Ejecutar tests
        run: |
          cd tests
          npm run test
      - run: flyctl deploy --remote-only
        env:
          FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
      - name: Hola desde cicd
        run: echo "Pruebas completadas cicd"
