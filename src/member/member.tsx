import { useState } from 'react';
import { motion } from 'framer-motion';
import './member.css';

interface Member {
  title: string;
  name: string;
  email: string;
  phone: string;
  image?: string;
}

const EMINENT_MEMBERS: Member[] = [
  {
    title: 'Mr.',
    name: 'Abhijit Das',
    email: 'dipl_howrah@yahoo.co.in',
    phone: '9831080464',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Abhishek Jalan',
    email: 'abhyshekjalan_rediffmail.com',
    phone: '9831705000',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Abishek Boral',
    email: 'abishek.boral@gmail.com',
    phone: '9874465983',
    image: '/bb.jpg'
  },
  {
    title: 'Ms.',
    name: 'Adeeba Dhalech',
    email: 'adhalech@gmail.com',
    phone: '9903406534',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Afnan Akhzar',
    email: 'ahmer_afnan@rediffmail.com',
    phone: '9831321078',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Aftab Alam',
    email: 'aftabsim@yahoo.com',
    phone: '9830755122',
    image: '/bb.jpg'
  },
  {
    title: 'Ms.',
    name: 'Ahana Roy Choudhury',
    email: 'ahanachakraborty2gmail.com',
    phone: '9051827774',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Ahraz Mohammed',
    email: 'ahraz@abstracthues.in',
    phone: '9748623380 / 9830418533',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Ajay Kumar Gupta',
    email: 'ajjaygarg@gmail.com',
    phone: '9331133221',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Ajay Mittal',
    email: 'ajaymittal033@gmail.com',
    phone: '9836612019',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Akash Kapoor',
    email: 'akash.kapoor@altiussports.com',
    phone: '9836109929',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Alamgir Gaffar',
    email: 'alamgirgaffar@gmail.com',
    phone: '9836023300',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Amardeep Singh Chandhok',
    email: 'aschandhok_123@yahoo.co.in',
    phone: '9831109310',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Amarjeet Singh Mokha',
    email: 'mokhaenterprises@yahoo.com',
    phone: '9830042445',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Amitabh Dassani',
    email: 'amitabh.dassanic@morningwalker.in',
    phone: '9830047077',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Amitabh Luthra',
    email: 'amitabhluthra@gmail.com',
    phone: '9831013825',
    image: '/bb.jpg'
  },
  {
    title: 'Mr.',
    name: 'Anand Saraf',
    email: 'guruyani@gmail.com',
    phone: '9830026263',
    image: '/bb.jpg'
  },
  {
    title: 'Ms.',
    name: 'Ananya Datta',
    email: 'ananyadatta2003@yahoo.co.in / ananyadatta2011@gmail.com',
    phone: '92306952023'
  },
  {
    title: 'Mr.',
    name: 'Anil Jhawar',
    email: 'anilmmc@yahoo.com',
    phone: '9831004147'
  },
  {
    title: 'Ms.',
    name: 'Anindita Banerjee Tamta',
    email: 'aninditabtamta@yahoo.co.in / abtamta@yahoo.in',
    phone: '9830005659'
  },
  {
    title: 'Mr.',
    name: 'Anirudha Guha',
    email: 'agrgag@gmail.com',
    phone: '9830050515'
  },
  {
    title: 'Mr.',
    name: 'Anup Bhura',
    email: 'anupbhura@gmail.com',
    phone: '9831089059'
  },
  {
    title: 'Mr.',
    name: 'Arijit Mitra',
    email: 'arijit.pm@hotmail.com',
    phone: '9830544423'
  },
  {
    title: 'Mr.',
    name: 'Arshad Kadir',
    email: 'akadiri@hotmail.com',
    phone: '9830012567'
  },
  {
    title: 'Mr.',
    name: 'Arun Kumar Dalmia',
    email: 'arundalmia@gmail.com',
    phone: '9830031540'
  },
  {
    title: 'Mr.',
    name: 'Ashok R Masata',
    email: 'Driveinn@gmail.com',
    phone: '9830054660'
  },
  {
    title: 'Mr.',
    name: 'Asif Ahmed',
    email: 'asif@sanjhachulha.net',
    phone: '9830272344'
  },
  {
    title: 'Mr.',
    name: 'Asif Iqbal Khan',
    email: 'khan.i.asif@gmail.com',
    phone: '9830177715'
  },
  {
    title: 'Mr.',
    name: 'Asif Saigal',
    email: 'asif.saigal@gmail.com',
    phone: '9830130491'
  },
  {
    title: 'Mr.',
    name: 'Atul Churiwal',
    email: 'churiwalatul@gmail.com',
    phone: '9830065921'
  },
  {
    title: 'Mr.',
    name: 'Azhar Ahmed Shokur',
    email: 'azharaqua@gmail.com / alshoku',
    phone: '9831069360'
  },
  {
    title: 'Mr.',
    name: 'Bikash Chandra Goenka',
    email: 'bikas@calz.vsnl.net.in',
    phone: '9831007266'
  },
  {
    title: 'Ms.',
    name: 'Bipasa Bhunja',
    email: 'bbhunja@gmail.com',
    phone: '9433447373'
  },
  {
    title: 'Mr.',
    name: 'Briraj Singh',
    email: 'brijraj@hotmail.com',
    phone: '9903022200'
  },
  {
    title: 'Mr.',
    name: 'Chandra Kumar Karnani',
    email: 'ckkarnani@hotmail.com',
    phone: '9831024241'
  },
  {
    title: '',
    name: 'Chama Srivastava Mookherjee',
    email: 'chama_sri_17@yahoo.co.in',
    phone: '9830415343'
  },
  {
    title: 'Mr.',
    name: 'Deep Singh Suri',
    email: 'deepexport@rediffmail.com',
    phone: '9831026969'
  },
  {
    title: 'Mr.',
    name: 'Deepak Doshi',
    email: 'deepakdoshi69@gmail.com',
    phone: '9830253515'
  },
  {
    title: 'Mr.',
    name: 'Dharmendra Singh',
    email: 'dsinghcal@rediffmail.com',
    phone: '9830082610'
  },
  {
    title: 'Mr.',
    name: 'Dhruba Bhaduri',
    email: 'dhruba_6@rediffmail.com',
    phone: '9432292951'
  },
  {
    title: 'Mr.',
    name: 'Dhruja Hegde Kanal',
    email: 'divya.kanal@idiscoveri.com',
    phone: '9163708608'
  },
  {
    title: 'Mr.',
    name: 'Dishmit Singh Anand',
    email: 'dishmit.singh@gmail.com',
    phone: '9051447102'
  },
  {
    title: 'Mr.',
    name: 'Durba Mitra',
    email: 'mitradurba@gmail.com',
    phone: '9830944737'
  },
  {
    title: 'Ms.',
    name: 'Ekta Bawa',
    email: 'meetekta@hotmail.com',
    phone: '9331019002'
  },
  {
    title: 'Mr.',
    name: 'Elias Mohammed Shaikh',
    email: 'zaidzippers@vsnl.net',
    phone: '9038746654'
  },
  {
    title: 'Mr.',
    name: 'Eram Baeshin',
    email: 'orchid_blue2001@yahoo.com',
    phone: '9038747996'
  },
  {
    title: 'Mr.',
    name: 'Faisal Ahmed Shoaib',
    email: 'sa_faisal@rediffmail.com',
    phone: '9088854500'
  },
  {
    title: 'Mr.',
    name: 'Farid Ghani',
    email: 'faridghani2000_in@yahoo.co.in',
    phone: '9830247867'
  },
  {
    title: 'Ms.',
    name: 'Fatima Mirza',
    email: 'fatimamirza16@gmail.com',
    phone: '9903839442'
  },
  {
    title: '',
    name: 'Firdous Rehan',
    email: 'rehanled@cal.vsnl.net.in',
    phone: '9830027677'
  },
  {
    title: 'Mr.',
    name: 'Fuad Halim',
    email: 'drfuadhalim@gmail.com',
    phone: '9433053936'
  },
  {
    title: 'Mr.',
    name: 'Gajinder Singh',
    email: '',
    phone: '9830200010'
  },
  {
    title: 'Mr.',
    name: 'Gaurav Kapoor',
    email: 'dreamzzbeyond@gmail.com',
    phone: '9230538999'
  },
  {
    title: 'Mr.',
    name: 'Gautam Arora',
    email: 'gautm@yahoo.com',
    phone: '9831093253 / 9830519000'
  },
  {
    title: 'Mr.',
    name: 'Gautam Shroff',
    email: 'shroffgautam@yahoo.com',
    phone: '9831621074'
  },
  {
    title: 'Ms.',
    name: 'Gouri Kumra',
    email: 'drgourikumra@gmail.com',
    phone: '9831076874'
  },
  {
    title: 'Mr.',
    name: 'Hamza Malkani',
    email: 'hamza@hassanally.com',
    phone: '9830194591'
  },
  {
    title: 'Mr.',
    name: 'Hashim Khan',
    email: 'hashimk45@hotmail.com',
    phone: '9830711230'
  },
  {
    title: 'Mr.',
    name: 'Hemal Doshi',
    email: 'hemaldoshi_2000@yahoo.com',
    phone: '9831072151'
  },
  {
    title: 'Mr.',
    name: 'Hemant Marda',
    email: 'mardahemant@gmail.com',
    phone: '9830248009'
  },
  {
    title: 'Mr.',
    name: 'Iftekhar Ahsan',
    email: 'ifte@calcuttawalks.com',
    phone: '9830184030'
  },
  {
    title: 'Mr.',
    name: 'Indranil Aich',
    email: 'indranilaich@gmail.com',
    phone: '9831088204'
  },
  {
    title: 'Mr.',
    name: 'Jabeen Mumtaz Khan',
    email: 'aayansara@yahoo.co.in',
    phone: '9831020064'
  },
  {
    title: 'Mr.',
    name: 'Jamal Wajahat',
    email: 'wajahatjamal@rediffmail.com',
    phone: '9830522923'
  },
  {
    title: 'Mr.',
    name: 'Jatindra Singh Bawa',
    email: '',
    phone: '9331022362'
  },
  {
    title: 'Mr.',
    name: 'Jayajit Biswas',
    email: 'jayajitbiswas@yahoo.co.in',
    phone: '9830094177'
  },
  {
    title: 'Mr.',
    name: 'Jayesh Shashikant Khara',
    email: 'jkhara@live.com',
    phone: '9830135595'
  },
  {
    title: 'Mr.',
    name: 'Jimit Popat',
    email: 'jimm.aiesec@gmail.com',
    phone: '9874216322'
  },
  {
    title: 'Mr.',
    name: 'Jitendra Bhartia',
    email: 'jitendra@bhartia.in',
    phone: '9830022300'
  },
  {
    title: 'Ms.',
    name: 'Joeeta Basu',
    email: 'jooeta_basu@rediffmail.com',
    phone: '9830430214'
  },
  {
    title: 'Mr.',
    name: 'Joydeep Sen',
    email: 'joydeepsen500@rediffmail.com',
    phone: '9830617770 / 9038294191'
  },
  {
    title: 'Mr.',
    name: 'Joydip Kundu',
    email: 'wildwatchers@gmail.com',
    phone: '9830092059 / 974852230'
  },
  {
    title: 'Mr.',
    name: 'Kailash Agarwal',
    email: 'abmsales@gmail.com',
    phone: '9830058580'
  },
  {
    title: 'Mr.',
    name: 'Kanak Singh Dugar',
    email: 'kkdugar_1@yahoo.com',
    phone: '9830238881'
  },
  {
    title: 'Mr.',
    name: 'Kanchan Datta',
    email: 'icindia@gmail.com',
    phone: '9830073450'
  },
  {
    title: 'Ms.',
    name: 'Kayanat Alam',
    email: 'kayanatdhalech@gmail.com',
    phone: '9051347927'
  },
  {
    title: 'Mr.',
    name: 'Krishna Sha',
    email: 'bunty.krishna.sha@gmail.com',
    phone: '9331015338'
  },
  {
    title: 'Mr.',
    name: 'Kunal B.Jayaswal',
    email: 'kunalbj@gmail.com',
    phone: '9230613528'
  },
  {
    title: 'Ms.',
    name: 'Leena Taneja',
    email: 'lenazis@gmail.com',
    phone: '9831828991'
  },
  {
    title: 'Ms.',
    name: 'Madhu Goenka',
    email: 'progressive@dataone.in',
    phone: '9831082623'
  },
  {
    title: 'Mr.',
    name: 'Mahesh Motwani',
    email: 'mahesh_motwani@hotmail.com',
    phone: '9830043039'
  },
  {
    title: 'Mr.',
    name: 'Mahindra Singh',
    email: 'maninder@sukmanidevelopers.com',
    phone: '9830026060'
  },
  {
    title: 'Mr.',
    name: 'Manish Jajodia',
    email: 'manish.jajodia@gmail.com',
    phone: '9830021710'
  },
  {
    title: 'Mr.',
    name: 'Manoj Agarwal',
    email: 'mail@goldenmachinery.com',
    phone: '9830108918'
  },
  {
    title: 'Mr.',
    name: 'Manoj Jain',
    email: 'manojjain69@yahoo.co.uk',
    phone: '9831031494'
  },
  {
    title: 'Ms.',
    name: 'Manzilat Fatima Khan',
    email: 'ftallzman@gmail.com',
    phone: '9831011766'
  },
  {
    title: 'Mr.',
    name: 'Mayur Jhunjhunwala',
    email: 'mayurjl@gmail.com',
    phone: '9831008727'
  },
  {
    title: 'Mr.',
    name: 'Md Aamir Balg',
    email: 'balgmdaamir@gmail.com',
    phone: '9831483654'
  },
  {
    title: 'Mr.',
    name: 'Md Sohail Anwar',
    email: 'sohail.anwar15@yahoo.com',
    phone: '9748376962'
  },
  {
    title: 'Ms.',
    name: 'Megha Rathi',
    email: 'hotcool_megha@yahoo.co.in',
    phone: '9874530075'
  },
  {
    title: '',
    name: 'Mehvash Rahman',
    email: 'mehvash.rahman18@gmail.com',
    phone: '9051362184'
  },
  {
    title: 'Mr.',
    name: 'Mohammed Jahangir',
    email: 'saifee_hall@rediffmail.com',
    phone: '9831199634'
  },
  {
    title: 'Mr.',
    name: 'Mohsen Ali Shirazi',
    email: 'asfamohsen@gmail.com',
    phone: '9831024408'
  },
  {
    title: 'Mr.',
    name: 'Mokhtar Alam',
    email: 'rmokhtaralam@ymail.com',
    phone: '9831296331'
  },
  {
    title: 'Mr.',
    name: 'Mridul Kotriwal',
    email: 'mkspectrum@gmail.com',
    phone: '9830019509'
  },
  {
    title: 'Ms.',
    name: 'Indrani Banerjee',
    email: 'rmailzibanerjee@gmail.com',
    phone: '9836246655'
  },
  {
    title: 'Ms.',
    name: 'Nandini Sinha',
    email: 'nandinisinha@gmail.com',
    phone: '9831583461'
  },
  {
    title: 'Mr.',
    name: 'Narendra Kochar',
    email: 'narendrakochar@hotmail.com',
    phone: '9831095408'
  },
  {
    title: 'Mr.',
    name: 'Naresh Kumar Kothari',
    email: 'nareshkothari@gmail.com',
    phone: '9831028003'
  },
  {
    title: '',
    name: 'Nausheen Parvez',
    email: 'nausheen_parvez@yahoo.com / nausheenparvez99@gmail.com',
    phone: '9831587867'
  },
  {
    title: 'Mr.',
    name: 'Navin Gupta',
    email: 'pfcpl@vsnl.net',
    phone: '9830062562'
  },
  {
    title: 'Mr.',
    name: 'Navneet K Gupta',
    email: 'alsh.ebay@gmail.com',
    phone: '9433093346'
  },
  {
    title: 'Mr.',
    name: 'Neeraj Poddar',
    email: 'neerak@nexusconnexions.in',
    phone: '9830010500 / 9143000000'
  },
  {
    title: 'Ms.',
    name: 'Neha Dhavle',
    email: '',
    phone: '9830027599'
  },
  {
    title: 'Mr.',
    name: 'Nikhil Kothari',
    email: 'nikhil_kothari2@yahoo.co.in',
    phone: '9831125740'
  },
  {
    title: 'Mr.',
    name: 'Nitish Jain',
    email: 'nitishj@hotmail.com',
    phone: '9830150888'
  },
  {
    title: 'Ms.',
    name: 'Nusrat Jamil',
    email: 'jamilakhtar_cal@yahoo.co.in',
    phone: '9831275774'
  },
  {
    title: 'Mr.',
    name: 'Pankaj Manot',
    email: 'pmanot@gmail.com',
    phone: '9831151645'
  },
  {
    title: 'Mr.',
    name: 'Parvez Raza',
    email: 'veepeecon@gmail.com',
    phone: '9831412148'
  },
  {
    title: 'Mr.',
    name: 'Pawan Bhinsaria',
    email: 'pawanbhinsaria@gmail.com',
    phone: '9831035555'
  },
  {
    title: 'Mr.',
    name: 'Pawan Dalmia',
    email: 'pawan@nirmalasoftex.com',
    phone: '9831008444'
  },
  {
    title: 'Mr.',
    name: 'Pawas Shah',
    email: 'pawas@monkeywrench.in',
    phone: '9831804033'
  },
  {
    title: 'Mr.',
    name: 'Prashant Jalan',
    email: 'prashantjalan@hotmail.com',
    phone: '9830022440'
  },
  {
    title: 'Mr.',
    name: 'Pravin Baid',
    email: 'hempravin@gmail.com',
    phone: '9830348770'
  },
  {
    title: '',
    name: 'Rafique Haroon Chultani',
    email: 'rafique.chultani@gmail.com',
    phone: '9830730650'
  },
  {
    title: 'Mr.',
    name: 'Rajashree Kundalia',
    email: 'rshree9@gmail.com',
    phone: '990304380'
  },
  {
    title: 'Mr.',
    name: 'Rajendra Prasad Singh',
    email: 'mailtorps@gmail.com',
    phone: '9831878874'
  },
  {
    title: 'Mr.',
    name: 'Rajendra Singh',
    email: 'rajendra@sukmanidevelopers.com',
    phone: '9830037070'
  },
  {
    title: 'Mr.',
    name: 'Rajesh Arora',
    email: '',
    phone: '933106096'
  },
  {
    title: 'Mr.',
    name: 'Rajesh Chaudhuri',
    email: 'chaudhuri_rajesh@rediffmail.com',
    phone: '9831171577'
  },
  {
    title: 'Mr.',
    name: 'Rajesh Haralalka',
    email: 'premium.rajesh@gmail.com',
    phone: '9831255858'
  },
  {
    title: 'Mr.',
    name: 'Rajesh Jindel',
    email: 'rajeshjindel@yahoo.com',
    phone: '9831859133'
  },
  {
    title: 'Mr.',
    name: 'Rajesh Khanna',
    email: 'rajesh.khanna1960@gmail.com',
    phone: '9830065517'
  },
  {
    title: 'Mr.',
    name: 'Rajesh Nangia',
    email: 'rajeshnangia26@gmail.com',
    phone: '9830030038'
  },
  {
    title: 'Mr.',
    name: 'Rajiv Khandelwal',
    email: 'rajivk2000@hotmail.com',
    phone: '9331016825'
  },
  {
    title: 'Ms.',
    name: 'Rajlakshmi Ghosh',
    email: 'ghosh.rajlakshmi@gmail.com',
    phone: '9830488555'
  },
  {
    title: 'Ms.',
    name: 'Rakhi Chowbey',
    email: 'rakhichowbey@gmail.com',
    phone: '9830844143'
  },
  {
    title: 'Mr.',
    name: 'Ramesh Kakarania',
    email: 'rameshkakarania@gmail.com',
    phone: '9831002825'
  },
  {
    title: 'Ms.',
    name: 'Rani Vij',
    email: 'rani_vij@hotmail.com',
    phone: '9831267055'
  },
  {
    title: 'Mr.',
    name: 'Ranja Bhowmik',
    email: 'bp.ranja@yahoo.co.in',
    phone: '983144447'
  },
  {
    title: 'Ms.',
    name: 'Rashed Nehal Siddiqui',
    email: 'rashednehal@yahoo.com',
    phone: '9331092684'
  },
  {
    title: 'Mr.',
    name: 'Ravi Khedwal',
    email: 'projectsunshine2011@hotmail.com',
    phone: '9830041840'
  },
  {
    title: 'Mr.',
    name: 'Ravi Saraf',
    email: 'ravisaraf37@yahoo.in',
    phone: '9831043472'
  },
  {
    title: 'Mr.',
    name: 'Ravindra Katyal',
    email: 'ravikatyal@gmail.com',
    phone: '9831007072'
  },
  {
    title: 'Mr.',
    name: 'Rehan Imam Waris',
    email: 'rehanwaris@gmail.com',
    phone: '9903370707'
  },
  {
    title: 'Mr.',
    name: 'Rehan Rasul',
    email: 'rehanrasul25@gmail.com',
    phone: '9874124085'
  },
  {
    title: 'Ms.',
    name: 'Richa Bhatia',
    email: 'r_bhatia007@yahoo.com',
    phone: '9831059908'
  },
  {
    title: 'Mr.',
    name: 'Richard Gasper',
    email: 'richardgasper@yahoo.com',
    phone: '9830375418 / 9830660385'
  },
  {
    title: 'Mr.',
    name: 'Rishav Goel',
    email: 'rishavgoel92@gmail.com',
    phone: '9432323218'
  },
  {
    title: 'Ms.',
    name: 'Ruchita Kajaria',
    email: 'info@aarcee.co.in',
    phone: '9830737777'
  },
  {
    title: 'Mr.',
    name: 'Rupinder Singh',
    email: 'rupisingh2001@gmail.com',
    phone: '9830440441'
  },
  {
    title: 'Ms.',
    name: 'Saba Ali Firoz',
    email: 'sabaalifiroz2009@gmail.com',
    phone: '9830914088'
  },
  {
    title: 'Mr.',
    name: 'Sachin Senpal',
    email: 'jyotimotor@gmail.com',
    phone: '9830049212'
  },
  {
    title: 'Mr.',
    name: 'Sadi Ahmad',
    email: 'sadi_ahmad50@hotmail.com',
    phone: '9830121252'
  },
  {
    title: 'Mr.',
    name: 'Sadique Rasul',
    email: 'sadiqa.rasul@gmail.com / sadiquarrassul@gmail.com',
    phone: '9674435786'
  },
  {
    title: 'Mr.',
    name: 'Saif Ahmed',
    email: 'ahmed_saif1003@yahoo.co.in',
    phone: '9830053500'
  },
  {
    title: 'Mr.',
    name: 'Saif Saigal',
    email: 'salgalsaif@hotmail.com',
    phone: '9830175591'
  },
  {
    title: 'Mr.',
    name: 'Sajid Ismail',
    email: 'sajid@angloswiss.in',
    phone: '9230560003 / 9230575777'
  },
  {
    title: 'Ms.',
    name: 'Sakshi Malhotra',
    email: 'saksmal123@gmail.com',
    phone: '9051579104'
  },
  {
    title: 'Mr.',
    name: 'Salim Shaharyar Shaik Mohammed',
    email: 'ssortho@yahoo.com',
    phone: '9831066300'
  },
  {
    title: 'Ms.',
    name: 'Saminah Khan',
    email: 'saminah.khan@yahoo.co.in',
    phone: '9830911872'
  },
  {
    title: 'Mr.',
    name: 'Samir Desai',
    email: 'samirwifi@gmail.com',
    phone: '9830037573'
  },
  {
    title: 'Mr.',
    name: 'Sandip Somani',
    email: 'sandip.somani@gmail.com',
    phone: '9830147730'
  },
  {
    title: 'Mr.',
    name: 'Sanjay Haralalka',
    email: 'sanjoyharalalka@hotmail.com',
    phone: '9339786301'
  },
  {
    title: 'Mr.',
    name: 'Santosh Kumar Agarwal',
    email: 'agarwalsaha@gmail.com',
    phone: '9831006714'
  },
  {
    title: 'Mr.',
    name: 'Sapan Kapoor',
    email: 'sapan65@yahoo.com / saps37@gmail.com',
    phone: '9831119525'
  },
  {
    title: 'Mr.',
    name: 'Satnam Singh Ahluwalia',
    email: 'satnam.kolkata@gmail.com',
    phone: '9830210059'
  },
  {
    title: 'Ms.',
    name: 'Seema Beed',
    email: 'beedrajib@yahoo.com',
    phone: '9831084088'
  },
  {
    title: 'Mr.',
    name: 'Shadab Alam',
    email: 'shadab@grupalam.com',
    phone: '9830052707'
  },
  {
    title: 'Mr.',
    name: 'Shah Nawaz',
    email: 'shahnawazmd90@gmail.com',
    phone: '8961411617'
  },
  {
    title: 'Mr.',
    name: 'Shahanshah Mirza',
    email: 'mirza100@gmail.com',
    phone: '9831104363'
  },
  {
    title: 'Mr.',
    name: 'Shahid Akhter',
    email: '',
    phone: '9831004270'
  },
  {
    title: 'Mr.',
    name: 'Shaikh Mohammed Zaki',
    email: 'assemblyofangels@yahoo.com',
    phone: '9830161184'
  },
  {
    title: 'Mr.',
    name: 'Shakir M.H.Yahiya',
    email: '',
    phone: '9331173317'
  },
  {
    title: 'Ms.',
    name: 'Shally Kothari',
    email: 'shally.kothari@citi.com / shallykothari@yahoo.co.in',
    phone: '9836903181'
  },
  {
    title: 'Mr.',
    name: 'Shiv Kumar Jajodia',
    email: 'balona@sify.com',
    phone: '9831182623'
  },
  {
    title: 'Mr.',
    name: 'Shiv Rahul Chopra',
    email: 'shivrahulchopra@gmail.com',
    phone: '9830042037'
  },
  {
    title: 'Ms.',
    name: 'Shome Suvra Mukherjee',
    email: 'shome.mukherjee@gmail.com',
    phone: '9874557722'
  },
  {
    title: 'Ms.',
    name: 'Shruti Ghosh',
    email: 'ghoshshruti@yahoo.co.in',
    phone: '9007014939'
  },
  {
    title: 'Mr.',
    name: 'Somraj Kundu',
    email: 'somraj@freightindia.co.in',
    phone: '9830202086'
  },
  {
    title: 'Ms.',
    name: 'Sonal Anindya Mandal',
    email: 'sonalmandal@gmail.com',
    phone: '9831093024'
  },
  {
    title: 'Mr.',
    name: 'Subhadip Choudhury',
    email: 'choudhury.subhadip@gmail.com',
    phone: '9330290927'
  },
  {
    title: 'Ms.',
    name: 'Sudha Jaiswal',
    email: 'sudha10jaiswal@gmail.com',
    phone: '9830158877'
  },
  {
    title: 'Mr.',
    name: 'Sundeep Agarwal',
    email: 'sundeep.agarwal@gmail.com',
    phone: '9830043224'
  },
  {
    title: 'Mr.',
    name: 'Sunil Agarwal',
    email: 'sunil@cti.in',
    phone: '9830034110'
  },
  {
    title: 'Mr.',
    name: 'Sunil Lucas',
    email: 'sunillucas@gmail.com',
    phone: '9830023564'
  },
  {
    title: 'Mr.',
    name: 'Sunil Shukla',
    email: 'sshukla7@rediffmail.com',
    phone: '9830151561'
  },
  {
    title: 'Mr.',
    name: 'Surendra Kumar Agarwal',
    email: 'skafuture@gmail.com',
    phone: '9830021342'
  },
  {
    title: 'Mr.',
    name: 'Sushil Sethia',
    email: 'sushil@spinworthfibres.com',
    phone: '9831021400'
  },
  {
    title: 'Ms.',
    name: 'Sushmita Das',
    email: 'tinnicooling@gmail.com',
    phone: '9831176217'
  },
  {
    title: 'Mr.',
    name: 'Suyash Borar',
    email: 'suyashborar@email.com',
    phone: '9830030303'
  },
  {
    title: 'Mr.',
    name: 'Syed Imran Ahmed',
    email: 'imraniahmed@yahoo.com',
    phone: '9831085664'
  },
  {
    title: 'Mr.',
    name: 'Taranbir Singh Mokha',
    email: 'mokha13@yahoo.co.in',
    phone: '9830042073'
  },
  {
    title: 'Mm.',
    name: 'Uzma Alam',
    email: 'uzma_alam@yahoo.com',
    phone: '9831992366'
  },
  {
    title: 'Ms.',
    name: 'Vandana Jhunjhunwala',
    email: 'vandanajiw@gmail.com',
    phone: '9330844114'
  },
  {
    title: 'Ms.',
    name: 'Vani Chawla',
    email: 'vanichawla20@gmail.com',
    phone: '9830308624'
  },
  {
    title: 'Mr.',
    name: 'Vijay Katial',
    email: 'vijaykatial70.uk@gmail.com',
    phone: '9830012844'
  },
  {
    title: 'Mr.',
    name: 'Vikash Chawla',
    email: 'vikash_chawla@ediffmail.com',
    phone: '9836342080'
  },
  {
    title: 'Mr.',
    name: 'Vikram Chopra',
    email: 'vikram.chopra@altiussports.com',
    phone: '9831384259'
  },
  {
    title: 'Mr.',
    name: 'Vipul Kundalia',
    email: '',
    phone: ''
  },
  {
    title: 'Mr.',
    name: 'Virendra Daga',
    email: 'virendra_daga@hotmail.com',
    phone: '9674120000'
  },
  {
    title: 'Mr.',
    name: 'Vishal Jhajharia',
    email: 'vjhajharia@gmail.com',
    phone: '9830034250'
  },
  {
    title: 'Mr.',
    name: 'Vishnu Gupta',
    email: 'me@vishnugupta.in',
    phone: '9830068309'
  },
  {
    title: 'Mr.',
    name: 'Vivek Kariwal',
    email: 'vivek.kariwal@gmail.com',
    phone: '9830304950'
  },
  {
    title: 'Mr.',
    name: 'Waqar Ahmad Khan',
    email: 'waquark@yahoo.com',
    phone: '9331037536'
  },
  {
    title: 'Mr.',
    name: 'Yousuf Parvez',
    email: 'yousufparvez@yahoo.com',
    phone: '9831353141'
  },
  {
    title: 'Mr.',
    name: 'Zahid Rafique',
    email: 'zahid2701@gmail.com',
    phone: '9831008695'
  }
];

