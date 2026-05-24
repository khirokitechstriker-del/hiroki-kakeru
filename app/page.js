import Link from "next/link";
import NameForm from "../components/NameForm";

export default function HomePage() {
  return (
    <main>
      <h1>プロフィール入力</h1>

      <p>ReactとNext.jsの基礎練習用ページです。</p>

      <NameForm />

      <Link href="/profile">プロフィール確認ページへ</Link>
    </main>
  );
}