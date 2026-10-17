// Demo content — replace with the fellowship's confirmed details.

export const fellowship = {
  name: "The Lord's Chosen Charismatic Revival Ministries",
  short: "TLC Campus Fellowship",
  campus: "Obafemi Awolowo University",
  city: "Ile-Ife, Osun State",
  motto: "Heaven at Last",
  confession: "Jesus is Lord",
  scripture: {
    text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    reference: "Matthew 6:33",
  },
  venue: "Faculty of Technology Lecture Theatre, OAU",
  email: "tlc.oaufellowship@gmail.com",
  phone: "+234 803 412 7790",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export type Gathering = {
  day: string;
  name: string;
  time: string;
  venue: string;
  note: string;
};

export const gatherings: Gathering[] = [
  {
    day: "Sunday",
    name: "Sunday Worship Service",
    time: "7:30 am – 10:30 am",
    venue: "Faculty of Technology LT",
    note: "Praise, the Word, and a call to repentance. Dress modestly and come early for prayer.",
  },
  {
    day: "Tuesday",
    name: "Bible Study",
    time: "6:00 pm – 7:30 pm",
    venue: "Faculty of Arts Theatre",
    note: "Book-by-book study in small groups, led by the Bible Study unit.",
  },
  {
    day: "Wednesday",
    name: "Hall Evangelism",
    time: "8:00 pm – 9:30 pm",
    venue: "Halls of residence",
    note: "Teams visit Moremi, Awolowo, Fajuyi and the other halls with tracts and prayer.",
  },
  {
    day: "Friday",
    name: "Deliverance & Prayer Night",
    time: "6:30 pm – 8:30 pm",
    venue: "Faculty of Technology LT",
    note: "Intercession for students, the university and the nation.",
  },
  {
    day: "Saturday",
    name: "Unit Rehearsals & Meetings",
    time: "4:00 pm – 6:00 pm",
    venue: "Assigned by unit",
    note: "Choir, drama, ushering and media units meet to prepare for Sunday.",
  },
];

export type Unit = {
  name: string;
  description: string;
};

export const units: Unit[] = [
  { name: "Choir", description: "Leads worship on Sundays and at crusades." },
  { name: "Prayer", description: "Holds the altar before, during and after every gathering." },
  { name: "Evangelism", description: "Takes the gospel to the halls, the market and Ile-Ife town." },
  { name: "Bible Study", description: "Plans the weekly study and trains group leaders." },
  { name: "Ushering", description: "Welcomes everyone at the door and keeps the service orderly." },
  { name: "Media & Publicity", description: "Sound, livestream, photography and the fellowship's pages." },
  { name: "Welfare", description: "Visits the sick and supports members in need." },
  { name: "Drama & Creative Arts", description: "Ministers through drama at programmes and outreaches." },
  { name: "Sanctuary", description: "Prepares the venue before and restores it after each meeting." },
];

export const beliefs = [
  {
    title: "Repentance",
    body: "Turning from sin to Christ is where every life in the fellowship begins.",
  },
  {
    title: "Holiness",
    body: "A clean life on campus — in the hostel, the lecture hall and online.",
  },
  {
    title: "Deliverance",
    body: "Jesus still sets people free, and we pray expecting Him to.",
  },
  {
    title: "Heaven at last",
    body: "We live with the end in view: to make heaven, and to bring others along.",
  },
];
