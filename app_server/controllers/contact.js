/* GET contact view */
const contact = (req, res) => {
res.render('contact', { title: 'Travlr Getaways - Contact', activePage: 'contact'});
};

module.exports = {
    contact
};