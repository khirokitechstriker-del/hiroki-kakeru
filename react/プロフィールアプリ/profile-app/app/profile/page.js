import Link from "next/link";
import ShowName from "../../components/ShowName";

export default function ProfilePage() {
  return (
    <div>
      <h1>プロフィール確認</h1>

      <ShowName message="現在入力されている名前です。" />

      <Link href="/">入力ページへ戻る</Link>
    </div>
  );
}