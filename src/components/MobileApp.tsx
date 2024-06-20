import { Button } from "./ui/button";

const MobileApp = () => {
  const features = [
    {
      title: "Easy to use",
      description: "What you will get from the mobile application?",
    },
    {
      title: "Easy to use",
      description: "What you will get from the mobile application?",
    },
    {
      title: "Easy to use",
      description: "What you will get from the mobile application?",
    },
  ];
  return (
    <div className="bg-[url('/signals-bg.svg')] bg-contain bg-center bg-no-repeat min-h-screen py-24 bg-[#071828] px-6 md:px-12 2xl:px-[140px]">
      <div className="text-center">
        <h1 className="text-2xl font-semibold lg:text-4xl text-white max-w-[550px] mx-auto">
          A clean & easy to use experience with
          <span className="gradient-text-light"> Grand Invest</span>
        </h1>
        <p className="text-white mt-4">
          What you will get from the mobile application?
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div>
            <img src="/phone.svg" alt="" />
          </div>
          <div className="flex md:flex-row flex-col justify-around  gap-8 text-white">
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center h-full">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-8rem)] border-l-2 border-dashed border-yellow-500"></div>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center mb-28"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-900 border-2 border-dashed border-yellow-500 rounded-full">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col mb-[85px] md:mb-[100px]  ps-6"
                  >
                    <h1 className="text-xl font-semibold">{feature.title}</h1>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/qrcode.svg"
                className="bg-white p-2 rounded-lg mx-auto"
                alt=""
              />
              <p className="mx-auto max-w-44 text-center pt-4">
                Scan QR code to get the Mobile app
              </p>
              <Button className="w-full bg-gradient-light-right rounded-3xl mt-8">
                Get Mobile App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
