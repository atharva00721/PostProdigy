import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UserNav } from "./user-nav";
import { NotificationsNav } from "./notifications-nav";
import { User } from "@/types";

interface NavBarProps {
  user: User;
}

export function NavBar({ user }: NavBarProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">LPM</h2>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search posts..." className="pl-8" />
          </div>
          <NotificationsNav />
          <UserNav user={user} />
        </div>
      </div>
    </div>
  );
}
