# 🚀 Curso de Angular

Repositorio dedicado al aprendizaje, experimentación y desarrollo de prácticas dentro del curso de **Angular**. El entorno está completamente contenerizado mediante **Docker** para garantizar un ambiente de desarrollo aislado, consistente y portable sobre Node.js 22+.

---

## 📋 Descripción del Proyecto

Este proyecto sirve como bitácora de código y laboratorio de pruebas para explorar las características fundamentales y avanzadas de Angular moderno.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Angular 22.1.8](https://angular.dev/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Runtime:** [Node.js v22.22.3](https://nodejs.org/)
* **Contenerización:** [Docker](https://www.docker.com/)
* **Estilos:** CSS3 / HTML5

---

## 📚 Temas y Módulos (En actualización)

- [x] **Configuración del Entorno:** Integración de Angular con Docker & Docker Compose en Windows 10.
- [ ] **Componentes Básicos:** Creación, ciclo de vida, data binding y comunicación inter-componente (`@Input`, `@Output`).
- [ ] **Gestión de Estado y Reactividad:**
  - Control de cambios con **Zone.js**.
  - Enfoque **Zoneless** con **Signals** (`signal()`, `computed()`, `effect()`).
- [ ] **Enrutamiento (Angular Router):** Configuración de rutas, navegación implícita/explícita y carga perezosa (*Lazy Loading*).
- [ ] **Inyección de Dependencias y Servicios:** Manejo de lógica de negocio compartida.
- [ ] **Formularios:** Formularios reactivos (*Reactive Forms*) y basados en plantillas.
- [ ] **Consumo de HTTP:** Manejo de APIs RESTful con `HttpClient`.

---

## 🐳 Ejecución del Entorno con Docker

Para iniciar el servidor de desarrollo local mediante Docker Compose:

1. **Levantar el contenedor:**
   ```bash
   docker-compose -f docker-compose.yaml up -d
2. **Verificar los logs:**
   ````bash
   docker logs -f angular_dev
3. Acceder en el navegador a: [localhost](http://localhost:4200)

--- 

Desarrollado con ❤ por [ADJGC](https://www.linkedin.com/in/adjgc/)