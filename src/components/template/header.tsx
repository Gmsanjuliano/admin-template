import useAppData from "../../data/hook/useAppData";
import ChangeThemeBtn from "./changeThemeBtn";
import Title from "./title";
import UserAvatar from "./userAvatar";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData();
  return (
    <div className="flex justify-end items-center">
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ChangeThemeBtn theme={theme} changeTheme={changeTheme} />
        <UserAvatar classname="ml-3" />
      </div>
    </div>
  );
}
