import Chat from "../components/Chat";

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <header className="bg-[#232941] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            📚 Matematicando
          </h1>

          <p className="mt-2 text-sm md:text-base text-blue-200">
            Seu professor virtual de matemática
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold text-[#232941]">
            Bem-vindo ao Matematicando
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Tire dúvidas, pratique exercícios
            e aprenda matemática passo a passo
            com inteligência artificial.
          </p>

          <div className="mt-8">
            <Chat />
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>
          Desenvolvedor: Luís Paulo da Silva de Siqueira
        </p>

        <p>
          Todos os direitos reservados © 2025
        </p>
      </footer>
    </div>
  );
}

export default Home;

<div className="bg-blue-50 border-l-4 border-[#0195ff] p-6 rounded-xl mb-6">
  <h2 className="text-xl font-bold text-[#232941]">
    👋 Bem-vindo ao Matematicando
  </h2>

  <p className="mt-3 text-gray-700">
    Eu sou seu professor virtual de matemática.
  </p>

  <p className="mt-2 text-gray-700">
    Digite sua dúvida abaixo e receba explicações
    passo a passo com inteligência artificial.
  </p>
</div>