"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Our Team",
          id: "#team",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQs",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Dino's Barber & Stylist"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Experience the Art of Grooming at Dino's"
      description="Step into Dino's Barber & Stylist for a premium haircut, precision beard trim, and classic shave. Where tradition meets modern style, we ensure every visit leaves you feeling sharp, confident, and refreshed."
      buttons={[
        {
          text: "Book an Appointment",
          href: "#contact",
        },
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-african-woman-glass-smiling-talking-phone_176420-12471.jpg",
          alt: "Satisfied client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12690.jpg",
          alt: "Happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-man-smiling-close-up_23-2148508995.jpg",
          alt: "Regular patron",
        },
        {
          src: "http://img.b2bpic.net/free-photo/little-boy-looking-confused_23-2148244770.jpg",
          alt: "Young client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/excited-smiling-blond-girl-happily-keeping-thumbs-up-near-with-copy-space-text-promotional-content-isolated-yellow-background-like-expression_574295-2945.jpg",
          alt: "Excited smiling blond girl happily keeping thumbs up near with copy space for text or promotional content isolated on yellow background Like expression",
        },
      ]}
      avatarText="Over 100 happy clients!"
      imageSrc="http://img.b2bpic.net/free-photo/woman-with-hair-dryer-client-salon_23-2147737037.jpg"
      imageAlt="Luxurious barbershop interior with a barber working on a client, showcasing classic chairs and modern grooming tools."
      showDimOverlay={true}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Story"
      title="Where Tradition Meets Modern Style"
      buttons={[
        {
          text: "Meet Our Team",
          href: "#team",
        },
      ]}
      description="Dino's Barber & Stylist is more than just a barbershop—it's a sanctuary for men seeking impeccable grooming and a timeless experience. With over a decade of dedication to the craft, our skilled barbers blend classic techniques with contemporary trends to deliver the perfect look. From precision haircuts to luxurious shaves, we ensure every visit leaves you feeling sharp, confident, and refreshed. Come discover why our clients keep coming back."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Precision Haircut",
          description: "From classic cuts to modern styles, our barbers deliver a flawless finish every time.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-getting-his-beard-styled-barber_23-2148985717.jpg",
          imageAlt: "Man getting a modern haircut",
        },
        {
          title: "Expert Beard Trim",
          description: "Shape and sculpt your beard to perfection with a tailored trim and clean lines.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-natural-oils-his-face_23-2148883824.jpg",
          imageAlt: "Barber trimming a man's beard",
        },
        {
          title: "Classic Hot Lather Shave",
          description: "Indulge in the ultimate relaxation with our traditional hot lather and straight razor shave.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-barbershop-concept_23-2148506220.jpg",
          imageAlt: "Man receiving a classic hot lather shave",
        },
        {
          title: "Kids' Haircuts",
          description: "Stylish and comfortable haircuts for the younger gentlemen, making grooming fun and easy.",
          imageSrc: "http://img.b2bpic.net/free-photo/child-getting-their-hair-blown-salon_23-2150462515.jpg",
          imageAlt: "Young boy getting a haircut",
        },
        {
          title: "Styling & Consultation",
          description: "Get personalized advice on maintaining your look and the best products for your hair type.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-carrying-puppy-bag_23-2150565419.jpg",
          imageAlt: "Barber styling a client's hair",
        },
      ]}
      title="Our Signature Services"
      description="Discover a range of premium grooming services designed to elevate your style and confidence."
      tag="What We Offer"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Popular",
          badgeIcon: Sparkles,
          price: "$35",
          subtitle: "Precision Haircut",
          features: [
            "Any Haircut Style",
            "Hot Towel Finish",
            "Neckline Shave",
          ],
        },
        {
          id: "standard",
          badge: "Best Value",
          badgeIcon: Award,
          price: "$55",
          subtitle: "Haircut & Beard Trim",
          features: [
            "Precision Haircut",
            "Expert Beard Trim & Shape",
            "Hot Lather Finish",
            "Aftershave Balm",
          ],
        },
        {
          id: "premium",
          badge: "Luxury",
          badgeIcon: Star,
          price: "$75",
          subtitle: "Full Grooming Experience",
          features: [
            "Signature Haircut",
            "Full Beard Sculpt",
            "Classic Hot Lather Shave",
            "Face Treatment & Styling Advice",
          ],
        },
      ]}
      title="Choose Your Perfect Cut"
      description="Affordable luxury for every style. Find the grooming package that suits you best."
      tag="Pricing"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "dino",
          name: "Dino Rossi",
          role: "Master Barber & Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/latino-hair-salon-owner-preparing-clients_23-2150286080.jpg",
          imageAlt: "Dino Rossi",
        },
        {
          id: "marco",
          name: "Marco Diaz",
          role: "Senior Stylist",
          imageSrc: "http://img.b2bpic.net/free-photo/groomed-bearded-man-with-tattooes-is-posing-dark-photo-studio_613910-3659.jpg",
          imageAlt: "Marco Diaz",
        },
        {
          id: "emily",
          name: "Emily Chen",
          role: "Precision Hair Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/female-hairdresser-styling-clients-hair_107420-94689.jpg",
          imageAlt: "Emily Chen",
        },
        {
          id: "david",
          name: "David Lee",
          role: "Beard & Shave Expert",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-transgender-holding-brush_23-2149105470.jpg",
          imageAlt: "David Lee",
        },
      ]}
      title="Meet Our Master Barbers"
      description="Our talented team is dedicated to perfecting your look and ensuring a personalized experience with every visit."
      tag="Our Experts"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Michael J.",
          role: "Local Resident",
          company: "Silver Spring, MD",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-black-people-taking-care-afro-hair_23-2149575478.jpg",
          imageAlt: "Michael J. photo",
        },
        {
          id: "2",
          name: "Sarah K.",
          role: "Regular Client",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-pointing-front-showing-thumb-up-red-blouse-looking-attractive-front-view_176474-110522.jpg",
          imageAlt: "Sarah K. photo",
        },
        {
          id: "3",
          name: "James L.",
          role: "First-time Visitor",
          company: "Yelp Review",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-working-with-client-hairdressing-salon-styling-beard-with-trimmer_613910-5073.jpg",
          imageAlt: "James L. photo",
        },
        {
          id: "4",
          name: "David P.",
          role: "Beard Enthusiast",
          company: "Satisfied Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-lifestyle-concept-handsome-confident-young-bearded-european-man-having-sly-smile-crossing-arms-his-chest-standing-wall-with-copyspace-your-promotional-content_343059-1693.jpg",
          imageAlt: "David P. photo",
        },
        {
          id: "5",
          name: "Emily W.",
          role: "Happy Customer",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-shopping-mall_23-2150585918.jpg",
          imageAlt: "Emily W. photo",
        },
        {
          id: "6",
          name: "Robert S.",
          role: "Long-time Patron",
          company: "Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-businessman-holding-small-gift-box_1262-17801.jpg",
          imageAlt: "Robert S. photo",
        },
      ]}
      title="What Our Clients Say"
      description="Hear from our satisfied customers who trust Dino's Barber & Stylist for their grooming needs."
      tag="Client Feedback"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do I need an appointment?",
          content: "While walk-ins are welcome, we recommend booking an appointment to ensure you get your preferred barber and time slot, especially during peak hours. You can book online or call us directly.",
        },
        {
          id: "2",
          title: "What services do you offer?",
          content: "We offer a full range of grooming services including precision haircuts, expert beard trims, classic hot lather shaves, kids' haircuts, and styling consultations. Check our 'Services' section for more details.",
        },
        {
          id: "3",
          title: "What are your operating hours?",
          content: "Dino's Barber & Stylist is open Monday to Saturday, 9 AM - 6 PM. We are closed on Sundays. Please refer to our contact page for specific holiday hours.",
        },
        {
          id: "4",
          title: "Do you offer gift cards?",
          content: "Yes, gift cards are available for purchase in-store. They make a perfect gift for friends and family who appreciate a premium grooming experience.",
        },
        {
          id: "5",
          title: "Where are you located?",
          content: "We are conveniently located at 13669 Connecticut Ave, Silver Spring, MD 20906. There's ample parking available.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our services, booking, and more."
      tag="Support"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Book Your Next Appointment"
      description="Ready for a fresh look? Schedule your visit to Dino's Barber & Stylist today or give us a call at (301) 871-1224. We look forward to seeing you!"
      inputPlaceholder="Enter your email for updates"
      buttonText="Subscribe"
      termsText="By clicking Subscribe, you agree to receive promotional emails from Dino's Barber & Stylist."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Haircuts",
              href: "#services",
            },
            {
              label: "Beard Trims",
              href: "#services",
            },
            {
              label: "Shaves",
              href: "#services",
            },
            {
              label: "Kids' Cuts",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#team",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Book Now",
              href: "#contact",
            },
            {
              label: "Call Us",
              href: "tel:+13018711224",
            },
            {
              label: "Directions",
              href: "https://www.google.com/maps/dir/?api=1&destination=13669+Connecticut+Ave,+Silver+Spring,+MD+20906",
            },
          ],
        },
      ]}
      logoText="Dino's Barber & Stylist"
      copyrightText="© 2024 Dino's Barber & Stylist. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
