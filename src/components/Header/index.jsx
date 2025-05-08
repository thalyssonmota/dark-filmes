import { FiFilm } from "react-icons/fi";

export default function Header({ showButton = true }) {
  return (
    <header className="w-full h-[60px] flex bg-[#0c0f15] justify-between pr-3 items-center">
      <div
        onClick={() => window.location.href = "/"}
        className="flex h-full gap-2 items-center justify-center pl-3 cursor-pointer">
        <FiFilm color="#9b87f5" size={30} />
        <h2 className="font-bold text-[20px]">Dark Films</h2>
      </div>
      {showButton && (
        <button
          onClick={() => window.location.href = "/cadastrar"}
          className="w-[150px] h-[60%] rounded-md font-bold bg-[#9b87f5] cursor-pointer hover:bg-[#9b87f5]/70 ">Adicionar Filme</button>
      )}
    </header>
  )
}