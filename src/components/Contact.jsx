import React from 'react'
import { CONTACT } from '../constants'
import '../index.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Contact() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='mt-20 text-4xl text-center'>
                Get in touch
            </h2>
            <div className='text-center tracking-tighter mb-6'>
                <p className='my-4'>
                    {CONTACT.address}
                </p>
                <p className='my-4'>
                    {CONTACT.phoneNo}
                </p>
                <a className='border-b' href='#'>
                    {CONTACT.email}
                </a>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-6 text-2xl contact-custom-style'>
                <a href="https://www.linkedin.com/in/rubas-hussain-31a685246/" target='_blank'><FaLinkedin /></a>
                <a href="https://github.com/Rubas-Hussain" target='_blank'><FaGithub /></a>
                <a href="https://www.instagram.com/rubas_sheikh2019/" target='_blank'><FaInstagram /></a>
                <FaSquareXTwitter />
            </div>
        </div>
    )
}

export default Contact