import SideMenu from "./side-menu";

interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div className="flex flex-col mt-7">
      <h1>{props.children}</h1>
    </div>
  );
}