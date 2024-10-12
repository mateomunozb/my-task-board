import '../assets/css/task-icon.css'
import { ReactComponent as DoneSVG } from '../assets/svg/done.svg';
import { ReactComponent as DeleteSVG } from '../assets/svg/delete.svg';
import { CgSandClock } from "react-icons/cg";
import { SiBookstack } from "react-icons/si";
import { FaSearch, FaReadme, FaMusic } from "react-icons/fa";
import { MdCleaningServices, MdOutlineSportsSoccer, MdWork } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const iconTypes = {
  "done": (color, size) => <DoneSVG width={size} heigth={size} fill={color}/>,
  "delete": (color, size) => <DeleteSVG  width={size} heigth={size} fill={color}/>,
  "progress": () => <CgSandClock />,
  "header": () => <SiBookstack />,
  "search": () => <FaSearch />,
  "clean": () => <MdCleaningServices />,
  "sport": () => <MdOutlineSportsSoccer />,
  "study": () => <FaReadme />,
  "word": () => <MdWork />,
  "fun": () => <FaMusic />,
  'add': () => <FaPlus />,
};

function TaskIcon({ type, color, size }) {
  return (
    <span className={`task-icon task-icon--${type}`}>
      {iconTypes[type](color, size)}
    </span>
  )
};

export { TaskIcon };