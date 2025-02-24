"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { AuthFormData, SignUpFormData } from "@/types";
import { useState } from "react";
import { AuthForm } from "@/components/auth/auth-form";
import { StarIcon, SparklesIcon, RocketIcon, Loader2 } from "lucide-react";
import { motion } from "framer-motion"; // Add smooth animations
import Image from "next/image";

export default function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
      });
      toast.success("Successfully signed in!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: `${data.firstName} ${data.lastName}`,
        callbackURL: "/dashboard",
      });
      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to sign up");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen w-full flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      {/* Left Section - Branding & Features */}
      <motion.div
        className="hidden lg:flex w-[45%] flex-col justify-center py-20 px-24 relative overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-pattern opacity-5" />{" "}
        {/* Add subtle pattern */}
        <div className="relative mb-10">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="PostProdigy Logo"
              width={32}
              height={32}
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              PostProdigy
            </h1>
          </div>
        </div>
        <div className="space-y-20 relative">
          <motion.h2
            className="text-5xl font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white"
            {...fadeInUp}
          >
            Transform your <br />
            content workflow with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600">
              intelligent automation
            </span>
          </motion.h2>

          <div className="space-y-10">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Section - Auth Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-[440px] space-y-12">
          <div className="lg:hidden text-center space-y-4">
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="PostProdigy Logo"
                width={56}
                height={56}
                className="dark:invert"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              PostProdigy
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Content management, simplified.
            </p>
          </div>

          <motion.div
            className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl p-8 backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/30"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <AuthForm
              isLoading={isLoading}
              onSignIn={handleSignIn}
              onSignUp={handleSignUp}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const features = [
  {
    icon: <StarIcon className="w-5 h-5" />,
    title: "Smart Scheduling",
    description: "AI-powered posting times for maximum engagement",
  },
  {
    icon: <SparklesIcon className="w-5 h-5" />,
    title: "Content Analysis",
    description: "Get insights on what content performs best",
  },
  {
    icon: <RocketIcon className="w-5 h-5" />,
    title: "Auto Publishing",
    description: "Schedule once, publish everywhere automatically",
  },
];

function Feature({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-5 group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ x: 5 }}
    >
      <div className="flex-none p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
