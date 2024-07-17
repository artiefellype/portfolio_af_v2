# Portfólio_V2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Atomic Design Implementation in Angular

### Project Structure

You can organize your Angular project according to these categories. A directory structure might look like this:

    src/
      app/
        atoms/
          button/
            button.component.ts
            button.component.html
            button.component.css
        molecules/
          form-field/
            form-field.component.ts
            form-field.component.html
            form-field.component.css
        organisms/
          header/
            header.component.ts
            header.component.html
            header.component.css
        templates/
          main-layout/
            main-layout.component.ts
            main-layout.component.html
            main-layout.component.css
        pages/
          home-page/
            home-page.component.ts
            home-page.component.html
            home-page.component.css

### `atoms/`

- **Description**: Contains the smallest, fundamental components, often representing basic HTML elements.
- **Examples**: Components like buttons, inputs, icons, etc.

### `molecules/`

- **Description**: Groups of atoms working together to form more complex components.
- **Examples**: Components that combine atoms into larger functional units (e.g., form-field).

### `organisms/`

- **Description**: Larger, more complex components that may include molecules, atoms, and other organisms.
- **Examples**: Components representing distinct sections of the UI like headers, footers, etc.

### `templates/`

- **Description**: Combines organisms to create entire page layouts.
- **Examples**: Components defining the overall structure of pages, including headers, footers, and main content areas.

### `pages/`

- **Description**: Specific instances of templates populated with real content.
- **Examples**: Components representing actual pages users interact with.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
