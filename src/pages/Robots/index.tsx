import ContactUs from "@/components/ContactUs";
import CustomButton from "@/components/CustomButton";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Robots = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="dark:bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover h-[calc(100vh-80px)]">
        <div className="relative h-full bg-right z-10 py-24 w-full container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-12">
            <div className="order-last lg:order-1 text-center lg:text-start">
              <span className="px-4 py-1 bg-gradient-light-right rounded-md">
                Products
              </span>
              <h1 className="text-4xl lg:text-5xl gradient-text-light mt-8 font-medium">
                {t("robots.title")}
              </h1>
              <p className="py-8">{t("robots.description")}</p>
              <Button
                className="rounded-xl border border-[#2C353E] dark:bg-[#F0F0F0] dark:text-black flex items-center gap-3 mx-auto lg:mx-0"
                variant="outline"
              >
                {t("robots.button")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule={"evenodd"}
                    d="M0.159766 10.085C-0.0532554 10.3237 -0.0532554 10.7106 0.159766 10.9493C0.372777 11.1879 0.718137 11.1879 0.931148 10.9493L5.29478 6.06038C5.50781 5.82173 5.50781 5.4348 5.29478 5.19615L0.931148 0.307263C0.718137 0.0685996 0.372777 0.0685996 0.159766 0.307263C-0.0532554 0.545914 -0.0532554 0.932845 0.159766 1.1715L4.1377 5.62827L0.159766 10.085ZM6.70522 10.085C6.4922 10.3237 6.4922 10.7106 6.70522 10.9493C6.91823 11.1879 7.26359 11.1879 7.4766 10.9493L11.8403 6.06038C12.0532 5.82173 12.0532 5.4348 11.8403 5.19615L7.4766 0.307263C7.26359 0.0685996 6.91823 0.0685996 6.70522 0.307263C6.4922 0.545914 6.4922 0.932845 6.70522 1.1715L10.6832 5.62827L6.70522 10.085Z"
                    fill="#2C353E"
                  />
                </svg>
              </Button>
            </div>
            <div className="order-1 lg:order-last">
              <img src="/robots.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom  mt-72 lg:mt-0">
        <iframe
          className="w-full h-[calc(100vh-80px)]"
          src="https://www.youtube-nocookie.com/embed/mlAMg5YTP3U?si=TYi6eJfdAc3cMYsp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="dark:bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover py-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-12">
            <div>
              <img src="/robots_2.svg" alt="" />
            </div>
            <div className="text-center lg:text-start">
              <p className="py-8">{t("robots.description2")}</p>
              <CustomButton
                href="#"
                title={t("robots.button2")}
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Robots;
