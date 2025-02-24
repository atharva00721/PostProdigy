"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { AuthFormData, SignInFormProps } from "@/types";

export function SignInForm({ isLoading, onSubmit }: SignInFormProps) {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2.5">
        <Label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2.5">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          disabled={isLoading}
        />
      </div>
      <Button
        className="w-full h-12 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-[15px] font-medium text-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.05)] active:translate-y-[0px]"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Continue"
        )}
      </Button>
    </form>
  );
}
