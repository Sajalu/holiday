"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the login data to your backend
    console.log("Login form submitted:", formData)
    if (formData.isAdmin) {
      // Redirect to admin dashboard
      window.location.href = "/admin-dashboard"
    } else {
      // Redirect to user dashboard
      window.location.href = "/"
    }
  }

  return (
    <div className="container mx-auto max-w-md mt-10 p-6">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="isAdmin"
            checked={formData.isAdmin}
            onCheckedChange={(checked) => setFormData({ ...formData, isAdmin: checked })}
          />
          <Label htmlFor="isAdmin">Login as Admin</Label>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}

