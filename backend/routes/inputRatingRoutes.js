const express = require("express");
const {ParticipantNameForRating, inputRating, RaterCount, inputPoll, get_options, poll_results, pollresults} = require("../controllers/InputRatingController");
const router = express.Router();

router.post("/participantName", ParticipantNameForRating);
router.post("/eventRating",inputRating)
router.post("/polling",inputPoll)
// router.post("/validateRater",validateRater)
router.post("/raterCount", RaterCount)
router.post("/get_options", get_options)
router.post("/poll_results", poll_results)
router.post("/pollresults", pollresults)
router.post("/voters", pollresults)

module.exports = router;