import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Heart, Leaf, Sprout, Users, Award, TreePine, Baby } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
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
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Nurturing Your Baby, Naturally
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                At BEA BABIES, we believe every baby deserves the softest, most sustainable clothing. Our journey began
                with a simple mission: to create baby essentials that are gentle on delicate skin and kind to our
                planet.
              </p>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/happy-baby-wearing-bamboo-clothes-outdoors.jpg"
                alt="Happy baby in bamboo clothes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Bamboo?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bamboo is nature's perfect fabric for babies - sustainable, soft, and safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Sprout className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">Sustainable</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bamboo grows rapidly without pesticides, using minimal water and naturally regenerating from its roots
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <Baby className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">Hypoallergenic</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Naturally antibacterial and resistant to dust mites, perfect for sensitive and eczema-prone skin
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 text-secondary-foreground">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">Ultra Soft</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Silkier and softer than cotton, bamboo fabric feels luxurious against your baby's delicate skin
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <TreePine className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">Breathable</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Temperature-regulating fibers keep babies cool in summer and warm in winter for year-round comfort
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/bamboo-forest-green-natural-environment.jpg"
                alt="Bamboo forest"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Commitment to Quality</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every piece in our collection is thoughtfully designed with your baby's comfort and safety in mind. We
                  source only the finest organic bamboo fibers and use OEKO-TEX certified dyes that are free from
                  harmful chemicals.
                </p>
                <p>
                  Our production process follows strict environmental and ethical standards. From farm to finished
                  product, we ensure transparency and sustainability at every step, so you can feel good about choosing
                  BEA BABIES for your little one.
                </p>
                <p>
                  We're proud to partner with certified suppliers who share our values of environmental responsibility
                  and fair labor practices. Together, we're creating a better future for our children and our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">Sustainability First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to minimizing our environmental impact through eco-friendly materials and ethical
                  production practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg bg-gradient-to-br from-accent/5 to-background">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">Quality Guaranteed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every product undergoes rigorous testing to ensure it meets our high standards for safety, durability,
                  and comfort
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg bg-gradient-to-br from-secondary/20 to-background">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 text-secondary-foreground">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">Community Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in supporting families and building a community of parents who care about their children
                  and the planet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Ready to Experience the Bamboo Difference?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Join thousands of happy parents who trust BEA BABIES for their little ones
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/shop">Shop Our Collection</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
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
                <li>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
              <span className="font-semibold text-lg">BEA BABIES</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BEA BABIES. All rights reserved. Made with love for your little ones.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
