import Image from "next/image"
import Link from "next/link"

const cabins = [
  {
    name: "The Pilot's Son 1",
    description: "Modern comfort meets Nordic wilderness in this contemporary cabin with panoramic views.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A-53WyHaPXsprcXGah89C0OxHoYfv6eZ.webp",
    beds: 2,
    size: "45m²",
  },
  {
    name: "The Pilot's Son 2",
    description: "A perfect blend of luxury and nature, featuring a private terrace and stunning forest views.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B-o69jt2GhUB7ePlvvBOeyhwcBBSdj0V.webp",
    beds: 2,
    size: "45m²",
  },
  {
    name: "Henry Ford Cabin",
    description: "Elegant design with floor-to-ceiling windows offering immersive nature experiences.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C-JfTTcV8Uav1Tstuqob8755QoMAOxMS.webp",
    beds: 2,
    size: "55m²",
  },
  {
    name: "Beach House",
    description: "Contemporary comfort with a perfect balance of privacy and scenic winter landscapes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D-11JDGSyGij1TH1VLu0z7M734RHpdls.webp",
    beds: 2,
    size: "40m²",
  },
]

export default function CabinDetails() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Our Cabins</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cabins.map((cabin, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image src={cabin.image || "/placeholder.svg"} alt={cabin.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{cabin.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{cabin.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-sm text-slate-600 dark:text-slate-300">
                    <span>{cabin.beds} people</span>
                    <span>{cabin.size}</span>
                  </div>
                  <Link
                    href={`/reservations?cabin=${encodeURIComponent(cabin.name)}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Book now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

