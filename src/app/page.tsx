import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h2>ログイン</h2>
    <form>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit">ログイン</button>
    </form>

    <div>
      <a href="/forgot-password">ログインできない方はこちら</a>
    </div>
    <div>
      <a href="/register">新規ユーザー登録はこちら</a>
    </div>
  </div>
  );
}
