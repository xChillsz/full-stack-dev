/* GET rooms view */
const rooms = (req, res) => {
    const selectedTab = req.query.tab;
res.render('rooms', { title: 'Travlr Getaways - Rooms', activePage: 'rooms'});
};

module.exports = {
    rooms
};