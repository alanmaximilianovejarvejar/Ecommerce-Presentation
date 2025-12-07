"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  phone?: string
  joinDate: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("beababies_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate login - In production, call your API
    setLoading(true)

    // For demo purposes, accept any credentials
    const mockUser: User = {
      id: "user_" + Math.random().toString(36).substring(7),
      name: email.split("@")[0],
      email: email,
      phone: "+34 612 345 678",
      joinDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    }

    localStorage.setItem("beababies_user", JSON.stringify(mockUser))
    setUser(mockUser)
    setLoading(false)

    // Redirect to dashboard
    router.push("/dashboard")
  }

  const register = async (name: string, email: string, password: string) => {
    // Simulate registration - In production, call your API
    setLoading(true)

    const mockUser: User = {
      id: "user_" + Math.random().toString(36).substring(7),
      name: name,
      email: email,
      joinDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    }

    localStorage.setItem("beababies_user", JSON.stringify(mockUser))
    setUser(mockUser)
    setLoading(false)

    // Redirect to dashboard
    router.push("/dashboard")
  }

  const logout = () => {
    localStorage.removeItem("beababies_user")
    setUser(null)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
