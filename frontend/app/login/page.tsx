"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { login } from "@/services/auth";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const result = await login({
        identifier,
        password,
      });

      console.log(result);

      // localStorage.setItem("token", result.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <Input
        label="Email or Username"
        placeholder="designer@example.com"
        value={identifier}
        onChange={(e) =>
          setIdentifier(e.target.value)
        }
      />

      <Input
        label="Password"
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Button type="submit">
        Sign In
      </Button>

    </form>
  );
}