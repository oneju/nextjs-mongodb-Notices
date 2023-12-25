import { NoticeResponse, NoticesResponse } from "@/types/Notices";

const NOTICE_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/notices`;

const getNotices = async (): Promise<NoticesResponse> => {
  const res = await fetch(NOTICE_END_POINT, { method: "GET" });
  const { data } = await res.json();

  return data;
};

const getNotice = async (_id: string): Promise<NoticeResponse> => {
  const res = await fetch(`${NOTICE_END_POINT}/${_id}`);
  const { data } = await res.json();

  return data;
};

export const postNotice = async ({
  title,
  body,
}: {
  title: string;
  body: string;
}): Promise<{ res: Response; data: NoticeResponse }> => {
  const res = await fetch(NOTICE_END_POINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });
  const { data } = await res.json();
  return { res, data };
};

const deleteNotice = async (_id: string): Promise<{ response: Response }> => {
  const response = await fetch(`${NOTICE_END_POINT}?_id=${_id}`, {
    method: "DELETE",
  });

  return { response };
};

const patchNotice = async ({
  _id,
  title,
  body,
}: {
  _id: string;
  title: string;
  body: string;
}) => {
  const response = await fetch(`${NOTICE_END_POINT}?_id=${_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });
  const { data } = await response.json();

  return { response, data };
};

export const clientApi = {
  getNotices,
  getNotice,
  postNotice,
  deleteNotice,
  patchNotice,
} as const;
