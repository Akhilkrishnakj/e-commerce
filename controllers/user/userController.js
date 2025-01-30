const pageNotFound = async (req, res) => {
    try {
        return res.render("page-404");
    } catch (error) {
        res.redirect("/pageNotFound");
    }
};

const loadHomepage = async (req, res) => {
    try {
        return res.render("home");
    } catch (error) {
        console.log("Home page not found", error);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    loadHomepage,
    pageNotFound,
};
