"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ShoppingBag, Heart, Leaf, Filter, X, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Organic Bamboo Onesie",
    category: "clothing",
    price: 24.99,
    image: "/bamboo-baby-fabric-rolls-natural-beige-color.jpg",
    sizes: ["0-3M", "3-6M", "6-12M"],
    colors: ["Natural", "Sage", "Blush"],
  },
  {
    id: 2,
    name: "Bamboo Sleep Sack",
    category: "clothing",
    price: 32.99,
    image: "/peaceful-baby-sleeping-in-bamboo-clothing.jpg",
    sizes: ["0-6M", "6-12M", "12-18M"],
    colors: ["Natural", "Cloud"],
  },
  {
    id: 3,
    name: "Baby Bamboo Shampoo",
    category: "skincare",
    price: 18.99,
    image: "/bamboo-kids-shampoo-bottle-natural-organic-product.jpg",
    sizes: ["250ml"],
    colors: ["Natural"],
  },
  {
    id: 4,
    name: "Bamboo Skincare Set",
    category: "skincare",
    price: 34.99,
    image: "/bamboo-baby-skincare-products-natural-ingredients-.jpg",
    sizes: ["Full Set"],
    colors: ["Natural"],
  },
  {
    id: 5,
    name: "Bamboo Muslin Blanket",
    category: "blankets",
    price: 28.99,
    image: "/bamboo-textile-closeup-texture-detail.jpg",
    sizes: ["Standard"],
    colors: ["Natural", "Sage", "Cloud", "Blush"],
  },
  {
    id: 6,
    name: "Bamboo Baby Hat",
    category: "accessories",
    price: 14.99,
    image: "/happy-baby-wearing-bamboo-clothes-outdoors.jpg",
    sizes: ["0-6M", "6-12M"],
    colors: ["Natural", "Sage"],
  },
  {
    id: 7,
    name: "Bamboo Footie Pajamas",
    category: "clothing",
    price: 29.99,
    image: "/bamboo-baby-fabric-rolls-natural-beige-color.jpg",
    sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
    colors: ["Natural", "Sage", "Cloud"],
  },
  {
    id: 8,
    name: "Bamboo Swaddle Set",
    category: "blankets",
    price: 38.99,
    image: "/bamboo-textile-closeup-texture-detail.jpg",
    sizes: ["Standard"],
    colors: ["Natural", "Blush"],
  },
  {
    id: 9,
    name: "Bamboo Baby Mittens",
    category: "accessories",
    price: 12.99,
    image: "/bamboo-baby-fabric-rolls-natural-beige-color.jpg",
    sizes: ["0-6M"],
    colors: ["Natural", "Cloud"],
  },
]

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 50])
  const [sortBy, setSortBy] = useState("featured")

  const categories = [
    { id: "clothing", label: "Clothing" },
    { id: "blankets", label: "Blankets" },
    { id: "accessories", label: "Accessories" },
    { id: "skincare", label: "Skincare" },
  ]

  const sizes = [
    { id: "0-3M", label: "0-3 Months" },
    { id: "3-6M", label: "3-6 Months" },
    { id: "6-12M", label: "6-12 Months" },
    { id: "12-18M", label: "12-18 Months" },
  ]

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleSize = (sizeId: string) => {
    setSelectedSizes((prev) => (prev.includes(sizeId) ? prev.filter((id) => id !== sizeId) : [...prev, sizeId]))
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedSizes([])
    setPriceRange([0, 50])
    setSortBy("featured")
  }

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }
      if (selectedSizes.length > 0 && !product.sizes.some((size) => selectedSizes.includes(size))) {
        return false
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "name") return a.name.localeCompare(b.name)
      return 0
    })

  const activeFiltersCount =
    selectedCategories.length + selectedSizes.length + (priceRange[0] !== 0 || priceRange[1] !== 50 ? 1 : 0)

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
            <Link href="/shop" className="text-sm font-medium text-primary">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
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
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Bamboo Baby Essentials</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore our complete collection of sustainable, organic bamboo products for your little one
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5 text-primary" />
                    Filters
                  </h2>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
                      Clear all
                    </Button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Size</h3>
                  <div className="space-y-2">
                    {sizes.map((size) => (
                      <div key={size.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`size-${size.id}`}
                          checked={selectedSizes.includes(size.id)}
                          onCheckedChange={() => toggleSize(size.id)}
                        />
                        <Label htmlFor={`size-${size.id}`} className="text-sm cursor-pointer">
                          {size.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Price Range</h3>
                  <div className="space-y-4">
                    <Slider value={priceRange} onValueChange={setPriceRange} max={50} step={5} className="w-full" />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden bg-transparent"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-2 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Label htmlFor="sort" className="text-sm text-muted-foreground whitespace-nowrap">
                    Sort by:
                  </Label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="flex h-9 w-full sm:w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-72 overflow-hidden bg-secondary/20">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                      </div>
                      <CardContent className="p-5 space-y-3">
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            {categories.find((c) => c.id === product.category)?.label}
                          </p>
                          <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          {product.colors.slice(0, 3).map((color, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                              {color}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-2xl font-bold text-primary">${product.price}</span>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <ShoppingBag className="h-4 w-4 mr-1.5" />
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Filter className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">No products found</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Try adjusting your filters to find what you're looking for
                  </p>
                  <Button onClick={clearAllFilters} variant="outline">
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  Filters
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {activeFiltersCount > 0 && (
                <Button variant="outline" onClick={clearAllFilters} className="w-full bg-transparent">
                  Clear all filters
                </Button>
              )}

              {/* Category Filter */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center gap-2">
                      <Checkbox
                        id={`mobile-category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <Label htmlFor={`mobile-category-${category.id}`} className="text-sm cursor-pointer">
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Size</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <div key={size.id} className="flex items-center gap-2">
                      <Checkbox
                        id={`mobile-size-${size.id}`}
                        checked={selectedSizes.includes(size.id)}
                        onCheckedChange={() => toggleSize(size.id)}
                      />
                      <Label htmlFor={`mobile-size-${size.id}`} className="text-sm cursor-pointer">
                        {size.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Price Range</h3>
                <div className="space-y-4">
                  <Slider value={priceRange} onValueChange={setPriceRange} max={50} step={5} className="w-full" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={() => setMobileFiltersOpen(false)}>
                Show {filteredProducts.length} products
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary/5 border-t mt-16">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
              <ul className="space-y-2">
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
                    Blankets
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
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
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
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-semibold">BEA BABIES</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 BEA BABIES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
