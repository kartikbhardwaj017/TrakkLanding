import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              Embracing the Power of Community
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Trakk is Open Source!
            </h2>
            <p className="mb-16 text-customGrayText leading-loose">
              By going open source, we are opening the doors for passionate
              developers, designers, and financial enthusiasts to contribute
              their ideas and skills. This isn't just our project anymore; it’s
              a community-driven initiative where your contributions can make a
              real impact.
            </p>
            <div className="w-[210px] h-12 mr-10 ">
              <a
                className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/kartikbhardwaj017/trakk"
                target="_blank"
                aria-label="source code"
              >
                <GithubIcon />
                <span className="pt-px">Source code</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
