// Extensive semantic keyword mapping dictionary with fuzzy typo tolerance
// Mapping intents accurately to Mounika's verified profile data

export type IntentType =
  | 'greeting'
  | 'contact_all'
  | 'contact_email_only'
  | 'contact_linkedin_only'
  | 'contact_github_only'
  | 'graduation'
  | 'education_full'
  | 'current_role'
  | 'experience'
  | 'projects_all'
  | 'project_vihar'
  | 'project_khetmitra'
  | 'project_cardio'
  | 'project_ambient'
  | 'skills'
  | 'certifications'
  | 'location'
  | 'about'
  | 'unknown';

export const KEYWORD_DICTIONARY: { intent: IntentType; keywords: string[] }[] = [
  // 1. GREETINGS INTENT (Natural greeting without profile info dump)
  {
    intent: 'greeting',
    keywords: [
      'hi',
      'hello',
      'hey',
      'hey there',
      'hi there',
      'hello there',
      'greetings',
      'good morning',
      'good afternoon',
      'good evening',
      'howdy',
      'namaste',
      'hola',
      'yo',
      'sup',
      "what's up",
      'whats up',
      'how are you',
      'how are you doing',
      'nice to meet you',
      'start',
    ],
  },

  // 2. SPECIFIC CONTACT CHANNELS (EMAIL ONLY)
  {
    intent: 'contact_email_only',
    keywords: [
      'email',
      'e-mail',
      'mail',
      'email address',
      'gmail',
      'mail id',
      'email id',
      'send email',
      'write email',
      'inbox',
      'mailing address',
      'electronic mail',
      'direct email',
      'personal email',
      'mail me',
      'her email',
      'mounika email',
      'monika email',
      'what is her email',
      'get email',
      'email link',
      'emial',
      'emil',
      'gamil',
      'gmial',
    ],
  },

  // 3. SPECIFIC CONTACT CHANNELS (LINKEDIN ONLY)
  {
    intent: 'contact_linkedin_only',
    keywords: [
      'linkedin',
      'linked in',
      'linkedin profile',
      'linkedin account',
      'linkedin page',
      'connect on linkedin',
      'her linkedin',
      'mounika linkedin',
      'monika linkedin',
      'linkedin link',
      'linkedin url',
      'professional profile link',
      'liknedin',
      'linkdin',
      'linkeldin',
      'likdin',
      'linkin',
      'linedin',
    ],
  },

  // 4. SPECIFIC CONTACT CHANNELS (GITHUB ONLY)
  {
    intent: 'contact_github_only',
    keywords: [
      'github',
      'git hub',
      'github profile',
      'github repo',
      'github repos',
      'repositories',
      'repos',
      'git account',
      'codebase',
      'open source profile',
      'mounika github',
      'monika github',
      'her github',
      'github link',
      'github url',
      'github username',
      'gitub',
      'gthub',
      'githb',
    ],
  },

  // 5. GENERAL CONTACT DETAILS INTENT (Shows profile photo + 3 clickable icons: LinkedIn, Email, GitHub)
  {
    intent: 'contact_all',
    keywords: [
      'contact',
      'contacts',
      'contact details',
      'contact info',
      'contact information',
      'how to contact',
      'how to contact her',
      'how to contact monika',
      'how to contact mounika',
      'how can i contact',
      'how do i contact',
      'how to reach',
      'how to reach her',
      'reach out',
      'reach her',
      'get in touch',
      'get in touch with her',
      'connect',
      'connect with her',
      'touch with her',
      'hire',
      'hiring',
      'recruit',
      'recruiter',
      'message',
      'phone',
      'phone number',
      'mobile',
      'call',
      'cell',
      'telephone',
      'whatsapp',
      'social',
      'socials',
      'social media',
      'profiles',
      'links',
      'cntact',
      'contct',
      'contac',
      'conatct',
    ],
  },

  // 6. GRADUATION & MOST RECENT EDUCATION INTENT (Includes all common spelling typos!)
  {
    intent: 'graduation',
    keywords: [
      'graduation',
      'gradution',
      'gardaution',
      'garduation',
      'graduaton',
      'graduatin',
      'gradaution',
      'graduate',
      'graduated',
      'gradute',
      'graduted',
      'where did she graduate',
      'where did she graduate from',
      'where did she study',
      'where she graduated',
      'graduation details',
      'education',
      'educaton',
      'eduction',
      'educational background',
      'academics',
      'academic background',
      'university',
      'universty',
      'unvirsity',
      'college',
      'colg',
      'cllg',
      'colleg',
      'campus',
      'vit',
      'vit chennai',
      'vellore institute of technology',
      'degree',
      'degrees',
      'degre',
      'masters',
      'master',
      'mtech',
      'm.tech',
      'integrated mtech',
      'software engineering',
      'mtech software engineering',
      'integrated mtech in software engineering',
      'completed mtech',
      'completed graduation',
      'completed degree',
      'btech',
      'study',
      'studied',
      'studying',
      'qualification',
      'qualifications',
      'alma mater',
      'passout',
      'passed out',
      'graduation year',
    ],
  },

  // 6B. FULL / PRIOR SCHOOL EDUCATION
  {
    intent: 'education_full',
    keywords: [
      'full education',
      'all education',
      'entire education',
      'schooling',
      'school',
      'chaitanya',
      'sri chaitanya',
      'arnold',
      'st arnold',
      '10th',
      '12th',
      'tenth',
      'twelfth',
      'inter',
      'intermediate',
      'ssc',
      'high school',
      'school history',
    ],
  },

  // 7. CURRENT ROLE AND WORK STATUS (Only current job, company, responsibilities - no previous internships)
  {
    intent: 'current_role',
    keywords: [
      'current role',
      'current job',
      'current position',
      'current status',
      'what is she doing currently',
      'what is she doing now',
      'what is she doing',
      'what does she do',
      'what does she do now',
      'present role',
      'present job',
      'present work',
      'currently working',
      'currently employed',
      'working as',
      'professor',
      'assistant professor',
      'asst professor',
      'teaching',
      'teacher',
      'faculty',
      'lecturer',
      'instructor',
      'six phrase',
      'sixphrase',
      'vsb',
      'vsb engineering college',
      'now',
      'at present',
      'current company',
      'current employer',
      'current designation',
      'job title',
      'role',
      'responsibilities',
      'what does she teach',
    ],
  },

  // 8. PREVIOUS WORK EXPERIENCE / INTERNSHIPS (Explicit past history)
  {
    intent: 'experience',
    keywords: [
      'what has she worked on previously',
      'worked on previously',
      'worked previously',
      'previous work',
      'previous experience',
      'previous jobs',
      'previous job',
      'previous company',
      'former role',
      'past experience',
      'past work',
      'past jobs',
      'work history',
      'career history',
      'experience',
      'experiences',
      'work experience',
      'intern',
      'interns',
      'internship',
      'internships',
      'techciti',
      'codegnan',
      'data analyst intern',
      'software developer intern',
      'expereince',
      'experiance',
      'experince',
    ],
  },

  // 9. SPECIFIC PROJECTS
  {
    intent: 'project_vihar',
    keywords: [
      'vihar',
      'vihar ai',
      'travel agent',
      'travel ai',
      'travel planning',
      'trip planner',
      'autonomous agent',
      'groq',
      'langgraph agent',
      'token savings',
      'token reduction',
    ],
  },
  {
    intent: 'project_khetmitra',
    keywords: [
      'khetmitra',
      'khet mitra',
      'irrigation',
      'agriculture',
      'farming',
      'sugarcane',
      'esp32',
      'soil moisture',
      'smart irrigation',
      'iot irrigation',
      'water saving',
    ],
  },
  {
    intent: 'project_cardio',
    keywords: [
      'cardiorisk',
      'cardio risk',
      'heart disease',
      'cardiovascular',
      'clinical prediction',
      'patient assessment',
      'decision tree',
      'logistic regression',
      'health prediction',
      'medical ml',
    ],
  },
  {
    intent: 'project_ambient',
    keywords: [
      'ambientvoice',
      'ambient voice',
      'voice automation',
      'home automation',
      'smart home',
      'speech recognition',
      'acoustic commands',
      'hardware relay',
      'appliances',
    ],
  },

  // 10. ALL / LATEST PROJECTS INTENT
  {
    intent: 'projects_all',
    keywords: [
      'what are her latest projects',
      'latest projects',
      'recent projects',
      'her projects',
      'projects',
      'project',
      'apps',
      'showcase',
      'built',
      'what did she build',
      'what has she built',
      'portfolio items',
      'developments',
      'systems built',
      'creations',
      'side projects',
      'flagship project',
      'major projects',
      'porject',
      'porjects',
      'projct',
      'prject',
    ],
  },

  // 11. TECHNICAL SKILLS & STACK
  {
    intent: 'skills',
    keywords: [
      'skill',
      'skills',
      'tech stack',
      'technologies',
      'programming language',
      'languages',
      'frameworks',
      'libraries',
      'tools',
      'python',
      'java',
      'sql',
      'mysql',
      'django',
      'langgraph',
      'langchain',
      'genai',
      'llm',
      'machine learning',
      'scikit-learn',
      'pandas',
      'numpy',
      'mongodb',
      'firebase',
      'docker',
      'aws',
      'git',
      'rest api',
      'iot',
      'android studio',
      'postman',
      'expertise',
      'competencies',
    ],
  },

  // 12. CERTIFICATIONS & ACHIEVEMENTS
  {
    intent: 'certifications',
    keywords: [
      'certification',
      'certifications',
      'certificate',
      'certificates',
      'certified',
      'credentials',
      'hackerrank',
      'infosys',
      'infosys springboard',
      'freecodecamp',
      'awards',
      'achievements',
      'research assistant',
      'android club',
    ],
  },

  // 13. LOCATION INTENT
  {
    intent: 'location',
    keywords: [
      'location',
      'located',
      'where is she',
      'where does she live',
      'where does she stay',
      'where is she from',
      'city',
      'current city',
      'coimbatore',
      'chennai',
      'tamil nadu',
      'base',
      'based in',
      'native',
      'relocate',
      'relocation',
      'place',
      'hometown',
      'residing',
      'residence',
    ],
  },

  // 14. GENERAL BIO / ABOUT INTENT (Only when specifically asked for bio / who is she)
  {
    intent: 'about',
    keywords: [
      'who is mounika',
      'who is monika',
      'who is she',
      'about mounika',
      'about monika',
      'about her',
      'tell me about her',
      'bio',
      'background',
      'profile',
      'overview',
      'summary',
      'introduction',
      'intro',
    ],
  },
];

