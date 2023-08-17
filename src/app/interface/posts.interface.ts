import { OutputData } from "@editorjs/editorjs";

export interface Post {
  _id: string;
  title: string;
  description: string;
  html: string;
  temporary: boolean;
  categoryId: string;
  createDate: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface SavePostPayload {
  categoryId?: string;
  title: string;
  description: string;
  html: string;
  temporary: boolean;
}
