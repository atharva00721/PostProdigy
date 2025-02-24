import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="text-4xl font-bold text-blue-600">{value}</div>
      </CardHeader>
      <CardContent>
        <Icon className="h-4 w-4 text-gray-500" />
        <span className="text-sm text-gray-500">{description}</span>
      </CardContent>
    </Card>
  );
}
