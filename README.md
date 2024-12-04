
## **web-monorepo-ui-components**

Este proyecto es un monorepo para la creación, empaquetado y gestión de componentes de interfaz de usuario utilizando herramientas como **Lerna**, **Rollup**, **ESLint**, y **Prettier**.

---

### **Estructura del proyecto**

```plaintext
web-monorepo-ui-components/
├── packages/
│   ├── components/    # Paquete principal de componentes
│   │   ├── src/       # Código fuente
│   │   ├── dist/      # Archivos empaquetados
│   │   ├── rollup.config.js # Configuración de Rollup
│   │   └── package.json
├── eslint.config.js    # Configuración de ESLint
├── .prettierrc         # Configuración de Prettier
├── package.json        # Configuración principal del monorepo
├── lerna.json          # Configuración de Lerna
└── README.md           # Este archivo
```

---

### **Requisitos previos**
- **Node.js** (versión >= 16).
- **npm** o **yarn** como gestor de paquetes.
- **Lerna** ya instalado y configurado.

---

### **Comandos básicos**

#### **1. Instalar dependencias**
Ejecuta el siguiente comando en la raíz del monorepo para instalar las dependencias globales y de los paquetes:
```bash
npm install
```

#### **2. Construir los paquetes**
Compila los paquetes con Rollup utilizando el comando:
```bash
lerna run build
```

Esto ejecutará el script `build` en todos los paquetes configurados.

#### **3. Limpiar el código**
Usa Prettier y ESLint para formatear y validar el código:
```bash
# Formatear con Prettier
npx prettier --write .

# Validar y corregir con ESLint
npx eslint . --fix
```

#### **4. Agregar un nuevo componente**
1. Navega al paquete `components`:
   ```bash
   cd packages/components
   ```

2. Crea un nuevo archivo o directorio dentro de `src/`. Por ejemplo:
   ```bash
   mkdir src/Button
   touch src/Button/index.js
   ```

3. Escribe el código del componente. Ejemplo de `Button/index.js`:
   ```javascript
   export const Button = ({ label }) => {
     return `<button>${label}</button>`;
   };
   ```

4. Asegúrate de exportarlo en el archivo principal (`src/index.js`):
   ```javascript
   export * from "./Button";
   ```

5. Compila el paquete:
   ```bash
   npm run build
   ```

---

### **Usar un componente empaquetado**
Después de compilar, puedes importar los componentes empaquetados en otros proyectos:
```javascript
import { Button } from "@web/components";

const myButton = Button({ label: "Click me" });
document.body.innerHTML = myButton;
```

---

### **Comandos útiles de Lerna**

#### **1. Listar paquetes en el monorepo**
```bash
npx lerna list
```

#### **2. Ejecutar un script en todos los paquetes**
Por ejemplo, para compilar:
```bash
npx lerna run build
```

#### **3. Limpiar todos los paquetes**
Elimina las carpetas `node_modules` de cada paquete:
```bash
npx lerna clean
```

---

### **Contribuir**
1. Realiza un fork de este repositorio.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Haz commits y abre un pull request.


---

## **Usar el monorepo desde otros proyectos**

### **1. Publicar el paquete (opcional)**
Si quieres que los componentes estén disponibles públicamente o en un registro privado, puedes publicarlos en **NPM**:

1. Autentícate en NPM:
   ```bash
   npm login
   ```

2. Publica el paquete:
   ```bash
   npm publish --access public
   ```

3. Otros proyectos podrán instalarlos:
   ```bash
   npm install @web/components
   ```

---

### **2. Usar el paquete en un proyecto localmente**
Si no deseas publicarlo en NPM, puedes usarlo localmente con `npm link`:

1. **Desde el monorepo**, ejecuta:
   ```bash
   cd packages/components
   npm link
   ```

2. **En otro proyecto**, vincula el paquete:
   ```bash
   npm link @web/components
   ```

3. Luego, importa los componentes en el código:
   ```javascript
   import { Button } from "@web/components";

   const App = () => {
     return <Button label="Click me!" />;
   };
   ```

---

### **3. Instalar como dependencia desde Git**
Si no deseas publicarlo en NPM, pero quieres compartirlo entre equipos, puedes instalarlo directamente desde el repositorio Git:

1. Asegúrate de que el monorepo esté en un control de versiones como GitHub o GitLab.
2. En otro proyecto, instala el paquete desde el repositorio:
   ```bash
   npm install git+https://github.com/tu-usuario/web-monorepo-ui-components.git
   ```
3. Asegúrate de que el paquete tenga correctamente configurado el campo `main` en `package.json` para que otros proyectos puedan importarlo.

---

### **Ventajas de usar este monorepo**
- **Estandarización**: Puedes usar los mismos componentes con el mismo estilo en múltiples proyectos.
- **Eficiencia**: No necesitas duplicar código ni gestionar repositorios separados para cada componente.
- **Flexibilidad**: Puedes mantener dependencias comunes en la raíz del monorepo, como herramientas de linting o formateo.
