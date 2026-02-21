// const clients = [
//   "GlobalTech Inc.",
//   "MediaMax",
//   "LangBridge",
//   "WorldSpeak",
//   "TransGlobal",
//   "VoxMedia",
// ];

// const ClientsSection = () => {
//   return (
//     <section className="py-16 bg-secondary overflow-hidden">
//       <div className="container mx-auto px-6">
//         <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">
//           Trusted by leading companies
//         </p>

//         {/* 1️⃣ OUTER WRAPPER – hides overflow */}
//         <div className="relative w-full overflow-hidden">

//           {/* 2️⃣ THIS DIV MOVES (ADD animate-scroll-left HERE) */}
//           <div className="flex gap-16 whitespace-nowrap animate-scroll-left">

//             {/* Client items */}
//             {clients.map((client, index) => (
//               <div
//                 key={`client-1-${index}`}
//                 className="font-heading text-lg font-semibold text-muted-foreground/60"
//               >
//                 {client}
//               </div>
//             ))}

//             {/* Duplicate for seamless loop */}
//             {clients.map((client, index) => (
//               <div
//                 key={`client-2-${index}`}
//                 className="font-heading text-lg font-semibold text-muted-foreground/60"
//               >
//                 {client}
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsSection;


import pocketfm from "@/assets/clients/pocketfm.png";
import glentech from "@/assets/clients/glentech.png";
import bayantech from "@/assets/clients/bayantech.png";
import storytv from "@/assets/clients/storytv.png";
// import kukufm from "@/assets/clients/kukufm.png";
// import futurebeeai from "@/assets/clients/futurebeeai.png";
// import joshtalks from "@/assets/clients/joshtalks.png";

const clients = [
  { name: "Pocket FM", logo: pocketfm },
  { name: "GlenTech", logo: glentech },
  { name: "BayanTech", logo: bayantech },
  { name: "Story TV", logo: storytv },
  // { name: "KUKU FM", logo: kukufm },
  // { name: "FutureBeeAI", logo: futurebeeai },
  // { name: "Josh Talks", logo: joshtalks },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">
          Trusted by leading companies
        </p>

        {/* Outer wrapper */}
        <div className="relative w-full overflow-hidden">

          {/* Moving row */}
          <div className="flex items-center gap-20 whitespace-nowrap animate-scroll-left">

            {/* First set */}
            {clients.map((client, index) => (
              <div key={`logo-1-${index}`} className="flex items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}

            {/* Duplicate set for infinite loop */}
            {clients.map((client, index) => (
              <div key={`logo-2-${index}`} className="flex items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;