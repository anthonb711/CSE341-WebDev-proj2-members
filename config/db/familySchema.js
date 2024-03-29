const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  headHousehold: { type: String, required: true },
  spouse: { type: String },
  children: { type: Array },
  marriageDate: { type: Date },
  sealingDate: { type: Date },
  temple: {
    type: String,
    enum: [
      'St. George Utah',
      'Logan Utah',
      'Manti Utah',
      'Salt Lake',
      'Laie Hawaii',
      'Cardston Alberta',
      'Mesa Arizona',
      'Idaho Falls Idaho',
      'Bern Switzerland',
      'Los Angeles California',
      'Hamilton New Zealand',
      'London England',
      'Oakland California',
      'Ogden Utah',
      'Provo Utah Rock Canyon',
      'Washington D.C.',
      'São Paulo Brazil',
      'Tokyo Japan',
      'Seattle Washington',
      'Jordan River Utah',
      'Atlanta Georgia',
      'Apia Samoa',
      "Nuku'alofa Tonga",
      'Santiago Chile',
      'Papeete Tahiti',
      'Mexico City Mexico',
      'Boise Idaho',
      'Sydney Australia',
      'Manila Philippines',
      'Dallas Texas',
      'Taipei Taiwan',
      'Guatemala City Guatemala',
      'Freiberg Germany',
      'Stockholm Sweden',
      'Chicago Illinois',
      'Johannesburg South Africa',
      'Seoul Korea',
      'Lima Peru',
      'Buenos Aires Argentina',
      'Denver Colorado',
      'Frankfurt Germany',
      'Portland Oregon',
      'Las Vegas Nevada',
      'Toronto Ontario',
      'San Diego California',
      'Orlando Florida',
      'Bountiful Utah',
      'Hong Kong China',
      'Mount Timpanogos Utah',
      'St. Louis Missouri',
      'Vernal Utah',
      'Preston England',
      'Monticello Utah',
      'Anchorage Alaska',
      'Colonia Juárez Chihuahua Mexico',
      'Madrid Spain',
      'Bogotá Colombia',
      'Guayaquil Ecuador',
      'Spokane Washington',
      'Columbus Ohio',
      'Bismarck North Dakota',
      'Columbia South Carolina',
      'Detroit Michigan',
      'Halifax Nova Scotia',
      'Regina Saskatchewan',
      'Billings Montana',
      'Edmonton Alberta',
      'Raleigh North Carolina',
      'St. Paul Minnesota',
      'Kona Hawaii',
      'Ciudad Juárez Mexico',
      'Hermosillo Sonora Mexico',
      'Albuquerque New Mexico',
      'Oaxaca Mexico',
      'Tuxtla Gutiérrez Mexico',
      'Louisville Kentucky',
      'Palmyra New York',
      'Fresno California',
      'Medford Oregon',
      'Memphis Tennessee',
      'Reno Nevada',
      'Cochabamba Bolivia',
      'Tampico Mexico',
      'Nashville Tennessee',
      'Villahermosa Mexico',
      'Montreal Quebec',
      'San José Costa Rica',
      'Fukuoka Japan',
      'Adelaide Australia',
      'Melbourne Australia',
      'Suva Fiji',
      'Mérida Mexico',
      'Veracruz Mexico',
      'Baton Rouge Louisiana',
      'Oklahoma City Oklahoma',
      'Caracas Venezuela',
      'Houston Texas',
      'Birmingham Alabama',
      'Santo Domingo Dominican Republic',
      'Boston Massachusetts',
      'Recife Brazil',
      'Porto Alegre Brazil',
      'Montevideo Uruguay',
      'Winter Quarters Nebraska',
      'Guadalajara Mexico',
      'Perth Australia',
      'Columbia River Washington',
      'Snowflake Arizona',
      'Lubbock Texas',
      'Monterrey Mexico',
      'Campinas Brazil',
      'Asunción Paraguay',
      'Nauvoo Illinois',
      'The Hague Netherlands',
      'Brisbane Australia',
      'Redlands California',
      'Accra Ghana',
      'Copenhagen Denmark',
      'Manhattan New York',
      'San Antonio Texas',
      'Aba Nigeria',
      'Newport Beach California',
      'Sacramento California',
      'Helsinki Finland',
      'Rexburg Idaho',
      'Curitiba Brazil',
      'Panama City Panama',
      'Twin Falls Idaho',
      'Draper Utah',
      'Oquirrh Mountain Utah',
      'Vancouver British Columbia',
      'The Gila Valley Arizona',
      'Cebu City Philippines',
      'Kyiv Ukraine',
      'San Salvador El Salvador',
      'Quetzaltenango Guatemala',
      'Kansas City Missouri',
      'Manaus Brazil',
      'Brigham City Utah',
      'Calgary Alberta',
      'Tegucigalpa Honduras',
      'Gilbert Arizona',
      'Fort Lauderdale Florida',
      'Phoenix Arizona',
      'Córdoba Argentina',
      'Payson Utah',
      'Trujillo Peru',
      'Indianapolis Indiana',
      'Tijuana Mexico',
      'Provo City Center',
      'Sapporo Japan',
      'Philadelphia Pennsylvania',
      'Fort Collins Colorado',
      'Star Valley Wyoming',
      'Hartford Connecticut',
      'Paris France',
      'Tucson Arizona',
      'Meridian Idaho',
      'Cedar City Utah',
      'Concepción Chile',
      'Barranquilla Colombia',
      'Rome Italy',
      'Kinshasa Democratic Republic of the Congo',
      'Fortaleza Brazil',
      'Port-au-Prince Haiti',
      'Lisbon Portugal',
      'Arequipa Peru',
      'Durban South Africa',
      'Winnipeg Manitoba',
      'Pocatello Idaho',
      'Rio de Janeiro Brazil',
      'Yigo Guam',
      'Praia Cape Verde',
      'Belém Brazil',
      'Quito Ecuador',
      'San Juan Puerto Rico',
      'Richmond Virginia',
      'Helena Montana',
      'Saratoga Springs Utah',
      'Brasília Brazil',
      'Bentonville Arkansas',
      'Moses Lake Washington',
      'McAllen Texas',
      'Feather River California',
      'Bangkok Thailand',
      'Okinawa Japan',
      'Lima Peru Los Olivos',
      'Orem Utah'
    ]
  }
});

const Family = mongoose.model('Family', familySchema);

module.exports = Family;
