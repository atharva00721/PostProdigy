import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/layout/dashboard-shell";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText } from "lucide-react";
import Link from "next/link";

// Dummy data (replace with real data)
const posts = [
  { id: 1, title: "Growth Mindset in Tech", createdAt: "2 days ago" },
  { id: 2, title: "Leadership Lessons", createdAt: "5 days ago" },
  { id: 3, title: "Innovation at Scale", createdAt: "1 week ago" },
];

export default async function Dashboard() {
  const session = await auth.api
    .getSession({
      headers: await headers(),
    })
    .catch(() => {
      throw redirect("/sign-in");
    });

  return (
    <DashboardShell user={session!.user}>
      <div className="max-w-3xl mx-auto w-full space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Your Posts</h1>
          <Link href="/create-post">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              You haven't created any posts yet.
            </p>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center space-x-4 py-4 hover:bg-gray-50 px-4 rounded-lg transition-colors"
                >
                  <FileText className="h-5 w-5 text-gray-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {post.title}
                    </p>
                    <p className="text-sm text-gray-500">{post.createdAt}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardShell>
  );
}
