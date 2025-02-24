import { cn } from "@/lib/utils";
import { User } from "@/types";
import { UserNav } from "../header/user-nav";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

export function DashboardShell({
  children,
  className,
  user,
  ...props
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="h-14 border-b px-4 flex items-center justify-end">
        <UserNav user={user} />
      </header>
      <main className="p-6">
        <div className={cn("", className)} {...props}>
          {children}
        </div>
      </main>
    </div>
  );
}
