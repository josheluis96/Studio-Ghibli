# AGENTS.md - Development Guidelines

This document provides essential guidelines for agentic coding agents working in the Studio Ghibli (Angular 21) repository.

## Quick Commands

### Build & Development
```bash
npm start              # Start dev server (localhost:4200)
npm run build          # Production build
npm run watch          # Watch mode for development
ng serve              # Alternative dev server command
ng build              # Alternative build command
```

### Testing (Vitest + TestBed)
```bash
npm test                                          # Run all tests
ng test --include='**/component-name.spec.ts'   # Run single test file
ng test --watch                                  # Run tests in watch mode
```

## Code Style Guidelines

### TypeScript Configuration
- **Strict Mode**: Always enabled (`strict: true`)
- **Type Safety**: Use explicit types, avoid `any`
- **Compiler Flags**:
  - `noImplicitReturns`: true
  - `noFallthroughCasesInSwitch`: true
  - `noImplicitOverride`: true
  - `noPropertyAccessFromIndexSignature`: true

### Formatting & Indentation
- **Indentation**: 2 spaces (spaces, not tabs)
- **Line Width**: 100 characters (Prettier)
- **Quotes**: Single quotes for TypeScript
- **Final Newline**: Always required
- **Trailing Whitespace**: Removed

### Imports Organization
Follow this order:
1. Angular core modules (`@angular/core`, `@angular/common`, etc.)
2. Angular feature modules (`@angular/forms`, `@angular/router`, etc.)
3. Third-party libraries (RxJS, PrimeNG, etc.)
4. Local imports (relative paths)

**Example**:
```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Header } from './header/header';
```

### Naming Conventions

**Files**:
- Components: `component-name.ts` (kebab-case)
- Services: `service-name.ts` (kebab-case)
- Models/Interfaces: `entity.model.ts`
- Tests: `*.spec.ts`
- Styles: `*.scss`

**Classes/Interfaces**:
- Use PascalCase: `GhibliApi`, `FilmModel`, `Header`
- Services: `GhibliApi`, `FilmService`
- Interfaces: prefix with `I` or use descriptive names: `Film`, `Person`, `Location`

**Functions/Variables**:
- Use camelCase: `getFilmById()`, `filmList`, `selectedItem`
- Private fields: `private readonly http` or `private httpClient`
- Constants: `UPPERCASE_WITH_UNDERSCORES` (if needed)

**Angular Selectors**:
- Use `app-` prefix: `app-header`, `app-films-list`
- Kebab-case: `app-my-component`

## Angular-Specific Patterns

### Dependency Injection
Use `inject()` for modern DI (preferred over constructor injection):
```typescript
export class MyService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
}
```

### Components
- **Standalone**: Always use `standalone: true`
- **Change Detection**: Use `OnPush` when possible
- **Structure**: Component file should include selector, imports, templateUrl, styleUrl
- **Lifecycle**: Implement only used hooks (OnInit, OnDestroy, etc.)

### Reactive State
Use Angular signals for state management:
```typescript
export class MyComponent {
  protected readonly title = signal('Default');
  itemCount = signal(0);
  filteredItems = computed(() => this.items().filter(...));
}
```

### Services
- Provider scope: `providedIn: 'root'` for singletons
- Typed Observables: Always specify generic type
- Methods should return Observables for async operations

## Directory Structure

```
src/app/
├── core/              # Core services, models, layout
│   ├── services/      # API services
│   ├── models/        # TypeScript interfaces/types
│   └── layout/        # Header, footer components
├── features/          # Feature modules (films, people, etc.)
│   ├── films/
│   ├── people/
│   └── ...
├── shared/            # Reusable components, pipes
│   ├── components/
│   └── pipes/
├── app.ts            # Root component
├── app.routes.ts     # Main routing configuration
└── app.config.ts     # App configuration
```

## Error Handling

- **HTTP Errors**: Handle in services, expose via Observables or signals
- **Type Safety**: Never use `any`, use `unknown` and narrow types
- **Null Safety**: Use non-null assertions only when certain
- **Error Messages**: Log to console in development; show user-friendly messages in UI

## Testing Guidelines (Vitest + TestBed)

- Test files co-located with source files (`.spec.ts`)
- Use `TestBed.configureTestingModule()` for setup
- Mock dependencies using Jasmine spies
- Async tests: use `async` or `fakeAsync`
- Test component rendering: `fixture.whenStable()`

**Example**:
```typescript
describe('MyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MyComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
```

## General Best Practices

1. **No ESLint yet**: Follow TypeScript strict mode and Prettier formatting
2. **Module Imports**: Angular components are standalone; use `imports: [...]` in decorators
3. **Observable Patterns**: Use RxJS operators; avoid nested subscriptions
4. **File Size**: Keep components/services under 300 lines when possible
5. **Comments**: Document complex logic; avoid obvious comments
6. **Accessibility**: Use semantic HTML; test with keyboard navigation

## TypeScript Compiler Options Summary

Key enabled options for strict compliance:
- `strict`, `noImplicitAny`, `strictNullChecks`
- `noImplicitThis`, `strictFunctionTypes`
- `strictBindCallApply`, `strictPropertyInitialization`
- `alwaysStrict`, `noImplicitReturns`

---

**Last Updated**: March 2025 | Angular 21.1.0 | Vitest 4.0.8
