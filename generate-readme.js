import fs from 'fs';

const readmeFiles = [
  { title: 'Menu', file: './packages/components/src/Menu/README.md' },
  { title: 'TextField', file: './packages/components/src/TextField/README.md' },
  {
    title: 'SelectField',
    file: './packages/components/src/SelectField/README.md',
  },
  { title: 'FileField', file: './packages/components/src/FileField/README.md' },
  {
    title: 'FileDropZone',
    file: './packages/components/src/FileDropZone/README.md',
  },
  { title: 'Button', file: './packages/components/src/Button/README.md' },
  {
    title: 'Notifications',
    file: './packages/components/src/Notifications/README.md',
  },
  { title: 'Dialog', file: './packages/components/src/Dialog/README.md' },
  { title: 'Form', file: './packages/components/src/Form/README.md' },
  { title: 'Grid', file: './packages/components/src/Grid/README.md' },
];

const baseReadme = './README.base.md';
const outputReadme = './README.md';

let combinedContent = fs.existsSync(baseReadme)
  ? fs.readFileSync(baseReadme, 'utf8')
  : '';

readmeFiles.forEach(({ title, file }) => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const sectionMarker = `# \`<${title} />\``;
    combinedContent = combinedContent.replace(
      sectionMarker,
      `${sectionMarker}\n\n${content}`
    );
  } else {
    console.warn(`Archivo no encontrado: ${file}`);
  }
});

fs.writeFileSync(outputReadme, combinedContent);

console.log(`README.md combinado creado en: ${outputReadme}`);
