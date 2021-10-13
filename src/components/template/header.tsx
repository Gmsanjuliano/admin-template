import SideMenu from "./side-menu";
import Title from "./title";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <Title title={props.title} subTitle={props.subTitle} />
    </div>
  );
}
