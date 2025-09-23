import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageCircle, Clock, Download, Briefcase, DollarSign, Calendar, FileUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState('');

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get('fullName')) newErrors.fullName = 'Full name is required.';
    if (!formData.get('email')) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.get('projectType')) newErrors.projectType = 'Project type is required.';
    if (!formData.get('message')) newErrors.message = 'Project details are required.';
    
    const file = formData.get('attachments');
    if (file && file.size > 10 * 1024 * 1024) { // 10MB limit
      newErrors.attachments = 'File size cannot exceed 10MB.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    if (!validateForm(formData)) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);

    const serviceID = 'service_crkppii';
    const templateID = 'template_qcudnuo'; // Please replace with your actual Template ID
    const publicKey = '17hR8-owUDcLIUQaz';

    if (templateID === 'YOUR_TEMPLATE_ID') {
        setTimeout(() => {
            toast({
                title: "Almost there!",
                description: "Please provide your EmailJS Template ID to finish the setup.",
                variant: "destructive",
                duration: 9000,
            });
            setIsSubmitting(false);
        }, 1000);
        return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        toast({
          title: "Message Sent! 🚀",
          description: "Thank you for your inquiry! I'll get back to you within 24 hours.",
        });
        form.current.reset();
        setFileName('');
        setErrors({});
      }, (error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again or email me directly.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "talentachiradza@gmail.com", href: "mailto:talentachiradza@gmail.com" },
    { icon: Phone, label: "Phone", value: "+263 71 227 2508", href: "tel:+263 71 227 2508" },
    { icon: MapPin, label: "Location", value: "Harare, Zimbabwe", href: "#" },
    { icon: Briefcase, label: "Availability", value: "Worldwide Remote Projects", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/talentachiradza' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/talent-a-chiradza-9998a12b8' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Talent-Chiradza/100090693008354/' },
    { icon: MessageCircle, href: 'https://wa.me/263712272508' }
  ];

  return (
    <section id="contact" className="py-20 parallax-bg">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let's Create Something <span className="gradient-text">Amazing Together</span></h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Ready to bring your next project to life? I'm here to help turn your ideas into digital reality.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="glass-effect rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"><info.icon className="w-6 h-6 text-blue-300" /></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                      <a href={info.href} target={info.href === "#" ? "" : "_blank"} rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">{info.value}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-3 mb-2"><Clock className="w-5 h-5 text-green-400" /><span className="font-semibold text-white">Response Time: ~24 Hours</span></div>
                  <p className="text-blue-200 text-sm">I'm committed to getting back to you promptly.</p>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-4">Connect on Social</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, i) => (
                      <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/20" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><social.icon className="w-5 h-5" /></motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="lg:col-span-3">
            <form ref={form} onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6" noValidate>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Project Inquiry</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input name="fullName" placeholder="Your Full Name *" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-200" />
                  {errors.fullName && <p className="text-red-400 text-sm flex items-center gap-1"><AlertCircle size={14}/>{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <Input type="email" name="email" placeholder="your.email@example.com *" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-200" />
                  {errors.email && <p className="text-red-400 text-sm flex items-center gap-1"><AlertCircle size={14}/>{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Input type="tel" name="phone" placeholder="Phone Number (Optional)" className="bg-white/10 border-white/20 text-white placeholder:text-blue-200" />
                </div>
                <div className="space-y-2">
                  <Input name="company" placeholder="Company or Organization (Optional)" className="bg-white/10 border-white/20 text-white placeholder:text-blue-200" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Select name="projectType">
                    <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue placeholder="Project Type *" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem><SelectItem value="webapp">Web Application</SelectItem><SelectItem value="ecommerce">E-commerce Platform</SelectItem><SelectItem value="mobile">Mobile App Development</SelectItem><SelectItem value="ui-ux">UI/UX Design</SelectItem><SelectItem value="consultation">Technical Consultation</SelectItem><SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && <p className="text-red-400 text-sm flex items-center gap-1"><AlertCircle size={14}/>{errors.projectType}</p>}
                </div>
                <div className="space-y-2">
                  <Select name="budget">
                    <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue placeholder="Budget Range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1000">Under $1,000</SelectItem><SelectItem value="1000-5000">$1,000 - $5,000</SelectItem><SelectItem value="5000-10000">$5,000 - $10,000</SelectItem><SelectItem value="10000-plus">$10,000+</SelectItem><SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Select name="timeline">
                    <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue placeholder="Project Timeline" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">ASAP (Rush Job)</SelectItem><SelectItem value="1-month">Within 1 Month</SelectItem><SelectItem value="2-3-months">2-3 Months</SelectItem><SelectItem value="flexible">Flexible Timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Textarea name="message" rows={6} placeholder="Tell me about your project. What are your goals, requirements, and any specific features you need? *" required className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 resize-none" />
                {errors.message && <p className="text-red-400 text-sm flex items-center gap-1"><AlertCircle size={14}/>{errors.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="attachments" className="relative w-full flex items-center px-4 py-3 bg-white/10 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                  <FileUp className="w-5 h-5 text-blue-300 mr-3" />
                  <span className="text-blue-200">{fileName || 'Upload project briefs, wireframes... (Max 10MB)'}</span>
                  <input id="attachments" name="attachments" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" />
                </label>
                {errors.attachments && <p className="text-red-400 text-sm flex items-center gap-1"><AlertCircle size={14}/>{errors.attachments}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50">
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2"><div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div><span>Sending...</span></div>
                ) : (
                  <div className="flex items-center justify-center space-x-2"><Send className="w-5 h-5" /><span>Send Inquiry</span></div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;