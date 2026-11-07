import { FiArrowRight } from "react-icons/fi";

interface IconProps {
  size?: number;
  className?: string;
}

export function ArrowRightIcon({
  size = 18,
  className,
}: IconProps) {
  return (
    <FiArrowRight
      size={size}
      className={className}
      aria-hidden="true"
    />
  );
}

export {
  LuBookOpen as BookOpenIcon,
  LuCode as CodeIcon,
  LuUsers as UsersIcon,
  LuLightbulb as LightbulbIcon,

  // Contact icons
  LuArrowUpRight as ArrowUpRightIcon,
  LuPlus as PlusIcon,
  LuDiamond as DiamondIcon,
  LuCircleHelp as CircleHelpIcon,
} from "react-icons/lu";