import express from 'express';
import mongoose from 'mongoose';
import { Contact } from '../models/Contact.js';
import { CaseModel } from '../models/Case.js';
import { Team } from '../models/Team.js';
import { Service } from '../models/Service.js';

const router = express.Router();

// Fallback initial data in case MongoDB is empty or unseeded
const FALLBACK_CASES = [
  { caseId: '1', counter: '001', title: 'Vaishnodevi Royal Villa', developer: 'Prime Gujarat Network', image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80' },
  { caseId: '2', counter: '002', title: 'SG Highway Sky Penthouse', developer: 'Prime Signature Living', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80' },
  { caseId: '3', counter: '003', title: 'GIFT City Financial Tower', developer: 'Prime Commercial Gujarat', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80' },
  { caseId: '4', counter: '004', title: 'Vesu Grand Estate', developer: 'Prime Heritage Gujarat', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80' }
];

const FALLBACK_TEAM = [
  {
    name: 'Rajesh Patel',
    role: 'Managing Director & Founder',
    bio: 'Pioneering luxury real estate developments in Vaishnodevi Circle, Ahmedabad. Over 18 years of expertise in high-end residential estates.',
    image: '/avatar-male.svg'
  },
  {
    name: 'Ananya Sharma',
    role: 'Head of Luxury Acquisitions',
    bio: 'Specializing in ultra-luxury villas and penthouses across Vaishnodevi Circle and S.G. Highway, advising HNI clients globally.',
    image: '/avatar-female.svg'
  },
  {
    name: 'Vikram Mehta',
    role: 'Chief Investment Officer',
    bio: 'Structuring high-yield commercial and residential portfolio investments in Ahmedabad prime growth corridors.',
    image: '/avatar-male.svg'
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
