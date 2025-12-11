📦 Semana 1: Vite 5 + React 18 + styled-components

🔧 Snippets

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});

// App.tsx (con React Server Components)
'use client';
import { Suspense } from 'react';
import { LazyComponent } from './LazyComponent';

export default function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// styled-components
import styled from 'styled-components';

export const Button = styled.button`
  background: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  &:hover {
    background: #0059c1;
  }
`;

🖼️ Semana 2: Galería + Storybook

🔧 Snippets

// Gallery.tsx
import Gallery from 'react-photo-gallery';

const photos = [
  { src: '/img1.jpg', width: 4, height: 3 },
  { src: '/img2.jpg', width: 1, height: 1 },
];

export default function PhotoGallery() {
  return <Gallery photos={photos} />;
}

// .storybook/main.ts
export default {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
};

🧩 Semana 3: Spring Boot Modular

🔧 Plantilla de estructura

backend/
├── domain/
│   └── model, repository
├── application/
│   └── service, usecase
├── infrastructure/
│   └── controller, config, persistence

// DTO ejemplo
public class UserDTO {
  @NotBlank
  private String name;
  @Email
  private String email;
}

🔐 Semana 4: Prisma + tRPC + Seguridad

🔧 Snippets

// tRPC router
export const appRouter = createTRPCRouter({
  user: userRouter,
});

// Prisma schema
model User {
  id    String  @id @default(uuid())
  email String  @unique
  name  String
}

// Middleware JWT
app.use('/api', verifyToken, apiRouter);

🐳 Semana 5: Docker + Edge

🔧 Dockerfile

# Frontend
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN bun install && bun run build
CMD ["bun", "run", "preview"]

# Backend
FROM eclipse-temurin:21-jdk-alpine
COPY target/app.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

🚀 Semana 6: CI/CD

🔧 GitHub Actions

name: CI/CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install && bun run build

📊 Semana 7: Observabilidad

🔧 Snippets

# application.yml
management:
  tracing:
    sampling:
      probability: 1.0
  otlp:
    endpoint: http://otel-collector:4317

// frontend tracing
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';

📚 Semana 8: Monorepo + Documentación

🔧 Turborepo

// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}

📄 Plantilla de Wiki

# Onboarding Técnico

## Requisitos
- Node 20 + Bun
- Java 21

## Scripts
- `bun dev`
- `bun build`
- `bun preview`

📁 my-project/
├── .eslintrc.cjs              # Configuración de ESLint
├── .prettierrc                # Configuración de Prettier
├── .dockerignore              # Ignora archivos innecesarios en Docker
├── docker-compose.yml         # Orquestación de servicios
├── Dockerfile                 # Imagen base del backend o frontend
├── swagger.yaml               # Especificación OpenAPI 3.0
├── docusaurus.config.js       # Configuración de Docusaurus
├── sidebars.js                # Estructura de navegación de la docu
├── docs/                      # Documentación técnica (Docusaurus)
│   └── intro.md
├── src/
│   ├── index.ts               # Punto de entrada principal
│   ├── app/                   # Lógica de negocio
│   ├── routes/                # Endpoints de API
│   ├── controllers/           # Controladores
│   ├── services/              # Servicios
│   ├── middlewares/          # Middlewares
│   └── utils/                 # Utilidades compartidas
├── tests/                     # Pruebas unitarias y de integración
│   └── example.test.ts
├── scripts/                   # Scripts defensivos
│   ├── lint.sh                # Ejecuta ESLint y Prettier
│   ├── test.sh                # Ejecuta pruebas con cobertura
│   ├── build.sh               # Compila el proyecto
│   └── logs.sh                # Filtra y muestra logs relevantes
├── package.json               # Dependencias y scripts
└── tsconfig.json              # Configuración de TypeScript

📜 Scripts defensivos (scripts/)

lint.sh

#!/bin/bash
npx eslint . --ext .ts,.tsx && npx prettier --check .

test.sh

#!/bin/bash
npx vitest run --coverage

build.sh

#!/bin/bash
rm -rf dist && npx tsc

logs.sh

#!/bin/bash
tail -f logs/app.log | grep -iE "error|warn"

🐳 docker-compose.yml

version: '3.9'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=production
  db:
    image: postgres:15
    environment:
      POSTGRES_USER=admin
      POSTGRES_PASSWORD=secret
      POSTGRES_DB=mydb
    ports:
      - "5432:5432"

📘 Swagger (swagger.yaml)

openapi: 3.0.0
info:
  title: My API
  version: 1.0.0
paths:
  /health:
    get:
      summary: Health check
      responses:
        '200':
          description: OK

📚 Docusaurus (docusaurus.config.js)

module.exports = {
  title: 'My Project Docs',
  url: 'https://myproject.com',
  baseUrl: '/',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};

¿Quieres que prepare también los contenidos iniciales para Swagger, Docusaurus o los scripts con lógica más avanzada (como validación de commits, prepush hooks, o integración con CI/CD)?