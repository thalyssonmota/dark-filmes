import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar() {
  return (
    <PageWrapper showButton={false}>
      <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1 className="text-[40px] font-bold text-[#9a86f5]">Adicione um novo Filme</h1>
        <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
        <div className="w-full flex justify-center pt-[40px]">
          <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border-2 border-[#3a3645]"></form>
        </div>
      </div>

    </PageWrapper>
  )
}