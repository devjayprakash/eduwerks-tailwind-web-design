import {
  MdLogout,
  MdMessage,
  MdNotes,
  MdOutlineSpaceDashboard,
  MdVideoCall,
} from "react-icons/md";
import {
  AiOutlineClockCircle,
  AiOutlineSchedule,
  AiOutlineUser,
} from "react-icons/ai";
import ProfileAvatar from "./ProfileAvatar";

interface SingleMenuData {
  text: string;
  icon: React.ReactNode;
  key: string;
  active?: boolean;
  notificationCount?: number;
}

const SidebarSlab: React.FC<SingleMenuData> = ({
  text,
  icon,
  active = false,
  notificationCount,
}) => {
  return (
    <div
      className={`flex hover:bg-emerald-50 cursor-pointer text-xl justify-between items-center text-gray-400 pr-10 ${
        active && "bg-emerald-100 text-emerald-700"
      }`}
    >
      <div
        className={`h-12 w-[6px] rounded-r-lg ${active && "bg-emerald-700"}`}
      ></div>
      <div className="flex items-center gap-3">
        <div>{icon}</div>
        <div>{text}</div>
      </div>
      <div
        className={`p-1 w-6 flex justify-center items-center h-6 text-xs rounded-full ${
          notificationCount && "bg-red-600"
        } text-white`}
      >
        {notificationCount}
      </div>
    </div>
  );
};

const menuData: Array<SingleMenuData> = [
  {
    text: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
    key: "menu-1",
  },
  {
    text: "Schedule",
    icon: <AiOutlineSchedule />,
    key: "menu-2",
    notificationCount: 12,
  },
  {
    text: "Students",
    icon: <AiOutlineUser />,
    key: "menu-3",
  },
  {
    text: "Homework",
    icon: <MdNotes />,
    key: "menu-4",
  },
  {
    text: "Messages",
    icon: <MdMessage />,
    key: "menu-5",
    notificationCount: 4,
  },
];

interface SidebarProps {
  active: number;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-between">
      <div>
        <div className="text-3xl pt-6 font-bold text-center w-full">
          eduwerks
        </div>
        <div className="flex justify-center my-10 items-center gap-2">
          <AiOutlineClockCircle className="text-gray-400" />
          <div className="text-gray-400">5 March</div>
          <div className="font-bold">10:50</div>
        </div>
        <div className="space-y-5">
          {menuData.map((data, i) => (
            <SidebarSlab
              active={i == active}
              text={data.text}
              key={data.key}
              icon={data.icon}
              notificationCount={data.notificationCount}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="font-bold flex rounded-md m-3 p-3 items-center gap-4 mt-10 text-emerald-700 bg-emerald-100">
            <MdVideoCall />
            New Video Class
          </button>
        </div>
      </div>

      <ProfileAvatar
        name="Kaili Genefer"
        email="kaili@gmail.com"
        onLogout={() => console.log("this works")}
      />
    </div>
  );
};

export default Sidebar;
