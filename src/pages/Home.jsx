import GameCard from '../components/GameCard'
import JogoImg1 from '../assets/minecraft.jpg'
import JogoImg2 from '../assets/cod.jpg'
import JogoImg3 from '../assets/supermario.jpg'
import JogoImg4 from '../assets/gta.png'

const Home = () => {
  const games = [
    { id: 1, titulo: "Minecraft", preco: "R$ 300.00", imagem: JogoImg1 },
    { id: 2, titulo: "Call Of Duty", preco: "R$ 350.00", imagem: JogoImg2 },
    { id: 3, titulo: "Super Mario", preco: "R$ 400.00", imagem: JogoImg3 },
    { id: 4, titulo: "GTA-V", preco: "R$ 450.00", imagem: JogoImg4 }
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">Jogos em Destaques</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

        {games.map((game) => (
          <GameCard
            key={game.id}
            titulo={game.titulo}
            preco={game.preco}
            imagem={game.imagem}
          />
        ))}
      </section>

    </main>
  )
}

export default Home
