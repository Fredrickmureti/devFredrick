"use client";

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../ui/useToast';
import emailjs from 'emailjs-com'; // Import EmailJS

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceID = 'service_30ve1vw'; // Replace with your actual service ID
    const templateID = 'template_r7h4bxe'; 
    const userID = 'JfkvrQxVDdNssdmEH'; // Replace with your actual user ID

    if (!serviceID || !templateID || !userID) {
      console.error('EmailJS configuration is missing.');
      toast({
        title: 'Error',
        description: 'EmailJS configuration is missing. Please check your setup.',
      });
      return;
    }

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, values, userID)
      .then(() => {
        toast({
          title: 'Message sent!',
          description: 'Thank you for your message. I will get back to you soon.',
        });
        form.reset();
      })
      .catch((error) => {
        toast({
          title: 'Error sending message',
          description: 'Please try again later.',
        });
        console.error('EmailJS error:', error);
      });
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" style={{
                border: "1px black solid"
              }}>
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
