import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { CaseModel } from '../models/Case.js';
import { Team } from '../models/Team.js';
import { Service } from '../models/Service.js';

dotenv.config();

const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/prime_estate';

const cases = [
  { caseId: '1', counter: '001', title: 'Vaishnodevi Royal Villa', developer: 'Prime Gujarat Network', image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80' },
  { caseId: '2', counter: '002', title: 'SG Highway Sky Penthouse', developer: 'Prime Signature Living', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80' },
  { caseId: '3', counter: '003', title: 'GIFT City Financial Tower', developer: 'Prime Commercial Gujarat', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80' },
  { caseId: '4', counter: '004', title: 'Vesu Grand Estate', developer: 'Prime Heritage Gujarat', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80' }
];

const team = [
  {
    name: 'Rajesh Patel',
    role: 'Founder & Managing Director',
    bio: 'Pioneering luxury real estate developments in Vaishnodevi Circle, Ahmedabad with over 18 years of experience.',
    image: '/avatar-male.svg'
  },
  {
    name: 'Ananya Sharma',
    role: 'Head of Luxury Acquisitions',
    bio: 'Specializing in ultra-luxury villas and penthouses across Vaishnodevi Circle and S.G. Highway for HNI clients.',
    image: '/avatar-female.svg'
  },
  {
    name: 'Vikram Mehta',
    role: 'Chief Investment Officer',
    bio: 'Structuring high-yield commercial and residential portfolio investments in Ahmedabad prime growth corridors.',
    image: '/avatar-male.svg'
  }
];

const services = [
  {
    titleHtml: 'Market Insights & <i>Property</i> <i>Selection</i>',
    titlePlain: 'Market Insights & Property Selection',
    description: 'Certified brokers with deep financial & property market expertise in Vaishnodevi Circle, Ahmedabad.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    titleHtml: 'Legal Documentation & <i>Registry</i> <i>Assistance</i>',
    titlePlain: 'Legal Documentation & Registry Assistance',
    description: 'Seamless title verification, legal documentation, and VIP registration services for premium estates.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    titleHtml: 'Portfolio Management & <i>VIP</i> <i>Consulting</i>',
    titlePlain: 'Portfolio Management & VIP Consulting',
    description: 'End-to-end luxury asset management, high-yield rental management, and private portfolio advisory.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80'
  }
];

async function seedData() {
  try {
    await mongoose.connect(connStr);
    console.log('Connected to DB for seeding...');
    await CaseModel.deleteMany({});
    await Team.deleteMany({});
    await Service.deleteMany({});

    await CaseModel.insertMany(cases);
    await Team.insertMany(team);
    await Service.insertMany(services);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seedData();
