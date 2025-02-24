import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Sparkles, Edit, Brain } from "lucide-react";

function SignInFallback() {
  return <Button disabled>Loading...</Button>;
}

export default async function Home() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Make LinkedIn Posts",
      description: "Create engaging professional content",
    },
    {
      icon: <Edit className="w-6 h-6 text-white" />,
      title: "Edit Posts",
      description: "Polish your content to perfection",
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Use GenAI",
      description: "AI-powered content suggestions",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Main Content */}
      <main className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center gap-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                LinkedIn Post Generator
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Create engaging LinkedIn posts powered by AI. Stand out from the
                crowd with professionally crafted content.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 w-full my-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6 text-center mt-16">
              <Suspense fallback={<SignInFallback />}>
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    className="gap-2 group hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Suspense>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <Card className="p-4 rounded-4 text-center text-gray-500 bg-white">
        © 2023 LinkedIn Post Generator. All rights reserved.
      </Card>
    </div>
  );
}
