import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chat() {
  const [pergunta, setPergunta] = useState("");

  const [resposta, setResposta] = useState(`
# 👋 Bem-vindo ao Matematicando!

É um prazer ter você aqui.

Sou seu professor virtual de matemática e estou pronto para ajudá-lo a aprender de forma simples e prática.

### Posso ajudar com:

- Álgebra
- Geometria
- Trigonometria
- Estatística
- Funções
- Logaritmos
- Cálculos básicos

Digite sua dúvida acima e clique em **Enviar Pergunta**.

Vamos aprender juntos! 🚀📚🧮
`);

  const [loading, setLoading] = useState(false);

  async function enviarPergunta() {
    try {
      setLoading(true);

      const resultado = await axios.post(
        "http://localhost:3000/chat",
        {
          pergunta,
        }
      );

      setResposta(resultado.data.resposta);
    } catch (error) {
      console.error(error);
      setResposta(
        "❌ Erro ao consultar o Matematicando."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <textarea
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Digite sua dúvida..."
        rows={4}
        className="
          w-full
          p-4
          border
          rounded-xl
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-[#0195ff]
        "
      />

      <button
        onClick={enviarPergunta}
        className="
          w-full
          md:w-auto
          bg-[#0195ff]
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-blue-600
          transition
        "
      >
        Enviar Pergunta
      </button>

      {loading && (
        <div className="bg-blue-50 p-4 rounded-xl">
          ⏳ Matematicando está pensando...
        </div>
      )}

      <div
        className="
          bg-[#232941]
          text-white
          rounded-2xl
          p-4
          md:p-6
          shadow-lg
          overflow-x-auto
        "
      >
        <h3 className="font-bold mb-4">
          🤖 Resposta do Matematicando
        </h3>

        <ReactMarkdown>
          {resposta}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Chat;