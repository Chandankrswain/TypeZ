export const ResultScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 pointer-events-auto flex-col ">
      <div className=" p-6 rounded-lg  text-center animate-fadeIn">
        <h2 className="text-5xl font-bold text-gray-400">Time's Up!</h2>
        <p className="text-gray-500 mt-2 text-4xl">
          Your typing session is over.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-[#bb86fc] text-white rounded-md hover:bg-purple-700 transition"
          onClick={() => window.location.reload()}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
