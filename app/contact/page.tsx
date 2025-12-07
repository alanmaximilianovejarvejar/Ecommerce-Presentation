"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingBag, Heart, Leaf, Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold tracking-tight">BEA BABIES</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">Get In Touch</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Have questions about our bamboo baby products? We're here to help! Reach out to our friendly team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Send us an email anytime</p>
                <a href="mailto:hello@beababies.com" className="text-sm font-medium text-primary hover:underline">
                  hello@beababies.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Mon-Fri from 9am to 6pm</p>
                <a href="tel:+34912345678" className="text-sm font-medium text-primary hover:underline">
                  +34 912 345 678
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-3">
                  <MessageCircle className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Chat with our support team</p>
                <Button variant="link" className="text-sm font-medium p-0 h-auto">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="María" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="González" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="maria@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+34 612 345 678" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Product Inquiry</option>
                      <option>Order Support</option>
                      <option>Shipping Question</option>
                      <option>Return Request</option>
                      <option>General Question</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Map */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Visit Our Store</CardTitle>
                  <CardDescription>Come see our bamboo baby products in person</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">BEA BABIES Store</p>
                      <p className="text-sm text-muted-foreground">Calle de la Moda, 123</p>
                      <p className="text-sm text-muted-foreground">28001 Madrid, Spain</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Opening Hours</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 11:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-sm font-medium">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Get directions to our store</p>
                  </div>
                </div>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-accent/10 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">What are your shipping times?</h4>
                    <p className="text-xs text-muted-foreground">
                      We ship within 24-48 hours and delivery takes 3-5 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Do you offer international shipping?</h4>
                    <p className="text-xs text-muted-foreground">Yes! We ship to most European countries.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">What is your return policy?</h4>
                    <p className="text-xs text-muted-foreground">
                      30-day returns on all unworn items with tags attached.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full mt-2 bg-transparent" size="sm">
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-accent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">Need Immediate Assistance?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our customer support team is available Monday through Friday, 9 AM to 6 PM CET
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call +34 912 345 678
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Live Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Baby Clothes
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-semibold">BEA BABIES</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BEA BABIES. All rights reserved. Sustainable bamboo essentials for your baby.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
