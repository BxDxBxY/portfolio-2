import React from 'react';

import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import { fadeIn } from '../variants';

// Services Data
const services = [
  {
    name: 'UI/UX Designer',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe ad dolor, numquam.",
    link: "Learn more"
  },
  {
    name: 'Development',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe ad dolor, numquam.",
    link: "Learn more"
  },
  {
    name: 'Digital Marketing',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe ad dolor, numquam.",
    link: "Learn more"
  },
  {
    name: 'Product Branding',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe ad dolor, numquam.",
    link: "Learn more"
  }
]
const Services = () => {
  return <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I do.</h2>
          <h3 className='mb-16 max-w-[455px] h3'> I'm a Freelance Front-End Developer with over a 3 years of experience</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <div>
            {services.map((service, inx) => {
              const { name, description, link } = service
              return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={inx}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-1 flex-col items-end'>
                  <a href="!#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  <a href="!#" className='text-gradient text-sm'>
                    {link}
                  </a>
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
