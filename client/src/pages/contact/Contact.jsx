import { useFormData } from 'herotofu-react';
import './contact.css';

export default function Contact() {
    // const { formState, getFormSubmitHandler } = useFormData('https://herotofu.com/start');

    return (
        <>
            {/* {!!formState.status && <div hidden>Current form status is: {formState.status}</div>} */}
            <div className="d-flex justify-content-center">
                <h1 className="d-flex justify-content-center">Contact</h1>
            </div>
            <div className="d-flex justify-content-center">
                <form action="https://public.herotofu.com/v1/28d34d30-66f2-11ef-b56a-996140013c43" method="post" accept-charset="UTF-8">
                    <div className="form-group m-1">
                        <input type="text" className="name-input form-control" id="name" placeholder="Name" name="Name" required />
                    </div>
                    <div className="form-group m-1">
                        <input type="email" className="email-input form-control" id="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group m-1">
                        <textarea type="email" className="message-input form-control" id="email" placeholder="Your message" name="Email" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success w-25 mt-2" value="Submit">Submit</button>
                        <div aria-hidden="true">
                            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" hidden />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

// Old form that didn't work

// import { useState } from 'react';
// import './contact.css';

// export default function Contact () {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const validateName = (e) => {
//         const { name, value } = e.target;
//         setName(value);
//         if(name === 'name') {
//             if(value === ''){
//                 setName('');
//             }
//         }
//     }

//     const validateEmail = (e) => {
//         const { email, value } = e.target;
//         setEmail(value);
//         if (name === 'email') {
//             if(value === '') {
//                 setEmail('');
//             }
//             const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//             if (!emailRegex.test(value)){
//                 alert(`Please enter a vailid email.`)
//             }
//         }
//     }

//     return(
//         <>
//             <div className="d-flex justify-content-center">
//                 <h1 className="d-flex justify-content-center">Contact</h1>
//             </div>    
//             <div className="d-flex justify-content-center">
//                 <form>
//                     <div className="form-group m-1">
//                         <input type="text" className="name-input form-control" placeholder="Name" onBlur={validateName} defaultValue={name} />
//                     </div>
//                     <div className="form-group m-1"> 
//                         <input type="text" className="email-input form-control" placeholder="Email" onBlur={validateEmail} defaultValue={email} />
//                     </div>
//                     <div className="form-group m-1">
//                         <textarea name="message" className="message-input form-control" placeholder="Type your message here."></textarea>
//                     </div>
//                     <div className="text-center">
//                         <button type="submit" className="btn btn-success w-100">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>

//     )
// }