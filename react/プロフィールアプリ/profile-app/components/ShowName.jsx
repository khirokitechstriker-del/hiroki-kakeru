"use client";

import { useName } from "./NameContext";

export default function ShowName({ message }) {
  const { sharedName } = useName();

  return (
    <div>
      <p>{message}</p>

      {sharedName ? (
        <p>名前：{sharedName}</p>
      ) : (
        <p>まだ名前が入力されていません。</p>
      )}
    </div>
  );
}