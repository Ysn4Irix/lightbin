/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 10-10-2021
 * @modify date 11-10-2021
 * @desc [Documents controller]
 */

const Doc = require("../models/Docs");

const index = {
  indexRouter: (req, res) => {
    const code = `Welcome to 💡Lightbin!

    Use the commands in the top right corner
    to create a new file to share with others. 
    
Made with ❤️ by Ysn4Irix`;

    res.render("index", { title: "Lightbin", code, language: "plaintext" });
  },
  newRouter: (req, res) => {
    res.render("new", { title: "Lightbin" });
  },
  saveRouter: async (req, res, next) => {
    const { value } = req.body;

    if (value === "") {
      res.render("new", {
        title: "Lightbin",
        alert: "🛑 Nothing to save !!",
      });
    } else {
      await Doc.create({ value })
        .then((result) => {
          res.redirect(`/code/${result.id}`);
        })
        .catch((err) => {
          console.log(err);
          res.render("new", { title: "Lightbin", value });
        });
    }
  },
  getDoc: async (req, res) => {
    //return res.send(req.params);
    const { id } = req.params;
    try {
      const document = await Doc.findById(id);
      if (document) {
        res.render("index", { title: "Lightbin", code: document.value, id });
      } else {
        res.render("index", {
          title: "Lightbin",
          code: "Link not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  },
  duplicateDoc: async (req, res) => {
    const { id } = req.params;
    try {
      const document = await Doc.findById(id);
      if (document) {
        res.render("new", { title: "Lightbin", value: document.value });
      } else {
        res.render("new", {
          title: "Lightbin",
          value: "Link not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.redirect(`/code/${id}`);
    }
  },
};

module.exports = index;
