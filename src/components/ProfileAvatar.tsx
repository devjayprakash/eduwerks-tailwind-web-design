import { MdLogout } from "react-icons/md";

interface ProfileAvatarProps {
  name: string;
  email: string;
  onLogout?: () => void;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  email,
  onLogout,
}) => {
  return (
    <>
      <div>
        <div className="flex px-6 gap-3">
          <img
            className="rounded-full"
            width={42}
            height={42}
            src="https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b"
            alt=""
          />
          <div>
            <div className=" font-bold text-black">{name}</div>
            <div className="text-gray-300">{email}</div>
          </div>
        </div>
        <div
          onClick={() => {
            if (onLogout) {
              onLogout();
            }
          }}
          className="flex gap-4 text-gray-400 justify-center items-center text-xl my-5"
        >
          <MdLogout size={25} /> Log out
        </div>
      </div>
    </>
  );
};

export default ProfileAvatar;
