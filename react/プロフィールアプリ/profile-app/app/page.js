import Link from "next/link";
import NameForm from "../components/NameForm";
export default function HomePage() {
  return (
     <main className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center text-white">
      <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center">
        <h1 className="font-bold ">
          プロフィールアプリ
        </h1>

        <p className="text-lg mb-6">
          名前を入力してプロフィールを確認できます。
        </p>

        <div className="bg-white/90 text-black">
          <NameForm />
        </div>

        <Link
          href="/profile"
          className="bg-blue-300 hover:bg-blue-600 rounded-lg font-bold"
        >
          プロフィール確認へ
        </Link>
      </div>
    </main>
  );
}