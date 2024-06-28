import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "../ui/sheet";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  label: string;
  isActiveClass?: string;
  defaultClass?: string;
}

const NavItem = ({
  to,
  children,
  isActiveClass,
  defaultClass,
}: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? isActiveClass : defaultClass)}
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false); // pastga scroll qilganda header yoqoladi
      } else {
        setIsVisible(true); // yuqoriga scroll qilganda header ko'rinadi
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navItems = [
    { to: "/", label: t("header.home") },
    { to: "/about-us", label: t("header.about") },
  ];

  const productItems = [
    { to: "/trading-courses", label: t("header.products.courses") },
    { to: "/robots", label: t("header.products.robots") },
    { to: "/prop-accounts", label: t("header.products.propAccounts") },
  ];

  const featureItems = [
    { to: "/signals", label: t("header.features.signals") },
    { to: "/exchange-rates", label: t("header.features.exchangeRates") },
    { to: "/downloads", label: t("header.features.downloads") },
  ];

  const extraItems = [
    { to: "/blog", label: t("header.blog") },
    { to: "/contacts", label: t("header.contacts") },
  ];

  const isActiveClass =
    "text-[#EA9C14] relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-1/2 after:border-b-2 after:border-[#EA9C14]";
  const defaultClass = "relative";

  return (
    <motion.div
      className={`py-2 flex items-center justify-between px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto ${
        isVisible ? "top-0" : "-top-20"
      } sticky z-[9999] bg-[#F0F0F5] dark:bg-[#041628] transition-all duration-300`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Menu
        className="xl:hidden dark:text-[#EA9C14]"
        onClick={() => setOpen(!open)}
        size={28}
      />
      <Link to={"/"}>
        <img src="/logo.svg" alt="Logo" className="h-10 md:h-full" />
      </Link>
      <NavigationMenu className="hidden xl:flex">
        <NavigationMenuList className="flex gap-4">
          {navItems.map((item) => (
            <NavigationMenuItem
              className={navigationMenuTriggerStyle()}
              key={item.to}
            >
              <NavItem
                to={item.to}
                isActiveClass={isActiveClass}
                defaultClass={defaultClass}
                label={item.label}
              >
                {item.label}
              </NavItem>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("header.products.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="flex flex-col gap-2 p-4 w-[200px]">
                {productItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    isActiveClass={isActiveClass}
                    defaultClass={defaultClass}
                  >
                    {item.label}
                  </NavItem>
                ))}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("header.features.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="flex flex-col gap-2 p-4 w-[200px]">
                {featureItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    isActiveClass={isActiveClass}
                    defaultClass={defaultClass}
                  >
                    {item.label}
                  </NavItem>
                ))}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {extraItems.map((item) => (
            <NavigationMenuItem
              className={navigationMenuTriggerStyle()}
              key={item.to}
            >
              <NavItem
                to={item.to}
                isActiveClass={isActiveClass}
                defaultClass={defaultClass}
                label={item.label}
              >
                {item.label}
              </NavItem>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-4">
        <div className="hidden xl:block">
          <ModeToggle />
        </div>
        <Select
          defaultValue={
            localStorage.getItem("i18nextLng") === "ru-RU"
              ? "ru"
              : localStorage.getItem("i18nextLng") === "en-US"
              ? "en"
              : localStorage.getItem("i18nextLng") === "ru"
              ? "ru"
              : localStorage.getItem("i18nextLng") === "en"
              ? "en"
              : "uz"
          }
          onValueChange={(value) => {
            i18n.changeLanguage(value);
            localStorage.setItem("i18nextLng", value);
          }}
        >
          <SelectTrigger
            className="w-fit flex justify-center items-center px-0 focus:ring-0 focus:ring-ring focus:ring-offset-0"
            defaultValue={"uz"}
          >
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="mt-4">
            <SelectItem value="uz">
              <div className="flex gap-2 items-center px-2">
                <img src="/uz.svg" alt="Uzbek" className="w-6 h-6" />
                <p>uz</p>
              </div>
            </SelectItem>
            <SelectItem value="ru">
              <div className="flex gap-2 items-center px-2">
                <img src="/ru.svg" alt="Russian" className="w-6 h-6" />
                <p>ru</p>
              </div>
            </SelectItem>
            <SelectItem value="en">
              <div className="flex gap-2 items-center px-2">
                <img src="/en.svg" alt="English" className="w-6 h-6" />
                <p>en</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <CustomButton href="/login" title={t("header.login")} hidden />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="xl:hidden mt-12 md:mt-16 z-50" side="left">
          <div className="absolute top-1 left-4">
            <ModeToggle />
          </div>
          <div className="flex flex-col gap-6 text-xl mt-8">
            {navItems.map((item) => (
              <div>
                <NavItem
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  isActiveClass={isActiveClass}
                  defaultClass={defaultClass}
                >
                  {item.label}
                </NavItem>
              </div>
            ))}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {t("header.products.title")}
                </AccordionTrigger>
                <AccordionContent className="m-3 flex flex-col gap-2">
                  {productItems.map((item) => (
                    <NavItem
                      key={item.to}
                      to={item.to}
                      label={item.label}
                      isActiveClass={isActiveClass}
                      defaultClass={defaultClass}
                    >
                      {item.label}
                    </NavItem>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="mt-6">
                <AccordionTrigger>
                  {t("header.features.title")}
                </AccordionTrigger>
                <AccordionContent className="m-3 flex flex-col gap-2">
                  {featureItems.map((item) => (
                    <NavItem
                      key={item.to}
                      to={item.to}
                      label={item.label}
                      isActiveClass={isActiveClass}
                      defaultClass={defaultClass}
                    >
                      {item.label}
                    </NavItem>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {extraItems.map((item) => (
              <div>
                <NavItem
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  isActiveClass={isActiveClass}
                  defaultClass={defaultClass}
                >
                  {item.label}
                </NavItem>
              </div>
            ))}
          </div>
          <Button className="bg-gradient-light px-8 rounded-3xl xl:hidden flex w-full mt-6">
            {t("header.login")}
          </Button>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default Header;
