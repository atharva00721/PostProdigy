import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function NotificationsNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-600 text-[10px] font-medium text-white flex items-center justify-center">
            3
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px]">
        <div className="flex flex-col gap-2 p-4">
          <h3 className="font-semibold">Recent Notifications</h3>
          {[1, 2, 3].map((notification) => (
            <DropdownMenuItem key={notification}>
              <div className="flex flex-col gap-1">
                <p className="text-sm">
                  New engagement on Post #{notification}
                </p>
                <span className="text-xs text-muted-foreground">
                  2 hours ago
                </span>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
