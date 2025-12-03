import { CheckCircle2 } from "lucide-react"

const projects = [
  {
    client: "Voice of Nigeria",
    work: "Overhauling of 1250KVA Perkins generator",
    category: "Generator",
  },
  {
    client: "Shabak Centre",
    work: "Overhauling of 100KVA, 60KVA generating sets",
    category: "Generator",
  },
  {
    client: "CEDDI Plaza, Abuja",
    work: "Overhauling and general repair of two 1000KVA MTU gen sets",
    category: "Generator",
  },
  {
    client: "Captain Arugungu",
    work: "Maintenance of different farm equipments and gen sets",
    category: "Farm Equipment",
  },
  {
    client: "Transequinox Ltd, Jos",
    work: "Supply, installation and maintenance of 150KVA and 100KVA generating sets. Maintenance of agricultural equipments, tractors, animal feed machines",
    category: "Multiple",
  },
  {
    client: "Africare Abuja",
    work: "Service and maintenance of 60KVA, 40KVA and 30KVA Gen sets",
    category: "Healthcare",
  },
  {
    client: "Globacom Nig. Ltd.",
    work: "Overhauling, repairs, supply and installation. Repair parts from 40KVA to 1500KVA generating sets",
    category: "Telecom",
  },
  {
    client: "Nile University, Abuja",
    work: "Generator maintenance and electrical services",
    category: "Education",
  },
  {
    client: "Sheraton Hotel, Abuja",
    work: "Sub-contractor for power systems",
    category: "Hospitality",
  },
  {
    client: "Geregu Power Plc",
    work: "Sub-contractor for power generation services",
    category: "Power",
  },
  {
    client: "Ajaokuta Jampur Logistics",
    work: "Engineering services",
    category: "Industrial",
  },
  {
    client: "Abuja Capitol Hotel & Resort",
    work: "Power systems maintenance",
    category: "Hospitality",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#1D3D3A] font-semibold mb-2 uppercase tracking-wider text-sm">OUR CLIENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ongoing & Completed <span className="text-[#1D3D3A]">Projects</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We're proud to serve major organizations across Nigeria in telecommunications, healthcare, hospitality,
            power generation, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#1D3D3A] shrink-0 mt-1" />
                <div>
                  <span className="inline-block px-2 py-1 bg-accent/10 text-[#1D3D3A] text-xs font-medium rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-card-foreground">{project.client}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-8">{project.work}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
