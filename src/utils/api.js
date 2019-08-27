const axios = require('axios');

const baseUrl = "https://kat-news.herokuapp.com/api";

//Article related calls 
exports.getArticles = async (search) => {
  const { data } = await axios.get(baseUrl + '/articles', { params: search });
  return data.articles;
}

exports.getArticle = async (article_id) => {
  const { data } = await axios.get(baseUrl + '/articles/' + article_id)
  return data.article;
}

//Comments GET /api/articles/:article_id/comments
exports.getArticleComments = async (article_id) => {
  const { data } = await axios.get(baseUrl + '/articles/' + article_id + '/comments')
  return data.comments;
}

//api/articles /: article_id / comments
//Comments related calls 
exports.postArticleComments = async (newComment, currentUser, article_id) => {
  const { data } = await axios.post(`${baseUrl}/articles/${article_id}/comments`, { body: newComment, username: currentUser })
  return data.comment;
}

//Topic realated calls
exports.getTopics = async () => {
  const { data } = await axios.get(baseUrl + '/topics');
  return data.topics;
}



