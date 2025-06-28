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





# CSS
 Media Queries

 Common Breakpoints
Here are some standard breakpoints you might want to use:

/* Mobile devices */
@media screen and (max-width: 480px) {
  /* Mobile styles */
}

/* Tablets */
@media screen and (max-width: 768px) {
  /* Tablet styles */
}

/* Laptops */
@media screen and (max-width: 1024px) {
  /* Laptop styles */
}

/* Desktop */
@media screen and (min-width: 1025px) {
  /* Desktop styles */
}


Best Practices
Mobile-First Approach
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 15px;
}

/* Tablet and up */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    padding: 30px;
  }
}

Using Relative Units
@media screen and (max-width: 768px) {
  .text {
    font-size: 1rem; /* Instead of fixed pixels */
    padding: 1em; /* Instead of fixed pixels */
  }
}
Flexible Images
img {
  max-width: 100%;
  height: auto;
}
