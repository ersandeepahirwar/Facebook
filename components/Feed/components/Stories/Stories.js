import Story from "./components/Story/Story";

const stories = [
  {
    id: 1,
    name: "Sandeep Malothiya",
    profile: "https://i.ibb.co/wCZkkcv/Sandeep-Profile.jpg",
    status: "https://i.ibb.co/hM1Xbt9/Sandeep-Status.jpg",
  },
  {
    id: 2,
    name: "Elon Musk",
    profile: "https://i.ibb.co/QPbdRLB/Elon-Musk-Profile.jpg",
    status: "https://i.ibb.co/QY1RLWs/Elon-Musk-Status.jpg",
  },
  {
    id: 3,
    name: "Ratan Tata",
    profile: "https://i.ibb.co/2c9FSFv/Ratan-Tata-Profile.jpg",
    status: "https://i.ibb.co/c2M5j6Q/Ratan-Tata-Status.jpg",
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    profile: "https://i.ibb.co/rfgG9kZ/Mark-Zuckerberg-Profile.jpg",
    status: "https://i.ibb.co/MZBccQT/Mark-Zuckerberg-Status.jpg",
  },
  {
    id: 5,
    name: "Bill Gates",
    profile: "https://i.ibb.co/CnL91s9/Bill-Gates-Profile.jpg",
    status: "https://i.ibb.co/JFn2rqZ/Bill-Gates-Status.jpg",
  },
];

const Stories = () => {
  return (
    <div className="mt-1 flex justify-center space-x-2 sm:mt-2">
      {stories.map((story) => (
        <Story
          key={story.id}
          name={story.name}
          profile={story.profile}
          status={story.status}
        />
      ))}
    </div>
  );
};

export default Stories;
