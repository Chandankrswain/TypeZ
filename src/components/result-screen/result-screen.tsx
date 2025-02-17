const ResultScreen = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg w-96 text-center animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800">🎉 Time's Up!</h2>
      <p className="text-gray-600 mt-2">Your typing session is over.</p>
      <button
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </div>
  );
};

export default ResultScreen;
