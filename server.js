require('dotenv').config();
const nodemailer = require('nodemailer');

let trasnporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'learningpythontosendemail@gmail.com',
		pass: 'pythonfromzerotomastery19'
	}
});

let mailOptions = {
	from: 'learningpythontosendemail@gmail.com',
	to:'danisharab19121@gmail.com',
	subject:'Testing and Testing',
	text: 'IT works'
};

trasnporter.sendMail(mailOptions, function(err, data){
if(err)
{
	console.log('Error');
}
else
{
	console.log('Email sent');
}
});