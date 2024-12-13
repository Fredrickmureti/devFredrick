import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Tilt } from 'react-tilt';

const blogPosts = [
  {
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement scalable microservices architecture using Node.js and Docker.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Backend Development',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Advanced React Native Performance Optimization',
    excerpt: 'Deep dive into React Native performance optimization techniques and best practices.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    date: '2024-03-10',
    readTime: '12 min read',
    category: 'Mobile Development',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Implementing AI Features in Web Applications',
    excerpt: 'Step-by-step guide to integrating AI capabilities into your web applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'Artificial Intelligence',
    gradient: 'from-orange-500 to-red-500'
  }
];

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
}

const BlogCard = ({ title, excerpt, image, date, readTime, category, gradient }: BlogPost) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 300
      }}
    >
      <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className={`absolute top-4 left-4 bg-gradient-to-r ${gradient} px-3 py-1 rounded-full text-white text-sm`}>
            {category}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(date).toLocaleDateString('en-US', { 
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          <Button variant="ghost" className="group" asChild>
            <a href="#">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </Card>
    </Tilt>
  </motion.div>
);

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials about software development and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="#">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}