import ActivityCard from "./ActivityCard"

const activities = [
  {
    icon: "🧖",
    title: "Traditional Sauna",
    description: "Experience authentic Finnish sauna with optional ice swimming.",
  },
  {
    icon: "⛷️",
    title: "Skiing",
    description: "Access to cross-country ski trails and equipment rental.",
  },
  {
    icon: "🛷",
    title: "Sledding",
    description: "Family-friendly sledding hills with equipment provided.",
  },
  {
    icon: "🥾",
    title: "Snowshoeing",
    description: "Guided snowshoe tours through pristine winter landscapes.",
  },
]

export default function ReservationActivities() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Reservation Activities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </section>
  )
}

