import reactionIcon from "./images/icon-reaction.svg";
import memoryIcon from "./images/icon-memory.svg";
import verbalIcon from "./images/icon-verbal.svg";
import visualIcon from "./images/icon-visual.svg";

const summaryList = [
  {
    name: "Reaction",
    score: 80,
    image: reactionIcon,
    bgColor: "lightRed-100",
    textColor: "lightRed-200",
  },
  {
    name: "Memory",
    score: 92,
    image: memoryIcon,
    bgColor: "orangeyYellow-100",
    textColor: "orangeyYellow-200",
  },
  {
    name: "Verbal",
    score: 61,
    image: verbalIcon,
    bgColor: "greenTeal-100",
    textColor: "greenTeal-200",
  },
  {
    name: "Visual",
    score: 72,
    image: visualIcon,
    bgColor: "cobaltBlue-100",
    textColor: "cobaltBlue-200",
  },
];

export default summaryList;
