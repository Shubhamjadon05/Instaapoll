const connection = require("../config/database");
const { count } = require("./dashboardController");

const ParticipantNameForRating = (req, res) => {
    // console.log(req,"this is nodejs data")
    // console.log(req.body.user_id,"this is nodejs data")
    // res.json("test");
    const data = req.body.event_id
    const template = req.body.template_id
    // console.log(req.body,"this is input name for rating")
    const sql = `SELECT * FROM events where Id=${data};`
    let participantsDetail;
    let eventDetail;
    let questions;
    let template_id
    const participant = `SELECT * FROM participants where Event=${data};`
    let question



    // data = {};
    connection.query(sql, function (err, result) {
        eventDetail = result[0]
        template_id = result[0].Template
        console.log(template_id)
    })
    connection.query(participant, function (err, result) {
        participantsDetail = result

        console.log(template_id, "this is template id at outside")
        if (template_id == 0) {
            question = `SELECT * FROM questiontable where Event=${data}`

            connection.query(question, function (err, result) {
                questions = result
                console.log(questions, "this is question")
                res.json({ eventDetail: eventDetail, participantsDetail: participantsDetail, questions: questions })
            })
        }
        else {
            question = `SELECT * FROM questiontable where Template=${template_id}`
            connection.query(question, function (err, result) {
                questions = result
                console.log("this is else block")
                res.json({ eventDetail: eventDetail, participantsDetail: participantsDetail, questions: questions })
            })
        }
    })








}
// app.post("/participantName",(req,res)=>{

// })

// const validateRater = (req, res) => {
//     const event_id = req.body.event_id;
//     const email = req.body.email;

//     console.log(req.body, "this is req body");
//     if (!event_id) {
//         res.json({ status: "error", message: "event_id is missing" });
//         return;
//     }
//     // console.log("question");

//     if (!email) {
//         res.json({ status: "error", message: "email is missing" });
//         return;
//     }
//     // for question to database
//     connection.query(`SELECT * FROM rater  WHERE EVENT=${event_id} AND Email='${email}'`, (error, resp, field) => {
//         console.log(error)
//         console.log("lenght", resp.length);
//         if (resp.length > 0) {
//             res.json({ status: "error", message: "invalid credentials", Boolean: 0 });
//             return;
//         }
//         else {
//             connection.query(`INSERT INTO rater(Event,Email)  VALUES (?,?)`, [event_id, email], (err, response) => {
//                 if (err) {
//                     res.json({ status: "error", message: "error insert", Boolean: 0 });
//                     return;
//                 }
//                 else {
//                     console.log(response)
//                     res.json({ status: "success", user: response.insertId, Boolean: 1 });
//                     return
//                 }
//             })


//         }
//     });
// }



const inputRating = (req, res) => {


    for (i = 0; i < req.body.length; i++) {
        // console.log(req.body.ratingValue.length,"this is length value",i)
        let Participant = req.body[i].participant
        // console.log(Participant, "this is participants")
        let RatingPoint = req.body[i].rating
        // console.log(RatingPoint, "this is ratingpoint")
        let Question = req.body[i].question
        // console.log(Question,"this is question")
        // Enter data into database
        const sql = 'INSERT INTO `rating`(`Question`, `Participant`, `RatingPoint`) VALUES (?,?,?)';

        connection.query(
            sql,
            [Question, Participant, RatingPoint],
            function (err, results) {
                //   console.log(results, "this is result");
                //   console.log(err, "this is error")
            });
    }
    res.json({ status: "success", message: "Rating is submitted", Boolean: 1 });
}
// app.post("/eventRating", (req, res) => {
//     console.log("hello", req.body)
// })

const RaterCount = (req, res) => {
    const event_id = req.body.event_id
    // console.log(event_id)
    CountRating = `SELECT COUNT(*) AS countrate
    FROM rating
    INNER JOIN participants
    ON rating.Participant = participants.Id
    where participants.Event=${event_id};`
    // CountQuestion = `SELECT COUNT(*) AS countquestion FROM questiontable where Event=${event_id} and Template=${template_id} ;`


    CountParticipant = `SELECT COUNT(*) AS countparticipant FROM participants where Event=${event_id} ;`

    // for getting template
    GetTemplate=`SELECT * FROM events WHERE Id=${event_id} ;`
    connection.query(
        GetTemplate,
        function (err, results) {
              console.log(results[0].Template, "this is result");
              let template_id=results[0].Template
              if (template_id != 0) {
                      const CountQuestion = `SELECT COUNT(*) AS countquestion FROM questiontable where Event=0 and Template=${template_id} ;`
                        runQuery(CountQuestion)
                    }
                    else {
                      const CountQuestion = `SELECT COUNT(*) AS countquestion FROM questiontable where Event=${event_id} and Template=0 ;`
                      runQuery(CountQuestion)
                    }
        });
   
    function runQuery (CountQuestion){
        console.log(CountQuestion)
        connection.query(
            CountRating,
            function (err, results) {
                //   console.log(results, "this is result");
                //   console.log(err, "this is error")
                let R = results[0].countrate
    
                connection.query(
                    CountQuestion,
                    function (err, results) {
                        //   console.log(results, "this is result");
                        //   console.log(err, "this is error")
                        let Q = results[0].countquestion
    
                        connection.query(
                            CountParticipant,
                            function (err, results) {
                                //   console.log(results, "this is result");
                                //   console.log(err, "this is error")
                                let P = results[0].countparticipant
                                let No = R / (P * Q)
                                console.log(P, " ", R, " ", Q, " ", No, "this is question")
                                res.json({ status: "success", count: No });
                            });
                    });
            });
    }







}

module.exports = {
    ParticipantNameForRating,
    inputRating,
    // validateRater,
    RaterCount
};