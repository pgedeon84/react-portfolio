import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function ContactSection() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceId = "service_1krafav";
  const templateId = "webifi.io";
  const userId = "user_nuDamy8r7lRilEZioSlCh";

  function sendEmail(serviceId, templateId, data, userId) {
    emailjs
      .send(serviceId, templateId, data, userId)
      .then(() => {
        setSuccessMessage(
          "Form sent Successfully! I'll contact you as soon as possible."
        );
      })
      .catch((error) => {
        console.log(`Something went wrong! ${error}`);
      });
  }

  function onSubmit(data, reset) {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    reset.target.reset();
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-header">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project or question and
          I'll contact you as soon as possible.
        </p>
        <span className="success-message">{successMessage}</span>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <span className="error-message">
                  {errors.name && "Please enter your name."}
                </span>
                {/* Name */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    {...register("name", { required: true, maxLength: 20 })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.phone && "Please enter your phone number."}
                </span>
                {/* Phone */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    {...register("phone", { required: true, maxLength: 20 })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.email && "Please enter a valid e-mail address."}
                </span>
                {/* Email */}
                <div className="text-center">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.subject && "Please enter a subject."}
                </span>
                {/* Subject */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    {...register("subject", { required: true, maxLength: 20 })}
                  />
                  <div className="line"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <span className="error-message">
                  {errors.description &&
                    "Please enter a description of your needs."}
                </span>
                {/* Description */}
                <div className="text-center">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    {...register("description", {
                      required: true,
                    })}
                  ></textarea>
                  <div className="line"></div>
                </div>
                <button className="btn-main-offer contact-btn">
                  contact me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
