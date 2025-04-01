export default function ContainerComposition({ children }) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] lg:w-[85%]">
        {children}
      </div>
    </div>
  )
}