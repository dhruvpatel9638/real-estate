import express from 'express';
import mongoose from 'mongoose';
import { Contact } from '../models/Contact.js';
import { CaseModel } from '../models/Case.js';
import { Team } from '../models/Team.js';
import { Service } from '../models/Service.js';

const router = express.Router();

// Fallback initial data in case MongoDB is empty or unseeded
const FALLBACK_CASES = [
  { caseId: '1', counter: '001', title: 'Damac Hills Luxury Villa', developer: 'Damac Properties', image: 'https://cdn.fame-estate.com/team1_6263c4b459.jpg' },
  { caseId: '2', counter: '002', title: 'Luxe Waterfront Residences', developer: 'Luxe Development', image: 'https://cdn.fame-estate.com/team3_fb12944350.png' },
  { caseId: '3', counter: '003', title: 'Palm Jumeirah Bay Estates', developer: 'Nakheel', image: 'https://cdn.fame-estate.com/team2_82704b4f06.png' },
  { caseId: '4', counter: '004', title: 'Six Senses Residences Dubai', developer: 'Six Senses', image: 'https://cdn.fame-estate.com/service_01a01267d4.png' },
  { caseId: '5', counter: '005', title: 'Cavalli Tower Penthouses', developer: 'Damac Properties', image: 'https://cdn.fame-estate.com/service2_db4b58f8b4.png' },
  { caseId: '6', counter: '006', title: 'The World Islands Private Retreat', developer: 'Luxe Development', image: 'https://cdn.fame-estate.com/service_3_5e30da923e.png' },
  { caseId: '7', counter: '007', title: 'Jumeirah Islands Ocean Villa', developer: 'Nakheel', image: 'https://cdn.fame-estate.com/service3_fa7030456f.webp' },
  { caseId: '8', counter: '008', title: 'Royal Atlantis Private Mansions', developer: 'Six Senses', image: 'https://cdn.fame-estate.com/service1_23ad1a8002.webp' }
];

const FALLBACK_TEAM = [
  {
    name: 'Vladislav Blazhennov',
    role: 'Founder & CEO, Fame',
    bio: 'Digital marketing expert with 9 years of experience in creating effective advertising campaigns, turning them into a stream of quality leads.',
    image: 'https://cdn.fame-estate.com/team1_6263c4b459.jpg'
  },
  {
    name: 'Daria Blazhenova',
    role: 'Sales Director',
    bio: 'A true master of negotiations and a sales expert with 10 years of experience. Possesses an innate intuition for sales, strategic thinking, and top-tier deal execution.',
    image: 'https://cdn.fame-estate.com/team3_fb12944350.png'
  },
  {
    name: 'Aleksandr Grigorev',
    role: 'Project Director',
    bio: 'Analytical mindset, expert in working with data and forecasts. Master of working with spreadsheets, projections, and long-term strategies.',
    image: 'https://cdn.fame-estate.com/team2_82704b4f06.png'
  }
];

const FALLBACK_SERVICES = [
  {
    titleHtml: 'Market Insights & <i>Property</i> <i>Selection</i>',
    titlePlain: 'Market Insights & Property Selection',
    description: 'Brokers with economic and financial education, MBA, taking weekly trainings to ensure top-tier yield optimization.',
    image: 'https://cdn.fame-estate.com/service_01a01267d4.png'
  },
  {
    titleHtml: 'Emirates ID & <i>Driver’s</i> <i>License</i> <i>Assistance</i>',
    titlePlain: 'Emirates ID & Driver’s License Assistance',
    description: 'Exclusive access to luxury real estate, premium assets, and high-end lifestyle services with seamless residency setup.',
    image: 'https://cdn.fame-estate.com/service2_db4b58f8b4.png'
  },
  {
    titleHtml: 'Private Shopping & <i>VIP</i> <i>Services</i>',
    titlePlain: 'Private Shopping & VIP Services',
    description: 'White-glove concierge management, luxury vehicle acquisition, and Forbes-level private shopping access.',
    image: 'https://cdn.fame-estate.com/service_3_5e30da923e.png'
  }
];

// In-memory contacts fallback
const inMemoryContacts = [];

// POST Inquiry Form
router.post('/contact', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ success: false, message: 'All fields (name, phone, message) are required.' });
    }

    if (mongoose.connection.readyState === 1) {
      const newContact = await Contact.create({ name, phone, message });
      console.log('[DB] New Contact saved:', newContact);
      return res.status(201).json({ success: true, message: 'Inquiry saved successfully!', data: newContact });
    } else {
      const contactObj = { id: Date.now(), name, phone, message, createdAt: new Date() };
      inMemoryContacts.push(contactObj);
      console.log('[In-Memory] New Contact saved:', contactObj);
      return res.status(201).json({ success: true, message: 'Inquiry received (in-memory mode)!', data: contactObj });
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Server error processing inquiry.' });
  }
});

// GET Cases
router.get('/cases', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const cases = await CaseModel.find();
      if (cases.length > 0) return res.json({ success: true, data: cases });
    }
    return res.json({ success: true, data: FALLBACK_CASES });
  } catch (error) {
    res.json({ success: true, data: FALLBACK_CASES });
  }
});

// GET Team Members
router.get('/team', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const members = await Team.find();
      if (members.length > 0) return res.json({ success: true, data: members });
    }
    return res.json({ success: true, data: FALLBACK_TEAM });
  } catch (error) {
    res.json({ success: true, data: FALLBACK_TEAM });
  }
});

// GET Services
router.get('/services', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const services = await Service.find();
      if (services.length > 0) return res.json({ success: true, data: services });
    }
    return res.json({ success: true, data: FALLBACK_SERVICES });
  } catch (error) {
    res.json({ success: true, data: FALLBACK_SERVICES });
  }
});

export default router;
