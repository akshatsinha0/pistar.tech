import bg_img_1 from '@/assets/images/pistar/logo-part.png';
import bg_img_2 from '@/assets/images/pistar/core-solutions.png';
import bg_img_3 from '@/assets/images/pistar/value.png';
import { IStory } from '@/types/story-d-t';

const story_data:IStory[] = [
  {
    id:1,
    title:`1. Our Foundational Inspiration`,
    body_title:`The Story Behind PiStarTech’s Identity`,
    body_desc:[
        `At PiStarTech, our name itself is a reflection of our core values. "Pi," often associated with the mathematical constant (π), symbolizes precision, intelligence, and a data-driven approach, all critical to the work we do in the field of diagnostics. "Star" represents excellence, leadership, and innovation, underscoring our commitment to pushing the boundaries of healthcare technology.`,
        `Together, PiStar encapsulates our mission: to deliver high-precision, innovative solutions that address real-world healthcare challenges. This is embodied in our flagship product, Podiascanner Mat, designed specifically for diabetic foot care and biomechanical analysis. It showcases how we integrate cutting-edge technology with advanced biomechanics to offer life-saving diagnostics.`,
      ],
    body_subtitle:'FINAL results',
    body_lists:[
      'Future-Ready Virtual Hub: Represents our commitment to pioneering advanced healthcare technologies.',
      'Dynamic Form for Progress: Symbolizes our drive for continuous innovation and technological advancement.',
      'Balanced Design for Equity: Reflects our dedication to providing accessible and balanced care.',
      `Collaborative Knowledge Exchange: A space for professionals and patients to interact and share insights.`
    ],
    body_desc_second:[
        `Our identity symbolizes the future of healthcare diagnostics—a virtual hub where innovation meets life-enhancing technologies. It represents a space for healthcare professionals, technologists, and patients to come together, exchanging knowledge and improving lives.`,
        `The sharp lines and dynamic form of our logo mirror the growth and progress we aim to achieve, both in healthcare advancements and the personal journeys of our patients. It captures the ambition to continuously innovate while striving for excellence.`,
        `The symmetry and structure of our design reflect the balance we seek in providing equal, accessible care for all. It embodies the harmonious collaboration between technology and compassion in our mission.`,
        `Our signature hue, a calming blend of blue and white, symbolizes trust, clarity, and healing—values we hold dear as we work to improve patient outcomes and healthcare experiences.`,
        `At PiStarTech, every element of our identity resonates with our commitment to advancing healthcare. Like turmeric, an essential ingredient in traditional Indian medicine, our work is indispensable to the well-being of millions. We are driven by the purpose of creating lasting impacts at the intersection of precision, innovation, and care.`
    ],
    bg_img:bg_img_1,
    video_id:'aXFSJTjVjw0',
    parent:'accordionOne',
    page:'home'
  },
  {
    id:2,
    title:'2. The Core Solution We Offer',
    body_title:'The Innovation That Steers Us',
    body_desc:[
        'To thrive, excel, and ensure better health outcomes, healthcare professionals and patients need access to cutting-edge diagnostic tools that provide precise and timely results.',
        'At PiStarTech, we offer the Podiascanner Mat, a state-of-the-art solution designed for diabetic foot care and biomechanical analysis. This innovative tool empowers users with the ability to detect and manage foot-related complications early, ensuring continuous and proactive care ',
        'for individuals at risk. By merging advanced technology with biomechanical insights, our solution helps healthcare providers and patients alike navigate critical health challenges with confidence and accuracy.'
      ],
    body_subtitle:'FINAL results',
    body_desc_second:[
        'Our commitment is to provide life-enhancing, reliable innovations that support a healthier future.'
      ],
    bg_img:bg_img_2,
    video_id:'DPjYyCcw4Po',
    parent:'accordionOne',
    page:'home'
  },
  {
    id:3,
    title:'3. The Values ',
    body_title:'The Philosophy That Guides Us',
    body_desc:[
        'At PiStarTech, we believe that as human beings, our deepest drive is to thrive—both in health and in the tools we create to ensure it. Our mission is to empower healthcare professionals and patients to not only manage their conditions but to advance and grow with the right technology.',
        `We envision a future where everyone has access to cutting-edge solutions like Podiascanner Mat and Posture-Perfect Smart Chair, a tool designed to enhance diabetic foot care and biomechanical health. It's not just about what these tools do but how they support overall well-being, enabling individuals to thrive physically and professionally, through proactive health management.`,
        'At PiStarTech, we are committed to continuous innovation, providing solutions that allow individuals and healthcare systems to thrive for life.'
    ],
    body_subtitle:'FINAL results',

    bg_img:bg_img_3,
    video_id:'aXFSJTjVjw0',
    isShow:true,
    parent:'accordionOne',
    page:'home'
  },
]

export default story_data;