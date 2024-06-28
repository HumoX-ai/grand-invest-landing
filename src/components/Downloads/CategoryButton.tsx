import { Button } from "@/components/ui/button";

export interface ICategory {
  name: string;
  icon?: React.ReactNode;
}

interface CategoryButtonProps {
  category: ICategory;
  isActive: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isActive,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className={`
        transition-all duration-300 ease-in-out
        ${
          isActive
            ? "bg-gradient-to-r from-[#ea9c14] to-[#ffd765] text-[#071828]"
            : "bg-[rgba(125,138,152,0.30)] hover:bg-[rgba(125,138,152,0.50)] text-[#7D8A98]"
        }
      `}
    >
      <span className={category.icon ? "mr-2" : ""}>{category.icon}</span>
      <span>{category.name}</span>
    </Button>
  );
};

export default CategoryButton;
