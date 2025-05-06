import PageWrapper from "@/components/PageWrapper";
import CustomSelect from "@/components/CustomSelect";
import CustomImput from "@/components/CustomInput";

export default function Cadastrar() {
  return (
    <PageWrapper showButton={false}>
      <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1 className="text-[40px] font-bold text-[#9a86f5]">Adicione um novo Filme</h1>
        <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
        <div className="w-full flex justify-center pt-[40px]">
          <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border-2 border-[#3a3645] flex flex-col p-5 gap-4">
            <CustomImput
              label="Título"
              placeholder="Digite o título do filme"
              type="text"
            />

            <CustomImput
              label="Diretor"
              placeholder="Digite o nome do diretor"
              type="text"
            />

            <div className="w-full flex gap-4">
              <div className="w-[50%]">
                <CustomImput
                  label="Ano"
                  placeholder="Digite o ano de lançamento"
                  type="number"
                />
              </div>

              <div className="w-[50%]">
                <CustomSelect
                  label="Gênero"
                  options={["Ação", "Comédia", "Drama", "Terror", "Ficção Científica", "Romance"]}
                />

              </div>
            </div>

            <div className="w-[30%] flex gap-2 items-center">
              <div className="w-[50%]">
                <CustomImput
                  label="Nota"
                  placeholder="0"
                  type="number"
                />
              </div>
              <p className=" flex mt-8">10 / 10</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-[17px] font-bold">Sinopse</label>
              <textarea className="w-full min-h-[100px] rounded-lg border border-[#ffffff1a] focus:border-purple-400 p-2 bg-[#141414] outline-none"></textarea>
            </div>
            <CustomImput
              label="Banner"
              placeholder="URL da Imagem"
              type="text"
            />
            <div className="w-full flex justify-end gap-4">
              <button
                type="reset"
                className="w-[100px] h-[50px] rounded-md bg-[#141414] border border-[#3a364c] cursor-pointer hover:bg-white/10">
                Cancelar
              </button>

              
            </div>
          </form>
        </div>
      </div>

    </PageWrapper>
  )
}