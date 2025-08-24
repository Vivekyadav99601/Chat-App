import nodemailer from 'nodemailer';

const sendEmail =async(to,subject,message)=>{
    try{
        const transporter  = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.GMAIL_USER,
                pass:process.env.GMAIL_PASSCODE,
            },
        });

        const mailOption = {
            from:process.env.GMAIL_USER,
            to,
            subject,
            html:message,
        };

        await transporter.sendMail(mailOption);
        console.log('Email sent successfully');

    }catch(error){
        console.log('Email not sent');
        return false;
    }
}
export default sendEmail;