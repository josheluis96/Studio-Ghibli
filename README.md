# StudioGhibli

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Structura

src/app/
├── core/
│   ├── services/
│   │   └── ghibli-api.service.ts   // ÚNICO servicio para todas las llamadas a la API
│   ├── models/
│   │   ├── film.model.ts           // Interface para la data de Film
│   │   ├── person.model.ts         // Interface para la data de Person
│   │   └── ... (y los demás modelos)
│   └── layout/
│       ├── header/
│       │   └── header.component.ts // Componente del encabezado/navbar
│       └── footer/
│           └── footer.component.ts // Componente del pie de página
│
├── features/
│   ├── films/
│   │   ├── films-list/
│   │   │   └── films-list.component.ts // Componente para mostrar la lista
│   │   └── films.routes.ts           // Rutas específicas para '/films'
│   │
│   ├── people/
│   │   ├── people-list/
│   │   │   └── people-list.component.ts
│   │   └── people.routes.ts
│   │
│   └── ... (carpetas para locations, species, vehicles)
│
├── shared/
│   ├── components/
│   │   └── loading-spinner/      // Componentes reusables (spinner, tarjetas, etc.)
│   └── pipes/
│       └── ... (Pipes reusables)
│
├── app.config.ts
├── app.routes.ts                 // Archivo de rutas PRINCIPAL (configura lazy loading)
├── app.ts                        // Componente principal (App Shell)
├── app.html                      // Plantilla principal (header, router-outlet, footer)
└── app.scss

## Commands

# Genera el servicio para manejar las llamadas a la API Ghibli
ng g s core/services/ghibli-api 

# Genera los componentes para el encabezado y el pie de página
ng g c core/layout/header --standalone
ng g c core/layout/footer --standalone

# Feature: Films
ng g c features/films/films-list --standalone

# Feature: People
ng g c features/people/people-list --standalone

# Feature: Locations
ng g c features/locations/locations-list --standalone

# Feature: Species
ng g c features/species/species-list --standalone

# Feature: Vehicles
ng g c features/vehicles/vehicles-list --standalone

# Genera un spinner de carga reutilizable
ng g c shared/components/loading-spinner --standalone

# Generate routes
touch src/app/features/films/films.routes.ts src/app/features/people/people.routes.ts src/app/features/locations/locations.routes.ts src/app/features/species/species.routes.ts src/app/features/vehicles/vehicles.routes.ts

