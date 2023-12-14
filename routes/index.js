var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { messages: messages, title: "Mini Messageboard" });
});

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", function (req, res) {
  console.log(typeof req.body.author);
  console.log(typeof req.body.messageText);
  if (
    typeof req.body.author != "string" ||
    typeof req.body.messageText != "string"
  ) {
    res.render("form", {
      author: req.body.author,
      messageText: req.body.messageText,
      error: "Invalid Input",
    });
  } else {
    messages.push({
      text: req.body.messageText,
      user: req.body.author,
      added: new Date(),
    });
    res.redirect("/");
  }
});

module.exports = router;
