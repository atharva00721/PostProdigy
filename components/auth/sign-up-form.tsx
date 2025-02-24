"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { SignUpFormData, SignUpFormProps } from "@/types";
import { toast } from "sonner";

export function SignUpForm({ isLoading, onSubmit }: SignUpFormProps) {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirmation) {
      toast.error("Passwords do not match");
      return;
    }
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-2.5">
          <Label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            First name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="John"
            className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2.5">
          <Label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Last name
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="Doe"
            className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
            required
            disabled={isLoading}
          />
        </div>
      </div>

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
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="name@example.com"
          className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
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
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="••••••••"
          className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2.5">
        <Label
          htmlFor="passwordConfirmation"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Confirm Password
        </Label>
        <Input
          id="passwordConfirmation"
          type="password"
          value={formData.passwordConfirmation}
          onChange={(e) =>
            setFormData({
              ...formData,
              passwordConfirmation: e.target.value,
            })
          }
          placeholder="••••••••"
          className="h-12 px-4 rounded-xl border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-[0_1px_1px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/40 transition-shadow duration-200"
          required
          disabled={isLoading}
        />
      </div>

      <Button
        className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-[15px] font-medium text-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
