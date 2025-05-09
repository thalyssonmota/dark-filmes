import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { ImArrowLeft } from "react-icons/im";

export default function Filme() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageWrapper showHeader={false}>
      <div className="w-full h-full flex flex-col px-[350px] pt-12 items-start">
        <button 
        onClick={() => router.back()}
        className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7bd8] cursor-pointer">
        <ImArrowLeft />
        <p>Voltar para a lista de Filmes.</p>
        </button>
      </div>
    </PageWrapper>
  )
}