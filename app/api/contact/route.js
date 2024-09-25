import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { type, name, email, message } = await req.json();
    console.log(type, name, email, message);
    if (!type || !name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "tuvshin@nhs.edu.mn",
        pass: "jdou rpdj sfeb ymes",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "tuvshintug@gmail.com",
      subject: `Contact Form Submission - ${type}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}
