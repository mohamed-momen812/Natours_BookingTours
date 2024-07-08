require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

// Create a transporter object using SendGrid SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const sendEmail = async options => {
  // Define email options
  const mailOptions = {
    to: options.email, // List of recipients
    from: 'mohamedmomen81296@gmail.com', // Sender address
    subject: options.subject, // Subject line
    text: options.message // Plain text body
  };

  try {
    // Actually send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
