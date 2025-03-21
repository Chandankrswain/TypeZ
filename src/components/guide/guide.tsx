interface GuideProps {
  className?: string;
}
export const Guide = ({ className = "" }: GuideProps) => {
  return (
    <div
      className={`flex text-xs gap-3 justify-center text-gray-400 items-center ${className}`}
    >
      <div className="bg-[#646669] px-3 py-0.5 rounded">tab</div>
      <p>+</p>
      <div className="bg-[#646669] px-3 py-0.5 rounded">enter</div>
      <p>-</p>
      <p>restart test</p>
    </div>
  );
};

export default Guide;
