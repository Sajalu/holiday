export default function ActivityCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-center font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-sm text-center text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}

