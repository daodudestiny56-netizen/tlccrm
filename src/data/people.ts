// Demo profiles — names, photographs and contact details are placeholders.

export type Adviser = {
  id: string;
  title: string;
  name: string;
  position: string;
  department: string;
  unit: string;
  email: string;
  phone: string;
  photo: string;
};

export type Executive = {
  id: string;
  name: string;
  position: string;
  department: string;
  faculty: string;
  level: string;
  email: string;
  phone: string;
  photo: string;
};

export const advisers: Adviser[] = [
  {
    id: "fadahunsi",
    title: "Prof.",
    name: "Adebayo Olumide Fadahunsi",
    position: "Senior Staff Adviser",
    department: "Department of Pharmaceutics",
    unit: "Faculty of Pharmacy",
    email: "a.fadahunsi@oauife.edu.ng",
    phone: "+234 803 551 2047",
    photo: "/images/people/adviser-1.jpg",
  },
  {
    id: "okoro",
    title: "Dr. (Mrs.)",
    name: "Ngozi Adaeze Okoro",
    position: "Staff Adviser, Sisters' Affairs",
    department: "Department of Medicine",
    unit: "College of Health Sciences",
    email: "n.okoro@oauife.edu.ng",
    phone: "+234 806 218 9930",
    photo: "/images/people/adviser-2.jpg",
  },
  {
    id: "babatunde",
    title: "Dr.",
    name: "Oluwaseun Babatunde",
    position: "Staff Adviser, Academics",
    department: "Department of Electronic & Electrical Engineering",
    unit: "Faculty of Technology",
    email: "o.babatunde@oauife.edu.ng",
    phone: "+234 813 640 7712",
    photo: "/images/people/adviser-3.jpg",
  },
  {
    id: "adesina",
    title: "Mrs.",
    name: "Bolanle Adesina",
    position: "Staff Adviser, Welfare",
    department: "Guidance & Counselling",
    unit: "Division of Student Affairs",
    email: "b.adesina@oauife.edu.ng",
    phone: "+234 805 377 1468",
    photo: "/images/people/adviser-4.jpg",
  },
  {
    id: "okeke",
    title: "Mr.",
    name: "Chinedu Okeke",
    position: "Staff Adviser, Finance",
    department: "Bursary Department",
    unit: "Students' Accounts Unit",
    email: "c.okeke@oauife.edu.ng",
    phone: "+234 802 994 3051",
    photo: "/images/people/adviser-5.jpg",
  },
  {
    id: "akintola",
    title: "Dr.",
    name: "Tunde Akintola",
    position: "Staff Adviser, Evangelism & Media",
    department: "Department of Dramatic Arts",
    unit: "Faculty of Arts",
    email: "t.akintola@oauife.edu.ng",
    phone: "+234 816 702 5584",
    photo: "/images/people/adviser-6.jpg",
  },
];

