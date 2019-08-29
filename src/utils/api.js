const axios = require('axios');

const baseUrl = "https://kat-news.herokuapp.com/api";

exports.getArticles = async (search) => {
  const { data } = await axios.get(`${baseUrl}/articles`, { params: search });
  return data.articles;
}

exports.getArticle = async (article_id) => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}`)
  return data.article;
}

exports.getArticleComments = async (article_id) => {
  const { data } = await axios.get(`${baseUrl}/articles/${article_id}/comments`)
  return data.comments;
}

exports.updateArticleVotes = async (article_id, vote) => {
  const { data } = await axios.patch(`${baseUrl}/articles/${article_id}`, { inc_votes: vote })
  return data.article;
}

exports.postArticleComments = async (newComment, currentUser, article_id) => {
  const { data } = await axios.post(`${baseUrl}/articles/${article_id}/comments`, { body: newComment, username: currentUser })
  return data.comment;
}

exports.deleteArticleComment = async (comment_id) => {
  axios.delete(`${baseUrl}/comments/${comment_id}`);
}

exports.updateCommentVotes = async (comment_id, vote) => {
  const { data } = await axios.patch(`${baseUrl}/comments/${comment_id}`, { inc_votes: vote })
  return data.comment;
}

exports.getTopics = async () => {
  const { data } = await axios.get(`${baseUrl}/topics`);
  return data.topics;
}



