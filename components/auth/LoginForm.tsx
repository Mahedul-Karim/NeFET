"use client";

import { SubmitEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useCtx } from "@/context/Context";

const LoginForm = () => {
  const { setUser,setIsLoggedIn } = useCtx();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const userData = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      };

      setUser(userData);
      setIsLoggedIn(true)
      toast.success("Welcome back!");
      router.push("/")
    } catch {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="rounded-2xl border border-border-subtle/40 shadow-glow bg-card p-8 max-w-md mx-auto">
      <h1 className="font-display text-3xl font-bold text-center text-primary-text">
        Welcome back
      </h1>
      <p className="mt-2 text-center text-sm text-muted">
        Sign in to manage your collection.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
            placeholder="test@gmail.com"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1"
            placeholder="test1234"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-glow"
        >
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        No account?{" "}
        <Link href="/register" className="text-primary underline">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
