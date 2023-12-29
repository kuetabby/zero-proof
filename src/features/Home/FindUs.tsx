import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import Honeycomb from "@/assets/honeycomb.png";
// import Solidproof from "@/assets/solidproof.png";
import Dextools from "@/assets/dextools.png";
import Dexscreener from "@/assets/dexscreener.png";
import Uniswap from "@/assets/uniswap.png";

import "./style.css";

interface Props {}

const contractAddress = "-";
const pairAddress = "-";

export const AppFindUs: React.FC<Props> = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsContentVisible(entry.isIntersecting);
    });

    observer.observe(contentRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <div id="tokenomics" className="h-10 md:h-20 relative" />
      <div
        ref={contentRef}
        className={`mt-4 relative ${isContentVisible && "animate-fadeInLame"}`}
      >
        <div className={`relative why-card-container !mt-2`}>
          <div className="w-full md:w-4/5 lg:w-3/4 flex flex-wrap justify-between items-center relative px-2 mx-auto">
            <Link
              href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[30%] my-2 sm:my-0 h-16"
            >
              <Image
                src={Uniswap}
                alt="uniswap"
                className="object-contain w-full h-full"
              />
            </Link>
            <Link
              href={`https://dexscreener.com/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[30%] mb-2 sm:mb-0 h-16"
            >
              <Image
                src={Dexscreener}
                alt="dexscreener"
                className="object-contain w-full h-full"
              />
            </Link>
            <Link
              href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[30%] my-2 sm:my-0 h-[20vw] xs:h-[15vw] sm:h-full"
            >
              <Image
                src={Dextools}
                alt="dextools"
                className="object-contain w-full h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
