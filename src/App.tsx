import { motion } from "framer-motion";
import { MutableRefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h1 className="text-center relative z-0 text-[14vw] font-black text-neutral-800 md:text-[100px]">
        Awesome Drag Cards<span className="text-sky-600">.</span>
      </h1>
      <Cards />
    </section>
  );
}

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={containerRef} className=" absolute inset-0 z-0">
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1444212477490-ca407925329e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        rotate="4deg"
        top="55%"
        left="20%"
        className="w-28 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1560743641-3914f2c45636?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image"
        rotate="-4deg"
        top="40%"
        left="10%"
        className="w-28 md:w-56"
      />
    </div>
  );
};

type CardProps = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
};
const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const elements = document.querySelectorAll(".drag-els");
    let maxZIndex = -Infinity;

    elements.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };
  return (
    <motion.img
      onMouseDown={updateZIndex}
      src={src}
      alt={alt}
      dragConstraints={containerRef}
      drag
      dragElastic={0.65}
      className={twMerge(
        "drag-els absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
    />
  );
};
