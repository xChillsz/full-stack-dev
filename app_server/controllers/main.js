/* GET homepage */
const index = (req,res) => {
    const selectedDestination = req.query.destination || 'none';
    res.render('index', { 
        title: 'Travlr Getaways', 
        activePage: 'index', 
        selectedDestination
});
};

module.exports = {
    index
}