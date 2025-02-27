import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "./CustomButton";

const AboutUsComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { t } = useTranslation();

  return (
    <div
      className="py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-6"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="/aboutus.svg" alt="" />
      </motion.div>
      <motion.div
        className="text-center md:text-start"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="px-4 py-1 bg-gradient-light-right rounded-md">
          {t("aboutUs.whatwedo")}
        </span>
        <h1 className="py-4 text-4xl lg:text-5xl font-medium gradient-text-light">
          {t("aboutUs.title")}
        </h1>
        <p className="pt-3 pb-4 text-[#1f2c39] dark:text-[#f0f0f0]">
          {t("aboutUs.subtitle")}
        </p>
        <p className="py-4 text-[#1f2c39] dark:text-[#f0f0f0]">
          {t("aboutUs.subtitle2")}
        </p>
        <p className="py-4 text-[#1f2c39] dark:text-[#f0f0f0]">
          {t("aboutUs.subtitle3")}
        </p>
        <CustomButton href="/signup" title={t("aboutUs.button")} />
      </motion.div>
    </div>
  );
};

export default AboutUsComponent;
