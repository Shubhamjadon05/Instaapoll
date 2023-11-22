const express = require("express");
const {addQuestion, showQuestion,delteQuestion,templateData,inputTemplate} = require("../controllers/AddQuestionController");
const router = express.Router();

router.post("/addQuestion", addQuestion);
router.post("/showQuestion", showQuestion);
router.post("/delete", delteQuestion );
router.post("/templateData", templateData);
router.post("/InputTemplate", inputTemplate)



module.exports = router;