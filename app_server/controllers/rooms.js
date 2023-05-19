var fs = require('fs');

var suites = JSON.parse(fs.readFileSync('./data/suites.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    const selectedTab = req.query.tab;
res.render('rooms', { 
    title: 'Travlr Getaways - Rooms', suites,
    activePage: 'rooms'
});
};

module.exports = {
    rooms
};