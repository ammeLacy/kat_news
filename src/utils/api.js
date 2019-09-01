const axios = require('axios');

const baseUrl = "https://kat-news.herokuapp.com/api";

export const getArticles = async (search) => {
  const { data } = await axios.get(`${baseUrl}/articles`, { params: search });
  return data.articles;
}

export const getArticle = async (article_id) => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}`)
  return data.article;
}

export const getArticleComments = async (article_id) => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}/comments`)
  return data.comments;
}

export const updateArticleVotes = async (article_id, vote) => {
  const { data } = await axios.patch(`${baseUrl}/articles/${article_id}`, { inc_votes: vote })
  return data.article;
}

export const postArticleComments = async (newComment, currentUser, article_id) => {
  const { data } = await axios.post(`${baseUrl}/articles/${article_id}/comments`, { body: newComment, username: currentUser })
  return data.comment;
}

export const deleteArticleComment = async (comment_id) => {
  axios.delete(`${baseUrl}/comments/${comment_id}`);
}

export const updateCommentVotes = async (comment_id, vote) => {
  const { data } = await axios.patch(`${baseUrl}/comments/${comment_id}`, { inc_votes: vote })
  return data.comment;
}

export const getTopics = async (limit, sort_by) => {
  const { data } = await axios.get(`${baseUrl}/topics`, { params: { limit, sort_by } });
  return data.topics;
}



