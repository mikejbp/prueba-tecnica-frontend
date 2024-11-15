# PET - Prueba técnica de Frontend

**Prueba Técnica: Desarrollador Frontend en Singularity Health**

## Instrucciones

1. Clonar el repositorio:

```
git clone https://github.com/mikejbp/prueba-tecnica-frontend.git
```

2. Instala las dependencias:

```
pnpm install
```

3. Ejecuta la aplicación:

```
pnpm run dev
```

Esto correrá en el puerto **5173**, siendo la url local: `http://localhost:5173`

## Acotaciones

### Rutas de la aplicación:

- La pagina de **inicio** está cargada por defecto: `http://localhost:5173`
- La pagina para **iniciar sesión** se accede mediante: `http://localhost:5173/login`
- Al tratar de acceder a cualquier otra ruta que no esté definida, aparecerá la **página 404**. Ejemplo `http://localhost:5173/prueba`

### Diseño responsive

La aplicación se ha hecho teniendo en cuenta dispostivios mobiles, tablet, laptop y desktop. Procurando la comodidad visual y la experiencia del usuario.

### Funcionalidades

Como se solicitó en los requisitos de la prueba:

- **Vista de login**: maneja las validaciones de los inputs para el formulario de inicio de sesión, corroborando tanto si estos están vacíos como si son correos y contraseñas válidos. A su vez, muestra notificaciones para estas validaciones y para cuando la petición se realiza, mostrando una alerta en caso de error y/o de éxito.
- **Vista de Home**: En base a la sección que quiere acceder mediante el menú de navegación, el contenido de tipo texto de la segunda sección del Home cambia de forma dinámica, así como también de puede apreciar la sección posicionado en base a la ruta en el navegador.
- **Testimonios**: Si bien no fue solicitado, me tomé la libertad de agregar una funcionalidad extra para lo que es el carousel de testimonios, así como su diseño responsive.

### Deploy

En este apartado dejo el link de la aplicación desplegada:
[deploy](https://prueba-tecnica-frontend-five.vercel.app/)

La aplicación fue desarrollada en base al Adobe XD proporcionado, utilizando las fuentes mencionadas y assets proporcionados. Sin embargo, se que no está del todo parecida en ciertas secciones debido a la ausencia de SVGs que no fueron proporcionados, debido a esto tuve que desarrollarla como pude utilizando mi creatividad e imaginación.
