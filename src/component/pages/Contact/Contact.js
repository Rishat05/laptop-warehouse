import React from 'react';

const Contact = () => {
    return (
        <div className='text-center'>
            <h2>Get In Touch</h2>
            <div className="contact-form mx-auto d-grid p-2 gap-2 mb-2 ">
                <input type="text" placeholder='Your Name' className='border border-info border-2' />

                <input type="email" placeholder='Your Email' className='border border-info border-2' />

                <textarea name="" id="" cols="30" rows="10" placeholder='Your Messege' className='border border-info border-2'></textarea>

                <input className='btn btn-primary  mx-auto' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Contact;