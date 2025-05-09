export default function CardFilme({ filme }) {
  return (
    <div className="w-[330px] h-[280px] flex flex-col rounded-lg bg-[#222222] border border-transparent hover:border-[#8f7bd8] transition-all duration-300 ease-in-out">
      <div className="w-full h-[70%] rounded-t-lg relative">
        <img
          src={filme.banner}
          alt={filme.titulo}
          className="w-full h-full rounded-t-lg object-cover" />
        <div className="absolute top-1 left-2 flex text-[#9ca3af] font-semibold">
          <p className="text-[17px] text-[#1aed2b]">{filme.nota}</p>
          <p>/10</p>
        </div>
      </div>
      <div className="w-full h-[30%] flex flex-col pt-2 px-4 gap-1 ">
        <p className="text-[15px] font-bold">{filme.titulo}</p>
        <p className="text-[10px] text-[#8a898c]">{filme.diretor}</p>
        <div className="w-full flex  justify-between">
          <p className="text-[15px] text-[#8a898c]">{filme.ano}</p>
          <div className="px-2 bg-[#8f7bd8]/15 text-[#8f7bd8] rounded-lg">{filme.genero}</div>
        </div>
      </div>
    </div>
  )
}