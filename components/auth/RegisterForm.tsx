"use client";

import { useState, SubmitEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      toast.success("Account created!");
      router.push("/login");
    } catch {
      toast.error("Could not create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-border-subtle/40 bg-card p-8 max-w-md mx-auto shadow-glow">
      <h1 className="font-display text-3xl font-bold text-center text-primary-text">
        Join NeFT
      </h1>
      <p className="mt-2 text-center text-sm text-muted">
        Start collecting in under a minute.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <Label htmlFor="name">Display name</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
            placeholder="Test User"
          />
        </div>
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
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1"
            placeholder="At least 6 characters"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-glow"
        >
          {loading ? "Creating..." : "Create account"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
