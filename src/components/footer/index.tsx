const Footer = () => {
  return (
    <div className="px-6 md:px-12 2xl:px-[140px] bg-[#091929]">
      <div className="md:flex justify-between p-6 text-[#f0f0f0] text-center xl:text-start">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center md:justify-start">
            <a href="#">
              <img className="" src="/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="hidden xl:block">
            <p className="text-sm/[24px] font-normal">+998991234567</p>
            <p className="text-sm/[20px] font-light">grand_invest@gmail.com</p>
          </div>
          <ul className="hidden xl:flex items-center gap-5">
            <li>
              <a className="no-underline" href="#">
                <img src="/telegram.svg" alt="telegram" />
              </a>
            </li>
            <li>
              <a className="no-underline" href="#">
                <img src="/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a className="no-underline" href="#">
                <img src="/youtube.svg" alt="youtube" />
              </a>
            </li>
            <li>
              <a className="no-underline" href="#">
                <img src="/call.svg" alt="call" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
          <div className="flex flex-col gap-3">
            <strong className="text-sm/[26px] font-medium">Quick links</strong>
            <ul className="flex flex-col gap-2 xl:justify-center">
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Exchange Rates
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Signals
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="text-sm/[26px] font-medium">Products</strong>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Solutions
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="text-sm/[26px] font-medium">Quick links</strong>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Solutions
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-sm/[20px] font-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <div className="block xl:hidden">
              <p className="text-sm/[24px] font-normal">+998991234567</p>
              <p className="text-sm/[20px] font-light">
                grand_invest@gmail.com
              </p>
            </div>
            <ul className="flex xl:hidden items-center justify-center gap-5">
              <li>
                <a className="no-underline" href="#">
                  <img src="/telegram.svg" alt="telegram" />
                </a>
              </li>
              <li>
                <a className="no-underline" href="#">
                  <img src="/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a className="no-underline" href="#">
                  <img src="/youtube.svg" alt="youtube" />
                </a>
              </li>
              <li>
                <a className="no-underline" href="#">
                  <img src="/call.svg" alt="call" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
