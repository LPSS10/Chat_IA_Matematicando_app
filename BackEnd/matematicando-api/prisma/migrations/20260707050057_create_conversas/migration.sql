-- CreateTable
CREATE TABLE "public"."Conversa" (
    "id" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conversa_pkey" PRIMARY KEY ("id")
);
