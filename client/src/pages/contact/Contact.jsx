import { useState } from 'react';
import './contact.css';

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const validateName = (e) => {
        const { name, value } = e.target;
        setName(value);
        if(name === 'name') {
            if(value === ''){
                setName('');
            }
        }
    }

    const validateEmail = (e) => {
        const { email, value } = e.target;
        setEmail(value);
        if (name === 'email') {
            if(value === '') {
                setEmail('');
            }
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(value)){
                alert(`Please enter a vailid email.`)
            }
        }
    }

    return(
        <>
            <div className="d-flex justify-content-center">
                <h1 className="d-flex justify-content-center">Contact</h1>
            </div>    
            <div className="d-flex justify-content-center">
                <form>
                    <div className="form-group m-1">
                        <input type="text" className="name-input form-control" placeholder="Name" onBlur={validateName} defaultValue={name} />
                    </div>
                    <div className="form-group m-1"> 
                        <input type="text" className="email-input form-control" placeholder="Email" onBlur={validateEmail} defaultValue={email} />
                    </div>
                    <div className="form-group m-1">
                        <textarea name="message" className="message-input form-control" placeholder="Type your message here."></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success w-100">Submit</button>
                    </div>
                </form>
            </div>
        </>
        
    )
}