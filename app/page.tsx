"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Heart, Leaf, Shield, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useState } from "react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold tracking-tight">BEA BABIES</span>
          </Link>
              {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary">Shop</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">About Us</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
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
      <section className="relative bg-gradient-to-br from-secondary/30 via-background to-primary/10">
        <div className="container mx-auto px-4 py-16 md:py-24 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                100% Organic Bamboo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Soft Bamboo Essentials for Your Baby
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Discover our collection of sustainable, hypoallergenic, and gentle bamboo clothing that provides
                ultimate comfort and care for your little one in every season.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/modern-nursery-with-bamboo-baby-clothes-and-natura.jpg" alt="Bamboo baby essentials" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of bamboo essentials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden bg-secondary/20">
                <Image
                  src="/bamboo-baby-fabric-rolls-natural-beige-color.jpg"
                  alt="Bamboo Fabric Roll"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Bamboo Fabric Roll - Ultra Soft & Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Crafted from premium sustainable bamboo fibers, breathable, and ideal for baby clothing, blankets, and
                  accessories.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-primary">$24.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 2 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden bg-primary/10">
                <Image
                  src="/bamboo-kids-shampoo-bottle-natural-organic-product.jpg"
                  alt="Bamboo Kids Shampoo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Bamboo Kids - Natural Comfort for Employees</h3>
                <p className="text-sm text-muted-foreground">
                  Our bamboo fabric is lightweight, absorbent, and provides optimal comfort. It keeps babies cool and
                  regulates temperature naturally.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-primary">$18.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 3 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden bg-accent/10">
                <Image
                  src="/bamboo-baby-skincare-products-natural-ingredients-.jpg"
                  alt="Baby Skincare Set"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Bamboo Textile Roll - Natural Comfort for Employees</h3>
                <p className="text-sm text-muted-foreground">
                  Pure bamboo extract skincare set that's gentle, soothing, and provides essential nutrients for
                  delicate baby skin.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-primary">$32.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md bg-card/50 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  100% sustainable bamboo fabric that's gentle on your baby and the planet
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-card/50 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Hypoallergenic</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Naturally antibacterial and perfect for sensitive baby skin
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-card/50 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 text-secondary-foreground">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Ultra Soft</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Silky smooth texture that's softer than cotton for maximum comfort
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/bamboo-forest-green-natural-environment.jpg"
                alt="Bamboo forest"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/happy-baby-wearing-bamboo-clothes-outdoors.jpg"
                alt="Happy baby"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/bamboo-textile-closeup-texture-detail.jpg"
                alt="Bamboo textile"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/peaceful-baby-sleeping-in-bamboo-clothing.jpg"
                alt="Sleeping baby"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About/Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose BEA BABIES?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best experience for you and your baby
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">Safe and Fast Shipping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Free shipping on orders over $50. Fast and secure delivery to your doorstep within 3-5 business days.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">After-Sales Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  30-day money-back guarantee. Our customer support team is here to help with any questions or concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 text-secondary-foreground">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">Secure Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  100% secure checkout with SSL encryption. We accept all major credit cards and PayPal.
                </p>
              </CardContent>
            </Card>
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
                  <Link
                    href="/shop/clothing"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Baby Clothes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/accessories"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/blankets"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blankets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/skincare"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skincare
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
                  <Link
                    href="/sustainability"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/size-guide"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Payment Methods
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Social Media</h4>
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
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">© 2025 BEA BABIES. All rights reserved.</span>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Register / Sign In</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
