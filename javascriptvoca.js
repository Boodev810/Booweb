const vocabularyList = [
  
  { word: "apple", hint: "Fruit with red outer skin" },
{ word: "banana", hint: "Fruit is yellow on the skin and looks like a crescent moon" },
{ word: "car", hint: "Vehicles with 4 seats or more" },
{ word: "dog", hint: "Animals are closest to humans" },
{ word: "elephant", hint: "The largest animal on land" },
{ word: "football", hint: "King Sports" },
{ word: "guitar", hint: "Musical instrument starts from G" },
{ word: "house", hint: "building" },
{ word: "internet", hint: "technology" },
{ word: "jazz", hint: "Music genre starts from J" },
{ word: "kangaroo", hint: "This animal has a pouch" },
{ word: "lemon", hint: "fruit with yellow or green outer skin " },
{ word: "mountain", hint: "geographic feature" },
{ word: "notebook", hint: "stationery" },
{ word: "ocean", hint: "body of water" },
{ word: "piano", hint: "Musical instrument starts from P" },
{ word: "rainbow", hint: "meteorological phenomenon" },
{ word: "sunflower", hint: "The flower is shaped like the sun" },
{ word: "table", hint: "furniture" },
{ word: "umbrella", hint: "rain protection" },
{ word: "violin", hint: "Musical instrument starts from V" },
{ word: "watermelon", hint: "Fruit has a lot of water" },
{ word: "yoga", hint: "physical activity" },
{ word: "zebra", hint: "The animal has stripes on its body" },
{ word: "Ubiquitous", hint: "Present, appearing, or found everywhere" },
  { word: "Serendipity", hint: "The occurrence and development of events by chance in a happy or beneficial way" },


  { word: "book", hint: "read" },
  { word: "computer", hint: "technology" },
  { word: "friend", hint: "companion" },
  { word: "green", hint: "color" },
  { word: "happy", hint: "Emotions contrary to sad" },
  { word: "internet", hint: "web" },
  { word: "jazz", hint: "music genre" },
  { word: "kitchen", hint: "cooking area" },
  { word: "love", hint: "affection" },
  { word: "mountain", hint: "elevation" },
  { word: "notebook", hint: "writing pad" },
  { word: "orange", hint: "color" },
  { word: "queen", hint: "female ruler" },
  { word: "river", hint: "water flow" },
  { word: "sunflower", hint: "yellow flower" },
  { word: "table", hint: "Furniture starts from t" },
  { word: "umbrella", hint: "rain protection" },
  { word: "vivid", hint: "bright" },
  { word: "wonder", hint: "amazement" },
  { word: "xylophone", hint: "percussion instrument" },
  { word: "yellow", hint: "color" },
  { word: "zebra", hint: "black and white stripes" },
  { word: "xylography", hint: "wood engraving" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xerophyte", hint: "drought-resistant plant" },
  { word: "vigilant", hint: "watchful" },
  { word: "quell", hint: "suppress" },
  { word: "xylitol", hint: "sugar substitute" },
  { word: "quintessential", hint: "representing the most perfect example" },
  { word: "xenophobia", hint: "fear or hatred of foreigners" },
  { word: "quizzical", hint: "expressing curiosity" },
  { word: "xenogenesis", hint: "generation of offspring entirely different from the parents" },
  { word: "quixotry", hint: "idealistic and impractical" },
  { word: "xenolithic", hint: "containing foreign rocks" },
  { word: "quench", hint: "extinguish" },
  { word: "xerography", hint: "photocopying process" },
  { word: "querulous", hint: "complaining" },
  { word: "xenodiagnosis", hint: "diagnosis of a disease by using the natural host and its parasites" },
  { word: "quiescent", hint: "inactive" },
  { word: "xenotropic", hint: "pertaining to viruses that infect cells of different species" },
  { word: "quintain", hint: "target for jousting practice" },
  { word: "xiphoid", hint: "sword-shaped" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xenomania", hint: "an attraction to foreign things or people" },
  { word: "querist", hint: "one who inquires" },
  { word: "xerophthalmia", hint: "abnormal dryness of the conjunctiva and cornea of the eyes" },
  { word: "quibble", hint: "minor objection or criticism" },
  { word: "xanadu", hint: "an idyllic, beautiful place" },
  { word: "quaff", hint: "drink heartily" },
  { word: "xystus", hint: "covered walk or exercise area" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xyster", hint: "surgical instrument for scraping bones" },
  { word: "quidnunc", hint: "a person who is eager to know the latest news and gossip" },
  { word: "xenotropic", hint: "pertaining to viruses that infect cells of different species" },
  { word: "quilt", hint: "bedding made of two layers of cloth filled with stuffing" },
  { word: "xanthic", hint: "yellow or yellowish" },
  { word: "quixotism", hint: "idealism without regard to practicality" },
  { word: "xerarch", hint: "succession of plant communities on a dry area" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xenotropic", hint: "pertaining to viruses that infect cells of different species" },
  { word: "quokka", hint: "small herbivorous marsupial" },
  { word: "xanthous", hint: "yellow or fair-haired" },
  { word: "quiescent", hint: "inactive" },
  { word: "xerophyte", hint: "drought-resistant plant" },
  { word: "quokka", hint: "small herbivorous marsupial" },
  { word: "xenon", hint: "noble gas" },
  { word: "querist", hint: "one who inquires" },
  { word: "xenophile", hint: "one attracted to foreign cultures or people" },
  { word: "quiff", hint: "hairstyle with the hair combed upward and back" },
  { word: "xyster", hint: "surgical instrument for scraping bones" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xenogeny", hint: "development of an organism from nonliving matter" },
  { word: "quaint", hint: "charmingly old-fashioned" },
  { word: "xenotropic", hint: "pertaining to viruses that infect cells of different species" },
  { word: "querist", hint: "one who inquires" },
  { word: "xenophagy", hint: "eating foreign foods" },
  { word: "quash", hint: "reject as invalid" },
  { word: "xenogenesis", hint: "generation of offspring entirely different from the parents" },
  { word: "quixotic", hint: "impractical" },
  { word: "xanthochroic", hint: "yellow-skinned" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xanadu", hint: "an idyllic, beautiful place" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xerophyte", hint: "drought-resistant plant" },
  { word: "quizzical", hint: "expressing curiosity" },
  { word: "xylitol", hint: "sugar substitute" },
  { word: "quasar", hint: "astronomical object" },
  { word: "xenophobe", hint: "foreigner-hater" },
  { word: "quixotry", hint: "idealistic and impractical" },
  { word: "xenolithic", hint: "containing foreign rocks" },
  { word: "quench", hint: "extinguish" },
  { word: "xerography", hint: "photocopying process" },
  
    { word: "Study", hint: "Attend classes and engage in learning activities." },
    { word: "Book", hint: "A written or printed work consisting of pages glued or sewn together along one side." },
    { word: "Teacher", hint: "An individual who imparts knowledge or instructs students." },
    { word: "Exam", hint: "A formal test of a person's knowledge or proficiency in a subject." },
    { word: "Homework", hint: "Tasks assigned to students to be completed outside of regular class hours." },
    { word: "Classroom", hint: "A room in which classes are held, typically in a school." },
    { word: "Library", hint: "A place where books and other resources are available for reading and research." },
    { word: "Degree", hint: "An academic rank conferred by universities and colleges as an indication of academic achievement." },
    { word: "Notebook", hint: "A book with pages of blank paper for writing notes." },
    { word: "Research", hint: "The systematic investigation into and study of materials and sources to establish facts and reach new conclusions." },
    { word: "Semester", hint: "A division of the academic year, typically lasting about 15-18 weeks." },
    { word: "Assignment", hint: "A task or piece of work assigned to someone as part of their duties or course of study." },
    { word: "Education", hint: "The process of receiving or giving systematic instruction, especially at a school or university." },
    { word: "Lecture", hint: "An educational talk to an audience, especially one of students in a university." },
    { word: "Student", hint: "A person engaged in learning, especially one enrolled in a school or college." },
    { word: "Scholarship", hint: "A grant or payment made to support a student's education, awarded on the basis of academic or other achievement." },
  
    { word: "Parents", hint: "Mother and father" },
    { word: "Children", hint: "Sons and daughters" },
    { word: "Siblings", hint: "Brothers and sisters" },
    { word: "Grandparents", hint: "Grandmother and grandfather" },
    { word: "Cousins", hint: "Children of your parents' siblings" },
    { word: "Aunts", hint: "Sisters of your parents" },
    { word: "Uncles", hint: "Brothers of your parents" },
    { word: "Niece", hint: "Daughter of your sibling" },
    { word: "Nephew", hint: "Son of your sibling" },
    { word: "In-laws", hint: "Relatives by marriage" },
    { word: "Spouse", hint: "Husband or wife" },
    { word: "Sister-in-law", hint: "Brother's wife or husband's sister" },
    { word: "Brother-in-law", hint: "Sister's husband or wife's brother" },
    { word: "Stepmother", hint: "Father's new wife" },
    { word: "Stepfather", hint: "Mother's new husband" },
    { word: "Half-sibling", hint: "Shares one parent with you" },
    { word: "Godparents", hint: "People chosen to help in the child's upbringing" },
    { word: "Adopted", hint: "Legally taken as one's own child" },
    { word: "Extended family", hint: "Aunts, uncles, and cousins beyond the immediate family" },
    { word: "Kin", hint: "Relatives or family members" },
    { word: "Next of kin", hint: "Closest living blood relative" },
    { word: "Lineage", hint: "Ancestry or family descent" },
    { word: "Generation", hint: "All individuals born and living at about the same time" },
    { word: "Heritage", hint: "Traditions, values, and customs passed down through generations" },
    { word: "Accountant", hint: "Financial professional who manages and analyzes financial records" },
    { word: "Engineer", hint: "Professional who applies scientific principles to design and build structures, devices, systems, etc." },
    { word: "Teacher", hint: "Educator who imparts knowledge and skills to students" },
    { word: "Doctor", hint: "Medical professional who diagnoses and treats illnesses and injuries" },
    { word: "Programmer", hint: "Individual who writes and tests code for software development" },
    { word: "Lawyer", hint: "Legal professional who provides advice and represents clients in legal matters" },
    { word: "Chef", hint: "Culinary professional who prepares and cooks food" },
    { word: "Designer", hint: "Creative professional who plans and creates visual or functional aesthetics" },
    { word: "Entrepreneur", hint: "Individual who starts and manages a business, taking on financial risks" },
    { word: "Nurse", hint: "Healthcare professional who cares for patients and assists doctors" },
    { word: "Pilot", hint: "Aviation professional who operates and navigates aircraft" },
    { word: "Scientist", hint: "Professional engaged in systematic study and investigation of natural phenomena" },
    { word: "Journalist", hint: "Media professional who gathers, writes, and reports news" },
    { word: "Electrician", hint: "Skilled worker who installs and maintains electrical systems" },
    { word: "Architect", hint: "Professional who plans and designs buildings and structures" },
    { word: "Psychologist", hint: "Professional who studies and treats mental processes and behavior" },
    { word: "Mechanic", hint: "Skilled worker who repairs and maintains machinery and vehicles" },
    { word: "Marketing", hint: "Activities and strategies for promoting and selling products or services" },
    { word: "Plumber", hint: "Skilled worker who installs and repairs plumbing systems" },
    { word: "Artist", hint: "Creative professional who expresses ideas and emotions through various forms of art" },
    { word: "Consultant", hint: "Professional who provides expert advice in a particular field" },
    { word: "Dentist", hint: "Medical professional specialized in oral health and dental care" },
    { word: "Firefighter", hint: "Emergency responder who extinguishes fires and assists in other emergencies" },
    { word: "Pharmacist", hint: "Healthcare professional who dispenses medications and provides advice on their use" },
    
      { word: "atmosphere", hint: "surrounding gases" },
      { word: "breeze", hint: "gentle wind" },
      { word: "cloud", hint: "visible mass of water droplets" },
      { word: "dew", hint: "condensed moisture" },
      { word: "earthquake", hint: "ground shaking" },
      { word: "flora", hint: "plant life" },
      { word: "geology", hint: "study of Earth's structure" },
      { word: "horizon", hint: "line where the sky meets the earth" },
      { word: "insect", hint: "small arthropod" },
      { word: "jungle", hint: "dense forest" },
      { word: "kelp", hint: "large seaweed" },
      { word: "landscape", hint: "visible features of an area" },
      { word: "mountain", hint: "elevated land" },
      { word: "nature", hint: "natural world" },
      { word: "ocean", hint: "large sea" },
      { word: "pollen", hint: "powdery substance from flowers" },
      { word: "rainforest", hint: "dense forest with heavy rainfall" },
      { word: "stream", hint: "small river" },
      { word: "tornado", hint: "violent windstorm" },
      { word: "umbrella", hint: "device for protection from rain" },
      { word: "valley", hint: "low area between hills" },
      { word: "waterfall", hint: "falling water" },
      { word: "xerophyte", hint: "drought-resistant plant" },
      { word: "yellowstone", hint: "national park in the U.S." },
      { word: "zephyr", hint: "gentle breeze" },
        { word: "America", hint: "United States" },
        { word: "Brazil", hint: "South American country" },
        { word: "Canada", hint: "North American country" },
        { word: "Denmark", hint: "European country" },
        { word: "Egypt", hint: "North African country" },
        { word: "France", hint: "European country" },
        { word: "Germany", hint: "European country" },
        { word: "India", hint: "South Asian country" },
        { word: "Japan", hint: "East Asian country" },
        { word: "Kenya", hint: "East African country" },
        { word: "Mexico", hint: "North American country" },
        { word: "Norway", hint: "European country" },
        { word: "Peru", hint: "South American country" },
        { word: "Russia", hint: "Eurasian country" },
        { word: "Spain", hint: "European country" },
        { word: "Thailand", hint: "Southeast Asian country" },
        { word: "Uruguay", hint: "South American country" },
        { word: "Vietnam", hint: "Southeast Asian country" },
        { word: "Wales", hint: "Part of the United Kingdom" },
        { word: "Yemen", hint: "Arabian country" },
        { word: "Zimbabwe", hint: "Southern African country" },
];

let currentQuestionIndex = 0;

function loadQuestion() {
  if (currentQuestionIndex < vocabularyList.length) {
      const currentQuestion = vocabularyList[currentQuestionIndex];
      document.querySelector('.quiz-hint').innerText = currentQuestion.hint;
  } else {
      document.querySelector('.quiz-hint').innerText = 'Quiz completed!';
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase();

  if (currentQuestionIndex < vocabularyList.length) {
      const currentQuestion = vocabularyList[currentQuestionIndex];
      const resultElement = document.getElementById('result');

      if (userAnswer === currentQuestion.word.toLowerCase()) {
          resultElement.innerText = 'Correct! Well done.';
      } else {
          resultElement.innerText = 'Incorrect. Please try again.';
      }

      document.getElementById('answer').value = '';

      currentQuestionIndex++;

      loadQuestion();
  }
}

// Initialize the quiz
loadQuestion();
