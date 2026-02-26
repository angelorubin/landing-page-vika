# Vika Landing Page

Landing page moderna construída com Next.js 15 e Material-UI (MUI).

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **Material-UI (MUI) 6** - Biblioteca de componentes React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Emotion** - Biblioteca de estilos CSS-in-JS

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── Navbar.tsx         # Barra de navegação
│   ├── Hero.tsx           # Seção hero
│   ├── Features.tsx       # Seção de recursos
│   └── Footer.tsx         # Rodapé
├── lib/                   # Utilitários
│   └── theme.ts           # Tema Material-UI
├── styles/                # Estilos globais
│   └── globals.css        # CSS global com Tailwind
└── types/                 # Definições de tipos TypeScript
```

## 🛠️ Instalação

1. Instale as dependências:
```bash
yarn install
```

2. Execute o servidor de desenvolvimento:
```bash
yarn dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Scripts

- `yarn dev` - Inicia servidor de desenvolvimento
- `yarn build` - Build para produção
- `yarn start` - Inicia servidor de produção
- `yarn lint` - Executa ESLint

## 🎨 Personalização

### Tema Material-UI
O tema está configurado em `src/lib/theme.ts`. Você pode personalizar:
- Cores (palette)
- Tipografia
- Breakpoints
- Componentes personalizados

### Estilos Tailwind
Os estilos globais estão em `src/styles/globals.css` com:
- Classes utilitárias personalizadas
- Gradientes
- Animações e transições

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Railway

## 📝 Licença

MIT License
