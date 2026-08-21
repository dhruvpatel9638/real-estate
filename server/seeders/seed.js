import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { CaseModel } from '../models/Case.js';
import { Team } from '../models/Team.js';
import { Service } from '../models/Service.js';

dotenv.config();

const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fame_estate';

const cases = [
  { caseId: '1', counter: '001', title: 'Damac Hills Luxury Villa', developer: 'Damac Properties', image: 'https://cdn.fame-estate.com/team1_6263c4b459.jpg' },
  { caseId: '2', counter: '002', title: 'Luxe Waterfront Residences', developer: 'Luxe Development', image: 'https://cdn.fame-estate.com/team3_fb12944350.png' },
  { caseId: '3', counter: '003', title: 'Palm Jumeirah Bay Estates', developer: 'Nakheel', image: 'https://cdn.fame-estate.com/team2_82704b4f06.png' },
  { caseId: '4', counter: '004', title: 'Six Senses Residences Dubai', developer: 'Six Senses', image: 'https://cdn.fame-estate.com/service_01a01267d4.png' },
  { caseId: '5', counter: '005', title: 'Cavalli Tower Penthouses', developer: 'Damac Properties', image: 'https://cdn.fame-estate.com/service2_db4b58f8b4.png' },
  { caseId: '6', counter: '006', title: 'The World Islands Private Retreat', developer: 'Luxe Development', image: 'https://cdn.fame-estate.com/service_3_5e30da923e.png' },
  { caseId: '7', counter: '007', title: 'Jumeirah Islands Ocean Villa', developer: 'Nakheel', image: 'https://cdn.fame-estate.com/service3_fa7030456f.webp' },
  { caseId: '8', counter: '008', title: 'Royal Atlantis Private Mansions', developer: 'Six Senses', image: 'https://cdn.fame-estate.com/service1_23ad1a8002.webp' }
];

const team = [
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

const services = [
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
