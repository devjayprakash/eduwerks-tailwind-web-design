import { MdArrowDownward, MdFileDownloadDone } from "react-icons/md";

interface HomeworkDetailsProps {
  time: string;
  subject: string;
  topic: string;
  deadline: string;
}

const members = [
  {
    profile:
      "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
    name: "Wade Warren",
    date: "5 March",
    icon: <MdFileDownloadDone />,
    buttonText: "Open File",
  },
];

const HomeworkDetails: React.FC<HomeworkDetailsProps> = ({
  time,
  subject,
  topic,
  deadline,
}) => {
  return (
    <div className="p-5">
      <div className="flex  py-10 justify-between items-center">
        <div className="flex items-center gap-4 mb-3">
          <div className="font-bold text-lg">{time}Class</div>
          <div className="bg-red-100 px-3 py-1 rounded-lg">{subject}</div>
        </div>
        <div className="flex gap-5">
          <div className="text-gray-400">Topic</div>
          <div className="flex items-center gap-3">
            All <MdArrowDownward />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-gray-400 text-lg">
          Last Topic <span className="text-black font-bold">{topic}</span>
        </div>
        <div className="text-sm text-gray-400">Deadline: {deadline}</div>
      </div>
      <div className="mt-5 h-[80vh] space-y-3 flex-grow overflow-y-auto">
        {new Array(20).fill(members[0]).map((mem) => {
          return (
            <div className="flex px-3 gap-3 justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  src={mem.profile}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                {mem.name}
              </div>
              <div className="text-gray-400">{mem.date}</div>
              <div className="flex items-center text-emerald-500 font-bold">
                {mem.icon}
                {mem.buttonText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeworkDetails;
