// ============================================
// IGCSE English 0500 - Question Bank
// All questions organized by paper and topic
// ============================================

const topics = {
  paper1: [
    // ============================================
    // TOPIC 1: Reading Comprehension (Q1a-e)
    // ============================================
    {
      id: 'comprehension',
      title: 'Reading Comprehension (Q1a-e)',
      description: 'Understanding explicit and implicit meanings',
      questions: [
        {
          type: 'short',
          difficulty: 'easy',
          timeLimit: 120,
          text: 'Read this passage:\n\n"The ancient library stood silent, its towering shelves groaning under centuries of accumulated knowledge. Dust motes danced in the thin shafts of light that pierced the gloom."\n\nWhat does the word "groaning" suggest about the shelves?',
          answer: 'The shelves are struggling under heavy weight and are overloaded',
          keyWords: ['struggling', 'heavy', 'weight', 'overloaded', 'strain', 'burden', 'pressure'],
          synonyms: true,
          hints: [
            'Think about what groaning sounds like',
            'Consider the weight of the books',
            'What does personification tell us?'
          ],
          explanation: 'The word "groaning" is personification - it suggests the shelves are under strain from the weight of many books.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The shelves are straining under the heavy load of books"\n✓ Includes key concept: straining/struggling\n✓ Includes key concept: heavy/weight\n✓ Good spelling and grammar\n\nAnother good answer: "They are burdened by the weight and might collapse"\n✓ Includes key concept: burdened/strain\n✓ Includes key concept: weight\n✓ Shows understanding of the effect\n\nWeak answer: "They are making noise"\n✗ Missing why they are groaning\n✗ Doesn\'t mention weight or strain'
        },
        {
          type: 'short',
          difficulty: 'easy',
          timeLimit: 120,
          text: 'Read this passage:\n\n"Maria hesitated at the doorway, her fingers tightening around the envelope. She had rehearsed this moment a hundred times, yet now her voice seemed to have abandoned her."\n\nWhat does this suggest about Maria\'s feelings?',
          answer: 'Maria is nervous, anxious, and afraid about what she must do',
          keyWords: ['nervous', 'anxious', 'afraid', 'scared', 'worried', 'apprehensive', 'fearful', 'uncertain'],
          synonyms: true,
          hints: [
            'Look at her physical actions - what do they show?',
            'Think about why her voice would abandon her',
            'Consider the word "hesitated"'
          ],
          explanation: 'The passage shows Maria\'s anxiety through implicit details: she hesitates, grips the envelope tightly, and loses her voice despite preparation.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "Maria feels apprehensive and worried about the situation"\n✓ Uses synonyms (apprehensive = nervous/anxious)\n✓ Shows understanding of her emotional state\n✓ Correct spelling and grammar\n\nAnother good answer: "She is scared and uncertain"\n✓ Includes key emotions\n✓ Simple but accurate\n\nWeak answer: "She is holding an envelope"\n✗ Describes action, not feelings\n✗ Doesn\'t answer the question'
        },
        {
          type: 'short',
          difficulty: 'medium',
          timeLimit: 150,
          text: 'Read this sentence:\n\n"The politician\'s words dripped with honey, each promise sweeter than the last."\n\nWhat does "dripped with honey" suggest about the politician\'s speech?',
          answer: 'The speech was overly sweet, flattering, and possibly insincere or manipulative',
          keyWords: ['sweet', 'flattering', 'insincere', 'manipulative', 'persuasive', 'false', 'charming', 'deceptive'],
          synonyms: true,
          hints: [
            'Think about honey - what is it like?',
            'Consider why this metaphor might be used negatively',
            'What does "overly sweet" imply about sincerity?'
          ],
          explanation: '"Dripped with honey" is a metaphor suggesting the politician\'s words were excessively sweet and flattering, implying they may be insincere.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The politician was being charming but possibly dishonest"\n✓ Recognizes the flattering nature\n✓ Identifies the negative implication\n✓ Shows critical thinking\n\nAnother good answer: "The words were persuasive and manipulative"\n✓ Understands the technique\n✓ Recognizes the intent\n\nWeak answer: "The politician likes honey"\n✗ Takes metaphor literally\n✗ Misses the meaning'
        },
        {
          type: 'short',
          difficulty: 'medium',
          timeLimit: 150,
          text: 'Read this passage:\n\n"The old oak tree stood defiant against the storm, its roots clinging desperately to the eroding cliff edge."\n\nWhat impression does this create of the tree?',
          answer: 'The tree is determined, strong, and resilient but struggling to survive',
          keyWords: ['determined', 'strong', 'resilient', 'struggling', 'surviving', 'persistence', 'fight', 'courage'],
          synonyms: true,
          hints: [
            'Consider the word "defiant" - what does it mean?',
            'Look at what the roots are doing',
            'Think about the tree as if it were a person'
          ],
          explanation: 'The personification creates an image of the tree as determined and resilient, fighting to survive despite difficult circumstances.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The tree shows courage and determination as it battles to survive"\n✓ Recognizes personification\n✓ Includes multiple key concepts\n✓ Shows understanding of the struggle\n\nAnother good answer: "It is resilient but finding it hard to hold on"\n✓ Shows the tree\'s strength\n✓ Acknowledges the difficulty\n\nWeak answer: "The tree has roots"\n✗ States obvious fact\n✗ Misses the impression/feeling'
        },
        {
          type: 'short',
          difficulty: 'medium',
          timeLimit: 150,
          text: 'Read this extract:\n\n"The city awakened reluctantly, its streets yawning empty in the grey dawn. Neon signs flickered their last tired blinks before surrendering to daylight."\n\nHow does the writer make the city seem alive?',
          answer: 'Through personification - the city awakens, yawns, and the signs surrender',
          keyWords: ['personification', 'awakened', 'yawning', 'surrendering', 'human', 'alive', 'tired'],
          synonyms: true,
          hints: [
            'Look for words that describe human actions',
            'What literary technique gives objects human qualities?',
            'Find at least three examples of human-like behavior'
          ],
          explanation: 'The writer uses personification throughout: "awakened reluctantly," "yawning," "tired," and "surrendering" all give the city human characteristics.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The writer uses personification by describing the city awakening and the streets yawning"\n✓ Names the technique\n✓ Provides specific examples\n✓ Clear explanation\n\nWeak answer: "It uses good description"\n✗ Too vague\n✗ Doesn\'t identify personification'
        },
        {
          type: 'short',
          difficulty: 'hard',
          timeLimit: 180,
          text: 'Read this passage:\n\n"The silence in the courtroom was suffocating, pressing down on everyone present like a physical weight. Not even the smallest cough dared disturb the tension."\n\nHow does the writer emphasize the intensity of the silence?',
          answer: 'By describing silence as suffocating and a physical weight, and personifying sound itself',
          keyWords: ['suffocating', 'physical', 'weight', 'pressing', 'dared', 'personification', 'intensity'],
          synonyms: true,
          hints: [
            'Consider the metaphor of silence being "suffocating"',
            'How is silence described as if it has physical properties?',
            'What does "dared" suggest about the atmosphere?'
          ],
          explanation: 'The writer uses powerful metaphors (suffocating, physical weight) to make silence tangible, and personifies sound ("dared disturb") to emphasize the oppressive atmosphere.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The writer makes silence tangible by describing it as suffocating and having physical weight, creating an oppressive atmosphere"\n✓ Identifies metaphors\n✓ Explains the effect\n✓ Sophisticated vocabulary\n\nWeak answer: "The room was quiet"\n✗ Doesn\'t analyze the language\n✗ Misses the techniques'
        },
        {
          type: 'short',
          difficulty: 'hard',
          timeLimit: 180,
          text: 'Read this description:\n\n"Time crawled through the waiting room like an injured animal, each second limping past with agonizing slowness."\n\nAnalyze how the writer conveys the passage of time.',
          answer: 'Through personification and simile showing time as slow, painful, and dragging',
          keyWords: ['personification', 'simile', 'crawled', 'injured', 'limping', 'agonizing', 'slow'],
          synonyms: true,
          hints: [
            'Identify the comparison being made',
            'What does comparing time to an injured animal suggest?',
            'Notice the words "crawled," "limping," "agonizing"'
          ],
          explanation: 'The extended simile comparing time to an injured animal creates a vivid image of painfully slow passage. "Crawled" and "limping" emphasize the unbearable slowness.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The simile of time as an injured animal emphasizes painfully slow movement, while words like \'crawled\' and \'limping\' reinforce the agonizing wait"\n✓ Identifies simile\n✓ Explains effect on reader\n✓ References specific language\n\nWeak answer: "Time moved slowly"\n✗ Too basic\n✗ Doesn\'t analyze the imagery'
        },
        {
          type: 'short',
          difficulty: 'hard',
          timeLimit: 180,
          text: 'Read this extract:\n\n"The violin\'s voice trembled and soared, weeping one moment and laughing the next, painting emotions in pure sound."\n\nHow does the writer bring the music to life?',
          answer: 'Through personification giving the violin human emotions and actions like weeping and laughing',
          keyWords: ['personification', 'voice', 'trembled', 'weeping', 'laughing', 'emotions', 'human'],
          synonyms: true,
          hints: [
            'What human characteristics are given to the violin?',
            'Look at emotional words like "weeping" and "laughing"',
            'Consider the effect of calling it a "voice"'
          ],
          explanation: 'The writer personifies the violin extensively - giving it a "voice" that can tremble, weep, and laugh - making the music seem emotionally alive and expressive.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The personification gives the violin human emotions - it weeps and laughs - making the music seem alive and expressive"\n✓ Identifies technique clearly\n✓ Provides examples\n✓ Explains emotional impact\n\nWeak answer: "The music was nice"\n✗ No analysis\n✗ Misses personification completely'
        },
        {
          type: 'short',
          difficulty: 'easy',
          timeLimit: 120,
          text: 'Read this sentence:\n\n"The child\'s laughter bubbled up like a natural spring, infectious and impossible to resist."\n\nWhat does the simile suggest about the laughter?',
          answer: 'The laughter is natural, spontaneous, fresh, and spreads easily to others',
          keyWords: ['natural', 'spontaneous', 'fresh', 'infectious', 'spreads', 'joyful', 'pure'],
          synonyms: true,
          hints: [
            'Think about the qualities of a natural spring',
            'Consider what "bubbled up" suggests',
            'What does "infectious" mean in this context?'
          ],
          explanation: 'The simile comparing laughter to a natural spring suggests it\'s spontaneous, pure, and natural. "Infectious" shows it spreads to others easily.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The simile suggests the laughter is spontaneous and pure like spring water, and infectious means it spreads to others"\n✓ Interprets the simile\n✓ Explains "infectious"\n✓ Complete understanding\n\nWeak answer: "The child is happy"\n✗ Doesn\'t address the simile\n✗ Too simple'
        },
        {
          type: 'short',
          difficulty: 'medium',
          timeLimit: 150,
          text: 'Read this passage:\n\n"The abandoned factory loomed over the neighborhood like a sleeping giant, its broken windows staring blindly at the streets below."\n\nHow does the writer create a threatening atmosphere?',
          answer: 'Through personification and simile making the factory seem alive, giant-like, and watching',
          keyWords: ['personification', 'simile', 'loomed', 'giant', 'threatening', 'staring', 'watching'],
          synonyms: true,
          hints: [
            'What is the factory compared to?',
            'How are the windows described?',
            'What feeling does "loomed" create?'
          ],
          explanation: 'The simile "like a sleeping giant" makes the factory seem threatening and alive. Personifying windows as "staring" adds an unsettling, watchful quality.',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The giant simile makes the factory seem threatening and huge, while \'staring\' windows personify it as watching, creating unease"\n✓ Identifies both techniques\n✓ Explains threatening atmosphere\n✓ Shows understanding of effect\n\nWeak answer: "The factory is big"\n✗ No technique identified\n✗ Misses the atmosphere'
        },
        {
          type: 'short',
          difficulty: 'hard',
          timeLimit: 180,
          text: 'Read this description:\n\n"Hope flickered in her chest like a candle flame in a draft - fragile, vulnerable, threatening to extinguish at any moment but stubbornly refusing to die."\n\nAnalyze how the extended metaphor develops the concept of hope.',
          answer: 'The candle metaphor shows hope as fragile and vulnerable but persistent and refusing to give up',
          keyWords: ['metaphor', 'fragile', 'vulnerable', 'persistent', 'stubborn', 'flickering', 'threatened'],
          synonyms: true,
          hints: [
            'What is hope compared to?',
            'What qualities does a candle in a draft have?',
            'Note the contrast between "threatening to extinguish" and "refusing to die"'
          ],
          explanation: 'The extended metaphor comparing hope to a candle flame in a draft brilliantly captures both its fragility (vulnerable, threatening to extinguish) and its resilience (stubbornly refusing to die).',
          workedExample: 'WORKED EXAMPLE:\n\nGood answer: "The candle metaphor shows hope as both fragile and vulnerable, but also resilient and persistent - despite threats, it stubbornly survives"\n✓ Identifies extended metaphor\n✓ Explains dual nature (fragile yet persistent)\n✓ References specific language\n✓ Sophisticated analysis\n\nWeak answer: "She has hope"\n✗ No analysis of metaphor\n✗ Misses the complexity'
        }
      ]
    },

    // ============================================
    // TOPIC 2: Summary Writing (Q1f)
    // ============================================
    {
      id: 'summary',
      title: 'Summary Writing (Q1f)',
      description: 'Selecting and organizing information concisely',
      questions: [
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 900,
          text: 'Read this passage about sustainable farming:\n\n"Modern sustainable farming employs various techniques to protect the environment. Crop rotation prevents soil depletion by alternating different plants each season. Farmers use natural pest control methods, introducing beneficial insects rather than chemical pesticides. Water conservation systems collect rainwater for irrigation, reducing dependence on groundwater. Organic fertilizers enrich the soil without harmful chemicals. Many farms now integrate solar panels to generate clean energy for operations."\n\nWrite a summary of the sustainable farming techniques mentioned. Use your own words. (Maximum 60 words)',
          answer: '',
          wordLimit: 60,
          assessmentCriteria: {
            relevance: 'crop rotation, natural pest control, water conservation, organic fertilizers, solar energy',
            ownWords: 'Uses different vocabulary',
            conciseness: 'Within 60 words',
            organization: 'Logical flow'
          },
          hints: [
            'Identify all five techniques first',
            'Rephrase each one in your own words',
            'Keep under 60 words'
          ],
          explanation: 'A good summary identifies all five techniques and expresses them concisely in your own words without copying phrases.',
          workedExample: 'WORKED EXAMPLE:\n\nGood summary (52 words):\n"Sustainable agriculture uses several eco-friendly methods. Farmers alternate crops annually to maintain soil health and employ helpful bugs instead of toxic sprays for pest management. They gather rainfall for watering plants and apply natural fertilizers to enrich earth. Additionally, renewable energy from sun panels powers farm activities."\n✓ All 5 techniques included\n✓ Own words used throughout\n✓ Within word limit\n✓ Well organized\n\nWeak summary:\n"Crop rotation prevents soil depletion. Natural pest control. Water conservation. Organic fertilizers. Solar panels."\n✗ Copied from text\n✗ Not in complete sentences\n✗ Too brief, lacks development'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 900,
          text: 'Read this passage about online learning:\n\n"Digital education platforms have transformed how students learn. Students can access lessons anytime, allowing flexible schedules that suit individual needs. Interactive multimedia content makes complex topics easier to understand through videos, animations, and simulations. Online forums enable peer collaboration and discussion across geographical boundaries. Automated assessment tools provide instant feedback, helping students identify weaknesses immediately. Recording lectures allows students to review difficult concepts repeatedly at their own pace."\n\nSummarize the benefits of online learning platforms. Use your own words. (Maximum 60 words)',
          answer: '',
          wordLimit: 60,
          assessmentCriteria: {
            relevance: 'flexibility, multimedia content, peer collaboration, instant feedback, lesson recording',
            ownWords: 'Rephrased effectively',
            conciseness: 'Within word limit',
            organization: 'Clear structure'
          },
          hints: [
            'List all five benefits',
            'Use synonyms',
            'Connect ideas smoothly'
          ],
          explanation: 'Your summary should cover flexible access, engaging multimedia, global collaboration, immediate assessment, and reviewable content - all in your own words.',
          workedExample: 'WORKED EXAMPLE:\n\nGood summary (58 words):\n"E-learning offers numerous advantages. Learners study when convenient, accessing materials 24/7. Visual aids like animations clarify difficult subjects. Virtual discussion boards connect classmates worldwide for collaborative learning. Computer-based testing gives immediate results, highlighting areas needing improvement. Recorded classes permit repeated viewing, enabling mastery at personal speed."\n✓ All 5 benefits covered\n✓ Synonyms used effectively\n✓ Within limit\n✓ Flows well\n\nWeak summary:\n"Online learning is flexible and has videos. Students can talk online. Tests give feedback. Lectures are recorded."\n✗ Too brief\n✗ Doesn\'t explain benefits fully\n✗ Some copying'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1000,
          text: 'Read this passage about urban green spaces:\n\n"Urban parks and gardens provide essential benefits for city dwellers. Trees and plants improve air quality by absorbing carbon dioxide and releasing oxygen, while also filtering pollutants and dust particles. Green spaces offer psychological benefits, reducing stress and improving mental wellbeing through contact with nature. They encourage physical activity, providing safe areas for walking, jogging, and outdoor exercise. Parks support biodiversity by creating habitats for birds, insects, and small mammals in otherwise concrete-dominated environments. Community gardens strengthen social bonds, bringing neighbors together for shared cultivation projects. Green areas also help regulate urban temperatures, creating cooling effects that combat the heat island phenomenon in cities."\n\nSummarize the benefits of urban green spaces. Use your own words. (Maximum 80 words)',
          answer: '',
          wordLimit: 80,
          assessmentCriteria: {
            relevance: 'air quality, mental health, physical activity, biodiversity, community bonds, temperature regulation',
            ownWords: 'Comprehensive paraphrasing',
            conciseness: 'Within 80 words',
            organization: 'Coherent structure'
          },
          hints: [
            'Identify all SIX benefits',
            'Group related ideas together',
            'Use sophisticated synonyms'
          ],
          explanation: 'A strong summary covers all six benefits using your own vocabulary, maintaining logical flow within the word limit.',
          workedExample: 'WORKED EXAMPLE:\n\nGood summary (78 words):\n"City parks deliver multiple advantages. Vegetation purifies atmosphere by capturing harmful gases and releasing fresh oxygen. Natural environments reduce anxiety and enhance psychological wellness. They promote fitness by offering protected locations for exercise. Wildlife flourishes in these habitats despite surrounding urbanization. Shared gardening initiatives foster neighborhood connections and cooperation. Finally, planted areas moderate climate, producing shade that counteracts excessive urban warmth."\n✓ All 6 benefits included\n✓ Excellent paraphrasing\n✓ Within word count\n✓ Well structured\n\nWeak summary:\n"Parks clean air and help mental health. People exercise there. Animals live in parks. Gardens bring people together. They cool cities down."\n✗ Too brief and simplistic\n✗ Some concepts unclear\n✗ Needs more development'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1000,
          text: 'Read this passage about renewable energy:\n\n"Renewable energy sources offer significant advantages over fossil fuels. Solar power harnesses the sun\'s energy through photovoltaic panels, providing clean electricity without emissions. Wind turbines convert kinetic energy from air currents into electrical power, operating especially effectively in coastal and elevated regions. Hydroelectric systems utilize flowing water to generate consistent, reliable energy output. Geothermal energy taps heat from Earth\'s core, offering stable power regardless of weather conditions. Biomass energy transforms organic waste into usable fuel, simultaneously addressing disposal challenges. Tidal power exploits ocean movements, representing a predictable and powerful energy source. These renewable options reduce greenhouse gas emissions, combating climate change while decreasing dependence on finite fossil fuel reserves."\n\nSummarize the renewable energy sources and their advantages. Use your own words. (Maximum 90 words)',
          answer: '',
          wordLimit: 90,
          assessmentCriteria: {
            relevance: 'solar, wind, hydroelectric, geothermal, biomass, tidal, environmental benefits',
            ownWords: 'Sophisticated paraphrasing',
            conciseness: 'Within 90 words',
            organization: 'Logical progression'
          },
          hints: [
            'List all six energy sources',
            'Mention the environmental advantage',
            'Use technical vocabulary appropriately'
          ],
          explanation: 'Your summary should identify all six renewable sources with brief descriptions, plus their collective environmental benefit, using your own words.',
          workedExample: 'WORKED EXAMPLE:\n\nGood summary (87 words):\n"Alternative energy systems provide substantial benefits. Photovoltaic cells capture sunlight for emission-free electricity. Air-powered generators transform breeze into power, thriving near coastlines and heights. Water-driven installations produce steady output. Underground heat extraction delivers weather-independent energy. Converting organic refuse creates dual benefits of fuel production and waste management. Maritime forces offer predictable generation capacity. Collectively, these alternatives diminish harmful emissions, fighting global warming while reducing reliance on depleting conventional fuels."\n✓ All sources covered\n✓ Environmental benefit included\n✓ Excellent vocabulary\n✓ Within limit\n\nWeak summary:\n"There are many renewable energies like solar and wind. They are better than fossil fuels because they are cleaner."\n✗ Incomplete - missing several sources\n✗ Too vague\n✗ Insufficient detail'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 900,
          text: 'Read this passage about recycling programs:\n\n"Effective recycling programs benefit communities in multiple ways. They reduce the amount of waste sent to landfills, extending their operational lifespan and minimizing environmental contamination. Recycling conserves natural resources by reusing materials rather than extracting new raw materials from the earth. The recycling industry creates employment opportunities in collection, sorting, and processing facilities. Energy consumption decreases when manufacturing products from recycled materials compared to virgin resources. Municipal costs decline as waste management becomes more efficient and landfill usage reduces."\n\nSummarize the benefits of recycling programs. Use your own words. (Maximum 70 words)',
          answer: '',
          wordLimit: 70,
          assessmentCriteria: {
            relevance: 'landfill reduction, resource conservation, job creation, energy savings, cost reduction',
            ownWords: 'Effective rephrasing',
            conciseness: 'Within word limit',
            organization: 'Clear flow'
          },
          hints: [
            'Identify all five benefits',
            'Use synonyms for key terms',
            'Link ideas with connectives'
          ],
          explanation: 'A complete summary addresses all five benefits using different vocabulary while maintaining clarity and staying within the word count.',
          workedExample: 'WORKED EXAMPLE:\n\nGood summary (68 words):\n"Community recycling delivers numerous advantages. Diminished garbage volume extends dump site longevity and limits pollution. Reprocessing materials preserves natural supplies by avoiding fresh extraction. Processing centers generate jobs in gathering and treatment operations. Manufacturing from reclaimed substances consumes less power than using new materials. Authorities save money through improved waste handling and decreased disposal needs."\n✓ All 5 benefits present\n✓ Good paraphrasing\n✓ Within word count\n✓ Coherent\n\nWeak summary:\n"Recycling reduces waste in landfills and conserves resources. It creates jobs and saves energy. Costs go down."\n✗ Too compressed\n✗ Some copying (waste, landfills, resources)\n✗ Needs more development'
        }
      ]
    },

    // ============================================
    // TOPIC 3: Language Analysis (Q2d)
    // ============================================
    {
      id: 'language_analysis',
      title: 'Language Analysis (Q2d)',
      description: 'Analyzing how writers use language to create effects',
      questions: [
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1200,
          text: 'Read these two paragraphs:\n\nPARAGRAPH 1:\n"The storm unleashed its fury upon the coastline. Waves crashed against the rocks like angry fists pounding a door, sending white spray exploding into the darkening sky. The wind howled through the abandoned streets, rattling windows and tearing at anything left unsecured."\n\nPARAGRAPH 2:\n"Lightning split the heavens with savage intensity, each bolt a jagged scar across the bruised clouds. Thunder rolled and rumbled, shaking the very foundations of buildings. Rain lashed down in horizontal sheets, transforming streets into torrents and battering everything in its merciless path."\n\nSelect THREE examples from EACH paragraph (6 total) and explain how the writer creates a sense of the storm\'s power and violence. Comment on:\n• The effect of specific words and phrases\n• The use of literary techniques\n• How the language influences the reader\n\n(Write 200-250 words)',
          answer: '',
          wordLimit: 250,
          requireSixExamples: true,
          assessmentCriteria: {
            selection: 'Identifies 3 examples from EACH paragraph',
            analysis: 'Explains precise meanings and effects',
            terminology: 'Uses literary terms correctly',
            detail: 'Thorough explanation of each example'
          },
          hints: [
            'Find 3 examples from paragraph 1 AND 3 from paragraph 2',
            'Look for personification, similes, and powerful verbs',
            'Explain the effect on the reader for each example'
          ],
          explanation: 'Strong examples from Para 1: "unleashed its fury" (personification), "like angry fists pounding" (simile), "howled/exploding/tearing" (violent verbs). Para 2: "split the heavens" (dramatic verb), "jagged scar" (metaphor), "lashed/battering/merciless" (violent language). Explain each with precise detail.',
          workedExample: 'WORKED EXAMPLE:\n\nGood response structure:\n\nParagraph 1 Analysis:\n1. "unleashed its fury" - This personification gives the storm human anger, making it seem deliberately violent and frightening to the reader.\n\n2. "like angry fists pounding" - The simile compares waves to aggressive fists, emphasizing brutal, relentless force that creates fear.\n\n3. "howled" - This verb personifies the wind as a wild animal, suggesting uncontrolled, threatening power.\n\nParagraph 2 Analysis:\n1. "split the heavens" - Dramatic verb suggesting violent tearing, making the storm seem destructively powerful.\n\n2. "jagged scar" - Metaphor comparing lightning to a wound, implying the storm damages even the sky itself.\n\n3. "merciless path" - Personification showing the storm has no pity, creating a sense of danger and vulnerability.\n\n✓ 3 examples from each paragraph\n✓ Techniques identified\n✓ Effects explained clearly'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1200,
          text: 'Read these two paragraphs:\n\nPARAGRAPH 1:\n"The garden had fallen into neglect. Weeds strangled the once-pristine flowerbeds, their tendrils creeping across pathways like grasping fingers. The fountain, long silent, wore a coat of green moss."\n\nPARAGRAPH 2:\n"Roses drooped sadly, their petals brown and curling at the edges. The lawn had become a wilderness of tangled grass and thistles, while ivy consumed the garden walls in a slow, choking embrace. Paint peeled from the forgotten bench like dead skin."\n\nChoose THREE examples from EACH paragraph (6 total) and explain how the writer creates an impression of abandonment and decay. Comment on:\n• Word choices and connotations\n• Use of imagery and figurative language\n• The overall effect on the reader\n\n(Write 200-250 words)',
          answer: '',
          wordLimit: 250,
          requireSixExamples: true,
          assessmentCriteria: {
            selection: '3 examples from EACH paragraph',
            analysis: 'Explains connotations',
            terminology: 'Identifies techniques',
            detail: 'Develops effect on reader'
          },
          hints: [
            'Select 3 from paragraph 1 AND 3 from paragraph 2',
            'Consider verbs like "strangled," "creeping," "drooped"',
            'Look for personification and simile in both paragraphs'
          ],
          explanation: 'Key examples - Para 1: "strangled" (violent verb/death), "creeping...like grasping fingers" (sinister simile), "wore a coat" (personification/neglect). Para 2: "drooped sadly" (personification/pathetic), "wilderness" (metaphor/loss of control), "like dead skin" (simile/decay).',
          workedExample: 'WORKED EXAMPLE:\n\nParagraph 1:\n1. "strangled" - Violent verb implying the weeds are killing the flowers, creating an image of death and destruction through neglect.\n\n2. "creeping...like grasping fingers" - Sinister simile suggesting the weeds are threatening and taking over, making decay seem almost alive and intentional.\n\n3. "wore a coat" - Personification showing the moss has completely covered the fountain, emphasizing how long it has been abandoned.\n\nParagraph 2:\n1. "drooped sadly" - Personification giving the roses human emotion, creating a pathetic, melancholy mood that evokes sympathy.\n\n2. "wilderness" - Metaphor showing complete loss of human control, emphasizing how the garden has returned to a wild, uncared-for state.\n\n3. "like dead skin" - Disturbing simile comparing peeling paint to decay of living things, reinforcing themes of deterioration and death.\n\n✓ All 6 examples covered\n✓ Effects explained thoroughly\n✓ Connotations explored'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1200,
          text: 'Read these two paragraphs:\n\nPARAGRAPH 1:\n"The hospital corridor stretched endlessly ahead, its fluorescent lights humming their monotonous song. Antiseptic smells stung the nostrils, sharp and clinical. Footsteps echoed hollowly against tiles that gleamed with cold sterility."\n\nPARAGRAPH 2:\n"Behind closed doors, machines beeped their rhythmic warnings. Time seemed suspended, trapped in the artificial brightness that banished all shadows. The silence between beeps felt heavier than the sounds themselves, pressing down with the weight of waiting."\n\nSelect THREE examples from EACH paragraph (6 total) and analyze how the writer creates a clinical, unsettling atmosphere. Comment on:\n• Sensory details and their effects\n• Use of personification and metaphor\n• How language creates mood\n\n(Write 200-250 words)',
          answer: '',
          wordLimit: 250,
          requireSixExamples: true,
          assessmentCriteria: {
            selection: '3 from each paragraph',
            analysis: 'Explains sensory effects',
            terminology: 'Identifies techniques',
            detail: 'Shows understanding of atmosphere'
          },
          hints: [
            'Notice sensory language (sight, sound, smell)',
            'Find personification of lights, machines, silence',
            'Explain how each detail adds to unease'
          ],
          explanation: 'Para 1: "humming their monotonous song" (personification/tedium), "stung" (aggressive sensory verb), "cold sterility" (oppressive atmosphere). Para 2: "rhythmic warnings" (ominous personification), "trapped" (metaphor/confinement), "heavier than sounds" (paradox/tension).',
          workedExample: 'WORKED EXAMPLE:\n\nParagraph 1:\n1. "humming their monotonous song" - Personifies fluorescent lights, creating tedious, oppressive atmosphere through repetitive sound.\n\n2. "stung the nostrils" - Aggressive verb makes the smell violent and unwelcome, adding to discomfort.\n\n3. "cold sterility" - Combines temperature with cleanliness to create an inhuman, unwelcoming environment.\n\nParagraph 2:\n1. "rhythmic warnings" - Personifies machine beeps as threatening, creating anxiety and foreboding.\n\n2. "trapped in artificial brightness" - Metaphor suggesting confinement in unnatural environment, increasing claustrophobia.\n\n3. "heavier than sounds" - Paradox emphasizing oppressive tension of waiting, making silence threatening.\n\n✓ All 6 examples analyzed\n✓ Atmosphere explained\n✓ Techniques identified'
        }
      ]
    },

    // ============================================
    // TOPIC 4: Extended Response (Q3)
    // ============================================
    {
      id: 'extended_response',
      title: 'Extended Response (Q3)',
      description: 'Writing from different perspectives using text evidence',
      questions: [
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 1500,
          text: 'Imagine you are a local journalist. Last night, a historic building in your town caught fire. Firefighters worked through the night to save it.\n\nWrite an article for the local newspaper describing:\n• What happened during the fire\n• How the community responded\n• The significance of the building to local residents\n\nWrite 200-250 words.',
          answer: '',
          wordLimit: 250,
          assessmentCriteria: {
            content: 'Addresses all three bullet points',
            perspective: 'Maintains journalist voice',
            description: 'Vivid, specific details',
            register: 'Appropriate newspaper style',
            structure: 'Clear organization',
            accuracy: 'Correct grammar and spelling'
          },
          hints: [
            'Use past tense and third person',
            'Include quotes from witnesses',
            'Use journalistic style with clear facts'
          ],
          explanation: 'Your article should report objectively, include community reactions, explain historical importance, and maintain professional newspaper style.',
          workedExample: 'WORKED EXAMPLE:\n\nGood opening: "Fire crews battled through the night to save the historic Town Hall after flames engulfed the 200-year-old building late Tuesday evening."\n✓ Clear, factual reporting\n✓ Key information in first sentence\n✓ Professional tone\n\nBody should include:\n- Specific details about the fire\n- Quoted reactions from residents\n- Historical significance explained\n- Current status of building\n\nWeak opening: "There was a fire last night."\n✗ Too vague\n✗ Lacks important details\n✗ Not engaging'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 1500,
          text: 'You are a character who has just discovered a secret room in your school that no one else knows about.\n\nWrite a diary entry describing:\n• How you discovered the room\n• What you found inside\n• Your thoughts and feelings about the discovery\n\nWrite 200-250 words as a diary entry.',
          answer: '',
          wordLimit: 250,
          assessmentCriteria: {
            content: 'Covers all bullet points',
            perspective: 'Consistent first-person diary voice',
            description: 'Engaging details',
            register: 'Personal, reflective tone',
            structure: 'Logical flow',
            accuracy: 'Minimal errors'
          },
          hints: [
            'Use first person and past tense',
            'Express personal emotions',
            'Include specific sensory details'
          ],
          explanation: 'Your diary entry should describe the discovery process, detail the room\'s contents vividly, and express genuine personal reactions using an informal, reflective tone.',
          workedExample: 'WORKED EXAMPLE:\n\nGood opening: "Dear Diary, I still can\'t believe what I found today. My hands are actually shaking as I write this..."\n✓ Personal, excited tone\n✓ Draws reader in\n✓ Authentic diary voice\n\nShould include:\n- Detailed discovery sequence\n- Vivid description of room contents\n- Emotional reactions throughout\n- Personal reflection on meaning\n\nWeak opening: "I found a room."\n✗ Too flat\n✗ No emotion\n✗ Not diary-like'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1500,
          text: 'Imagine you are the coach of a sports team that just won an important championship after years of losing.\n\nWrite a speech to your team in the locker room immediately after the win. Include:\n• Acknowledgment of their hard work and perseverance\n• Key moments from the championship game\n• What this victory means for the team\'s future\n\nWrite 200-250 words.',
          answer: '',
          wordLimit: 250,
          assessmentCriteria: {
            content: 'Addresses all points',
            perspective: 'Authentic coach voice',
            emotion: 'Conveys excitement and pride',
            register: 'Inspirational speech style',
            structure: 'Effective organization',
            accuracy: 'Strong control'
          },
          hints: [
            'Use direct address ("you," "we")',
            'Build emotional intensity',
            'Include specific examples'
          ],
          explanation: 'Your speech should inspire and celebrate, acknowledge specific contributions, recall crucial game moments, and look forward optimistically while maintaining the coach\'s authentic voice.',
          workedExample: 'WORKED EXAMPLE:\n\nGood opening: "Look at me. LOOK at me! This right here - this moment - this is what we\'ve been fighting for!"\n✓ Direct, passionate address\n✓ Builds intensity\n✓ Authentic coach voice\n\nShould include:\n- Recognition of team effort\n- Specific game moments recalled\n- Emotional acknowledgment of journey\n- Forward-looking inspiration\n\nWeak opening: "Good job, everyone."\n✗ Too casual\n✗ No emotion\n✗ Doesn\'t match moment'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 1500,
          text: 'You witnessed a remarkable act of kindness by a stranger helping someone in need.\n\nWrite a letter to a magazine describing:\n• What you witnessed\n• Why it was significant\n• How it affected you and others around\n\nWrite 200-250 words.',
          answer: '',
          wordLimit: 250,
          assessmentCriteria: {
            content: 'Complete coverage',
            perspective: 'Observer viewpoint',
            description: 'Compelling details',
            register: 'Formal letter style',
            structure: 'Clear progression',
            accuracy: 'High quality writing'
          },
          hints: [
            'Use formal letter format',
            'Show rather than tell',
            'Reflect on broader meaning'
          ],
          explanation: 'Your letter should describe the kind act vividly, explain its impact on observers, and reflect on its significance using appropriate formal letter conventions.',
          workedExample: 'WORKED EXAMPLE:\n\nGood opening: "Dear Editor,\n\nI am writing to share a moment that restored my faith in humanity..."\n✓ Formal letter greeting\n✓ Clear purpose stated\n✓ Engaging hook\n\nShould include:\n- Detailed account of the act\n- Explanation of its significance\n- Personal and communal impact\n- Reflective conclusion\n\nWeak opening: "Hi, I saw something nice."\n✗ Too informal\n✗ Vague\n✗ Wrong register'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 1500,
          text: 'You are a tour guide at a museum. Write the script for a tour introducing visitors to your favorite exhibit.\n\nYour script should include:\n• Description of the exhibit and its historical context\n• Why this exhibit is significant\n• Engaging details that bring the exhibit to life\n\nWrite 200-250 words.',
          answer: '',
          wordLimit: 250,
          assessmentCriteria: {
            content: 'Covers all required elements',
            perspective: 'Engaging tour guide voice',
            description: 'Vivid, informative details',
            register: 'Professional yet accessible',
            structure: 'Logical presentation',
            accuracy: 'Excellent control'
          },
          hints: [
            'Use present tense for immediacy',
            'Address audience directly',
            'Balance information with engagement'
          ],
          explanation: 'Your tour script should inform and engage, providing historical context while making the exhibit come alive through compelling details and enthusiastic delivery.',
          workedExample: 'WORKED EXAMPLE:\n\nGood opening: "If you\'ll gather round, please - what you\'re looking at right now changed the course of history..."\n✓ Direct audience address\n✓ Creates intrigue\n✓ Professional yet warm\n\nShould include:\n- Historical background\n- Significance explained\n- Engaging anecdotes\n- Interactive elements\n\nWeak opening: "This is an old thing from the past."\n✗ Too vague\n✗ Not engaging\n✗ No enthusiasm'
        }
      ]
    }
  ],

  // ============================================
  // PAPER 2: WRITING
  // ============================================
  paper2: [
    // ============================================
    // TOPIC 1: Directed Writing
    // ============================================
    {
      id: 'directed_writing',
      title: 'Directed Writing (Section A)',
      description: 'Writing to argue, persuade or discuss',
      questions: [
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2400,
          text: 'Read this information:\n\nYour school is considering banning mobile phones on campus entirely. Supporters argue phones distract from learning and reduce face-to-face interaction. Critics claim phones are essential for safety, research, and communication.\n\nWrite a letter to your headteacher presenting your views. You should:\n• Evaluate arguments for and against\n• Present your position with reasoning\n• Suggest alternative solutions\n\nWrite 250-350 words.',
          answer: '',
          wordLimit: 350,
          assessmentCriteria: {
            content: 'Addresses all bullet points',
            register: 'Formal letter format',
            structure: 'Clear organization',
            persuasion: 'Effective techniques',
            vocabulary: 'Sophisticated choices',
            accuracy: 'Minimal errors'
          },
          hints: [
            'Use proper letter format',
            'Balance both viewpoints',
            'Use formal language'
          ],
          explanation: 'Your letter should use formal conventions, evaluate both perspectives, present a clear position, and suggest alternatives.'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2400,
          text: 'You have read an article stating that homework should be abolished as it causes unnecessary stress and takes time away from family.\n\nWrite an article for your school magazine presenting your views. You should:\n• Discuss the purposes and benefits of homework\n• Evaluate the arguments about stress and time\n• Present your own balanced viewpoint\n\nWrite 250-350 words.',
          answer: '',
          wordLimit: 350,
          assessmentCriteria: {
            content: 'Comprehensive coverage',
            register: 'Engaging magazine style',
            structure: 'Well-organized',
            argumentation: 'Balanced discussion',
            vocabulary: 'Varied language',
            accuracy: 'Strong control'
          },
          hints: [
            'Create catchy title',
            'Use personal examples',
            'Address counterarguments'
          ],
          explanation: 'Your article should engage readers, discuss homework\'s educational value, acknowledge concerns about stress, and present a nuanced position suitable for a school audience.'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 2400,
          text: 'Your local council wants to build a new shopping center on a popular park used by the community.\n\nWrite a speech to be delivered at a council meeting. You should:\n• Argue for keeping the park OR supporting the development\n• Provide clear reasons and evidence\n• Address counterarguments\n\nWrite 250-350 words.',
          answer: '',
          wordLimit: 350,
          assessmentCriteria: {
            content: 'Strong argumentation',
            register: 'Formal speech style',
            structure: 'Persuasive organization',
            techniques: 'Rhetorical devices',
            vocabulary: 'Powerful language',
            accuracy: 'Excellent control'
          },
          hints: [
            'Use rhetorical questions',
            'Include emotional appeals',
            'Build to conclusion'
          ],
          explanation: 'Your speech should persuade the council, use rhetorical techniques effectively, provide solid reasoning, and address opposing views respectfully.'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 2400,
          text: 'A proposal suggests raising the driving age from 17 to 21 to reduce accidents involving young drivers.\n\nWrite a formal letter to your local newspaper expressing your opinion. You should:\n• Examine evidence and statistics\n• Consider impacts on young people\'s independence\n• Present a reasoned conclusion\n\nWrite 250-350 words.',
          answer: '',
          wordLimit: 350,
          assessmentCriteria: {
            content: 'Thorough analysis',
            register: 'Formal newspaper letter',
            structure: 'Logical progression',
            argumentation: 'Evidence-based',
            vocabulary: 'Mature language',
            accuracy: 'High standard'
          },
          hints: [
            'Reference "statistics" and "research"',
            'Use formal letter conventions',
            'Balance safety with freedom'
          ],
          explanation: 'Your letter should present a mature, evidence-based argument that weighs safety concerns against personal freedom and practical impacts.'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2400,
          text: 'Some people believe that schools should require students to wear uniforms, while others think students should be free to choose their own clothing.\n\nWrite an article for a teen magazine discussing both views. You should:\n• Explore arguments for and against school uniforms\n• Consider practical, social, and educational aspects\n• Share your own perspective\n\nWrite 250-350 words.',
          answer: '',
          wordLimit: 350,
          assessmentCriteria: {
            content: 'Balanced discussion',
            register: 'Engaging magazine style',
            structure: 'Clear organization',
            argumentation: 'Multiple perspectives',
            vocabulary: 'Accessible yet sophisticated',
            accuracy: 'Strong control'
          },
          hints: [
            'Address your teen audience directly',
            'Use relevant examples',
            'Include both practical and social points'
          ],
          explanation: 'Your article should explore multiple dimensions of the uniform debate while maintaining an engaging, age-appropriate style.'
        }
      ]
    },

    // ============================================
    // TOPIC 2: Descriptive Writing
    // ============================================
    {
      id: 'descriptive_writing',
      title: 'Descriptive Writing (Section B)',
      description: 'Creating vivid descriptions with sensory details',
      questions: [
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2700,
          text: 'Write a description suggested by this title:\n\n"The Abandoned Fairground"\n\nCreate a vivid picture using sensory details and varied language. Focus on atmosphere and mood.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            imagery: 'Strong sensory images',
            vocabulary: 'Sophisticated choices',
            structure: 'Effective organization',
            techniques: 'Literary devices',
            engagement: 'Maintains interest',
            accuracy: 'Excellent control'
          },
          hints: [
            'Use all five senses',
            'Vary your focus',
            'Create eerie mood'
          ],
          explanation: 'Your description should paint a vivid picture using rich sensory details, varied focus, and figurative language to create atmosphere.'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 2700,
          text: 'Write a description suggested by this title:\n\n"The Moment Before the Storm"\n\nFocus on building tension and atmosphere using varied language and sentence structures.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            imagery: 'Builds tension effectively',
            vocabulary: 'Powerful language',
            structure: 'Controlled pacing',
            techniques: 'Skillful devices',
            engagement: 'Compelling writing',
            accuracy: 'High quality'
          },
          hints: [
            'Build tension gradually',
            'Describe weather changes',
            'Use short sentences for impact'
          ],
          explanation: 'Your description should capture tense anticipation, describe atmospheric changes, and build tension through pacing and word choice.'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2700,
          text: 'Write a description suggested by this title:\n\n"The Hidden Garden"\n\nCreate a vivid, engaging description with varied focus and rich sensory details.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            imagery: 'Rich sensory details',
            vocabulary: 'Varied and precise',
            structure: 'Effective variety',
            techniques: 'Creative use',
            engagement: 'Captivating',
            accuracy: 'Strong control'
          },
          hints: [
            'Describe discovery moment',
            'Use all senses',
            'Create magical atmosphere'
          ],
          explanation: 'Your description should transport readers to the hidden garden through vivid sensory details, varied sentence structures, and effective use of literary techniques.'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 2700,
          text: 'Write a description suggested by this title:\n\n"The Last Day of Summer"\n\nCapture the atmosphere and emotions of a changing season with sophisticated language.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            imagery: 'Evocative sensory writing',
            vocabulary: 'Mature choices',
            structure: 'Sophisticated variety',
            techniques: 'Skillful deployment',
            engagement: 'Emotionally resonant',
            accuracy: 'Excellent control'
          },
          hints: [
            'Focus on transition and change',
            'Include nostalgic elements',
            'Balance present observations with reflection'
          ],
          explanation: 'Your description should capture both the physical details of late summer and the emotional resonance of endings and transitions.'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2700,
          text: 'Write a description suggested by this title:\n\n"The Market at Dawn"\n\nBring the scene to life through sensory details and dynamic description.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            imagery: 'Multi-sensory vividness',
            vocabulary: 'Energetic language',
            structure: 'Dynamic organization',
            techniques: 'Effective devices',
            engagement: 'Immersive experience',
            accuracy: 'Strong control'
          },
          hints: [
            'Focus on sounds, smells, colors',
            'Show movement and energy',
            'Include human elements'
          ],
          explanation: 'Your description should create an immersive experience of the bustling market through dynamic sensory details and varied focus.'
        }
      ]
    },

    // ============================================
    // TOPIC 3: Narrative Writing
    // ============================================
    {
      id: 'narrative_writing',
      title: 'Narrative Writing (Section B)',
      description: 'Creating engaging stories with plot and character',
      questions: [
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2700,
          text: 'Write a story that begins:\n\n"The package arrived on a Tuesday, addressed to someone who had never lived at this house..."\n\nDevelop an engaging plot with characterization and narrative techniques.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            plot: 'Well-developed storyline',
            character: 'Convincing characters',
            narrative: 'Effective techniques',
            vocabulary: 'Varied choices',
            structure: 'Controlled pacing',
            accuracy: 'Strong control'
          },
          hints: [
            'Decide the mystery first',
            'Show character through actions',
            'Create satisfying resolution'
          ],
          explanation: 'Your narrative should develop the opening into a complete story with believable characters, carefully paced plot, and effective conclusion.'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 2700,
          text: 'Write a story with the title:\n\n"The Choice"\n\nCreate an engaging narrative about a character facing a difficult decision.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            plot: 'Centered on meaningful choice',
            character: 'Well-developed protagonist',
            narrative: 'Effective voice',
            vocabulary: 'Sophisticated',
            structure: 'Well-paced',
            accuracy: 'Excellent control'
          },
          hints: [
            'Establish stakes',
            'Show internal conflict',
            'Make choice reveal character'
          ],
          explanation: 'Your story should center on a significant choice, develop character through the dilemma, and use the decision to reveal character depth.'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2700,
          text: 'Write a story that ends:\n\n"...and in that moment, everything changed."\n\nCreate a narrative that builds to this conclusion with effective plot development.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            plot: 'Builds to conclusion',
            character: 'Engaging characters',
            narrative: 'Effective techniques',
            vocabulary: 'Varied language',
            structure: 'Strong pacing',
            accuracy: 'High quality'
          },
          hints: [
            'Work backwards from ending',
            'Build tension throughout',
            'Make change meaningful'
          ],
          explanation: 'Your narrative should build purposefully toward the ending, create tension and anticipation, and make the final change feel significant and earned.'
        },
        {
          type: 'long',
          difficulty: 'hard',
          timeLimit: 2700,
          text: 'Write a story with the title:\n\n"The Stranger"\n\nDevelop a compelling narrative with well-crafted characters and engaging plot.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            plot: 'Intriguing storyline',
            character: 'Complex characterization',
            narrative: 'Sophisticated techniques',
            vocabulary: 'Mature choices',
            structure: 'Skillful pacing',
            accuracy: 'Excellent control'
          },
          hints: [
            'Create mystery around the stranger',
            'Use description to build character',
            'Consider theme of connection/isolation'
          ],
          explanation: 'Your narrative should create intrigue around the stranger while exploring deeper themes through characterization and plot.'
        },
        {
          type: 'long',
          difficulty: 'medium',
          timeLimit: 2700,
          text: 'Write a story that begins:\n\n"I should have known something was wrong when the lights went out..."\n\nCreate a suspenseful narrative with engaging characters.\n\nWrite 350-450 words.',
          answer: '',
          wordLimit: 450,
          assessmentCriteria: {
            plot: 'Suspenseful development',
            character: 'Believable reactions',
            narrative: 'Creates tension',
            vocabulary: 'Effective choices',
            structure: 'Good pacing',
            accuracy: 'Strong control'
          },
          hints: [
            'Build suspense gradually',
            'Use character responses to create tension',
            'Provide satisfying explanation'
          ],
          explanation: 'Your story should maintain suspense while developing character and plot toward a satisfying resolution.'
        }
      ]
    }
  ]
};

// Make topics available globally
window.topics = topics;