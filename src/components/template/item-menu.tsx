import Link from "next/link";

interface ItemMenuProps {
  url?: string;
  text?: string;
  icon?: any;
  onClick?: (e: any) => void;
  className?: string;
}

export default function ItemMenu(props: ItemMenuProps) {
  function renderLink() {
    return (
      <a
        className={`flex flex-col justify-center items-center w-full h-20 dark:text-gray-400 ${props.className}`}
      >
        {props.icon}
        <span className="text-xs font-light">{props.text}</span>
      </a>
    );
  }

  return (
    <li
      onClick={props.onClick}
      className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer dark:hover:bg-gray-600"
    >
      {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
}
