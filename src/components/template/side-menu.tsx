import useAuth from "../../data/hook/useAuth";
import { IconBell, IconConfig, IconExit, IconHome } from "../icons";
import ItemMenu from "./item-menu";
import Logo from "./logo";

export default function SideMenu() {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-800 ">
      <div className="flex flex-col items-center justify-center h-20 w-full bg-gradient-to-r from-blue-100 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-600">
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu url="/" text="Início" icon={IconHome} />
        <ItemMenu url="/config" text="Ajustes" icon={IconConfig} />
        <ItemMenu url="/notifications" text="Notificações" icon={IconBell} />
      </ul>
      <ul>
        <ItemMenu
          onClick={logout}
          text="Sair"
          icon={IconExit}
          className="text-red-600 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-gray-300 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
}
