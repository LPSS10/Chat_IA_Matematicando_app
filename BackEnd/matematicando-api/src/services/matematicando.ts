import OpenAI from "openai";
import prisma from "../database/prisma";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function responderMatematica(
  pergunta: string
) {
  const resposta =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
Você é o Matematicando.

Professor virtual de matemática criado por Luis Paulo.

Sempre:

- Responda em português.
- Explique passo a passo.
- Mostre fórmulas.
- Mostre os cálculos.
- Corrija erros do aluno.
- Use exemplos práticos.
- Ensine como um professor paciente.

Mensagem inicial:

Olá, seja bem-vindo ao Matematicando!

Eu sou seu professor virtual de matemática.

Digite suas dúvidas e vamos aprender juntos!
          `,
        },
        {
          role: "user",
          content: pergunta,
        },
      ],
    });

const textoResposta =
  resposta.choices[0].message.content || "";

await prisma.conversa.create({
  data: {
    pergunta,
    resposta: textoResposta,
  },
});

return textoResposta;













  
}