import CardFilme from "@/components/CardFilme";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <h1 className="text-[40px] text-[#907cda] font-bold">Sua Coleção de Filmes</h1>
        <p className="text-[20px] text-[#8a898c]">Acompanhe seus filmes favoritos. Adicione novos filmes à sua coleção!</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center gap-4 mt-8">
        <CardFilme />
      </div>

    </PageWrapper>
  )
}