export default function CabinCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  )
}

