"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigate to an anchor: if on home page scroll, otherwise route to "/#id"
  const handleNavTo = (id?: string, href?: string) => {
    setMobileMenuOpen(false);
    if (href) {
      router.push(href);
      return;
    }
    if (!id) return;
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // navigate to home with hash; browser/Next should handle scrolling to hash
    router.push(`/#${id}`);
  };

  return (
    <div className="w-full sticky top-0">
      <nav className="mx-auto px-4 md:px-20 py-4 flex xl:px-32 max-w-7xl flex-wrap justify-between items-center bg-white">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="px-3 py-1 rounded">
            <Link href="/">
              <Image
                src="/images/bolton-logo.png"
                alt="Ventsphere logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-[16px] space-x-6">
            {[
              { label: "Service", id: "service" },
              { label: "Products", href: "/products" },
              { label: "About Us", id: "about-us" },
              { label: "Benefits", id: "benefits" },
              { label: "FAQ?", id: "faq" },
            ].map((item) => (
              <Link
                key={item.id || item.href}
                href={item.href || `/#${item.id}`}
                className="text-[#1F253F] text-[14px] font-medium hover:text-gray-900 transition-colors"
                onClick={
                  item.href
                    ? (e) => {
                        // allow normal navigation for external hrefs but close mobile if open
                        e.preventDefault();
                        handleNavTo(undefined, item.href);
                      }
                    : (e) => {
                        e.preventDefault();
                        handleNavTo(item.id);
                      }
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between gap-4">
          <Link
            href="/partner"
            className="text-[#1F253F] text-[14px] flex items-center justify-between space-x-2 gap-1 font-medium"
          >
            Book a Strategy Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right transform group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
          <Button className="bg-[#1F253F] rounded-[12px] text-white text-[12px] px-6">
            <Link
              href="/partner"
              className="flex items-center gap-2 justify-between space-x-2"
            >
              Contact us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right transform group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              {[
                { label: "Service", id: "service" },
                { label: "Products", href: "/products" },
                { label: "About Us", id: "about-us" },
                { label: "Benefits", id: "benefits" },
                { label: "FAQ?", id: "faq" },
              ].map((item) => (
                <Link
                  key={item.id || item.href}
                  href={item.href || `/#${item.id}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 hover:bg-gray-50"
                  onClick={
                    item.href
                      ? (e) => {
                          e.preventDefault();
                          handleNavTo(undefined, item.href);
                        }
                      : (e) => {
                          e.preventDefault();
                          handleNavTo(item.id);
                        }
                  }
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-4 px-4">
                <Link
                  href="/partner"
                  className="w-full text-center text-[#1F253F] text-[14px] font-medium py-2 px-4 rounded-lg border border-[#1F253F] hover:bg-gray-50 transition-colors"
                >
                  Book a Strategy Call
                </Link>
                <Button className="w-full bg-[#1F253F] rounded-[12px] text-white text-[12px] py-2">
                  <Link
                    href="/partner"
                    className="flex items-center justify-center gap-2"
                  >
                    Partner with us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right transform group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
