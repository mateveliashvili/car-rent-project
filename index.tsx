import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroCar from "@/assets/hero-car.jpg";
import carGclass from "@/assets/car-gclass.jpg";
import carPorsche from "@/assets/car-porsche.jpg";
import carTesla from "@/assets/car-tesla.jpg";
import carBmw from "@/assets/car-bmw.jpg";
import carFerrari from "@/assets/car-ferrari.jpg";
import carRangeRover from "@/assets/car-rangerover.jpg";
import carLambo from "@/assets/car-lambo.jpg";
import carAudi from "@/assets/car-audi.jpg";
import carCamry from "@/assets/car-camry.jpg";
import carElantra from "@/assets/car-elantra.jpg";
import carPrado from "@/assets/car-prado.jpg";
import carVclass from "@/assets/car-vclass.jpg";
import carRaptor from "@/assets/car-raptor.jpg";
import carMiata from "@/assets/car-miata.jpg";
import carSclass from "@/assets/car-sclass.jpg";
import carRio from "@/assets/car-rio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELOCE — პრემიუმ ავტომობილების გაქირავება საქართველოში" },
      { name: "description", content: "დაიქირავე პრემიუმ კლასის ავტომობილი საქართველოში. სრული დაზღვევა, ულიმიტო გარბენი, 24/7 მხარდაჭერა." },
      { property: "og:title", content: "VELOCE — პრემიუმ ავტომობილების გაქირავება" },
      { property: "og:description", content: "დაიქირავე პრემიუმ კლასის ავტომობილი საქართველოში." },
    ],
  }),
  component: Index,
});

const cars = [
  { name: "G-63 AMG", spec: "V8 Biturbo / 577 HP", price: "$250", category: "SUV", img: carGclass },
  { name: "911 Carrera S", spec: "Performance / Sport", price: "$180", category: "Sport", img: carPorsche },
  { name: "Model S Plaid", spec: "Electric / 1020 HP", price: "$150", category: "Electric", img: carTesla },
  { name: "BMW M5 Competition", spec: "V8 / 625 HP", price: "$170", category: "Sedan", img: carBmw },
  { name: "Ferrari 488 GTB", spec: "V8 Turbo / 661 HP", price: "$450", category: "Sport", img: carFerrari },
  { name: "Range Rover Vogue", spec: "V8 Luxury / 525 HP", price: "$220", category: "SUV", img: carRangeRover },
  { name: "Lamborghini Huracán", spec: "V10 / 640 HP", price: "$520", category: "Sport", img: carLambo },
  { name: "Audi RS7 Sportback", spec: "V8 Twin-Turbo / 600 HP", price: "$200", category: "Sedan", img: carAudi },
  { name: "Mercedes S-Class", spec: "V8 / Luxury Sedan", price: "$240", category: "Luxury", img: carSclass },
  { name: "Toyota Land Cruiser Prado", spec: "V6 / 4WD", price: "$130", category: "SUV", img: carPrado },
  { name: "Mercedes V-Class", spec: "8 ადგილი / Diesel", price: "$140", category: "Minivan", img: carVclass },
  { name: "Ford F-150 Raptor", spec: "V6 Twin-Turbo / Off-road", price: "$180", category: "Pickup", img: carRaptor },
  { name: "Mazda MX-5 Miata", spec: "Convertible / 2.0L", price: "$90", category: "Convertible", img: carMiata },
  { name: "Toyota Camry", spec: "2.5L / კომფორტი", price: "$60", category: "Economy", img: carCamry },
  { name: "Hyundai Elantra", spec: "1.6L / ეკონომიური", price: "$45", category: "Economy", img: carElantra },
  { name: "Kia Rio", spec: "1.4L / Hatchback", price: "$35", category: "Economy", img: carRio },
];

const categories = ["ყველა", "Economy", "Sedan", "SUV", "Sport", "Luxury", "Electric", "Convertible", "Minivan", "Pickup"];

