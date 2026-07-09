import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { responderMatematica } from "./services/matematicando";
import prisma from "./database/prisma";

console.log(
  "GROQ_API_KEY:",
  process.env.GROQ_API_KEY
    ? "CHAVE ENCONTRADA ✅"
    : "CHAVE NÃO ENCONTRADA ❌"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Matematicando API funcionando!");
});

app.get("/chat", (req, res) => {
  res.send("Chat funcionando!");
});

app.get("/conversas", async (req, res) => {
  const conversas = await prisma.conversa.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json(conversas);
});

app.post("/chat", async (req, res) => {
  try {
    const { pergunta } = req.body;

    const resposta = await responderMatematica(
      pergunta
    );

    res.json({
      resposta,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      erro: "Erro ao consultar a IA",
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});