export const executives: Executive[] = [
  {
    id: "okonkwo",
    name: "Emmanuel Okonkwo",
    position: "President",
    department: "Mechanical Engineering",
    faculty: "Technology",
    level: "500 Level",
    email: "e.okonkwo@student.oauife.edu.ng",
    phone: "+234 810 223 4519",
    photo: "/images/people/exec-1.jpg",
  },
  {
    id: "adeyemi",
    name: "Oluwadamilola Adeyemi",
    position: "Vice President",
    department: "Medicine & Surgery",
    faculty: "Clinical Sciences",
    level: "500 Level",
    email: "o.adeyemi@student.oauife.edu.ng",
    phone: "+234 816 447 1093",
    photo: "/images/people/exec-2.jpg",
  },
  {
    id: "nwosu",
    name: "Chukwuebuka Nwosu",
    position: "General Secretary",
    department: "Computer Science & Engineering",
    faculty: "Technology",
    level: "400 Level",
    email: "c.nwosu@student.oauife.edu.ng",
    phone: "+234 703 581 2266",
    photo: "/images/people/exec-3.jpg",
  },
  {
    id: "oyeleke",
    name: "Temitope Oyeleke",
    position: "Assistant General Secretary",
    department: "English",
    faculty: "Arts",
    level: "300 Level",
    email: "t.oyeleke@student.oauife.edu.ng",
    phone: "+234 909 112 7480",
    photo: "/images/people/exec-4.jpg",
  },
  {
    id: "okafor",
    name: "Ifeanyi Okafor",
    position: "Financial Secretary",
    department: "Accounting",
    faculty: "Administration",
    level: "400 Level",
    email: "i.okafor@student.oauife.edu.ng",
    phone: "+234 806 930 4415",
    photo: "/images/people/exec-5.jpg",
  },
  {
    id: "akinola",
    name: "Blessing Akinola",
    position: "Treasurer",
    department: "Economics",
    faculty: "Social Sciences",
    level: "300 Level",
    email: "b.akinola@student.oauife.edu.ng",
    phone: "+234 813 207 6658",
    photo: "/images/people/exec-6.jpg",
  },
  {
    id: "ogunleye",
    name: "Samuel Ogunleye",
    position: "Prayer Secretary",
    department: "Agricultural Economics",
    faculty: "Agriculture",
    level: "400 Level",
    email: "s.ogunleye@student.oauife.edu.ng",
    phone: "+234 802 774 3190",
    photo: "/images/people/exec-7.jpg",
  },
  {
    id: "eze",
    name: "Chiamaka Eze",
    position: "Bible Study Coordinator",
    department: "Pharmacy",
    faculty: "Pharmacy",
    level: "400 Level",
    email: "c.eze@student.oauife.edu.ng",
    phone: "+234 708 349 5521",
    photo: "/images/people/exec-8.jpg",
  },
  {
    id: "adebayo",
    name: "Tobiloba Adebayo",
    position: "Evangelism Coordinator",
    department: "Law",
    faculty: "Law",
    level: "400 Level",
    email: "t.adebayo@student.oauife.edu.ng",
    phone: "+234 815 608 2247",
    photo: "/images/people/exec-9.jpg",
  },
  {
    id: "oladipo",
    name: "Precious Oladipo",
    position: "Choir Director",
    department: "Music",
    faculty: "Arts",
    level: "300 Level",
    email: "p.oladipo@student.oauife.edu.ng",
    phone: "+234 903 446 1872",
    photo: "/images/people/exec-10.jpg",
  },
  {
    id: "obi",
    name: "Kelechi Obi",
    position: "Publicity & Media Secretary",
    department: "Architecture",
    faculty: "Environmental Design & Management",
    level: "300 Level",
    email: "k.obi@student.oauife.edu.ng",
    phone: "+234 811 952 3304",
    photo: "/images/people/exec-11.jpg",
  },
  {
    id: "ajayi",
    name: "Funmilayo Ajayi",
    position: "Welfare Secretary",
    department: "Nursing Science",
    faculty: "Basic Medical Sciences",
    level: "400 Level",
    email: "f.ajayi@student.oauife.edu.ng",
    phone: "+234 806 125 8840",
    photo: "/images/people/exec-12.jpg",
  },
  {
    id: "afolabi",
    name: "Daniel Afolabi",
    position: "Brothers' Coordinator",
    department: "Physics & Engineering Physics",
    faculty: "Science",
    level: "300 Level",
    email: "d.afolabi@student.oauife.edu.ng",
    phone: "+234 704 873 1956",
    photo: "/images/people/exec-13.jpg",
  },
  {
    id: "okeke-g",
    name: "Grace Uchenna Okeke",
    position: "Sisters' Coordinator",
    department: "Microbiology",
    faculty: "Science",
    level: "400 Level",
    email: "g.okeke@student.oauife.edu.ng",
    phone: "+234 812 390 6627",
    photo: "/images/people/exec-14.jpg",
  },
  {
    id: "ibrahim",
    name: "Victor Ibrahim",
    position: "Ushering & Sanctuary Coordinator",
    department: "Educational Management",
    faculty: "Education",
    level: "200 Level",
    email: "v.ibrahim@student.oauife.edu.ng",
    phone: "+234 909 587 4413",
    photo: "/images/people/exec-15.jpg",
  },
  {
    id: "ogundipe",
    name: "Esther Ogundipe",
    position: "Drama & Creative Arts Coordinator",
    department: "Dramatic Arts",
    faculty: "Arts",
    level: "200 Level",
    email: "e.ogundipe@student.oauife.edu.ng",
    phone: "+234 701 664 2098",
    photo: "/images/people/exec-16.jpg",
  },
];

export const faculties = Array.from(new Set(executives.map((e) => e.faculty))).sort();

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
