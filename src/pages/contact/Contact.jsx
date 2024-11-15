import { useFormData } from 'herotofu-react';
import './contact.css';

export default function Contact() {
    const { formState } = useFormData('https://herotofu.com/start');


    return (
        <>
            {!!formState.status && <div hidden>Current form status is: {formState.status}</div>}
            <div className="d-flex justify-content-center">
                <h1 className="d-flex justify-content-center">Contact</h1>
            </div>
            <div className="d-flex justify-content-center">
                <form action="https://public.herotofu.com/v1/28d34d30-66f2-11ef-b56a-996140013c43" method="post" acceptCharset="UTF-8">
                    <div className="form-group m-1">
                        <input type="text" className="name-input form-control" id="name" placeholder="Name" name="name" required />
                    </div>
                    <div className="form-group m-1">
                        <input type="email" className="email-input form-control" id="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group m-1">
                        <textarea type="message" className="message-input form-control" id="message" placeholder="Enter your message here!" name="message" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success w-25 mt-2" value="Submit">Submit</button>
                        <div aria-hidden="true">
                            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" hidden />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

// import { useState } from 'react';
// import './contact.css';

// export default function Contact() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

//     const validateName = (e) => {
//         const value = e.target.value;
//         setName(value);
//         if (value === '') {
//             setFormErrors((prev) => ({ ...prev, name: 'Name is required' }));
//         } else {
//             setFormErrors((prev) => ({ ...prev, name: '' }));
//         }
//     };

//     const validateEmail = (e) => {
//         const value = e.target.value;
//         setEmail(value);
//         const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         if (value === '') {
//             setFormErrors((prev) => ({ ...prev, email: 'Email is required' }));
//         } else if (!emailRegex.test(value)) {
//             setFormErrors((prev) => ({ ...prev, email: 'Please enter a valid email.' }));
//         } else {
//             setFormErrors((prev) => ({ ...prev, email: '' }));
//         }
//     };

//     const validateMessage = (e) => {
//         const value = e.target.value;
//         setMessage(value);
//         if (value === '') {
//             setFormErrors((prev) => ({ ...prev, message: 'Message is required' }));
//         } else {
//             setFormErrors((prev) => ({ ...prev, message: '' }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Check if form is valid
//         if (name && email && message && !formErrors.name && !formErrors.email && !formErrors.message) {
//             const mailtoLink = `mailto:andrewtandersen@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
//             window.location.href = mailtoLink;
//             setName('');
//             setEmail('');
//             setMessage('');
//         } else {
//             alert('Please fill in all fields correctly before submitting.');
//         }
//     };

//     return (
//         <>
//             <div className="d-flex justify-content-center">
//                 <h1 className="d-flex justify-content-center">Contact</h1>
//             </div>
//             <div className="d-flex justify-content-center">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group m-1">
//                         <input
//                             type="text"
//                             className="name-input form-control"
//                             placeholder="Name"
//                             value={name}
//                             onChange={validateName}
//                         />
//                         {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
//                     </div>
//                     <div className="form-group m-1">
//                         <input
//                             type="text"
//                             className="email-input form-control"
//                             placeholder="Email"
//                             value={email}
//                             onChange={validateEmail}
//                         />
//                         {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
//                     </div>
//                     <div className="form-group m-1">
//                         <textarea
//                             name="message"
//                             className="message-input form-control"
//                             placeholder="Type your message here!"
//                             value={message}
//                             onChange={validateMessage}
//                         />
//                         {formErrors.message && <p className="text-danger">{formErrors.message}</p>}
//                     </div>
//                     <div className="text-center">
//                         <button type="submit" className="btn btn-success w-50">
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }

// Form that didn't work



