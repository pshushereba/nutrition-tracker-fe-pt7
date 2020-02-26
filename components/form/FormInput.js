export default function FormInput({ content, placeHolder }) {
  return (
    <div className="flex flex-col my-2">
      <label className="text-xs px-2">{content}</label>
      <input
        className="w-full border border-gray-400 rounded pl-2 py-2"
        placeholder={placeHolder}
      />
    </div>
  )
}