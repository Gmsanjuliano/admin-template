import useAppData from "../../data/hook/useAppData";
import ChangeThemeBtn from "./changeThemeBtn";
import Title from "./title";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData();
  return (
    <div>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ChangeThemeBtn theme={theme} changeTheme={changeTheme} />
        {/* <UserAvatar className="ml-3" /> */}
      </div>
    </div>
  );
}
