import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 mb-28 overflow-x-hidden">
      <div className=" grid items-center grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          className="w-full xl:w-10/12 order-last xl:order-first text-center md:text-start"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <ReactTyped
            backSpeed={100}
            strings={[t("hero.title"), t("hero.title2")]}
            typeSpeed={50}
            typedRef={function noRefCheck() {}}
            // loop
            className="text-3xl lg:text-5xl font-medium text-center"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
            className="mt-4"
          >
            <p className="text-sm font-medium text-gray-400">
              {t("hero.subtitle")}
            </p>
          </motion.div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          >
            <CustomButton href="/signup" title={t("hero.button")} />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex justify-end relative xl:order-last"
          initial={{ x: "200vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* <div className="absolute inset-0 backdrop-blur-sm bg-white/30"></div> */}
          <img src="/team.svg" alt="" className="relative" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
