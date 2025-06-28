 Nível 1 – Fundamentos do Frontend
🔹 Objetivo: Dominar HTML, CSS e JS puro
✅ JavaScript30

30 mini-projetos JS sem frameworks

Ex: relógio, galeria de imagens, busca dinâmica

✅ Frontend Mentor – Gratuito

Comece pelos desafios marcados como "Newbie"

Ex: cartões, landing pages estáticas, layouts responsivos

🔧 Nível 2 – Frameworks Frontend + UI real
🔹 Objetivo: Criar apps React com UI moderna
✅ Codewell

Recrie interfaces com base nos arquivos Figma

✅ DevChallenges – Frontend

Comece com: “Responsive Web Developer Path”

🧩 Nível 3 – Backend e APIs
🔹 Objetivo: Criar e consumir APIs com autenticação
✅ The Odin Project – Fullstack JS

Frontend com React

Backend com Node.js + Express + MongoDB

Desafios: blog, autenticação com JWT, API REST

✅ DevChallenges – Fullstack Projects

Ex: App de login, gerenciador de tarefas, app de receita

✅ Auth0 Fullstack Tutorials

Aprenda autenticação real com JWT e OAuth

💾 Nível 4 – APIs, lógica e banco de dados
🔹 Objetivo: Criar sistemas mais estruturados
✅ Codewars

Desafios de lógica e backend com foco em Node, Python, SQL

✅ Postman Challenges

Pratique criar e consumir APIs RESTful

🏗️ Nível 5 – Projetos Profissionais e Portfólio
🔹 Objetivo: Criar projetos completos e realistas
✅ App Ideas Collection (GitHub)

Dividido por dificuldade: iniciantes até avançados

✅ Karan’s Projects (GitHub)

Lista de ideias de sistemas (blog, CMS, repositório, etc.)

✅ Frontend Mentor Pro

Projetos fullstack com autenticação, carrinho, dashboard, etc.

✅ Dica extra: Monte um portfólio com admin e blog
Você pode usar o projeto que começamos aqui como base: React + Node.js + JWT + Painel Admin + Blog. Quer ajuda para:

Implantar no Vercel/Render

Criar uma landing de portfólio bonita

Integrar com banco real (SQLite/Mongo)

É só me avisar! Posso montar isso por etapas com você.



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
