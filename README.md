

---

# 🧩 `my-app` – Monorepo Fullstack con pnpm, Vite, React y Express

Este repositorio contiene una aplicación fullstack moderna organizada como monorepo con `pnpm`, que incluye:

- **Frontend**: React + Vite + TypeScript + Cypress
- **Backend**: Express + TypeScript + arquitectura modular
- **Orquestación opcional**: Docker Compose para frontend, backend y base de datos

---

## 🚀 Instalación y desarrollo

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/my-app.git
cd my-app
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en modo desarrollo

```bash
# Frontend
pnpm --filter frontend dev

# Backend
pnpm --filter backend dev
```

> También puedes usar `pnpm dev` si defines un script raíz que orquesta ambos.

---

## 🧱 Estructura del proyecto

```plaintext
my-app/
├── apps/
│   ├── frontend/        # Cliente React con Vite
│   └── backend/         # API REST con Express
├── .vscode/             # Configuración del entorno
├── docker-compose.yml   # Orquestación de servicios
├── pnpm-workspace.yaml  # Configuración del monorepo
└── README.md
```

### Frontend

- `components/`, `pages/`, `layouts/`: estructura modular para UI
- `hooks/`, `services/`, `utils/`: lógica reutilizable
- `cypress/`, `tests/`: testing E2E y unitario

### Backend

- `controllers/`, `routes/`, `middlewares/`: arquitectura REST
- `models/`, `services/`, `utils/`: lógica de negocio y persistencia
- `config/`: variables de entorno y configuración

---

## 📜 Scripts útiles

Desde la raíz o con `--filter`:

| Script        | Descripción                           |
| ------------- | ------------------------------------- |
| `pnpm dev`    | Inicia frontend y backend en modo dev |
| `pnpm build`  | Compila ambos proyectos               |
| `pnpm lint`   | Linting con ESLint                    |
| `pnpm test`   | Ejecuta pruebas unitarias             |
| `pnpm e2e`    | Ejecuta pruebas E2E con Cypress       |
| `pnpm format` | Formatea el código con Prettier       |

---

## 🧭 Diagrama de arquitectura

¿