"use client";
import { useContext } from "react";
import styles from "../page.module.css";
import { Notice } from "@/types/Notices";
import { NoticeContext } from "../provider/notices-provider";
import { useRouter } from "next/navigation";

export const Notices = () => {
  const { notices, deleteNotice } = useContext(NoticeContext);
  const { push } = useRouter();
  console.log(notices);
  const handleDelete = async (_id: string) => {
    deleteNotice(_id);
  };
  return (
    <div>
      {notices?.map((notice: Notice) => (
        <div className={styles.container} key={notice._id}>
          <h2 className={styles.title}>{notice.title}</h2>
          <p className={styles.date}>{notice.date}</p>
          <p className={styles.body}>{notice.body}</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(notice._id)}
          >
            remove
          </button>
          <button
            onClick={() => push(`/edit/${notice._id}`)}
            className={styles.button}
            type="button"
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
};
