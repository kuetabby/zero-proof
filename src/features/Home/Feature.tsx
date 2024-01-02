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

import AuditLogo from "@/assets/logo-audit.png";
import BridgeLogo from "@/assets/logo-bridge.png";
import StakeLogo from "@/assets/logo-stake.png";
import LauncherLogo from "@/assets/logo-launcher.png";
import LockerLogo from "@/assets/logo-token-locker.png";

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

        <div className="w-full md:w-11/12 flex flex-wrap justify-evenly mx-auto mt-10 mb-5">
          <Card className="bg-night-sky shadow-rose w-full h-auto sm:w-[47.5%] font-semibold border border-transparent mb-4 sm:mb-0">
            <CardHeader className="card-features-header">
              Multichain Bridge
            </CardHeader>
            <CardBody className="text-white pt-0">
              <Image
                src={BridgeLogo}
                alt="bridge-logo"
                className="w-40 h-40 my-4 mx-auto shadow-sunny"
              />
              Zero Knowledge Proof's bridge utility seamlessly connects
              disparate blockchain networks, allowing secure and swift asset
              transfers across platforms with enhanced privacy and reliability
            </CardBody>
            <CardFooter className="pt-0 mx-auto">
              <Link href="/bridge">
                <Button
                  rightIcon={<ArrowRightOutlined />}
                  className="bg-night-sky hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon border border-cyan-500 hover:border-none text-white mt-4 shadow-sunny hover:shadow-rose"
                >
                  Bridge Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-night-sky shadow-rose w-full h-auto sm:w-[47.5%] font-semibold border border-transparent">
            <CardHeader className="card-features-header">
              Staking dApp
            </CardHeader>
            <CardBody className="text-white pt-0">
              <Image
                src={StakeLogo}
                alt="stake-logo"
                className="w-40 h-40 my-4 mx-auto shadow-sunny"
              />
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

          <div className="w-full  my-4">
            <Card className="bg-transparent shadow-rose w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 h-auto font-semibold border-2 border-secondary mx-auto">
              <CardHeader className="card-features-header">
                Audit Tools
              </CardHeader>
              <CardBody className="text-white pt-0">
                <Image
                  src={AuditLogo}
                  alt="audit-logo"
                  className="w-40 h-40 my-4 mx-auto shadow-sunny"
                />
                Zero Knowledge Proof's Audit Tools utility provides robust and
                meticulous smart contract analysis and examination. Conduct
                comprehensive audits to identify potential vulnerabilities and
                errors, ensuring the utmost security and integrity within the
                blockchain ecosystem
              </CardBody>
              <CardFooter className="pt-0 mx-auto">
                <Link href="/audit">
                  <Button
                    rightIcon={<ArrowRightOutlined />}
                    className="bg-twilight-horizon hover:bg-night-sky active:bg-night-sky focus:bg-night-sky text-white mt-4 shadow-sunny hover:shadow-rose"
                  >
                    Audit Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Card className="bg-night-sky shadow-rose w-full h-auto sm:w-[47.5%] font-semibold border border-transparent mb-4 sm:mb-0">
            <CardHeader className="card-features-header">
              Token Launcher
            </CardHeader>
            <CardBody className="text-white pt-0">
              <Image
                src={LauncherLogo}
                alt="launcher-logo"
                className="w-40 h-40 my-4 mx-auto shadow-sunny"
              />
              Empower innovative projects and initiatives by effortlessly
              launching customizable tokens, fostering growth, and
              diversification within the ecosystem
            </CardBody>
            {/* <CardFooter className="pt-0 mx-auto">
              <Link href="/staking">
                <Button
                  rightIcon={<ArrowRightOutlined />}
                  className="bg-twilight-horizon hover:bg-night-sky active:bg-night-sky focus:bg-night-sky hover:border-2 hover:border-cyan-500 text-white mt-4 shadow-sunny hover:shadow-rose"
                >
                  Stake Now
                </Button>
              </Link>
            </CardFooter> */}
          </Card>

          <Card className="bg-night-sky shadow-rose w-full h-auto sm:w-[47.5%] font-semibold border border-transparent">
            <CardHeader className="card-features-header">
              Token Locker
            </CardHeader>
            <CardBody className="text-white pt-0">
              <Image
                src={LockerLogo}
                alt="locker-logo"
                className="w-40 h-40 my-4 mx-auto shadow-sunny"
              />
              Securely store and manage your assets with Zero Knowledge Proof's
              token locker utility. Safeguard tokens in a protected environment,
              ensuring enhanced security and peace of mind
            </CardBody>
            {/* <CardFooter className="pt-0 mx-auto">
              <Link href="/bridge">
                <Button
                  rightIcon={<ArrowRightOutlined />}
                  className="bg-night-sky hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon border border-cyan-500 hover:border-none text-white mt-4 shadow-sunny hover:shadow-rose"
                >
                  Bridge Now
                </Button>
              </Link>
            </CardFooter> */}
          </Card>

          {/* <Card className="bg-transparent shadow-rose w-full h-auto sm:w-[47.5%] font-semibold sm:mt-4 border-2 border-secondary">
            <Image
              src={AuditLogo}
              alt="audit-logo"
              className="w-40 h-40 mt-4 mx-auto rounded-full shadow-sunny"
            />
            <CardHeader className="card-features-header">
              Token Locker
            </CardHeader>
            <CardBody className="text-white pt-0">
              Securely store and manage your assets with Zero Knowledge Proof's
              token locker utility. Safeguard tokens in a protected environment,
              ensuring enhanced security and peace of mind
            </CardBody>
            <CardFooter className="pt-0 mx-auto">
              <Button
                isDisabled
                rightIcon={<ArrowRightOutlined />}
                className="bg-night-sky hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon text-white mt-4 shadow-sunny hover:shadow-rose"
              >
                Comin Soon
              </Button>
            </CardFooter>
          </Card> */}
        </div>
      </div>
    </>
  );
};
