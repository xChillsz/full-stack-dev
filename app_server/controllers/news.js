var fs = require('fs');

var articles = JSON.parse(fs.readFileSync('./data/articles.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
const selectedTab = req.query.tab;
res.render('news', { 
    title: 'Travlr Getaways - News', articles, 
    activePage: 'news'
});
};

module.exports = {
    news
};