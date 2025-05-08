export default function CardFilme() {
  return (
    <div className="w-[330px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
      <div className="w-full h-[70%] rounded-t-lg">
        <img
          src="https://cafecomnerd.com.br/wp-content/uploads/2025/03/The-Last-of-Us-2-Ellie-e-Joel-no-MAX.webp"
          alt=""
          className="w-full h-full rounded-t-lg object-cover" />

      </div>
      <div className="w-full h-[30%] flex flex-col pt-2 px-4 gap-1">
        <p className="text-[15px] font-bold">The last Of US</p>
        <p className="text-[10px] text-[#8a898c]">Neil Druckmann</p>
        <div className="w-full flex  justify-between">
          <p className="text-[15px] text-[#8a898c]">2023</p>
          <div className="px-2 bg-[#8f7bd8]/15 text-[#8f7bd8] rounded-lg">Ação</div>
        </div>
      </div>
    </div>
  )
}