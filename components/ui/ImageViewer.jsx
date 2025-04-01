import Image from "next/image"

export default function ImageViewer({
  image,
  description
}) {

  const mockMapping = [0, 1, 2, 3]

  return (
    <div>
      <div className="border border-slate-400 flex justify-center shadow-sm">
        <Image
          src={image}
          width={400}
          height={400}
          alt={`imagem de ${description}`}
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {
          mockMapping.map((mock) => (
            <div
              key={mock}
              className="border border-slate-400 shadow-md"
            >
              <Image
                src={image}
                width={100}
                height={50}
                alt={`imagem de ${description}`}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}