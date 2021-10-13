import { IconBell, IconConfig, IconHome } from "../icons";
import ItemMenu from "./item-menu";

export default function SideMenu() {
  return (
    <div>
      <aside>
        <ul>
          <ItemMenu url="/" text="Início" icon={IconHome} />
          <ItemMenu url="/config" text="Ajustes" icon={IconConfig} />
          <ItemMenu url="/news" text="Notificações" icon={IconBell} />
        </ul>
      </aside>
    </div>
  );
}
