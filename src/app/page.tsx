import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation with Background */}

      <main>
        {/* Hero Section with Background */}
        <section className="relative ">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bgr1-1.png?height=600&width=1600&text=Hero+Background"
              alt="Hero background"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-4 flex items-center justify-between">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-xs uppercase font-bold">
                Home
              </Link>
              <Link href="/about" className="text-xs uppercase font-bold">
                About
              </Link>
              <Link href="/menu" className="text-xs uppercase font-bold">
                Menu
              </Link>
              <Link href="/offers" className="text-xs uppercase font-bold">
                Offers
              </Link>
            </nav>
            <div className="flex items-center">
              <Image
                src="/images/logo-1.png?height=80&width=80"
                alt="Food Lover Logo"
                width={80}
                height={80}
                className="mr-2"
              />
              {/* <span className="text-sm font-semibold">Food Lover</span> */}
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/gallery" className="text-xs uppercase font-bold">
                Gallery
              </Link>
              <Link href="/contact" className="text-xs uppercase font-bold">
                Contact
              </Link>
              <Link href="/blog" className="text-xs uppercase font-bold">
                Blog
              </Link>
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-40 flex items-center">
            <div className="hidden md:block w-1/2">
              <div className="relative">
                <Image
                  src="/images/pizza-1.png?height=400&width=400"
                  alt="Breakfast plate with fruits"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
                Contact Us For
                <br />
                Best Breakfast
              </h1>
              <p className="text-gray-200 mb-6 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold !font-bold border-none rounded-md px-6 h-15 w-40">
                CONTACT US
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section with Background */}
        <section className="relative py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgb(29, 29, 35)" }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-14 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/cafe-1.png?height=600&width=600"
                alt="Food bowls"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-200 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* Our Food Quality Section with Background */}
        <section className="relative py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600&text=Quality+Background"
              alt="Food quality background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          {/* Orange Circle */}
          <div className="absolute right-0 top-0 w-3/4 h-full z-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full opacity-70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Our Food Quality</h2>
                <p className="text-gray-200 mb-6 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Waffle with fruits"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-10 -left-20">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Breakfast plate"
                      width={150}
                      height={150}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Gallery Section with Background */}
        <section className="relative py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600&text=Gallery+Background"
              alt="Gallery background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Food Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Food${item}`}
                    alt={`Food gallery image ${item}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enjoy Our Food Section with Background */}
        <section className="relative py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600&text=Enjoy+Food+Background"
              alt="Enjoy food background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Food plate"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-orange-500">
                Enjoy Our Food
              </h2>
              <p className="text-gray-200 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* Our Menu Section with Background */}
        <section className="relative py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600&text=Menu+Background"
              alt="Menu background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-zinc-900 bg-opacity-80 rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Menu${item}`}
                    alt={`Menu item ${item}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold uppercase mb-2">
                      ITALIAN BRUNCH MUSHROOM
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500 font-bold">
                        FROM $8.50
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enjoy Best Meal Section with Background */}
        <section className="relative py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600&text=Best+Meal+Background"
              alt="Best meal background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          {/* Orange Circle */}
          <div className="absolute left-0 top-0 w-3/4 h-full z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full opacity-70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Breakfast with fruits"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-orange-500">
                  Enjoy Best Meal
                </h2>
                <p className="text-gray-200 mb-6 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Background */}
      <footer className="relative py-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1600&text=Footer+Background"
            alt="Footer background"
            fill
            className="object-cover brightness-50"
          />
        </div>

        <div className="relative z-10 border-t border-gray-800 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Food Lover Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-lg font-bold">Food Lover</span>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="text-sm font-bold">
                HOME
              </Link>
              <Link href="/about" className="text-sm">
                ABOUT US
              </Link>
              <Link href="/services" className="text-sm">
                SERVICES
              </Link>
              <Link href="/foods" className="text-sm">
                FOODS
              </Link>
              <Link href="/contact" className="text-sm">
                CONTACT
              </Link>
              <Link href="/location" className="text-sm">
                LOCATION
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube size={20} />
            </Link>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
