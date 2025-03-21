import Image from "next/image";
import Afrique from '../../public/images/afrique.png'
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Play } from "lucide-react";
import Testimonials from '../../public/images/testimonials.png'


export default function Home() {
  const partners = [
    { name: "Deliveroo", image: "/images/deliveroo.svg" },
    { name: "Tech", image: "/images/tech.svg" },
    { name: "Logite", image: "/images/logite.svg" },
    { name: "Salesforce", image: "/images/salesforce.svg" },
    {name: "Delivery", image: "/images/delivery.svg"}
  ];
  return (
    <div className="bg-[#06286F] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-4 overflow-hidden max-w-[90%] m-auto">
        {/* <div
          className={cn(
            'absolute inset-0 bottom-0 bg-cover bg-center opacity-100',
            'bg-[url("/images/afrique.png")]'
          )}
        ></div> */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conference Ethereum{" "}
            <br />
            Afrique Francophone
          </h1>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            "Connecter les Écosystèmes Web3 Mondiaux pour un Impact Global"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className={cn(
                "bg-[#2bf7d5]",
                "text-[#06286f]  px-8 py-6 text-lg rounded-lg",
                "hover:opacity-90 transition-opacity"
              )}
            >
              S'incrire
            </Button>
            <Button
              variant="outline"
              className={cn(
                "border-[#2bf7d5] text-[#2bf7d5] hover:text-[#06286F] px-8 py-6 text-lg rounded-lg ",
                "bg-transparent hover:bg-[#2bf7d5] transition-colors"
              )}
            >
              Devenir Sponsor
            </Button>
          </div>
        </div>  
      </section>

      {/* video section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] m-auto">
        {/* Video Player */}
        <div className="relative">
          <div className="aspect-video relative rounded-3xl overflow-hidden group m-5">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920"
              alt="Success Story"
              width={1920}
              height={1080}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-[#8A2BE2] ml-1" />
                </div>
              </div>
            </button>
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500">
              <div className="w-1/3 h-full bg-white" />
            </div> */}
          </div>
        </div>
        {/* write up section */}
        <div className="flex flex-col md:flex-row items-center justify-between m-5 md:m-10 b">
          <div className="text-start w-full md:w-[50%] p-2 md:p-5">
            <p className="text-justify my-5 leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <Button  className={cn(
                "bg-[#2bf7d5] w-full md:w-1/2",
                "text-[#06286f]  px-8 py-6 text-lg rounded-lg",
                "hover:opacity-90 transition-opacity"
              )}>
              À propos
            </Button>
          </div>
          <div className="w-full md:w-[30%] my-5  ">
            <Image src={Testimonials} alt="testimonials" />
          </div>
        </div>
      </section>

      {/* partners section */}
      <section className="relative p-5 overflow-hidden max-w-[90%] m-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Sponsors et Partenaires Confirmés
        </h2>
        <div className="py-5 md:py-10 w-full md:max-w-[90%] flex flex-wrap md:flex-nowrap items-center justify-between m-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={cn(
                "w-32 md:w-40 transition-all duration-300  my-3",
                "hover:scale-110 cursor-pointer"
              )}
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={160}
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center my-5">
          <Button
            className={cn(
              "bg-[#2bf7d5]",
              "text-[#06286f]  px-8 py-6 text-lg rounded-lg",
              "hover:opacity-90 transition-opacity"
            )}
          >
            S'incrire
          </Button>
          <Button
            variant="outline"
            className={cn(
              "border-[#2bf7d5] text-[#2bf7d5] hover:text-[#06286F] px-8 py-6 text-lg rounded-lg ",
              "bg-transparent hover:bg-[#2bf7d5] transition-colors"
            )}
          >
            Devenir Sponsor
          </Button>
        </div>

      </section>

      
    </div>
    
  );
}
