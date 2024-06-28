import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import CustomButton from "./CustomButton";

const Signals = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("signals.free.title"),
      price: t("signals.free.price"),
      features: [
        {
          text: t("signals.free.feature_1"),
          icon: "/done_green.svg",
          available: true,
        },
        {
          text: t("signals.free.feature_2"),
          icon: "/done_green.svg",
          available: true,
        },
        {
          text: t("signals.free.feature_3"),
          icon: "/done_green.svg",
          available: true,
        },
        {
          text: t("signals.free.feature_4"),
          icon: "/done_green.svg",
          available: true,
        },
        {
          text: t("signals.free.feature_5"),
          icon: "/done_disabled.svg",
          available: false,
        },
        {
          text: t("signals.free.feature_6"),
          icon: "/done_disabled.svg",
          available: false,
        },
      ],
      buttonClass: "w-full bg-gradient-light-right rounded-xl",
      cardClass: "w-full max-w-[300px] border border-[#E38B05]",
      headerClass:
        "border border-[#263238] px-4 rounded-md w-fit mx-auto font-semibold",
    },
    {
      name: t("signals.premium.title"),
      price: t("signals.premium.price"),
      features: [
        {
          text: t("signals.premium.feature_1"),
          icon: "/done_gold.svg",
          available: true,
        },
        {
          text: t("signals.premium.feature_2"),
          icon: "/done_gold.svg",
          available: true,
        },
        {
          text: t("signals.premium.feature_3"),
          icon: "/done_gold.svg",
          available: true,
        },
        {
          text: t("signals.premium.feature_4"),
          icon: "/done_gold.svg",
          available: true,
        },
        {
          text: t("signals.premium.feature_5"),
          icon: "/done_gold.svg",
          available: true,
        },
        {
          text: t("signals.premium.feature_6"),
          icon: "/done_gold.svg",
          available: true,
        },
      ],
      buttonClass: "w-full bg-gradient-light-right rounded-xl   ",
      cardClass:
        "w-full max-w-[300px] border border-[#E38B05] bg-gradient-to-bl from-[#1f456b] to-[#1f2c39] text-white",
      headerClass:
        "border border-[#f0f0f0] px-4 rounded-md w-fit mx-auto font-semibold",
    },
  ];

  return (
    <div className="bg-[url('/signals-bg.svg')] bg-contain bg-center bg-white dark:bg-[#041628] bg-no-repeat flex justify-center items-center min-h-screen py-24">
      <div>
        <span className="px-4 py-1 bg-gradient-light-right rounded-md">
          {t("signals.title")}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 mt-8">
          {plans.map((plan, index) => (
            <Card key={index} className={plan.cardClass}>
              <CardHeader>
                <span className={plan.headerClass}>{plan.name}</span>
                <h1 className="text-5xl font-semibold gradient-text-light text-center pt-4">
                  {plan.price}
                </h1>
              </CardHeader>
              <CardContent>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-2 items-center py-2">
                    <img src={feature.icon} alt="" />
                    <p className="text-xs">{feature.text}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className=" w-full flex items-center justify-center mx-auto">
                <CustomButton
                  href="/signup"
                  title={t("signals.free.button")}
                  className="mx-auto"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signals;
