interface HomeworkCard {
  time: string;
  subject: string;
  topic: string;
  checks: number;
  profiles: Array<string>;
  active?: boolean;
}

const HomeworkCard: React.FC<HomeworkCard> = ({
  time,
  subject,
  topic,
  checks,
  profiles,
  active,
}) => {
  return (
    <div
      className={`w-full p-5 bg-white rounded-lg flex border-2 hover:border-emerald-500 ${
        active && " border-emerald-600"
      }`}
    >
      <div className="w-1/2">
        <div className="flex items-center gap-4 mb-3">
          <div className="font-bold">{time}</div>
          <div className="bg-red-100 px-3 py-1 rounded-lg">{subject}</div>
        </div>
        <div className="text-xs text-gray-400">Last Topic</div>
        <div className="text-xs font-bold">{topic}</div>
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <div className="flex">
          {profiles.map((profile, i) => (
            <div
              style={{
                transform: `translateX(-${i * 10}px)`,
              }}
              className={`p-1 rounded-full bg-white`}
            >
              <img className="w-5 h-5 rounded-full" src={profile} />
            </div>
          ))}
          <div className="text-gray-400 transform -translate-x-4">+22</div>
        </div>
        <div className="bg-gray-100 cursor-pointer text-sm px-3 font-bold py-1 mt-3 rounded-lg">
          +{checks} to check
        </div>
      </div>
    </div>
  );
};

export default HomeworkCard;
