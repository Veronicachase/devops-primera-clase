# devops-primera-clase
This is my readme, Ill do it later. 

enunciado de tarea de hoy 

La práctica va a consistir en realizar un CI/CD completo con Jenkins configurando todo desde el Jenkinsfile. (Se deben ejecutar los test, el despliegue en Fly.io y todos los pasos que consideréis necesarios...)
Es importante tener en cuenta que, como ocurría con GitActions, tenemos 'secrets' en jenkins que se llaman 'credenciales'(credentials). Estos son usados para salvaguardar información sensible que será usada con algún objetivo. Debemos usarlos obteniendo cada credencial desde el propio jenkins a través del Jenkinsfile.
 
Pasos: 
    1) Tener una rama nueva en mi repo que se llame flyio (o crear un nuevo repo) 
        1.2) Crear mi aplicación en fly.io con el comando 'fly launch' y comprobar que se despliegua correctamente. (Si no se despliega con el launch, usar justo después el comando 'fly deploy'
    2) Configurar el webhook para que se conecte al Jenkins
    3) Configurar mi job en jenkins con Pipeline como template
    4) Configurar las credenciales a nivel de Jenkins para poder acceder a ellas desde el Jenkins
        4.1) Nombre de la credencial: ${MOTIVO}_${NOMBRE_DE_LA_PERSONA}
    5) Configurar el Jenkinsfile de mi repo para que obtenga las credenciales desde Jenkins
    6) Os aconsejaría que hicierais una prueba con un echo par comprobar que la credencial se obtiene correctamente. 
    7) Configurar CI
    8) Configurar CD
    9) Ejecutar pipeline completo y comprobar que despliega en Fly.io
    10) Hacer un cambio en el código y comprobar que se ejecuta el job de jenkins y que se despliega ese cambio correctamente en Fly.io(Si falla algún test, corregirlo)
