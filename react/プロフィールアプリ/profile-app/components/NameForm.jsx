"use client";

import { useName } from "./NameContext";

export default function NameForm() {
  const { sharedName, setSharedName } = useName();

  return (
    <div>
      <input
        value={sharedName}
        onChange={(event) => setSharedName(event.target.value)}
        placeholder="名前を入力"
      />

      <p>入力中の名前：{sharedName}</p>
    </div>
  );
}