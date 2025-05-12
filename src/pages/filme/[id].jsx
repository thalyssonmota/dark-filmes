import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { ImArrowLeft } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { TbTrashXFilled } from "react-icons/tb";
import instance from "@/api/instance";
import { useEffect, useState } from "react";



export default function Filme() {
  const router = useRouter();
  const { id } = router.query;
  const [filmes, setFilmes] = useState({});

  useEffect(() => {
    async function Filmes() {
      const response = await instance.get(`/api/movies/${id}`);
      setFilmes(response.data)
    }
    if (id) {
      getFilmesById();
    }
  }, []);

  return (
    <PageWrapper showHeader={false}>
      <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7bd8] cursor-pointer">
          <ImArrowLeft />
          <p>Voltar para a lista de Filmes.</p>
        </button>
        <div className="w-full min-h-[90vh] flex ">
          <div className="w-[40%] h-full flex flex-col">
            <div className="w-full h-[90%]">
              <img
                className="w-full h-full rounded-lg object-cover"
                src="https://sm.ign.com/t/ign_br/screenshot/default/ka-tlou-charactersjoel-1080x1350-hbomax-bra-organic-prelaunc_432d.600.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex h-[10%] pt-4 justify-between items-center">
              <button className="w-[45%] h-full border border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 cursor-pointer flex items-ceenter justify-center gap-2 py-2">
                <FaRegEdit size={20} />
                Editar Filme
              </button>
              <button className="w-[45%] h-full border border-[#ef444433] text-[#ef4444] rounded-md hover:bg-[#ef4444]/20 flex items-center justify-center gap-2 py-2 cursor-pointer">
                <TbTrashXFilled size={22} />
                Excluir Filme</button>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col px-4 ">
            <div className="w-full flex gap-2 items-baseline">
              <h1 className="text-[35px] text-[#9b87f5] font-bold">The Last Of US</h1>
              <p className="text-[#8a898c] font-semibold text-[18px]">(2024)</p>
            </div>
            <div className="w-full flex gap-4">
              <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                <p className="text-[17px]">10/10</p>
              </div>
              <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                <p className="text-[17px]">Ação</p>
              </div>
            </div>
            <div className="w-full flex flex-col mt-8">
              <h4 className="font-bold text-[20px]">Diretor</h4>
              <p className="text[#8a898c]">Neil Druckmann</p>
            </div>
            <div className="w-full flex flex-col mt-8">
              <h4 className="font-bold text-[20px]">Sinopse</h4>
              <p className="text[#8a898c]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio, vel facere amet incidunt quod deserunt in, ipsum similique minima nihil maiores veniam sed laborum explicabo tenetur dolore temporibus rem?</p>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  )
}