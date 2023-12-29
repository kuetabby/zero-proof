"use client";
import React from "react";
import Image from "next/image";
import { Divider, List, ListItem } from "@chakra-ui/react";

import TokenomicsLogo from "@/assets/tokenomics.png";

import "./style.css";

interface Props {}

export const AppTokenomics: React.FC<Props> = () => {
  const [isTokensVisible, setIsTokensVisible] = React.useState(false);

  const featuresRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsTokensVisible(entry.isIntersecting);
    });

    observer.observe(featuresRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <div id="tokenomics" className="h-20 md:h-24 relative" />
      <div className="w-full h-full relative px-2 mx-auto text-center">
        <h1
          ref={featuresRef}
          className={`app-features ${
            isTokensVisible && "animate-slideInTopBasic"
          }`}
        >
          $ZKP
        </h1>
        <div className="text-lg sm:text-xl font-semibold text-white">
          Tokenomics
        </div>

        <List className="text-base lg:text-2xl xl:text-3xl font-semibold xs:px-2 sm:px-0 text-center mt-4">
          <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
            CA : -
          </ListItem>
        </List>
        <div className="w-full md:w-3/4 flex flex-wrap items-center justify-between mt-6 mb-3 mx-auto">
          <div className="w-full sm:w-1/2">
            <Image
              src={TokenomicsLogo}
              alt="tokenomics"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 mx-auto">
            <List className="text-base lg:text-2xl xl:text-3xl font-semibold xs:px-2 sm:px-0 text-center sm:text-left">
              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                Name : Zero Knowledge Proof
              </ListItem>
              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                Total Supply : 100,000,000
              </ListItem>
              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                Tax Buy/Sell : 5 %
              </ListItem>

              <Divider className="my-1 text-cyan-500" />

              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                ⦿ Liquidity : 80 %
              </ListItem>
              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                ⦿ Staking : 10 %
              </ListItem>
              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                ⦿ KOLs : 5 %
              </ListItem>
              <ListItem className="text-lg lg:text-2xl xl:text-3xl font-bold">
                ⦿ CEX Reserve : 5 %
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};
