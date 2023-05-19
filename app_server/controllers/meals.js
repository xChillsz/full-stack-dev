var fs = require('fs');

var food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));


/* GET meals view */
const meals = (req, res) => {
res.render('meals', { 
    title: 'Travlr Getaways - Meals', food, 
    activePage: 'meals'
});
};

module.exports = {
    meals
};