import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { type, name, email, message } = await req.json();
    console.log(type, name, email, message);
    // Validate the inputs (optional)
    if (!type || !name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    // Set up the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "tuvshin@nhs.edu.mn", // Your Gmail address
        pass: "jdou rpdj sfeb ymes", // Your Gmail password or app password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email, // Sender's email address
      to: "tuvshintug@gmail.com", // Your email address to receive the form data
      subject: `Contact Form Submission - ${type}`, // Email subject
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Return success response
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
