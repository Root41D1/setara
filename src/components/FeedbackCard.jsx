import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title }) => (
  <div className="flex justify-between flex-col px-3 py-12 rounded-[20px]  max-w-[600px] md:mr-20 sm:mr-10 mr-0 my-4 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-0">
        <h4 className="font-poppins font-semibold text-[25px] leading-[34px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[30px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
