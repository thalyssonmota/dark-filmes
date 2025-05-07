import PageWrapper from "@/components/PageWrapper";
import CustomSelect from "@/components/CustomSelect";
import CustomImput from "@/components/CustomInput";
import { useState } from "react";
import instance from "@/api/instance";
import { toast } from "react-toastify";

export default function Cadastrar() {
  const [titulo, setTitulo] = useState("");
  const [diretor, setDiretor] = useState("");
  const [ano, setAno] = useState(0);
  const [genero, setGenero] = useState("");
  const [nota, setNota] = useState(0);
  const [sinopse, setSinopse] = useState("");
  const [banner, setBanner] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await instance.post("/api/movies", {
        titulo: titulo,
        diretor: diretor,
        ano: ano,
        genero: genero,
        nota: nota,
        sinopse: sinopse,
        banner: banner
      })
      toast.success("Filme adicionado com sucesso!");
      setTitulo("");
      setDiretor("");
      setAno(0);
      setGenero("");
      setNota(0);
      setSinopse("");
      setBanner("");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao adicionar filme!");
    }
  }

  return (
    <PageWrapper showButton={false}>
      <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1 className="text-[40px] font-bold text-[#9a86f5]">Adicione um novo Filme</h1>
        <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
        <div className="w-full flex justify-center pt-[40px]">
          <form
            onSubmit={handleSubmit}
            className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border-2 border-[#3a3645] flex flex-col p-5 gap-4">
            <CustomImput
              label="Título"
              value={titulo}
              placeholder="Digite o título do filme"
              type="text"
              onChange={
                (e) => setTitulo(e.target.value)
              }
            />

            <CustomImput
              label="Diretor"
              value={diretor}
              placeholder="Digite o nome do diretor"
              type="text"
              onChange={
                (e) => setDiretor(e.target.value)
              }
            />

            <div className="w-full flex gap-4">
              <div className="w-[50%]">
                <CustomImput
                  label="Ano"
                  value={ano}
                  placeholder="Digite o ano de lançamento"
                  type="number"
                  onChange={
                    (e) => setAno(e.target.value)
                  }
                />
              </div>

              <div className="w-[50%]">
                <CustomSelect
                  onChange={
                    (e) => setGenero(e.target.value)
                  }
                  label="Gênero"
                  value={genero}
                  options={["Ação", "Comédia", "Drama", "Terror", "Ficção Científica", "Romance"]}
                />

              </div>
            </div>

            <div className="w-[30%] flex gap-2 items-center">
              <div className="w-[50%]">
                <CustomImput
                  label="Nota"
                  value={nota}
                  placeholder="0"
                  type="number"
                  onChange={
                    (e) => setNota(e.target.value)
                  }
                />
              </div>
              <p className=" flex mt-8">10 / 10</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-[17px] font-bold">Sinopse</label>
              <textarea
                onChange={
                  (e) => setSinopse(e.target.value)
                }
                value={sinopse}
                className="w-full min-h-[100px] rounded-lg border border-[#ffffff1a] focus:border-purple-400 p-2 bg-[#141414] outline-none"></textarea>
            </div>
            <CustomImput
              label="Banner"
              value={banner}
              placeholder="URL da Imagem"
              type="text"
              onChange={
                (e) => setBanner(e.target.value)
              }
            />
            <div className="w-full flex justify-end gap-4">
              <button
                type="reset"
                className="w-[100px] h-[50px] rounded-md font-bold bg-[#141414] border border-[#3a364c] cursor-pointer hover:bg-white/10">
                Cancelar
              </button>
              <button
                type="submit"
                className="w-[100px] h-[50px] rounded-md font-bold bg-[#9a86f5] border border-[#3a364c] cursor-pointer hover:bg-[#9a30f4]/50">
                Salvar Filme
              </button>


            </div>
          </form>
        </div>
      </div>

    </PageWrapper>
  )
}