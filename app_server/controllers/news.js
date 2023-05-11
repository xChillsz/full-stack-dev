/* GET news view */
const news = (req, res) => {
const selectedTab = req.query.tab;
res.render('news', { title: 'Travlr Getaways - News', activePage: 'news'});
};

module.exports = {
    news
};