// Helper: Levenshtein distance for fuzzy matching
function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// Helper: Fuzzy word match with typo tolerance
function isFuzzyMatch(word: string, target: string): boolean {
  if (word === target) return true;
  if (word.length < 4 || target.length < 4) return false;

  const maxDist = word.length >= 7 ? 2 : 1;
  return levenshteinDistance(word, target) <= maxDist;
}

// Resolves the intent based on exact phrase, keyword tokens, and fuzzy typo matching
export function resolveIntent(queryText: string): IntentType {
  const clean = queryText.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();
  if (!clean) return 'greeting';

  const words = clean.split(/\s+/).filter(Boolean);

  // 1. Check for standalone greetings
  const singleGreetings = ['hi', 'hello', 'hey', 'namaste', 'hola', 'howdy', 'yo', 'sup', 'greetings'];
  if (words.length <= 2 && words.some((w) => singleGreetings.includes(w) || isFuzzyMatch(w, 'hello') || isFuzzyMatch(w, 'greetings'))) {
    return 'greeting';
  }

  // 2. Exact full-phrase match or dictionary match
  let bestIntent: IntentType = 'unknown';
  let highestScore = 0;

  for (const group of KEYWORD_DICTIONARY) {
    let score = 0;

    for (const kw of group.keywords) {
      if (clean === kw) {
        score += 30; // Exact match
      } else if (clean.startsWith(kw + ' ') || clean.endsWith(' ' + kw) || clean.includes(' ' + kw + ' ')) {
        score += kw.includes(' ') ? 20 : 12;
      } else if (clean.includes(kw)) {
        score += kw.includes(' ') ? 14 : 8;
      } else {
        // Token match and fuzzy token match
        const kwTokens = kw.split(/\s+/);
        for (const kt of kwTokens) {
          if (words.includes(kt)) {
            score += 6;
          } else if (words.some((w) => isFuzzyMatch(w, kt))) {
            score += 5; // Fuzzy matched typo! (e.g. "gradution" matches "graduation")
          }
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestIntent = group.intent;
    }
  }

  // If score is 0 or very weak, return unknown (to avoid dumping role/profile unexpectedly)
  if (highestScore < 4) {
    return 'unknown';
  }

  return bestIntent;
}
