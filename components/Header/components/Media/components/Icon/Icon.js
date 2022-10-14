const Icon = ({ Source, active }) => {
  return (
    <div className="group flex h-8 w-16 cursor-pointer items-center justify-center rounded-xl hover:bg-gray-100 active:border-b-2 active:border-blue-500">
      <Source
        className={`h-5 text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default Icon;
