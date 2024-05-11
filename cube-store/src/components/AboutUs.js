import React from 'react';

export default function AboutUs() {
    const aboutStyle = {width: '80%', margin: '0 auto', lineHeight: '1.5rem'}
    return (
    <section id="about">
        <div style={aboutStyle}>
            <h2>About Us</h2>
            <p>
                Welcome to our speedcubing shop! Our mission is to provide high-quality speedcubes 
                and accessories to cubers of all levels, from beginners to advanced solvers.
            </p>
            <p>
                Our team consists of passionate cubers who have years of experience in the speedcubing 
                community. We are dedicated to bringing you the best products and services to enhance 
                your cubing experience.
            </p>
            <p>
                At our shop, we are committed to excellence in everything we do. We strive to deliver 
                exceptional quality products, outstanding customer service, and a seamless shopping 
                experience. Your satisfaction is our top priority.
            </p>
        </div>
    </section>
    );
}