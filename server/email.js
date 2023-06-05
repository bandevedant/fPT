const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
	  user: "76b3db013830dc",
	  pass: "0205dcad576d1a"
	}
  });
  var message = {
	from: "vedantbande2002@gmail.com",
	to: "golubande2002@gmail.com",
	subject: "Message title",
	text: "Plaintext version of the message",
	html: "<p>HTML version of the message</p>"
  };
  transport.sendMail(message, function(err, info) {
	if (err) {
	  console.log(err)
	} else {			
	  console.log(info);
	}	
	  });