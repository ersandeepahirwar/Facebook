const Icon = ({ Source, active }) => {
  return (
    <div className="md:px-10 sm:h-14 flex items-center cursor-pointer md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Source
        className={`mx-auto h-5 sm:h-7 text-gray-500 text-center group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default Icon;
