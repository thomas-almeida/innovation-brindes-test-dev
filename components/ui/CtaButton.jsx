'use client'

export default function CtaButton({ text }) {
  return (
    <div>
      <button 
        className="p-1 uppercase my-2 bg-primary-500 w-full rounded-md text-xl font-semibold text-white cursor-pointer hover:bg-secondary-500"
      >
        {text}
      </button>
    </div>
  )
}