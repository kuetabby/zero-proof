"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { ArrowRightOutlined } from "@ant-design/icons";

// import JuiceLogo from "@/assets/logo-mixer.png";
// import AuditLogo from "@/assets/logo-audit.png";
// import StakeLogo from "@/assets/logo-stake.png";

import "./style.css";

interface Props {}

export const AppFeature: React.FC<Props> = () => {
  const [isFeaturesVisible, setIsFeaturesVisible] = React.useState(false);

  const featuresRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsFeaturesVisible(entry.isIntersecting);
    });

    observer.observe(featuresRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <div id="features" className="h-20 md:h-24 relative" />
      <div className="w-full h-full relative px-2 mx-auto">
        <h1
          ref={featuresRef}
          className={`app-features ${
            isFeaturesVisible && "animate-slideInTopBasic"
          }`}
        >
          Unleashing the Potential of Zero Knowledge Proof: Pioneering Security
          and Innovation
        </h1>

        <div className="w-full md:w-11/12 flex flex-wrap justify-between mx-auto mt-10 mb-5">
          <Card className="bg-transparent shadow-rose w-full h-auto sm:w-[47.5%] font-semibold border-2 border-secondary">
            {/* <Image
              src={JuiceLogo}
              alt="juice-logo"
              className="w-40 h-40 mt-4 mx-auto rounded-full shadow-sunny"
            /> */}
            <CardHeader className="card-features-header">
              Multichain Bridge
            </CardHeader>
            <CardBody className="text-white pt-0">
              Zero Knowledge Proof's bridge utility seamlessly connects
              disparate blockchain networks, allowing secure and swift asset
              transfers across platforms with enhanced privacy and reliability
            </CardBody>
            <CardFooter className="pt-0 mx-auto">
              <Link href="/juice">
                <Button
                  rightIcon={<ArrowRightOutlined />}
                  className="bg-night-sky hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon text-white mt-4 shadow-sunny hover:shadow-rose"
                >
                  Bridge Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-night-sky shadow-rose w-full h-auto sm:w-[47.5%] font-semibold">
            {/* <Image
              src={StakeLogo}
              alt="stake-logo"
              className="w-40 h-40 mt-4 mx-auto rounded-full shadow-sunny"
            /> */}
            <CardHeader className="card-features-header">
              Staking dApp
            </CardHeader>
            <CardBody className="text-white pt-0">
              Engage in Zero Knowledge Proof's staking utility to earn rewards
              by actively participating in securing the network. Stake your
              assets to support network operations while generating passive
              income
            </CardBody>
            <CardFooter className="pt-0 mx-auto">
              <Link href="/staking">
                <Button
                  rightIcon={<ArrowRightOutlined />}
                  className="bg-twilight-horizon hover:bg-night-sky active:bg-night-sky focus:bg-night-sky hover:border-2 hover:border-cyan-500 text-white mt-4 shadow-sunny hover:shadow-rose"
                >
                  Stake Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-night-sky shadow-rose w-full h-auto sm:w-[47.5%] font-semibold sm:mt-4">
            {/* <Image
              src={AuditLogo}
              alt="audit-logo"
              className="w-40 h-40 mt-4 mx-auto rounded-full shadow-sunny"
            /> */}
            <CardHeader className="card-features-header">
              Token Launcher
            </CardHeader>
            <CardBody className="text-white pt-0">
              With Zero Knowledge Proof's token launcher utility, effortlessly
              create new tokens or assets on the blockchain, enabling innovative
              projects and functionalities within the ecosystem
            </CardBody>
            <CardFooter className="pt-0 mx-auto">
              {/* <Button
                isDisabled
                rightIcon={<ArrowRightOutlined />}
                className="bg-twilight-horizon hover:bg-night-sky active:bg-night-sky focus:bg-night-sky hover:border-2 hover:border-cyan-500 text-white mt-4 shadow-sunny hover:shadow-rose"
              >
                Comin Soon
              </Button> */}
            </CardFooter>
          </Card>

          <Card className="bg-transparent shadow-rose w-full h-auto sm:w-[47.5%] font-semibold sm:mt-4 border-2 border-secondary">
            {/* <Image
              src={AuditLogo}
              alt="audit-logo"
              className="w-40 h-40 mt-4 mx-auto rounded-full shadow-sunny"
            /> */}
            <CardHeader className="card-features-header">
              Token Locker
            </CardHeader>
            <CardBody className="text-white pt-0">
              Securely store and manage your assets with Zero Knowledge Proof's
              token locker utility. Safeguard tokens in a protected environment,
              ensuring enhanced security and peace of mind
            </CardBody>
            <CardFooter className="pt-0 mx-auto">
              {/* <Button
                isDisabled
                rightIcon={<ArrowRightOutlined />}
                className="bg-night-sky hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon text-white mt-4 shadow-sunny hover:shadow-rose"
              >
                Comin Soon
              </Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};