export default function FormInput({ content, placeHolder }) {
  return (
    <div className="flex flex-col my-2">
      <div className="-mb-3 z-0 pl-2">
        <label className="text-xs bg-white">{content}</label>
      </div>
      <input
        className="w-full border border-gray-400 rounded pl-2 py-2"
        placeholder={placeHolder}
      />
    </div>
  )
}