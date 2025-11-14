"use client";

import React, { useState, useMemo } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

// Mock product data - replace with actual data from your CMS/API
const products = [
  {
    id: 1,
    name: "SDMO Generator 5kVA",
    brand: "SDMO",
    power: "5kVA",
    powerValue: 5,
    type: "Diesel",
    price: "₦850,000",
    image: "/images/products-demo.jpg",
    description: "Reliable 5kVA diesel generator perfect for small offices and homes.",
    features: ["Silent operation", "Fuel efficient", "Easy maintenance"],
    availability: "In Stock"
  },
  {
    id: 2,
    name: "SDMO Generator 10kVA",
    brand: "SDMO",
    power: "10kVA",
    powerValue: 10,
    type: "Diesel",
    price: "₦1,200,000",
    image: "/images/products-demo.jpg",
    description: "Powerful 10kVA diesel generator for medium businesses.",
    features: ["High efficiency", "Low noise", "Automatic start"],
    availability: "In Stock"
  },
  {
    id: 3,
    name: "SDMO Generator 20kVA",
    brand: "SDMO",
    power: "20kVA",
    powerValue: 20,
    type: "Diesel",
    price: "₦2,100,000",
    image: "/images/products-demo.jpg",
    description: "Industrial-grade 20kVA generator for large operations.",
    features: ["Industrial grade", "Remote monitoring", "Extended runtime"],
    availability: "In Stock"
  },
  {
    id: 4,
    name: "Honda Generator 3kVA",
    brand: "Honda",
    power: "3kVA",
    powerValue: 3,
    type: "Petrol",
    price: "₦450,000",
    image: "/images/products-demo.jpg",
    description: "Compact and portable 3kVA petrol generator.",
    features: ["Portable", "Quiet operation", "Easy start"],
    availability: "In Stock"
  },
  {
    id: 5,
    name: "Honda Generator 7kVA",
    brand: "Honda",
    power: "7kVA",
    powerValue: 7,
    type: "Petrol",
    price: "₦750,000",
    image: "/images/products-demo.jpg",
    description: "Versatile 7kVA petrol generator for various applications.",
    features: ["Versatile", "Economical", "Reliable"],
    availability: "In Stock"
  },
  {
    id: 6,
    name: "Caterpillar Generator 50kVA",
    brand: "Caterpillar",
    power: "50kVA",
    powerValue: 50,
    type: "Diesel",
    price: "₦8,500,000",
    image: "/images/products-demo.jpg",
    description: "Heavy-duty 50kVA diesel generator for industrial use.",
    features: ["Heavy duty", "High performance", "Long lifespan"],
    availability: "In Stock"
  },
  {
    id: 7,
    name: "Caterpillar Generator 100kVA",
    brand: "Caterpillar",
    power: "100kVA",
    powerValue: 100,
    type: "Diesel",
    price: "₦15,000,000",
    image: "/images/products-demo.jpg",
    description: "Massive 100kVA diesel generator for large industrial facilities.",
    features: ["Massive power", "Industrial grade", "Advanced controls"],
    availability: "In Stock"
  },
  {
    id: 8,
    name: "Yamaha Generator 2.5kVA",
    brand: "Yamaha",
    power: "2.5kVA",
    powerValue: 2.5,
    type: "Petrol",
    price: "₦380,000",
    image: "/images/products-demo.jpg",
    description: "Lightweight and efficient 2.5kVA petrol generator.",
    features: ["Lightweight", "Efficient", "User-friendly"],
    availability: "In Stock"
  }
];

const brands = ["All", "SDMO", "Honda", "Caterpillar", "Yamaha"];
const powerRanges = [
  "All",
  "0-5kVA",
  "5-10kVA", 
  "10-20kVA",
  "20-50kVA",
  "50kVA+"
];
const types = ["All", "Diesel", "Petrol"];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPowerRange, setSelectedPowerRange] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
      
      const matchesType = selectedType === "All" || product.type === selectedType;
      
      let matchesPower = true;
      if (selectedPowerRange !== "All") {
        const [min, max] = selectedPowerRange.split("-").map(p => 
          p.includes("kVA") ? parseFloat(p.replace("kVA", "").replace("+", "")) : parseFloat(p)
        );
        if (selectedPowerRange === "50kVA+") {
          matchesPower = product.powerValue >= 50;
        } else {
          matchesPower = product.powerValue >= min && product.powerValue <= max;
        }
      }
      
      return matchesSearch && matchesBrand && matchesType && matchesPower;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return parseFloat(a.price.replace(/[₦,]/g, "")) - parseFloat(b.price.replace(/[₦,]/g, ""));
        case "price-high":
          return parseFloat(b.price.replace(/[₦,]/g, "")) - parseFloat(a.price.replace(/[₦,]/g, ""));
        case "power-low":
          return a.powerValue - b.powerValue;
        case "power-high":
          return b.powerValue - a.powerValue;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedBrand, selectedPowerRange, selectedType, sortBy]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-20 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-fit mx-auto rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2 mb-4">
            <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
              OUR PRODUCTS
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] leading-tight mb-6">
            <TextAnimate animation="slideUp" by="word">
              Generator Products
            </TextAnimate>
          </h1>
          
          <p className="text-[#6B7280] text-center max-w-2xl mx-auto">
            Browse our comprehensive range of high-quality generators from trusted brands. 
            Find the perfect power solution for your needs.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <Label htmlFor="search">Search Products</Label>
              <Input
                id="search"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1"
              />
            </div>

            {/* Brand Filter */}
            <div>
              <Label>Brand</Label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Power Range Filter */}
            <div>
              <Label>Power Range</Label>
              <Select value={selectedPowerRange} onValueChange={setSelectedPowerRange}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {powerRanges.map(range => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div>
              <Label>Fuel Type</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sort */}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Label>Sort by:</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="power-low">Power: Low to High</SelectItem>
                  <SelectItem value="power-high">Power: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-sm text-[#6B7280]">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                  {product.availability}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#B1AD4E] font-medium">{product.brand}</span>
                  <span className="text-xs text-[#6B7280]">{product.type}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-[#1F253F] mb-2">{product.name}</h3>
                <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mb-4">
                  <p className="text-2xl font-bold text-[#1F253F]">{product.price}</p>
                  <p className="text-sm text-[#6B7280]">Power: {product.power}</p>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full bg-[#1F253F] text-white">
                    <Link href={`/partner?product=${product.id}`} className="w-full">
                      Get Quote
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6B7280] text-lg">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("All");
                setSelectedPowerRange("All");
                setSelectedType("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#1F253F] mb-4">
            Need Help Choosing the Right Generator?
          </h2>
          <p className="text-[#6B7280] mb-6 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect generator for your specific needs. 
            Get a personalized recommendation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1F253F] text-white">
              <Link href="/partner" className="flex items-center gap-2">
                Get Expert Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/#power-estimator" className="flex items-center gap-2">
                Use Power Estimator
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
