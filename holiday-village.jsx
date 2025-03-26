import Image from "next/image"
import Link from "next/link"

export default function HolidayVillage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with horizontal blue line */}
      <header className="border-b-2 border-blue-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo on left */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20194628-mG8JQ6z8h49llPz3vZvYjftaiM3POH.png"
                  alt="Lomakyla Rakkaranta Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-800">LOMAKYLA RAKKARANTA</span>
            </div>

            {/* Navigation links on right */}
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/signup" className="text-slate-700 hover:text-blue-600 font-medium">
                Signup
              </Link>
              <Link href="/login" className="text-slate-700 hover:text-blue-600 font-medium">
                Login
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Link
                href="/reservations"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium"
              >
                Reservations
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero section with circular illustration */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 bg-sky-50 rounded-full"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20194628-mG8JQ6z8h49llPz3vZvYjftaiM3POH.png"
                alt="Person in winter scene with blue striped hat"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Welcome message */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Welcome to Rakkaranta Holiday Village
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Experience the magic of Finnish winter in our cozy cabins nestled in the heart of nature. Enjoy
              breathtaking views, pristine snow, and authentic Finnish hospitality.
            </p>
            <Link
              href="/reservations"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Book Your Stay
            </Link>
          </div>
        </div>

        {/* Cabin details section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Cabin Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-sky-100 flex items-center justify-center">
                <span className="text-4xl">🏡</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Cozy Family Cabin</h3>
                <p className="text-slate-600">
                  Perfect for families, this cabin features 2 bedrooms, a fully equipped kitchen, and a private sauna.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-sky-100 flex items-center justify-center">
                <span className="text-4xl">🌲</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Lakeside Retreat</h3>
                <p className="text-slate-600">
                  Enjoy stunning lake views from this premium cabin with a private deck, fireplace, and luxury
                  amenities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-sky-100 flex items-center justify-center">
                <span className="text-4xl">❄️</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Winter Wonderland Cottage</h3>
                <p className="text-slate-600">
                  Our most popular option with direct access to ski trails, a hot tub, and panoramic forest views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reservations activities section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Reservation Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧖</span>
              </div>
              <h3 className="text-center font-bold mb-2">Traditional Sauna</h3>
              <p className="text-sm text-center text-slate-600">
                Experience authentic Finnish sauna with optional ice swimming.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⛷️</span>
              </div>
              <h3 className="text-center font-bold mb-2">Skiing</h3>
              <p className="text-sm text-center text-slate-600">
                Access to cross-country ski trails and equipment rental.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🛷</span>
              </div>
              <h3 className="text-center font-bold mb-2">Sledding</h3>
              <p className="text-sm text-center text-slate-600">
                Family-friendly sledding hills with equipment provided.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥾</span>
              </div>
              <h3 className="text-center font-bold mb-2">Snowshoeing</h3>
              <p className="text-sm text-center text-slate-600">
                Guided snowshoe tours through pristine winter landscapes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

