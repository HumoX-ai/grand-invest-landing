import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-14">
      <div className="h-[calc(100vh-10rem)] grid items-center grid-cols-1 md:grid-cols-2 gap-4">
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
            className="text-4xl lg:text-5xl font-medium text-center"
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
            <Button className="bg-[#EA9C14] hover:bg-[#EA9C14] px-8 rounded-3xl">
              {t("hero.button")}
            </Button>
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
