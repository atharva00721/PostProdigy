"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";
import { AuthFormData, SignUpFormData } from "@/types";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import { useState } from "react";

interface AuthFormProps {
  isLoading: boolean;
  onSignIn: (data: AuthFormData) => Promise<void>;
  onSignUp: (data: SignUpFormData) => Promise<void>;
}

export function AuthForm({ isLoading, onSignIn, onSignUp }: AuthFormProps) {
  const [activeTab, setActiveTab] = useState("signin");

  const slideAnimation = {
    initial: { opacity: 0, x: 20, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -20, scale: 0.98 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <Card className="border-0 shadow-none bg-transparent">
      <Tabs
        defaultValue="signin"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="h-12 bg-transparent py-1 mb-6 relative">
          <TabsTrigger
            value="signin"
            className="rounded-lg text-md font-medium data-[state=active]:font-semibold data-[state=active]:text-blue-500 dark:data-[state=active]:text-blue-400 transition-all duration-200 hover:text-blue-500/70"
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="rounded-lg text-md font-medium data-[state=active]:font-semibold data-[state=active]:text-blue-500 dark:data-[state=active]:text-blue-400 transition-all duration-200 hover:text-blue-500/70"
          >
            Sign Up
          </TabsTrigger>

          {/* Improved sliding indicator */}
          {/* <motion.div
            className="h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 absolute bottom-0 rounded-full"
            animate={{
              x: activeTab === "signin" ? "0%" : "100%",
              width: "50%",
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          /> */}
        </TabsList>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideAnimation}
            className="relative"
          >
            <div className="px-1">
              <TabsContent value="signin" forceMount>
                {activeTab === "signin" && (
                  <>
                    <CardHeader className="space-y-2 p-0 mb-6">
                      <CardTitle className="text-xl font-semibold tracking-tight">
                        Welcome back
                      </CardTitle>
                      <CardDescription className="text-[14px] leading-normal">
                        Please sign in to continue
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <SignInForm isLoading={isLoading} onSubmit={onSignIn} />
                    </CardContent>
                  </>
                )}
              </TabsContent>

              <TabsContent value="signup" forceMount>
                {activeTab === "signup" && (
                  <>
                    <CardHeader className="space-y-2 p-0 mb-6">
                      <CardTitle className="text-xl font-semibold tracking-tight">
                        Create account
                      </CardTitle>
                      <CardDescription className="text-[14px] leading-normal">
                        Fill in your details below
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <SignUpForm isLoading={isLoading} onSubmit={onSignUp} />
                    </CardContent>
                  </>
                )}
              </TabsContent>
            </div>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </Card>
  );
}
