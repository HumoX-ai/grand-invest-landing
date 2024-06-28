import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const CustomButton = ({
  href,
  title,
  className,
  type,
  hidden,
  icon,
  dark,
  iconRight,
  onClick,
}: {
  href: string;
  title: string | JSX.Element;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  hidden?: boolean;
  icon?: JSX.Element;
  dark?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
}) => {
  const navigate = useNavigate();

  const getGradientClasses = () => {
    if (dark) {
      return "bg-gradient-to-r from-[#2c353e] to-[#344954] hover:from-[#f0f0f0] hover:to-[#f0f0f0] text-[#ea9c14] hover:text-[#2c353e]";
    } else {
      return "bg-gradient-to-r from-[#ea9c14] to-[#ffd765] hover:from-[#2c353e] hover:to-[#344954] text-[#2c353e] hover:text-[#ea9c14]";
    }
  };

  return (
    <Button
      onClick={() => {
        if (href === "#") {
          onClick && onClick();
        } else {
          navigate(href);
        }
      }}
      type={type}
      className={`${getGradientClasses()} px-8 rounded-lg transition-all duration-300 ease-in-out ${className} ${
        hidden ? "hidden xl:block" : ""
      }`}
    >
      <div className="flex items-center text-[16px]">
        {iconRight ? (
          <div>
            <div className="flex gap-3 items-center ">
              {typeof title === "string" ? title : title}
              {icon}
            </div>
          </div>
        ) : (
          <>
            {icon}
            {typeof title === "string" ? title : title}
          </>
        )}
      </div>
    </Button>
  );
};

export default CustomButton;