const getInitials = (name: string) => {
  const parts = name.split(' ');
  const cleanParts = parts.filter(
    part => !/^(Mr\.?|Ms\.?|Mrs\.?|Dr\.?)$/i.test(part) && part.length > 0
  );
  if (cleanParts.length === 0) return 'M';
  if (cleanParts.length === 1) return cleanParts[0].substring(0, 2).toUpperCase();
  return (cleanParts[0][0] + cleanParts[cleanParts.length - 1][0]).toUpperCase();
};

export default function MemberPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 12;
  const totalPages = Math.ceil(EMINENT_MEMBERS.length / membersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.querySelector('.eminent-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * membersPerPage;
  const visibleMembers = EMINENT_MEMBERS.slice(startIndex, startIndex + membersPerPage);

  return (
    <div className="member-page">
      {/* ─── Hero Section ─── */}
      <header className="member-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="member-hero-title">FACES - Members</h1>
          <p className="member-hero-subtitle">✦ Our Distinguished Alumni ✦</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.querySelector('.core-team-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
          <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [-60, 60] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent"
            />
          </div>
        </motion.div>
      </header>

      {/* ─── Core Team Section ─── */}
      <section className="core-team-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Core Team
        </motion.h2>
        <div className="gold-divider-center" />

        <div className="team-tree">
          {/* Top Row: President */}
          <div className="team-row">
            <motion.div 
              className="team-member-card president-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="team-member-photo">
                <img src="/a10.png" alt="Imran Zaki" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Imran Zaki</h3>
                <p className="team-member-role">President</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: VP, Sec, Treas */}
          <div className="team-row">
            <motion.div 
              className="team-member-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="team-member-photo">
                <img src="/v2.webp" alt="Vice President" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">VP Name</h3>
                <p className="team-member-role">Vice President</p>
              </div>
            </motion.div>

            <motion.div 
              className="team-member-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="team-member-photo">
                <img src="/v3.webp" alt="Secretary" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Sec. Name</h3>
                <p className="team-member-role">Secretary</p>
              </div>
            </motion.div>

            <motion.div 
              className="team-member-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="team-member-photo">
                <img src="/v4.webp" alt="Treasurer" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Treas. Name</h3>
                <p className="team-member-role">Treasurer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Eminent Personalities Section ─── */}
      <section className="eminent-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Some eminent personalities
          </h2>
          <p style={{ color: 'var(--gold)', marginBottom: '3rem', fontSize: '1.2rem', fontStyle: 'italic' }}>
            who are member
          </p>
        </motion.div>

        <div className="eminent-list">
          {visibleMembers.map((member, index) => (
            <motion.div 
              key={startIndex + index}
              className="eminent-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
            >
              <div className="eminent-photo-placeholder">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  getInitials(member.name)
                )}
              </div>
              <div className="eminent-details">
                <h3 className="eminent-name">
                  {member.title && <span className="eminent-title">{member.title}</span>} {member.name}
                </h3>
                <div className="eminent-contact-info">
                  <p className="eminent-contact-item">
                    <span className="contact-label">Email:</span>{' '}
                    {member.email ? (
                      <a 
                        href={`mailto:${member.email.includes('@') ? member.email : member.email.replace('_', '@')}`} 
                        className="contact-link"
                      >
                        {member.email}
                      </a>
                    ) : (
                      <span className="contact-value">—</span>
                    )}
                  </p>
                  <p className="eminent-contact-item">
                    <span className="contact-label">Phone:</span>{' '}
                    <span className="contact-value">{member.phone || '—'}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Pagination Controls ─── */}
        {totalPages > 1 && (
          <div className="pagination-controls">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-arrow"
              aria-label="Previous Page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-arrow"
              aria-label="Next Page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

