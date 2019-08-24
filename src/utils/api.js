const axios = require('axios');

const baseUrl = "https://kat-news.herokuapp.com/api";

exports.getArticles = async (search) => {
  const { data } = await axios.get(baseUrl + '/articles', { params: search });

  return data.articles;
}

exports.getArticle = async () => {
  const { data } = await axios.get(baseUrl)
}

exports.getTopics = async () => {
  const { data } = await axios.get(baseUrl + '/topics');
  return data.topics;
}