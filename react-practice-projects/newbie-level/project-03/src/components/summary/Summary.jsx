import SummaryItem from "../summary-item/SummaryItem";
import summaryList from "../../assets/summaryList";

const Summary = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {summaryList.map((item) => {
        return <SummaryItem key={item.name} item={item} />;
      })}
    </div>
  );
};

export default Summary;
