"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@chakra-ui/react";
import {
  LineChartOutlined,
  PauseOutlined,
  SwapRightOutlined,
} from "@ant-design/icons";

import { AppFeature } from "./Feature";
import { AppTokenomics } from "./Tokenomics";
import { AppFindUs } from "./FindUs";

import Loader from "@/components/Loader";

import { useIsMounted } from "@/hooks/useIsMounted";

// import AppBackground from "@/assets/bg-app.png";

import "./style.css";

interface Props {}

const contractAddress = "-";
const pairAddress = "-";

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  if (!isMounted) {
    return <Loader />;
  }

  return (
    <div className="homepage-container">
      <div id="welcome" className="h-12 md:h-20 relative" />
      <div className="w-full h-full relative">
        <div
          ref={welcomeRef}
          className={`w-full h-auto flex flex-wrap items-center text-2xl font-bold ${
            isWelcomeVisible && "animate-slideInLeftBasic"
          }`}
        >
          Welcome To <span className="app-name">Zero Knowledge Proof</span>
        </div>

        <div className="h-4 md:h-6" />
        {/* <div className="w-full sm:w-1/2 lg:w-1/3 flex items-baseline xs:text-xl sm:text-2xl font-bold">
          Facilitating Secure Cross-Network Asset Movements{" "}
          <span className="mr-1">
            <PauseOutlined
              className="text-green-500 animate-pulse"
              style={{ fontSize: "1.25em" }}
            />
          </span>
        </div> */}

        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex items-baseline xs:text-xl">
          <span className="mr-1">
            <PauseOutlined
              className="text-cyan-500 animate-pulse"
              style={{ fontSize: "1.25em" }}
            />
          </span>
          Facilitating Secure Cross-Network Asset Movements
        </div>

        <div className="w-full sm:w-1/2 lg:w-2/5 mt-4 mb-6 text-xs font-semibold text-slate-500">
          Zero Knowledge Proof empowers asset growth through its bridge,
          staking, and audit tools utilities.
        </div>
        <div className="w-full mt-4 mb-6 text-sm sm:text-base font-semibold text-white">
          {contractAddress}
        </div>
        <Link
          href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-[8em] bg-twilight-horizon hover:bg-starry-night active:bg-starry-night focus:bg-starry-night text-white shadow-sunny hover:shadow-rose ml-2 sm:ml-0"
            rightIcon={<LineChartOutlined style={{ fontSize: "1.5em" }} />}
          >
            Chart
          </Button>
        </Link>

        <Link
          href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-[8em] bg-starry-night hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon text-white shadow-sunny hover:shadow-rose ml-6"
            rightIcon={<SwapRightOutlined style={{ fontSize: "1.5em" }} />}
          >
            Buy Now
          </Button>
        </Link>
      </div>

      <AppFeature />
      <AppFindUs />
      <AppTokenomics />
    </div>
  );
};

export default Home;
