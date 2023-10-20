const connection = require("../config/database")


const addQuestion = async (req, res) => {
	const event_id = req.body.event_id;
	const question = req.body.question;

	// console.log(req.body);
	console.log(event_id, " ",question);
	if (!event_id) {
		res.json({ status: "error", message: "event_id is missing" });
		return;
	}
	// console.log("question");

	if (!question) {
		res.json({ status: "error", message: "question is missing" });
		return;
	}
	// for question to database
	connection.query('insert into questiontable (Event,	Template,Question) values(?, ?, ?)', [event_id, 0, question], (error, resp, field) => {
		console.log("test", resp);
		if (resp.length < 1) {
			res.json({ status: "error", message: "invalid credentials" });
			return;
		} else {
			res.json({ status: "success", user: resp[0], Boolean: 1 });

		}
	});



};

const showQuestion = (req, res) => {
	const event = req.body.event_id;
	// console.log(event,"this is body")

	// if (!event) {
	// 	res.json({ status: "error", message: "event_id is missing" });
	// 	return;
	// }

	// res.json({ status: "error", message: "working is fine" });
	const sql = `SELECT * FROM questiontable where Event=${event}`

	connection.query(sql, function (err, result) {
		// console.log(err)
		const data = result
		// console.log(data)
		res.json(data)
	})
}

const delteQuestion = (req, res) => {
	const QuestionId = req.body.question_id;

	const sql = `delete FROM questiontable where Id=${QuestionId}`

	connection.query(sql, function (err, result) {
		// console.log(err)
		const data = result
		// console.log(data)
		res.json(data)
	})
}

const templateData = (req, res) => {
	let templateName
	let templateQuestion1
	let templateQuestion2
	let templateQuestion3

	const sql = `SELECT * FROM template `
	connection.query(sql, function (err, result) {
		// console.log(err)
		templateName = result

	})

	const templatequestion1 = `SELECT * FROM questiontable WHERE template=1`
	connection.query(templatequestion1, function (err, result) {
		// console.log(err)
		templateQuestion1 = result
	})

	const templatequestion2 = `SELECT * FROM questiontable WHERE template=2`
	connection.query(templatequestion2, function (err, result) {
		// console.log(err)
		templateQuestion2 = result
		res.json({ Name: templateName, Question1: templateQuestion1, Question2:templateQuestion2 })
	})



}

const inputTemplate=(req, res)=>{
	const template_id=req.body.template_id
	const event_id=req.body.event_id
	console.log(event_id," ",template_id,"this is value")
	const sql=`UPDATE events SET Template=${template_id} where Id=${event_id}`
	connection.query(sql, function (err, result) {
		console.log(err)
		// const data = result
		// console.log(data)
		res.json({ status: "success", Boolean: 1 });
	})
	
}



module.exports = {
	addQuestion,
	showQuestion,
	delteQuestion,
	templateData,
	inputTemplate
};
