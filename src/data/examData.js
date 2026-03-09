const examData = {
  bpsc: {
    id: 'bpsc',
    name: 'BPSC TRE 4',
    fullName: 'Bihar Teacher Recruitment Examination',
    badge: 'Teaching',
    badgeColor: 'green',
    pyqYears: [
      { year: 2023, questions: 150, papers: 3 },
      { year: 2022, questions: 150, papers: 3 },
      { year: 2021, questions: 100, papers: 2 },
      { year: 2020, questions: 100, papers: 2 },
      { year: 2019, questions: 100, papers: 2 },
    ],
    subjects: [
      {
        key: 'child-dev',
        name: 'Child Development & Pedagogy',
        color: '#2563eb',
        questions: [
          { q: 'According to RTE Act 2009, free and compulsory education is a right for children of age group:', opts: ['3–14 years', '6–14 years', '5–16 years', '6–18 years'], ans: 1 },
          { q: 'Which of the following is NOT a principle of Child Development?', opts: ['Development follows a pattern', 'Development is continuous', 'Development is always rapid', 'Development involves change'], ans: 2 },
          { q: "Vygotsky's Zone of Proximal Development refers to:", opts: ['What a child can do independently', 'The gap between current ability and potential with guidance', 'The age at which a child learns best', 'A physical zone in classroom'], ans: 1 },
          { q: 'Which theory of learning is associated with B.F. Skinner?', opts: ['Classical Conditioning', 'Operant Conditioning', 'Cognitive Development', 'Social Learning'], ans: 1 },
        ]
      },
      {
        key: 'general',
        name: 'General Studies',
        color: '#059669',
        questions: [
          { q: "Which is Bihar's official language?", opts: ['Bhojpuri', 'Maithili', 'Hindi', 'Urdu'], ans: 2 },
          { q: 'The capital of Bihar is:', opts: ['Gaya', 'Muzaffarpur', 'Patna', 'Bhagalpur'], ans: 2 },
          { q: 'Bihar was separated from Jharkhand in which year?', opts: ['1998', '1999', '2000', '2001'], ans: 2 },
        ]
      },
      {
        key: 'pedagogy',
        name: 'Teaching Methodology',
        color: '#7c3aed',
        questions: [
          { q: 'The term "Pedagogy" means:', opts: ['Science of teaching adults', 'Art and science of teaching children', 'Study of child behavior', 'Educational administration'], ans: 1 },
          { q: "Bloom's Taxonomy was proposed in which year?", opts: ['1948', '1956', '1964', '1972'], ans: 1 },
          { q: 'Formative assessment is primarily used to:', opts: ['Grade students', 'Monitor student learning during instruction', 'Evaluate teachers', 'Rank students'], ans: 1 },
        ]
      },
    ]
  },
  ibps: {
    id: 'ibps',
    name: 'IBPS SO',
    fullName: 'Specialist Officer Examination',
    badge: 'Banking',
    badgeColor: 'blue',
    pyqYears: [
      { year: 2023, questions: 160, papers: 2 },
      { year: 2022, questions: 160, papers: 2 },
      { year: 2021, questions: 120, papers: 2 },
      { year: 2020, questions: 120, papers: 2 },
    ],
    subjects: [
      {
        key: 'reasoning',
        name: 'Reasoning Ability',
        color: '#2563eb',
        questions: [
          { q: 'In a row of 40 students, Ravi is 15th from left. Position from right:', opts: ['24th', '25th', '26th', '27th'], ans: 2 },
          { q: "Pointing to a woman, Ravi said she is his father's wife's daughter. Relation:", opts: ['Cousin', 'Sister', 'Aunt', 'Mother'], ans: 1 },
          { q: 'Next in series: 2, 6, 12, 20, 30, ?', opts: ['40', '42', '44', '48'], ans: 1 },
        ]
      },
      {
        key: 'banking',
        name: 'Banking & Finance',
        color: '#059669',
        questions: [
          { q: 'Which of the following is NOT a function of the Reserve Bank of India?', opts: ['Issuing currency notes', 'Acting as banker to the government', 'Accepting deposits from public', 'Regulating credit'], ans: 2 },
          { q: 'KYC stands for:', opts: ['Know Your Customer', 'Know Your Credit', 'Keep Your Cash', 'Know Your Currency'], ans: 0 },
          { q: 'The term Repo Rate is:', opts: ['Rate at which banks lend to public', 'Rate at which RBI lends to banks', 'Rate charged on credit cards', 'Rate on government bonds'], ans: 1 },
        ]
      },
      {
        key: 'english',
        name: 'English Language',
        color: '#dc2626',
        questions: [
          { q: 'Select synonym of "Verbose":', opts: ['Concise', 'Lengthy', 'Brief', 'Crisp'], ans: 1 },
          { q: 'Choose the antonym of "Benevolent":', opts: ['Kind', 'Malicious', 'Generous', 'Gracious'], ans: 1 },
        ]
      },
    ]
  }
}

export default examData