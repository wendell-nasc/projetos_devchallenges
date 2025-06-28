✅ Padrões de Design (Design Patterns) aplicados
Separation of Concerns: HTML para estrutura, CSS separado por função (reset, variáveis, base, main).

Modularização: Uso de componentes (/components) e arquivos CSS divididos.

Atomic Design (opcional): Você pode separar os estilos por atoms, molecules, organisms se quiser escalar.


# Estrutura base de um projeto HTML + CSS com boas práticas

projeto-site/
│
├── index.html
├── about.html
├── contact.html
│
├── /assets
│   ├── /css
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── base.css
│   │   └── main.css
│   ├── /js
│   │   └── script.js
│   ├── /img
│   │   └── logo.png
│   └── /fonts
│       └── roboto.woff2
│
├── /components
│   ├── header.html
│   ├── footer.html
│   └── card.html
│
└── README.md


