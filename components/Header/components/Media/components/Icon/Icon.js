const Icon = ({ Source, active }) => {
  return (
    <div className="w-16 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Source
        className={`h-5 text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default Icon;
