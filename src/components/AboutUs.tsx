import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
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
        <img src="/public/aboutus.svg" alt="" />
      </motion.div>
      <motion.div
        className="text-center md:text-start"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="px-4 py-1 bg-[#EA9C14] rounded-md">
          {t("aboutUs.whatwedo")}
        </span>
        <h1 className="py-5 text-4xl lg:text-5xl font-medium text-[#EA9C14]">
          {t("aboutUs.title")}
        </h1>
        <p className="pt-3 pb-4">{t("aboutUs.subtitle")}</p>
        <p className="py-4">{t("aboutUs.subtitle2")}</p>
        <p className="py-4">{t("aboutUs.subtitle3")}</p>
        <Button className="bg-[#EA9C14] hover:bg-[#EA9C14] px-8 rounded-3xl">
          {t("aboutUs.button")}
        </Button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
