import Image from "next/image";
import Afrique from '../../public/images/afrique.png'
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";


export default function Home() {
  return (
    <div className="bg-[#06286F] min-h-screen">
      {/* Hero Section */}
      <div
        className={cn(
          'absolute inset-0 bottom-0 bg-cover bg-center opacity-100',
          'bg-[url("/images/afrique.png")]'
        )}
      ></div>

      
    </div>
    
  );
}
