const fastify = require('fastify');
const { transporter } = require('./EmailConfig');

const cors = require("fastify-cors");
const app = fastify();

app.register(cors, {
    origin: "*",
    methods: ["POST"]
});

function boostrap() {
    app.post("/sendEmail", async (request, reply) => {
        const user = JSON.parse(request.body);
     
        console.log(user);
        let info = await transporter.sendMail({
            from : user.email,
            to : "valen7est@gmail.com",
            subject: "Alguien quiere contactar contigo!",
            text : "user.message",
            html : `<p>${user.message}</p>`
        });

        return reply.send(info)
    
    });
    
    app.listen(4000, (err, address) => {
        if(err) console.log(err);
        console.log("Server listening on address", address);
    });
}

boostrap();


