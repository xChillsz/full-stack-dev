/* GET meals view */
const meals = (req, res) => {
res.render('meals', { title: 'Travlr Getaways - Meals', activePage: 'meals'});
};

module.exports = {
    meals
};