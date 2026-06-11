import { NameBox } from "../components/NameContext";
import "./globals.css";

export const metadata = {
  title: "Profile App",
  description: "React and Next.js practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <NameBox>{children}</NameBox>
      </body>
    </html>
  );
}