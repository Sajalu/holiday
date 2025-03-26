"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

const cabins = ["The Pilot's Son 1", "The Pilot's Son 2", "Henry Ford Cabin", "Beach House"]

export default function ReservationsPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    cabin: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  })

  useEffect(() => {
    const cabin = searchParams.get("cabin")
    if (cabin) {
      setFormData((prev) => ({ ...prev, cabin }))
    }
  }, [searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the reservation data to your backend
    console.log("Reservation form submitted:", formData)
    alert("Thank you for your reservation request. We will confirm your booking shortly!")
  }

  return (
    <div className="container mx-auto max-w-md mt-10 p-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-5">Make a Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="cabin">Select Cabin</Label>
            <Select value={formData.cabin} onValueChange={(value) => setFormData({ ...formData, cabin: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a cabin" />
              </SelectTrigger>
              <SelectContent>
                {cabins.map((cabin) => (
                  <SelectItem key={cabin} value={cabin}>
                    {cabin}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="checkIn">Check-in Date</Label>
            <Input
              id="checkIn"
              type="date"
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="checkOut">Check-out Date</Label>
            <Input
              id="checkOut"
              type="date"
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="guests">Number of Guests</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="2"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Make Reservation
          </Button>
        </form>
      </Card>
    </div>
  )
}

