import axios from "axios";

const API_URL = import.meta.env.VITE_URL_API;

type Authors = {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
};
type getAuthorsResponse = Authors[];
export const getAuthors = () => {
  return axios.get<getAuthorsResponse>(`${API_URL}/authors.json`);
};

type Posts = {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
};
type getPostsResponse = Posts[];
export const getPosts = () => {
  return axios.get<getPostsResponse>(`${API_URL}/posts.json`);
};
