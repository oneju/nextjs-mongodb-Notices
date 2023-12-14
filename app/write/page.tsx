"use client";
import { FormEvent, useContext } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { NoticeContext } from "../provider/notices-provider";

export default function Write() {
  const { push } = useRouter();
  const { addNotice } = useContext(NoticeContext);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = (event.target as HTMLFormElement).elements;
    const titleElement = formElements.namedItem("title") as HTMLInputElement;
    const bodyElement = formElements.namedItem("body") as HTMLTextAreaElement;

    const title = titleElement.value;
    const body = bodyElement.value;

    await addNotice({ title, body });
    push("/");
  };
  return (
    <div className={styles.main}>
      <h1>write</h1>
      <form action="" onSubmit={onSubmit} className={styles.main}>
        <span>title</span>
        <input type="text" name="title" />
        <span>body</span>
        <textarea name="body" id="body" cols={30} rows={10} />
        <button className={styles.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
