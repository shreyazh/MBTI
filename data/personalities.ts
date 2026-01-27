export interface PersonalityType {
  code: string
  nickname: string
  title: string
  description: string
  strengths: string[]
  weaknesses: string[]
  traits: string[]
  careers: string[]
  relationships: string
  famous: string[]
  percentPopulation: string
}

export const personalities: Record<string, PersonalityType> = {
  istj: {
    code: "ISTJ",
    nickname: "The Logistician",
    title: "The Responsible Organizer",
    description: "ISTJs are interested in clarity and knowledge. They like to observe and listen and have a particular interest in facts and information which help them develop as clear a knowledge as possible. They like to know where they stand, having clear goals to which they are working, and know that what they are expected to do is achievable. They value their experience, which serves as a strong guide to their decisions.",
    strengths: [
      "Reliable and responsible",
      "Logical and analytical",
      "Organized and detail-oriented",
      "Practical and realistic",
      "Follows through on commitments",
      "Creates systematic processes"
    ],
    weaknesses: [
      "Can be inflexible",
      "May struggle with change",
      "Can seem cold or distant",
      "May not adapt well to new situations",
      "Can be overly critical"
    ],
    traits: [
      "Duty-bound",
      "Loyal",
      "Structured",
      "Conservative",
      "Decisive",
      "Thorough"
    ],
    careers: [
      "Accountant",
      "Judge",
      "Police Officer",
      "Military Officer",
      "Dentist",
      "Administrator",
      "Manager"
    ],
    relationships: "ISTJs are loyal and responsible partners who value tradition and long-term commitment. They show love through actions rather than words, and appreciate direct communication. They are devoted to maintaining stable, structured relationships.",
    famous: ["George Washington", "Warren Buffett", "Elon Musk (disputed)"],
    percentPopulation: "11-13%"
  },
  isfj: {
    code: "ISFJ",
    nickname: "The Defender",
    title: "The Loyal Protector",
    description: "ISFJs are interested in knowledge and experience, particularly in relation to family, friends and colleagues. They are quiet, serious observers of people, listening intently and getting to know a great deal about them. They pay attention to their emotions and feelings and are keenly aware of the state of relationships between them and take their responsibilities to them very seriously.",
    strengths: [
      "Warm and sympathetic",
      "Loyal and dependable",
      "Conscientious and thorough",
      "Caring and supportive",
      "Good listeners",
      "Practical helpers"
    ],
    weaknesses: [
      "Can be overly shy",
      "May struggle to assert themselves",
      "Can be too self-sacrificing",
      "May take criticism too personally",
      "Can be too sensitive"
    ],
    traits: [
      "Protective",
      "Dedicated",
      "Humble",
      "Practical",
      "Sensible",
      "Selfless"
    ],
    careers: [
      "Teacher",
      "Nurse",
      "Social Worker",
      "Counselor",
      "Librarian",
      "Secretary",
      "Administrator"
    ],
    relationships: "ISFJs are devoted partners who value harmony and loyalty. They remember important details and show care through thoughtful actions. They prioritize their partner's needs and create warm, supportive relationships.",
    famous: ["Mother Teresa", "Rosa Parks", "Cher"],
    percentPopulation: "9-11%"
  },
  infj: {
    code: "INFJ",
    nickname: "The Advocate",
    title: "The Insightful Visionary",
    description: "INFJs have a strong, private sense of knowledge and vision, often for hidden things that other people would think can't be known. They see imaginative possibilities and insights, especially in relation to people, anticipating a future for them that they can't even see themselves. Although they probably have some strong relationships, their insights may be so unusual that others find them difficult to accept.",
    strengths: [
      "Insightful and intuitive",
      "Principled and idealistic",
      "Passionate and dedicated",
      "Good listeners",
      "Supportive of others",
      "Creative thinkers"
    ],
    weaknesses: [
      "Can be overly sensitive",
      "May struggle to accept criticism",
      "Can be private and withdrawn",
      "May have unrealistic expectations",
      "Can be perfectionistic"
    ],
    traits: [
      "Visionary",
      "Idealistic",
      "Empathetic",
      "Creative",
      "Determined",
      "Introspective"
    ],
    careers: [
      "Counselor",
      "Psychologist",
      "Religious Leader",
      "Writer",
      "Artist",
      "Coach",
      "Mediator"
    ],
    relationships: "INFJs form deep, meaningful connections and are highly committed partners. They are intuitive about their partner's needs and seek authenticity. They want relationships where they can grow spiritually and emotionally together.",
    famous: ["Mahatma Gandhi", "Eleanor Roosevelt", "Oprah Winfrey"],
    percentPopulation: "1-2%"
  },
  intj: {
    code: "INTJ",
    nickname: "The Architect",
    title: "The Strategic Mastermind",
    description: "INTJs have a strong, private sense of strategic vision, both for the future and how that future can be achieved. Their vision, or sense of knowing, may be difficult to articulate. Others may find their vision difficult to accept, seeing it as impractical or unrealistic. Pursuing their vision might be a lonely task, as they develop and pursue plans without anyone else really understanding the nature of what they are trying to achieve.",
    strengths: [
      "Logical and analytical",
      "Strategic thinkers",
      "Independent and self-directed",
      "Long-term planners",
      "Determined and persistent",
      "High standards"
    ],
    weaknesses: [
      "Can be overly critical",
      "May struggle with social interaction",
      "Can seem aloof or arrogant",
      "May not value others' emotions",
      "Can be stubborn"
    ],
    traits: [
      "Visionary",
      "Analytical",
      "Ambitious",
      "Independent",
      "Confident",
      "Rational"
    ],
    careers: [
      "Scientist",
      "Engineer",
      "Architect",
      "CEO",
      "Judge",
      "Programmer",
      "Strategist"
    ],
    relationships: "INTJs value intelligence and depth in relationships. They are loyal but may struggle with emotional expression. They seek partners they can respect and have meaningful intellectual conversations with.",
    famous: ["Isaac Newton", "Nikola Tesla", "Bill Gates"],
    percentPopulation: "2-3%"
  },
  istp: {
    code: "ISTP",
    nickname: "The Virtuoso",
    title: "The Logical Troubleshooter",
    description: "ISTPs have both a logical and a practical mind and therefore enjoy solving tangible problems. They are very interested in how things work and may have a tendency to take things apart if they don't know how they work. They may also enjoy using their craftsmanlike skills to fix things that are broken, or doing investigative work, collecting facts and clues to find out the truth of what has happened.",
    strengths: [
      "Practical and hands-on",
      "Excellent problem-solvers",
      "Logical and objective",
      "Independent",
      "Observant and analytical",
      "Adaptable"
    ],
    weaknesses: [
      "Can seem aloof",
      "May struggle with emotions",
      "Can be impulsive",
      "May avoid long-term planning",
      "Can be insensitive"
    ],
    traits: [
      "Analytical",
      "Pragmatic",
      "Mechanical",
      "Calm",
      "Curious",
      "Spontaneous"
    ],
    careers: [
      "Mechanic",
      "Engineer",
      "Pilot",
      "Detective",
      "Electrician",
      "Surgeon",
      "Technician"
    ],
    relationships: "ISTPs value independence and space in relationships. They show care through practical actions rather than emotional expression. They prefer partners who are self-sufficient and don't demand constant attention.",
    famous: ["Tom Cruise", "Clint Eastwood", "Lance Armstrong"],
    percentPopulation: "5-6%"
  },
  isfp: {
    code: "ISFP",
    nickname: "The Adventurer",
    title: "The Compassionate Artisan",
    description: "ISFPs have some deeply held values that, even though their life may be somewhat unstructured, direct the things that they do and say. They probably take a caring and sensitive approach to others, more so than may be apparent to others because they show their feelings in acts of kindness rather than in direct statements. They probably have a strong sense of the type of lifestyle they enjoy, which they want to maintain.",
    strengths: [
      "Compassionate and caring",
      "Artistic and creative",
      "Loyal friends",
      "Adventurous",
      "Sensitive to others' needs",
      "Practical"
    ],
    weaknesses: [
      "Can avoid conflict",
      "May be overly sensitive",
      "Can struggle with long-term planning",
      "May avoid difficult conversations",
      "Can be inconsistent"
    ],
    traits: [
      "Artistic",
      "Sensitive",
      "Gentle",
      "Adaptable",
      "Adventurous",
      "Present-focused"
    ],
    careers: [
      "Artist",
      "Designer",
      "Chef",
      "Musician",
      "Physical Therapist",
      "Florist",
      "Fashion Designer"
    ],
    relationships: "ISFPs are devoted, faithful partners who show love through actions and quality time. They are romantic and appreciate beauty in relationships. They seek partners who understand their need for authenticity and personal freedom.",
    famous: ["Marilyn Monroe", "Britney Spears", "Michael Jackson"],
    percentPopulation: "6-7%"
  },
  infp: {
    code: "INFP",
    nickname: "The Mediator",
    title: "The Idealistic Advocate",
    description: "INFPs have some deeply held values, though there are probably very few people, if any, who know what those values actually are. Privately, they may be a people-person, but others may not recognise it as they show their feelings in indirect, imaginative ways rather than in more conventional expressions of care. They may be looking forward to the realisation of some personal ideals.",
    strengths: [
      "Idealistic and passionate",
      "Creative and imaginative",
      "Empathetic",
      "Principled",
      "Good listeners",
      "Authentic"
    ],
    weaknesses: [
      "Can be overly emotional",
      "May struggle with practical tasks",
      "Can be too idealistic",
      "May avoid conflict",
      "Can be self-critical"
    ],
    traits: [
      "Idealistic",
      "Imaginative",
      "Passionate",
      "Sincere",
      "Creative",
      "Compassionate"
    ],
    careers: [
      "Writer",
      "Counselor",
      "Artist",
      "Teacher",
      "Therapist",
      "Musician",
      "Activist"
    ],
    relationships: "INFPs are deeply romantic partners who seek meaningful emotional connections. They value authenticity and understanding. They are loyal and dedicated to partners who share their values and dreams.",
    famous: ["Princess Diana", "Johnny Depp", "William Shakespeare"],
    percentPopulation: "4-5%"
  },
  intp: {
    code: "INTP",
    nickname: "The Logician",
    title: "The Intellectual Analyst",
    description: "INTPs have a strong sense of the hidden principles that govern how the world works. They are interested in theoretical models and explanations, and when other people put forward their own theories they put them to the test to find out how true, or robust, they are. They enjoy solving difficult intellectual problems and seek to understand the real truth behind any situation, even when it involves several complex factors.",
    strengths: [
      "Logical and analytical",
      "Creative problem-solvers",
      "Original thinkers",
      "Independent",
      "Objective",
      "Good at seeing patterns"
    ],
    weaknesses: [
      "Can seem cold or detached",
      "May procrastinate",
      "Can be insensitive",
      "May struggle with practical matters",
      "Can be scattered"
    ],
    traits: [
      "Theoretical",
      "Analytical",
      "Objective",
      "Original",
      "Independent",
      "Curious"
    ],
    careers: [
      "Programmer",
      "Scientist",
      "Engineer",
      "Mathematician",
      "Professor",
      "Philosopher",
      "Researcher"
    ],
    relationships: "INTPs value intellectual compatibility above all. They are not naturally expressive emotionally but are loyal once committed. They appreciate partners who understand their need for independence and mental stimulation.",
    famous: ["Albert Einstein", "Bill Gates", "Mark Zuckerberg"],
    percentPopulation: "3-4%"
  },
  estp: {
    code: "ESTP",
    nickname: "The Entrepreneur",
    title: "The Dynamic Doer",
    description: "ESTPs are action-oriented problem solvers. They enjoy getting things done and taking action to solve practical problems. They are in their element when there is a crisis requiring urgent action, which they are able to resolve. If they have any particular skills (e.g. sports, crafts or sales) then they enjoy applying those skills to reach a tangible goal (winning a game, making a sale, or building something tangible).",
    strengths: [
      "Action-oriented",
      "Excellent problem-solvers",
      "Practical",
      "Risk-takers",
      "Energetic",
      "Good in emergencies"
    ],
    weaknesses: [
      "Can be impulsive",
      "May lack follow-through",
      "Can be insensitive",
      "May struggle with long-term planning",
      "Can be disorganized"
    ],
    traits: [
      "Adventurous",
      "Pragmatic",
      "Bold",
      "Energetic",
      "Charismatic",
      "Direct"
    ],
    careers: [
      "Salesperson",
      "Athlete",
      "Military Officer",
      "Detective",
      "Entrepreneur",
      "Mechanic",
      "Pilot"
    ],
    relationships: "ESTPs bring excitement and spontaneity to relationships. They are fun-loving and enjoy shared activities. They prefer partners who are independent and can keep up with their active lifestyle.",
    famous: ["Ernest Hemingway", "Madonna", "Donald Trump"],
    percentPopulation: "4-6%"
  },
  esfp: {
    code: "ESFP",
    nickname: "The Entertainer",
    title: "The Enthusiastic Performer",
    description: "ESFPs are action-oriented people persons. They seek to live life to the full and enjoy applying their people skills (and other practical skills) to achieve a tangible benefit for people. They have a strong sense of immediacy or urgency - realising what needs to be done now - and are probably often urging their colleagues to stop talking and get on with doing something.",
    strengths: [
      "Outgoing and sociable",
      "Enthusiastic",
      "Fun-loving",
      "Practical",
      "Flexible",
      "Good at reading people"
    ],
    weaknesses: [
      "Can be impulsive",
      "May struggle with focus",
      "Can avoid serious topics",
      "May be seen as superficial",
      "Can lack planning"
    ],
    traits: [
      "Outgoing",
      "Charismatic",
      "Energetic",
      "Spontaneous",
      "Entertaining",
      "Empathetic"
    ],
    careers: [
      "Event Planner",
      "Teacher",
      "Entertainer",
      "Sales Representative",
      "Coach",
      "Counselor",
      "Performer"
    ],
    relationships: "ESFPs bring joy and laughter to relationships. They are spontaneous and love creating memorable experiences. They appreciate partners who enjoy socializing and living in the moment.",
    famous: ["Marilyn Monroe", "Jamie Foxx", "Miley Cyrus"],
    percentPopulation: "8-9%"
  },
  enfp: {
    code: "ENFP",
    nickname: "The Campaigner",
    title: "The Inspiring Explorer",
    description: "ENFPs are someone who senses the hidden potential in people. They enjoy starting discussion or activities that challenge and stimulate others into having new insights about themselves, which they can then take and apply to their own personal growth. They are enthusiastic about new projects or causes that offer the potential for a beneficial impact on people, especially when it involves breaking new ground.",
    strengths: [
      "Enthusiastic and optimistic",
      "Charismatic",
      "Good communicators",
      "Creative",
      "Caring about people",
      "Flexible"
    ],
    weaknesses: [
      "Can be scattered",
      "May struggle with follow-through",
      "Can be overly emotional",
      "May be unfocused",
      "Can ignore details"
    ],
    traits: [
      "Enthusiastic",
      "Creative",
      "Curious",
      "Spontaneous",
      "Charismatic",
      "Empathetic"
    ],
    careers: [
      "Therapist",
      "Journalist",
      "Entertainer",
      "Teacher",
      "Counselor",
      "Actor",
      "Marketing Manager"
    ],
    relationships: "ENFPs are passionate, affectionate partners who bring creativity and excitement to relationships. They are communicative and value deep connections. They seek partners who appreciate their enthusiasm and uniqueness.",
    famous: ["Oprah Winfrey", "Ellen DeGeneres", "Robin Williams"],
    percentPopulation: "7-8%"
  },
  entp: {
    code: "ENTP",
    nickname: "The Debater",
    title: "The Innovative Thinker",
    description: "ENTPs are someone who challenges the status quo, seeking to uncover the hidden potential or new possibilities in different situations. They start projects and introduce change on an experimental basis, not knowing fully what is going to happen, but in the expectation that it will lead to an improvement. They enjoy the challenge of doing something that has not been done before and seems impossible.",
    strengths: [
      "Excellent innovators",
      "Strong debaters",
      "Creative thinkers",
      "Adaptable",
      "Knowledgeable",
      "Good strategists"
    ],
    weaknesses: [
      "Can be argumentative",
      "May lack follow-through",
      "Can be insensitive",
      "May ignore rules",
      "Can be scattered"
    ],
    traits: [
      "Innovative",
      "Analytical",
      "Curious",
      "Adventurous",
      "Skeptical",
      "Energetic"
    ],
    careers: [
      "Entrepreneur",
      "Lawyer",
      "Scientist",
      "Engineer",
      "Consultant",
      "Journalist",
      "Inventor"
    ],
    relationships: "ENTPs seek intellectual stimulation in relationships. They enjoy witty banter and debate. They value partners who are intelligent and can challenge them mentally.",
    famous: ["Steve Jobs", "Mark Twain", "Socrates"],
    percentPopulation: "3-4%"
  },
  estj: {
    code: "ESTJ",
    nickname: "The Executive",
    title: "The Practical Organizer",
    description: "ESTJs want the world to be well run and well organised. They are keenly aware of the need for structure in a situation, such as the roles and responsibilities that people have. If there are no established processes or procedures, or in a situation of chaos, then they will introduce a logical organisation and structure into the way things are done. They are likely to be business-like and professional in their manner.",
    strengths: [
      "Natural leaders",
      "Organized and efficient",
      "Practical",
      "Logical",
      "Dependable",
      "Strong sense of duty"
    ],
    weaknesses: [
      "Can be inflexible",
      "May not value emotions",
      "Can be too direct",
      "May struggle with change",
      "Can be controlling"
    ],
    traits: [
      "Executive",
      "Authoritative",
      "Practical",
      "Organized",
      "Direct",
      "Efficient"
    ],
    careers: [
      "Manager",
      "Executive",
      "Administrator",
      "Military Officer",
      "Judge",
      "Police Officer",
      "Business Owner"
    ],
    relationships: "ESTJs are committed, faithful partners who value stability and tradition. They show care through providing and protecting. They appreciate partners who respect their leadership and share their values.",
    famous: ["Harry Truman", "Margaret Thatcher", "Lyndon B. Johnson"],
    percentPopulation: "8-9%"
  },
  esfj: {
    code: "ESFJ",
    nickname: "The Consul",
    title: "The Caring Provider",
    description: "ESFJs seek to develop harmony in relationships and promote cooperation and teamwork. They regard the needs of others as very important, perhaps more so than their own, and seek to recognise their contributions and make them feel valued. They encourage and motivate others, engender team spirit, and try to overcome any conflict by finding common ground and ways in which people can agree.",
    strengths: [
      "Warm and caring",
      "Loyal and devoted",
      "Good communicators",
      "Strong sense of duty",
      "Organized",
      "Good at teamwork"
    ],
    weaknesses: [
      "Can be overly sensitive",
      "May struggle with independence",
      "Can be people-pleasing",
      "May avoid conflict",
      "Can be too traditional"
    ],
    traits: [
      "Caring",
      "Social",
      "Cooperative",
      "Organized",
      "Loyal",
      "Genuine"
    ],
    careers: [
      "Teacher",
      "Nurse",
      "Counselor",
      "Manager",
      "Social Worker",
      "Administrator",
      "HR Manager"
    ],
    relationships: "ESFJs are devoted partners who prioritize harmony and connection. They are attentive and affectionate. They value traditional relationships and seek partners who appreciate their nurturing nature.",
    famous: ["Barbara Streisand", "Mary Tyler Moore", "Bette Midler"],
    percentPopulation: "10-12%"
  },
  enfj: {
    code: "ENFJ",
    nickname: "The Protagonist",
    title: "The Inspiring Leader",
    description: "ENFJs are someone who seeks to develop and promote personal growth in their friends, family or colleagues. They sometimes have a sense of their potential which may extend beyond how they see themselves. They also seek to develop the potential within relationships or the team. However, they don't push so hard that it creates conflict, because keeping the harmony in their relationships is also important.",
    strengths: [
      "Natural leaders",
      "Charismatic",
      "Empathetic",
      "Strong communicators",
      "Good at inspiring others",
      "Organized"
    ],
    weaknesses: [
      "Can be overly idealistic",
      "May be too sensitive to criticism",
      "Can be manipulative",
      "May struggle with boundaries",
      "Can be too involved in others' lives"
    ],
    traits: [
      "Charismatic",
      "Idealistic",
      "Empathetic",
      "Organized",
      "Passionate",
      "Sociable"
    ],
    careers: [
      "Coach",
      "Teacher",
      "Manager",
      "Counselor",
      "Religious Leader",
      "Politician",
      "HR Manager"
    ],
    relationships: "ENFJs are passionate, devoted partners who seek deep emotional connections. They are supportive and want to help their partner grow. They value open communication and shared values.",
    famous: ["Oprah Winfrey", "Gal Gadot", "Morgan Freeman"],
    percentPopulation: "2-3%"
  },
  entj: {
    code: "ENTJ",
    nickname: "The Commander",
    title: "The Strategic Leader",
    description: "ENTJs are looking to develop a better structure and organisation in the way things are done. They tend to control life by organising systems and people to meet task-oriented goals, but they also have one eye on the future and are looking for a process of continuous improvement. They like to work with competent people who, being in the right roles, have the appropriate skills both to do their job and implement the improvements they envisage.",
    strengths: [
      "Natural leaders",
      "Strategic thinkers",
      "Confident",
      "Logical",
      "Ambitious",
      "Strong-willed"
    ],
    weaknesses: [
      "Can be arrogant",
      "May be insensitive",
      "Can be overly critical",
      "May struggle with emotions",
      "Can be aggressive"
    ],
    traits: [
      "Commanding",
      "Strategic",
      "Ambitious",
      "Direct",
      "Logical",
      "Confident"
    ],
    careers: [
      "CEO",
      "Entrepreneur",
      "Manager",
      "Judge",
      "Lawyer",
      "Military Officer",
      "Executive"
    ],
    relationships: "ENTJs are ambitious partners who value competence and respect. They are loyal but may struggle with emotional intimacy. They seek partners who challenge them and share their drive for success.",
    famous: ["Winston Churchill", "Steve Jobs", "Margaret Thatcher"],
    percentPopulation: "2-3%"
  }
}
