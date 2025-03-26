"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the contact form data to your backend
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <div className="container mx-auto max-w-2xl mt-10 p-6">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-3">Our Contact Details</h2>
          <div className="space-y-2">
            <p>
              <strong>Address:</strong> 123 Forest Road, Rakkaranta, Finland
            </p>
            <p>
              <strong>Phone:</strong> +358 123 456 789
            </p>
            <p>
              <strong>Email:</strong> info@rakkaranta.fi
            </p>
            <p>
              <strong>Hours:</strong> Mon-Fri 9am-5pm
            </p>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-3">Leave a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

