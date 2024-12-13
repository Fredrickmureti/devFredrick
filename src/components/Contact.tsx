import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-purple-400" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-400" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}