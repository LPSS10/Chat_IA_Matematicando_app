📚 Matematicando
Sobre o Projeto

O Matematicando é uma plataforma educacional baseada em Inteligência Artificial desenvolvida com o objetivo de auxiliar estudantes no aprendizado de matemática por meio de conversação em linguagem natural.

O projeto foi idealizado a partir dos estudos desenvolvidos no Trabalho de Conclusão de Curso em Engenharia de Computação sobre o uso da Inteligência Artificial para identificação de padrões de erro e personalização do processo de aprendizagem.

A aplicação integra modelos de IA Generativa para interpretar perguntas, fornecer explicações passo a passo, auxiliar na resolução de exercícios e promover uma experiência de aprendizagem mais personalizada.

Objetivos
Facilitar o aprendizado de matemática utilizando Inteligência Artificial.
Fornecer respostas personalizadas em linguagem natural.
Apoiar estudantes na resolução de exercícios e dúvidas matemáticas.
Explorar o potencial da IA como ferramenta educacional.
Servir como laboratório prático para estudos em IA Generativa, APIs REST, Engenharia de Prompts e aplicações educacionais.

Arquitetura da Solução

Frontend (React + TypeScript)
            │
            ▼
      API REST (Express)
            │
            ▼
    Serviço de IA (Groq)
            │
            ▼
 PostgreSQL + Prisma ORM

Tecnologias Utilizadas
Frontend
React
TypeScript
Tailwind CSS
Axios
React Markdown
Vite
Backend
Node.js
Express
TypeScript
API REST
Banco de Dados
PostgreSQL
Prisma ORM
Inteligência Artificial
Groq
Llama 3.3 70B
Engenharia de Prompts
DevOps
Git
GitHub

Principais Funcionalidades
🤖 Chat Inteligente

Permite que o usuário interaja com a IA utilizando linguagem natural.

Exemplo:

Usuário:
Quanto é 25 × 12?

Matematicando:
25 × 12 = 300

📖 Explicações Passo a Passo

A IA não entrega apenas respostas prontas. O sistema foi projetado para explicar o raciocínio utilizado em cada resolução.

🗃 Histórico de Conversas

As interações são armazenadas em PostgreSQL utilizando Prisma ORM, permitindo:

Registro das perguntas realizadas.
Armazenamento das respostas geradas.
Recuperação do histórico do usuário.
🔗 API REST

A comunicação entre Frontend e Backend ocorre através de endpoints REST.

Exemplo:

POST /chat
GET /conversas

Aplicação de Inteligência Artificial

O projeto possui forte inspiração em pesquisas relacionadas ao uso da IA na educação.

Durante o desenvolvimento foram explorados conceitos como:

Chatbots educacionais.
Engenharia de Prompts.
Aprendizagem personalizada.
Identificação de dificuldades de aprendizagem.
Assistentes inteligentes para apoio ao ensino.

O projeto também serve como base para futuras implementações utilizando:

LangChain
RAG (Retrieval Augmented Generation)
Bases de conhecimento personalizadas
Agentes de IA
Aprendizados Obtidos

Durante o desenvolvimento do Matematicando foram aplicados conhecimentos relacionados a:

Desenvolvimento Full Stack.
React e TypeScript.
Node.js e Express.
Integração com APIs de IA Generativa.
PostgreSQL e Prisma.
Arquitetura Cliente-Servidor.
Versionamento com Git e GitHub.
Desenvolvimento de APIs REST.
Engenharia de Prompts.
Aplicações práticas de Inteligência Artificial.
Autor

Luís Paulo da Silva de Siqueira

Estudante de Engenharia de Computação – UNIVESP

LinkedIn: https://www.linkedin.com/in/luíspaulodasilvadesiqueira

GitHub: https://github.com/LPSS10
