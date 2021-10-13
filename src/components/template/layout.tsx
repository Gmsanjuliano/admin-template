import Content from "./content";
import Header from "./header";
import SideMenu from "./side-menu";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <SideMenu />
      <div className="flex flex-col w-full p-8 bg-gray-100">
        <Header title={props.title} subTitle={props.subTitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
