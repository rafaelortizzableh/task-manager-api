const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
sgMail.send({
    to: email,
    from: 'rafa@redmars.es',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
})
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rafa@redmars.es',
        subject: 'Your account has been deleted',
        text: `Thanks for using to the app, ${name}. It's sad to ses you go, but we understand 😟. We'd really appreciate if you told us why you're leaving.`
    })
    }
    

module.exports = {
    sendWelcomeEmail, 
    sendCancelationEmail
}