const stats = [
  { value: "150+", label: "ავტომობილი ავტოპარკში" },
  { value: "12K+", label: "კმაყოფილი კლიენტი" },
  { value: "24/7", label: "მხარდაჭერა" },
  { value: "8", label: "წელი გამოცდილება" },
];

const features = [
  { title: "სრული დაზღვევა", desc: "ყველა მანქანა დაზღვეულია წამყვან კომპანიებში სრული პაკეტით." },
  { title: "24/7 მხარდაჭერა", desc: "ჩვენი გუნდი მზად არის დაგეხმაროთ დღე-ღამის ნებისმიერ დროს." },
  { title: "ულიმიტო გარბენი", desc: "იმოგზაურეთ შეუზღუდავად მთელი საქართველოს მასშტაბით." },
  { title: "მარტივი ჯავშანი", desc: "დაჯავშნე ავტომობილი 2 წუთში, ზედმეტი დოკუმენტაციის გარეშე." },
];

function Index() {
  const [activeCategory, setActiveCategory] = useState("ყველა");
  const filteredCars = activeCategory === "ყველა" ? cars : cars.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-carbon-950 text-silver font-sans selection:bg-cobalt selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 bg-carbon-950/80 backdrop-blur-md">
        <div className="text-2xl font-extrabold tracking-tighter italic text-white">
          VELOCE<span className="text-cobalt text-4xl leading-none">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#fleet" className="hover:text-cobalt transition-colors">ავტოპარკი</a>
          <a href="#features" className="hover:text-cobalt transition-colors">პირობები</a>
          <a href="#about" className="hover:text-cobalt transition-colors">ჩვენს შესახებ</a>
          <a href="#contact" className="hover:text-cobalt transition-colors">კონტაქტი</a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="hidden md:inline-flex px-5 py-2 border border-white/10 text-white text-sm font-bold rounded-full hover:border-cobalt hover:text-cobalt transition-all">
            Dashboard
          </Link>
          <button className="px-6 py-2 bg-cobalt text-white text-sm font-bold rounded-full hover:bg-cobalt-hover transition-all">
            დაჯავშნა
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 md:px-8 pt-16 pb-32 overflow-hidden bg-radial-cobalt">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-silver/80">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
            ნომერ პირველი საქართველოში
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
            მართე <br />
            <span className="text-cobalt">საუკეთესო</span>
          </h1>
          <p className="max-w-md text-lg text-silver/60 mb-12">
            აღმოაჩინე პრემიუმ კლასის ავტომობილების ყველაზე დიდი არჩევანი საქართველოში. ხარისხი, კომფორტი და სრული თავისუფლება.
          </p>

          {/* Booking Bar */}
          <div className="bg-carbon-900 p-2 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 px-6 py-4 md:border-r border-white/5">
              <div className="text-[10px] uppercase tracking-widest text-cobalt mb-1">ლოკაცია</div>
              <div className="font-medium">თბილისის აეროპორტი</div>
            </div>
            <div className="flex-1 px-6 py-4 md:border-r border-white/5">
              <div className="text-[10px] uppercase tracking-widest text-cobalt mb-1">აღების თარიღი</div>
              <div className="font-medium">12 მაისი, 10:00</div>
            </div>
            <div className="flex-1 px-6 py-4">
              <div className="text-[10px] uppercase tracking-widest text-cobalt mb-1">ტიპი</div>
              <div className="font-medium">SUV / პრემიუმი</div>
            </div>
            <button className="bg-white text-carbon-950 px-10 py-4 rounded-xl font-bold hover:bg-cobalt hover:text-white transition-all">
              ძიება
            </button>
          </div>
        </div>

        {/* Hero Decorative Image */}
        <div className="pointer-events-none absolute top-0 right-0 w-full md:w-2/3 h-full -z-0 opacity-50">
          <img
            src={heroCar}
            alt="Premium luxury sports car"
            width={1600}
            height={1024}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-950 via-carbon-950/60 to-transparent" />
        </div>
      </header>

      {/* Stats Strip */}
      <section className="border-y border-white/5 bg-carbon-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter mb-2">{s.value}</div>
              <div className="text-[11px] uppercase tracking-widest text-silver/40">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="px-6 md:px-8 py-24 bg-carbon-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-cobalt mb-3">ჩვენი ავტოპარკი</div>
              <h2 className="text-4xl font-extrabold text-white mb-4">გამორჩეული მოდელები</h2>
              <p className="text-silver/50">აირჩიე შენი მგზავრობის სტილი</p>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cobalt border-cobalt text-white"
                    : "border-white/10 text-silver/70 hover:border-cobalt hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <div key={car.name} className="group cursor-pointer bg-carbon-800/40 rounded-3xl p-4 ring-1 ring-white/5 hover:ring-cobalt/50 hover:bg-carbon-800/70 transition-all">
                <div className="relative w-full aspect-[4/3] bg-carbon-800 rounded-2xl mb-5 overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] uppercase tracking-widest bg-carbon-950/70 backdrop-blur rounded-full text-silver/80 border border-white/10">
                    {car.category}
                  </span>
                  <img
                    src={car.img}
                    alt={car.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start gap-3 px-1">
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{car.name}</h3>
                    <p className="text-silver/40 text-xs mt-1">{car.spec}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-cobalt font-bold text-lg">{car.price}</div>
                    <div className="text-[10px] text-silver/30 uppercase tracking-wider">დღეში</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 rounded-full border border-white/10 text-sm uppercase tracking-widest hover:bg-cobalt hover:border-cobalt hover:text-white transition-all">
              იხილე მთელი ავტოპარკი
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] uppercase tracking-widest text-cobalt mb-3">რატომ Veloce</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter text-balance">
              პრემიუმ სერვისი ყოველ <span className="text-cobalt">დეტალში</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden">
            {features.map((f, i) => (
              <div key={f.title} className="bg-carbon-950 p-8 hover:bg-carbon-900 transition-colors">
                <div className="text-[10px] font-mono text-cobalt mb-6">0{i + 1}</div>
                <div className="w-10 h-10 rounded-xl bg-cobalt/15 flex items-center justify-center mb-6 ring-1 ring-cobalt/30">
                  <div className="w-3 h-3 bg-cobalt rounded-sm" />
                </div>
                <h3 className="font-bold mb-3 text-white text-lg">{f.title}</h3>
                <p className="text-sm text-silver/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-6 md:px-8 py-24">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-cobalt to-cobalt-hover p-12 md:p-20">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-[0.95]">
              მზად ხარ შენი მგზავრობისთვის?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-md">
              დაჯავშნე ავტომობილი ერთ წუთში — დანარჩენს ჩვენ მოვაგვარებთ.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-carbon-950 rounded-full font-bold hover:bg-carbon-950 hover:text-white transition-all">
                დაჯავშნე ახლავე
              </button>
              <button className="px-8 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                დაგვიკავშირდი
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 md:px-8 pt-20 pb-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="text-2xl font-extrabold tracking-tighter italic text-white mb-4">
                VELOCE<span className="text-cobalt text-4xl leading-none">.</span>
              </div>
              <p className="text-sm text-silver/50 max-w-xs leading-relaxed">
                პრემიუმ კლასის ავტომობილების გაქირავება საქართველოში 2016 წლიდან.
              </p>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-widest text-cobalt mb-5">კონტაქტი</h5>
              <ul className="space-y-3 text-sm text-silver/70">
                <li>+995 32 2 123 456</li>
                <li>hello@veloce.ge</li>
                <li>თბილისი, საქართველო</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-widest text-cobalt mb-5">სოციალური</h5>
              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-cobalt transition-colors text-xs">IG</a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-cobalt transition-colors text-xs">FB</a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-cobalt transition-colors text-xs">X</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-silver/30 uppercase tracking-[0.2em]">
            <span>© 2024 Veloce Car Rental. ყველა უფლება დაცულია.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cobalt">კონფიდენციალურობა</a>
              <a href="#" className="hover:text-cobalt">პირობები</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
