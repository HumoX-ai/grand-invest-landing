import { NavLink } from "react-router-dom";
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
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";

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
      className="pt-4 flex items-center justify-between px-6 md:px-12 2xl:px-[140px]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Menu
        className="xl:hidden dark:text-[#EA9C14]"
        onClick={() => setOpen(!open)}
        size={28}
      />
      <img
        src="../../../public/logo.svg"
        alt="Logo"
        className="h-10 md:h-full"
      />
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
            className="w-fit flex justify-center items-center px-0"
            defaultValue={"uz"}
          >
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uz">
              <div className="flex gap-2 items-center justify-center">
                <img
                  src="../../../public/uz.svg"
                  alt="Uzbek"
                  className="w-6 h-6"
                />
                <p>uz</p>
              </div>
            </SelectItem>
            <SelectItem value="ru">
              <div className="flex gap-2 items-center justify-center">
                <img
                  src="../../../public/ru.svg"
                  alt="Russian"
                  className="w-6 h-6"
                />
                <p>ru</p>
              </div>
            </SelectItem>
            <SelectItem value="en">
              <div className="flex gap-2 items-center justify-center">
                <img
                  src="../../../public/en.svg"
                  alt="English"
                  className="w-6 h-6"
                />
                <p>en</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-[#EA9C14] hover:bg-[#EA9C14] px-8 rounded-3xl hidden xl:flex">
          {t("header.login")}
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="xl:hidden" side="left">
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
          <Button className="bg-[#EA9C14] hover:bg-[#EA9C14] px-8 rounded-3xl xl:hidden flex w-full mt-6">
            {t("header.login")}
          </Button>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default Header;
