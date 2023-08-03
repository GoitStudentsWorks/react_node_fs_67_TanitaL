import axios from 'axios';
axios.defaults.baseURL = 'https://eventregistry.org/api/v1/article/getArticles';
const YOUR_API_KEY = '2da62d3c-4d43-49a3-b513-7097a7b6bb72';

export const fetchNews = async (searchNews, page, perPage) => {
  const searchParams = new URLSearchParams({
    action: 'getArticles',
    keyword: searchNews,
    articlesPage: page,
    articlesCount: perPage,
    articlesSortBy: 'date',
    articlesSortByAsc: false,
    articlesArticleBodyLen: 1000,
    resultType: 'articles',
    dataType: ['news'],
    lang: 'eng',
    apiKey: YOUR_API_KEY,
  });

  return await axios
    .get(`/?${searchParams}`)
    .then(response => {
      return {
        articles: response.data.articles.results,
        pages: response.data.articles.pages,
        info: response.data.info || null,
      };
    })
    .catch(error => error);
};
