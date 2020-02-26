import MenuSVG from "./svg/MenuSVG"

const AltHeader = () => {
  
  return (
    <div className="flex w-full text-xl bg-gray-900 pt-8 pb-4 px-4">
      <MenuSVG />
      <div className="flex w-full justify-center">
        <h1 className="title text-white justify-center">NUTRITION TRACKER</h1>
      </div>
    </div>
  )
}

export default AltHeader