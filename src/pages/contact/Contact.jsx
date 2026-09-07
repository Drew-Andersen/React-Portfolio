import { useFormData } from 'herotofu-react';
import './contact.css';

export default function Contact() {
    const { formState } = useFormData('https://herotofu.com/start');
    const isSuccess = formState.status === 'success';
    const isError = formState.status === 'error';


    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="d-flex justify-content-center">Contact</h1>
            </div>


            {isSuccess ? (
                <div className='d-flex justify-content-center'>
                    <p className='text-success text-center mt-3'>
                        Thanks for reaching out - I&aposll get back to you soon!
                    </p>
                </div>
            ) : (
                <div className='d-flex justify-content-center'>
                    <form
                        action='https://public.herotofu.com/v1/28d34d30-66f2-11ef-b56a-996140013c43'
                        method='post'
                        acceptCharset='UTF-8'
                    >
                        <div className='form-group m-1'>
                            <input
                                type='text'
                                className='name-input form-control'
                                id='name'
                                placeholder='Name'
                                name='name'
                                required
                            />
                        </div>
                        <div className='form-group m-1'>
                            <input
                                type='email'
                                className='email-input form-control'
                                id='email'
                                placeholder='Email'
                                name='email'
                                required
                            />
                        </div>
                        <div className='form-group m-1'>
                            <textarea 
                                className='message-input form-control'
                                id='message'
                                placeholder='Enter you message here!'
                                name='message'
                                required
                            />
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-success w-25 mt-2'>
                                Submit
                            </button>
                            {isError && (
                                <p className='text-danger mt-2'>
                                    Something went wrong - please try again, or email me directly.
                                </p>
                            )}
                            <div aria-hidden='true'>
                                <input type='text' name='_gotcha' tabIndex='-1' autoComplete='off' hidden />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}