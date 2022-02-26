const app = require("express")();
const cors = require("cors");
const { transporter } = require("./EmailConfig");
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.post("/sendEmail", async (req, res) => {

    const user = req.body;

    let info = await transporter.sendMail({
        from : user.email,
        to : "valen7est@gmail.com",
        subject: "Alguien quiere contactar contigo!",
        html : `<p>${user.message}</p> `
    });

    return res.send(info)

});

app.listen(4000, () => {
    console.log("Email service running at port 4000");
});