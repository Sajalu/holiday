import Link from "next/link"

export default function Hero() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Welcome to Rakkaranta Holiday Village
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Experience the magic of Finnish winter in our cozy cabins nestled in the heart of nature. Enjoy breathtaking
            views, pristine snow, and authentic Finnish hospitality.
          </p>
          <Link
            href="/reservations"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </div>
  )
}

