const loadPage = (req, res) => {
    res.render('index');
    console.log('Page loaded successfully!');
}

module.exports = {
    loadPage,
}