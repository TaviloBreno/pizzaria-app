"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleLogin(formData: FormData) {
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      type LoginResponse = { token: string };
      const response = await api.post<LoginResponse>("/session", {
        email,
        password,
      });

      const token = response.data.token;

      if (!token) {
        setError("Token não recebido.");
        return;
      }

      Cookies.set("session", token, {
        expires: 30,
        path: "/",
        secure: process.env.NODE_ENV === "production",
      });

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Erro ao realizar login.");
    }
  }

  return (
    <div className={styles.containerCenter}>
      <Image
        src="/logo.svg"
        alt="Logo da pizzaria"
        width={200}
        height={200}
        priority
      />

      <section className={styles.login}>
        <form action={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            required
            className={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="***********"
            required
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Acessar
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>
      </section>
    </div>
  );
}
