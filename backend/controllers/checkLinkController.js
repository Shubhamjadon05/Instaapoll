
const connection = require("../config/database")
const constant = require("../config/constant")


const ValidatingLink = async (req, res) => {
    let event_id = req.body.event_id;
    console.log(event_id, "this is event id in valid link");

    // sql qurey
    const GetStartTime = `select * from events where id=${event_id};`
    const GetExpirayTime = `SELECT * FROM event_link where Event='${event_id}';`

    // Get start time of event
    connection.query(GetStartTime, function (err, result) {
        // console.log(result[0].StartTime, "this is set time out", result[0].StartDate)
        let data = result[0]
        validLink(data)
    })

    function validLink(startTime) {
        try {
            connection.query(GetExpirayTime, function (err, result) {
                // console.log(result)
                if (result.length < 1) {
                    res.json({ "message": "event not found", Boolean: 0 })
                    return;
                }
                const data = result[0]
                // console.log(data)
    
                let oldTime = startTime.StartDate.getTime();
                console.log(startTime.StartDate)
                console.log(oldTime)
    
                // To get timeperiod for expire a link
                let TotalHour = data.ExpiryTime = 60*60*1000
                let Time = 24*60*60*1000
                // console.log(data.ExpiryTime)
                let ExpiryTime = oldTime + TotalHour + Time
        console.log(ExpiryTime)
                // To get current time
                const currentTimeStamp = new Date();
                console.log(currentTimeStamp ,"this the current time stamp")
                const currentTimiMili = currentTimeStamp.getTime();
                // console.log(currentTimiMili)
    
                // Put a condition
                if (currentTimiMili > ExpiryTime) {
                    res.json({ "messagee": "Link is expired", Boolean: 0 })
                }
                else {
                    res.json({ "message": "Link is valid", Boolean: 1 })
                }
    
            })
        }
        catch {
            res.json({ "messagge": "Link is expired", Boolean: 0 })
        }
    }
    


}


module.exports = {
    ValidatingLink
};