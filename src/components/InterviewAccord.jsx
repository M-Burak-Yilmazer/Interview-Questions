import Ouestion from "./Question";

const InterviewAccord = ({ data }) => {
  return <div className="row">{data && <Ouestion data={data} />}</div>;
};

export default InterviewAccord;
