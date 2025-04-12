'use client'
import Image from "next/image";
import Afrique from '../../public/images/afrique.png'
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Play } from "lucide-react";
import Testimonials from '../../public/images/testimonials.png'
import contentImg from '../../public/images/conference.png'
import agendaImg from '../../public/images/agenda-image.png'
import { useState } from "react";
import rightArrow from '../../public/images/right-arrow.svg'
import leftArrow from '../../public/images/left-arrow.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Checkbox } from "./components/ui/checkbox";
import { Textarea } from "./components/ui/textarea";




export default function Home() {
  const [currentSpeakerPage, setCurrentSpeakerPage] = useState(0);

  const partners = [
    { name: "Deliveroo", image: "/images/deliveroo.svg" },
    { name: "Tech", image: "/images/tech.svg" },
    { name: "Logite", image: "/images/logite.svg" },
    { name: "Salesforce", image: "/images/salesforce.svg" },
    {name: "Delivery", image: "/images/delivery.svg"}
  ];

  const paymentMethods = [
    { name: "Stripe", image: "/images/stripe.svg" },
    { name: "Mastercard", image: "/images/mastercard.svg" },
    { name: "BitPay", image: "/images/bitpay.svg" }
  ];

  const sponsorshipPackages = [
    { name: "Diamond Sponsor", price: "5,000$+" },
    { name: "Gold Sponsor", price: "3,000$" },
    { name: "Silver Sponsor", price: "2,000$" },
    { name: "Partner Sponsor", price: "1,000$" }
  ];

  const ticketTypes = [
    { name: "Standard Ticket", price: "12$" },
    { name: "VIP Ticket", price: "60$" },
    { name: "Hackathon Access", price: "30$" }
  ];

  const timelineData = [
    {
      title: 'Pré-événement',
      description: '7 jours - Workshops en ligne, mentorat, Hackathon',
    },
    {
      title: 'Conférence principale',
      subEvents: [
        {
          day: 'Jour 1',
          description: 'Keynotes, panels sur la gouvernance décentralisée',
        },
        {
          day: 'Jour 2',
          description: 'Ateliers techniques, pitches startups',
        },
        {
          day: 'Jour 3',
          description: 'Networking, intervention des BEOs, remise des prix',
        },
      ],
    },
  ];

  const speakers = [
    {
      name: "John Doe",
      role: "Blockchain Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png"
    },
    {
      name: "Jane Smith",
      role: "DeFi Specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     image: "/images/speaker-image.png"
    },
    {
      name: "Alex Johnson",
      role: "Smart Contract Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png"
    },
    {
      name: "Sarah Wilson",
      role: "Web3 Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png"
    },
    {
      name: "Michael Brown",
      role: "NFT Specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
    },
    {
      name: "Emily Davis",
      role: "Ethereum Researcher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
    },
    {
      name: "David Miller",
      role: "Protocol Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
    },
    {
      name: "Lisa Anderson",
      role: "Security Expert",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
    }
  ];

  const speakersPerPage = 4;
  const totalPages = Math.ceil(speakers.length / speakersPerPage);

  const handlePrevSpeakers = () => {
    setCurrentSpeakerPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextSpeakers = () => {
    setCurrentSpeakerPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleSpeakers = speakers.slice(
    currentSpeakerPage * speakersPerPage,
    (currentSpeakerPage + 1) * speakersPerPage
  );

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      description: "",
      message: "",
      terms: false
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-[#06286F] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-32 px-4 overflow-hidden max-w-[90%] m-auto min-h-screen flex flex-col justify-center">
        <div className="absolute inset-x-0 bottom-0 w-full h-[85%]">
          <Image
            src={Afrique}
            alt="World Map Network"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conference Ethereum{" "}
            <br />
            Afrique Francophone
          </h1>
          <p className="text-[#D1FFEC] mb-8 max-w-2xl mx-auto text-lg">
            "Connecter les Écosystèmes Web3 Mondiaux pour un Impact Global"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className={cn(
                "bg-[#2bf7d5]",
                "text-[#06286f]  px-8 py-6 text-lg rounded-lg cursor-pointer",
                "hover:opacity-90 transition-opacity"
              )}
            >
              S'incrire
            </Button>
            <Button
              variant="outline"
              className={cn(
                "border-[#2bf7d5] text-[#2bf7d5] hover:text-[#06286F] px-8 py-6 text-lg rounded-lg cursor-pointer",
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
            <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
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
        <div className="flex flex-col md:flex-row items-center justify-between m-5 md:m-10">
          <div className="text-start w-full md:w-[50%] p-2 md:p-5">
            <p className="text-justify my-5 leading-8 ">A global event bringing together experts, innovators, startups, investors, and enthusiasts to strengthen blockchain and Web3 adoption while highlighting the potential of the Francophone ecosystem on the international stage.</p>
            <p className="text-justify my-5 leading-8">The conference will unite ETH communities from Togo, Benin, Ivory Coast, Senegal, Cameroon, and Burkina Faso to spotlight the Francophone ecosystem—while also recognizing the vital inspiration from Anglophone countries.</p>
            <Button  className={cn(
                "bg-[#2bf7d5] w-full md:w-1/2",
                "text-[#06286f]  px-8 py-6 text-lg rounded-lg cursor-pointer",
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
      <section className="relative p-5 overflow-hidden max-w-[90%] m-auto" id="partenaires">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Sponsors et Partenaires Confirmés
        </h2>
        <div className="py-10 w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={cn(
                "w-24 md:w-32 transition-all duration-300",
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
              "text-[#06286f]  px-8 py-6 text-lg rounded-lg cursor-pointer",
              "hover:opacity-90 transition-opacity"
            )}
          >
            S'incrire
          </Button>
          <Button
            variant="outline"
            className={cn(
              "border-[#2bf7d5] text-[#2bf7d5] hover:text-[#06286F] px-8 py-6 text-lg rounded-lg cursor-pointer",
              "bg-transparent hover:bg-[#2bf7d5] transition-colors"
            )}
          >
            Devenir Sponsor
          </Button>
        </div>
      </section>

      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] m-auto" id="apropos">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-start">
          À Propos
        </h2>

        <div className="rounded-3xl ">
            <Image src={contentImg} 
              alt="content"
              width={1920}
              height={1080}
            className="object-cover"
            />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between m-5 md:m-10">
          <div className="text-start w-full md:w-[45%] p-2 md:p-5">
            <p className="text-justify my-5 leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>

            <div className="rounded-xl bg-[#0f2757] px-5 py-10">
              <h2 className="text-2xl md:4xl font-bold">Mission</h2>
              <p className="my-5 leading-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            </div>
          </div>

          <div className="text-start w-full md:w-[45%] p-2 md:p-5">
            <p className="text-justify my-5 leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            <p className="text-justify my-5 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>

            <div className="rounded-xl bg-[#0f2757] px-5 py-10">
              <h2 className="text-2xl md:4xl font-bold">Mission</h2>
              <p className="my-5 leading-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* timeline section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] m-auto my-10" id="programme">
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">Programme (Agenda/Schedule)</h2>

        {/* timeline map */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[15px] top-0 h-full w-[2px] bg-[#2bf7d5]"></div>

              {timelineData.map((event, index) => (
                <div key={index} className="relative mb-12">
                  {/* Timeline Marker */}
                  <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-[#2bf7d5]"></div>

                  {/* Event Title */}
                  <h3 className="ml-16 text-2xl font-bold mb-4">{event.title}</h3>

                  {/* Event Content */}
                  {event.description ? (
                    <div className="ml-16 bg-[#0A2F85] rounded-2xl p-6 border border-[#2bf7d5]/20">
                      <h4 className="text-xl font-bold mb-2">{event.description.split(' - ')[0]}</h4>
                      <p className="text-gray-300">{event.description.split(' - ')[1]}</p>
                    </div>
                  ) : null}

                  {event.subEvents && (
                    <div className="ml-16 space-y-4 mt-4">
                      {event.subEvents.map((subEvent, subIndex) => (
                        <div key={subIndex} className="bg-[#0A2F85] rounded-2xl p-6 border border-[#2bf7d5]/20">
                          <h4 className="text-xl font-bold mb-2">{subEvent.day}</h4>
                          <p className="text-gray-300">{subEvent.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
            <Image
              src={agendaImg}
              alt="Conference Image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* speakers section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">
            Speakers
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={handlePrevSpeakers}
              className="w-12 h-12  flex items-center justify-center group hover:bg-[#2bf7d5] transition-colors cursor-pointer"
            >
              <Image src={leftArrow} alt="left arrow" />
            </button>
            <button 
              onClick={handleNextSpeakers}
              className="w-12 h-12 flex items-center justify-center group hover:bg-[#2bf7d5] transition-colors cursor-pointer"
            >
              <Image src={rightArrow} alt="right arrow" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleSpeakers.map((speaker, index) => (
            <div 
              key={index + currentSpeakerPage * speakersPerPage} 
              className="bg-gray-100 rounded-tl-3xl overflow-hidden transform transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-square relative">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-[#06286F]">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-[#2bf7d5] mb-2">{speaker.role}</p>
                <p className="text-gray-300 text-sm">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSpeakerPage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                currentSpeakerPage === index 
                  ? "bg-[#2bf7d5] w-8" 
                  : "bg-[#2bf7d5]/30 hover:bg-[#2bf7d5]/50"
              )}
            />
          ))}
        </div>
      </section>

      {/* sponsorship section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto my-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Pourquoi Sponsoriser ?
        </h2>

        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus
            ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla
            non tortor nec elit lacinia consectetur.
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus
            ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus ut rutrum at, mollis sit amet eros. Nulla
            non tortor nec elit lacinia consectetur.
          </p>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center">
          Packages de sponsoring
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sponsorshipPackages.map((pkg, index) => (
            <Card key={index} className="bg-white rounded-3xl transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#2563EB] text-xl font-semibold">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[#2563EB] text-3xl font-bold">{pkg.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="py-10 w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-24 md:w-32 transition-all duration-300"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={160}
                height={50}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            className={cn(
              "bg-[#2bf7d5]",
              "text-[#06286f] px-8 py-4 text-lg rounded-lg cursor-pointer",
              "hover:opacity-90 transition-opacity"
            )}
          >
            Devenir Sponsor
          </Button>
        </div>
      </section>

      {/* tickets section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto my-20" id="inscriptions">
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">
          Inscriptions et Billetterie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ticketTypes.map((ticket, index) => (
            <Card key={index} className="bg-white rounded-3xl transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#2563EB] text-2xl font-semibold">{ticket.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[#2563EB] text-5xl font-bold">{ticket.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <Button
            className={cn(
              "bg-[#2bf7d5]",
              "text-[#06286f] px-12 py-4 text-lg rounded-lg w-full md:w-auto max-w-md cursor-pointer",
              "hover:opacity-90 transition-opacity"
            )}
          >
            Réserver mon billet
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-4 w-32 h-16 flex items-center justify-center">
              <Image
                src={method.image}
                alt={method.name}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact and FAQ section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto mt-20 pb-20" id="contact">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Contact et FAQ
        </h2>

        <div className="max-w-8xl mx-auto text-center mb-12">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque gravida tempus. Pellentesque odio purus, dapibus
            ut rutrum at, mollis sit amet eros. Nulla non tortor nec elit lacinia consectetur.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-8xl mx-auto mb-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">Contactez-nous</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your first name" 
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your last name" 
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Enter your email" 
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="Enter your phone number" 
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5]">
                          <SelectValue placeholder="Select one..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0A2F85] border border-[#2bf7d5]/20 text-white rounded-lg p-2 shadow-lg">
                        <SelectItem value="general" className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer">General Inquiry</SelectItem>
                        <SelectItem value="sponsorship" className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer">Sponsorship</SelectItem>
                        <SelectItem value="tickets" className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer">Tickets</SelectItem>
                        <SelectItem value="speaker" className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer">Speaker</SelectItem>
                        <SelectItem value="other" className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-12">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel>Which best describes you?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                          {[
                            "First choice",
                            "Second choice",
                            "Third choice",
                            "Fourth choice",
                            "Fifth choice",
                            "Other"
                          ].map((choice) => (
                            <div key={choice} className="flex items-center space-x-3">
                              <RadioGroupItem value={choice} className="text-[#2bf7d5]" />
                              <label>{choice}</label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message..."
                        className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] resize-none"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5 w-5 text-[#2bf7d5] border-[#2bf7d5]/20"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I accept the <a href="#" className="text-[#2bf7d5] hover:underline">Terms</a>
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className={cn(
                    "bg-[#2bf7d5]",
                    "text-[#06286f] px-16 py-4 text-lg rounded-lg w-full md:w-auto min-w-[200px] cursor-pointer",
                    "hover:opacity-90 transition-opacity"
                  )}
                >
                  Soumettre
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* FAQ Section */}
        <div className="max-w-8xl mx-auto" id="faqs">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">Questions Fréquentes</h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#0A2F85] rounded-lg border-none px-6">
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Qu'est-ce que la Conférence Ethereum Afrique Francophone ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                La Conférence Ethereum Afrique Francophone est un événement majeur qui rassemble les acteurs de l'écosystème blockchain en Afrique francophone. Elle vise à promouvoir l'adoption et le développement de la technologie Ethereum dans la région.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#0A2F85] rounded-lg border-none px-6">
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Comment puis-je participer à l'événement ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Vous pouvez participer en achetant un billet via notre section billetterie. Nous proposons différentes options de tickets adaptées à vos besoins : Standard, VIP, et accès Hackathon.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#0A2F85] rounded-lg border-none px-6">
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Quelles sont les opportunités de sponsoring ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Nous proposons plusieurs packages de sponsoring, du Partner Sponsor au Diamond Sponsor. Chaque niveau offre des avantages uniques et une visibilité adaptée. Consultez notre section sponsoring pour plus de détails.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#0A2F85] rounded-lg border-none px-6">
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Y aura-t-il des opportunités de networking ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Oui, l'événement comprend de nombreuses sessions de networking, des ateliers interactifs et des moments d'échange informels pour faciliter les connexions entre participants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#0A2F85] rounded-lg border-none px-6">
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Comment puis-je devenir speaker ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Pour devenir speaker, veuillez nous contacter via le formulaire de contact en sélectionnant "Speaker" comme sujet. Notre équipe examinera votre proposition et vous recontactera.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
    
  );
}
