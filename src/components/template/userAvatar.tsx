import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface UserAvatarProps {
  className?: string;
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <img
        src={user?.imageUrl ?? "/images/ga.png"}
        alt="Avatar do Usuário"
        className={`h-12 w-12 bg-gray-300 rounded-full cursor-pointer ml-3 ${props.className}`}
      />
    </Link>
  );
}
