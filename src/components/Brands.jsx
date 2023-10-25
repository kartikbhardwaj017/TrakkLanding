import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { KotakLogo } from "../assets/logos/KotakLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";
import kotak from "../assets/images/KotakLogog.svg";
import hdfcLogo from "../assets/images/HdfcLogo.svg";
import iciciLogo from "../assets/images/IciciLogo.svg";
import sbiLogo from "../assets/images/SbiLogo.svg";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Supports
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                all major banks
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap justify-center">
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center mx-4">
                <img
                  src={hdfcLogo}
                  alt="HDFC Logo"
                  className="w-32 h-[100px]"
                  style={{ height: 32, width: 100 }}
                />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center mx-4">
                <img
                  src={iciciLogo}
                  alt="ICICI Logo"
                  className="w-32 h-[100px]"
                  style={{ height: 32, width: 100 }}
                />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center mx-4">
                <img
                  src={sbiLogo}
                  alt="SBI Logo"
                  className="w-32 h-[90px]"
                  style={{ height: 28, width: 100 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
