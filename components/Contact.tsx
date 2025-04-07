import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// You'll need to replace these with your actual Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

function Contact() {
    const contactRef = useRef<HTMLDivElement>(null)
    
    // Form state
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    })
    
    // Form status
    const [status, setStatus] = useState({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        message: ''
    })
    
    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }))
    }
    
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' })
        
        try {
            // Insert data into Supabase
            const { error } = await supabase
                .from('PortfolioContact')
                .insert([
                    {
                        Name: formData.Name,
                        Email: formData.Email,
                        Subject: formData.Subject,
                        Message: formData.Message
                    }
                ])
            
            if (error) throw error
            
            // Reset form and show success message
            setFormData({ Name: '', Email: '', Subject: '', Message: '' })
            setStatus({
                isSubmitting: false,
                isSuccess: true,
                isError: false,
                message: 'Message sent successfully!'
            })
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, isSuccess: false, message: '' }))
            }, 5000)
            
        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                message: 'Failed to send message. Please try again.'
            })
        }
    }
    
    return (
        <section id="contact" ref={contactRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <p className="text-gray-400">
                        Have a project in mind or want to collaborate? Let's talk!
                    </p>
                </motion.div>
                <div className="max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-12"
                    >
                        <div className="lg:col-span-2">
                            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <span className="text-cyan-400 mt-1">
                                            <FaEnvelope />
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <a href="mailto:syedadnanali0106@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                                                syedadnanali0106@gmail.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-cyan-400 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-400">Phone</p>
                                            <a href="tel:+918290393487" className="text-white hover:text-cyan-400 transition-colors">
                                                +91-8290393487
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-cyan-400 mt-1">
                                            <FaGithub />
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-400">GitHub</p>
                                            <a href="https://github.com/Adnan-The-Coder" className="text-white hover:text-cyan-400 transition-colors">
                                                github.com/Adnan-The-Coder
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <h4 className="text-white font-medium mb-2">Electroplix</h4>
                                    <p className="text-gray-400 text-sm mb-4">Interested in my startup?</p>
                                    <a 
                                        href="https://electroplix.com" 
                                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Visit Electroplix
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-3">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {status.isSuccess && (
                                    <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                                        {status.message}
                                    </div>
                                )}
                                
                                {status.isError && (
                                    <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                                        {status.message}
                                    </div>
                                )}
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="Name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input 
                                            type="text" 
                                            id="Name" 
                                            value={formData.Name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            id="Email" 
                                            value={formData.Email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="Subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                    <input 
                                        type="text" 
                                        id="Subject" 
                                        value={formData.Subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="Message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea 
                                        id="Message" 
                                        rows={5} 
                                        value={formData.Message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white resize-none"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-medium px-6 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex justify-center items-center"
                                    disabled={status.isSubmitting}
                                >
                                    {status.isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact