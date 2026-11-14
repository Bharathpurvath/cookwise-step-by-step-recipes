const recipes = [
  {
    id: "poha", title: "Masala Poha", category: "Breakfast", emoji: "🍋", theme: "theme-citrus",
    summary: "Soft, fluffy flattened rice tossed with peanuts, potato, lemon, and a gentle tempering.",
    prepMinutes: 10, cookMinutes: 12, difficulty: "Easy", baseServings: 2,
    note: "Rinse poha only briefly. If it sits in water it can turn mushy. Contains peanuts; leave them out if needed.",
    ingredients: [
      {name:"Thick poha (flattened rice)",amount:150,unit:"g",prep:"rinsed briefly and drained"},
      {name:"Small potato",amount:1,unit:"small",prep:"diced into tiny cubes"},
      {name:"Onion",amount:0.5,unit:"small",prep:"finely chopped"},
      {name:"Peanuts",amount:1,unit:"tbsp",prep:"raw or roasted"},
      {name:"Neutral oil",amount:1,unit:"tbsp",prep:""},
      {name:"Mustard seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Curry leaves",amount:6,unit:"leaves",prep:""},
      {name:"Green chilli",amount:1,unit:"",prep:"slit lengthwise"},
      {name:"Turmeric",amount:0.25,unit:"tsp",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Lemon juice",amount:0.5,unit:"tbsp",prep:"add at the end"},
      {name:"Fresh coriander",amount:1,unit:"tbsp",prep:"chopped"}
    ],
    steps: [
      {title:"Rinse and rest the poha",timerSeconds:180,add:"The poha. Rinse it in a sieve under water for just a few seconds, then let it drain.",action:"Fluff the drained poha with a fork and leave it aside while you prepare the pan.",why:"A quick rinse softens the flakes. Resting lets extra water drip away so the finished poha stays fluffy.",cue:"The flakes should bend when pressed but still hold their shape."},
      {title:"Wake up the mustard seeds",timerSeconds:45,add:"Oil, then mustard seeds. Once they begin to pop, add the peanuts.",action:"Warm oil in a pan over medium heat. Add mustard seeds; when they crackle, stir in the peanuts for about a minute.",why:"Hot oil releases the mustard seeds' aroma. Peanuts need a little head start to turn crisp.",cue:"The seeds pop and the peanuts look lightly golden. Keep them moving so they do not burn."},
      {title:"Soften the potato and onion",timerSeconds:240,add:"Diced potato, onion, green chilli, and curry leaves.",action:"Add the potato first and stir for 2 minutes. Add onion, chilli, and curry leaves; cook, stirring, until the potato is tender.",why:"Potato takes longer than poha, so it cooks first. Curry leaves release their fragrance in the hot oil.",cue:"A fork should pass through a potato cube easily; the onion should look soft, not brown."},
      {title:"Season the poha",timerSeconds:90,add:"Turmeric, drained poha, and salt.",action:"Sprinkle in turmeric and stir once. Add poha and salt, then fold gently until everything turns yellow.",why:"Turmeric colors the oil, which coats the flakes evenly. Gentle folding keeps the softened poha from breaking.",cue:"No dry white patches remain. Taste a small flake and adjust the salt."},
      {title:"Warm through with the lid on",timerSeconds:120,add:"A splash of water only if the poha seems dry.",action:"Cover the pan and cook on low for 2 minutes. Turn off the heat and let it sit for another minute.",why:"Low, trapped steam finishes the flakes without frying or drying them out.",cue:"The poha feels warm and soft all the way through and still looks separate."},
      {title:"Finish bright and fresh",timerSeconds:0,add:"Lemon juice and chopped coriander.",action:"Squeeze lemon over the poha and scatter coriander on top. Fold once and serve warm.",why:"Lemon added off the heat tastes fresh and balances the earthy turmeric and roasted peanuts.",cue:"You can smell the lemon. Add another squeeze if you like a brighter taste."}
    ]
  },
  {
    id: "upma", title: "Vegetable Upma", category: "Breakfast", emoji: "🥣", theme: "theme-citrus",
    summary: "A savory semolina breakfast with soft vegetables, toasted cashews, and a fragrant tempering.",
    prepMinutes: 12, cookMinutes: 18, difficulty: "Easy", baseServings: 2,
    note: "Stir continuously while pouring in the hot water. This is the easiest way to avoid lumps.",
    ingredients: [
      {name:"Semolina (rava/sooji)",amount:120,unit:"g",prep:""},
      {name:"Water",amount:360,unit:"ml",prep:"hot"},
      {name:"Carrot",amount:0.5,unit:"medium",prep:"finely diced"},
      {name:"Green peas",amount:3,unit:"tbsp",prep:"fresh or frozen"},
      {name:"Onion",amount:0.5,unit:"small",prep:"finely chopped"},
      {name:"Neutral oil or ghee",amount:1,unit:"tbsp",prep:""},
      {name:"Mustard seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Cashews",amount:1,unit:"tbsp",prep:"halved"},
      {name:"Curry leaves",amount:6,unit:"leaves",prep:""},
      {name:"Green chilli",amount:1,unit:"",prep:"finely chopped"},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Lemon juice",amount:1,unit:"tsp",prep:"optional"}
    ],
    steps: [
      {title:"Toast the semolina",timerSeconds:240,add:"Dry semolina to a warm, dry pan.",action:"Stir over low-medium heat for 3–4 minutes, then tip it onto a plate.",why:"Light toasting gives upma a nutty flavor and helps the grains stay fluffy after the water is added.",cue:"The semolina smells lightly toasted but has not changed to a deep brown."},
      {title:"Prepare the tempering",timerSeconds:60,add:"Oil or ghee, mustard seeds, cashews, and curry leaves.",action:"Heat oil in the same pan. Add mustard seeds; when they pop, add cashews and curry leaves.",why:"The hot fat carries the aroma of the spices through the whole dish. Cashews toast quickly, so keep stirring.",cue:"The cashews turn pale gold and the curry leaves sizzle."},
      {title:"Soften the vegetables",timerSeconds:180,add:"Onion, chilli, carrot, peas, and salt.",action:"Stir in onion and chilli for a minute. Add carrot, peas, a pinch of salt, and 2 tablespoons of water. Cover until just tender.",why:"A little covered steam softens the vegetables before the semolina goes in, so both finish at the same time.",cue:"The carrot is nearly tender but still holds its shape."},
      {title:"Bring the water to a boil",timerSeconds:180,add:"Hot water and the rest of the salt.",action:"Pour in the hot water carefully and bring it to a lively simmer.",why:"Boiling water cooks the semolina evenly as soon as it is added and shortens the time it can form lumps.",cue:"Small bubbles break across the surface. Taste the water; it should be lightly seasoned."},
      {title:"Rain in the semolina",timerSeconds:180,add:"Toasted semolina, slowly, while stirring constantly.",action:"Lower the heat. Sprinkle semolina in a steady stream with one hand while stirring with the other. Keep stirring until thick.",why:"Slow addition separates the grains. Constant stirring spreads them through the hot water instead of letting them clump.",cue:"The mixture thickens and pulls slightly away from the pan. No dry pockets remain."},
      {title:"Rest and finish",timerSeconds:120,add:"Lemon juice if you like.",action:"Cover on the lowest heat for 2 minutes, then turn off the heat and rest for another minute. Fluff with a spoon.",why:"The short rest lets steam finish the center of the semolina grains.",cue:"The upma is soft and fluffy, not watery. Add a squeeze of lemon before serving."}
    ]
  },
  {
    id: "lemon-rice", title: "South Indian Lemon Rice", category: "Quick meal", emoji: "🍚", theme: "theme-citrus",
    summary: "A quick, tangy rice bowl with peanuts, curry leaves, and turmeric. Best with rice cooked ahead.",
    prepMinutes: 8, cookMinutes: 10, difficulty: "Easy", baseServings: 2,
    note: "Cold or room-temperature cooked rice works best because the grains are less likely to break. Contains peanuts.",
    ingredients: [
      {name:"Cooked rice",amount:3,unit:"cups",prep:"cooled and separated"},
      {name:"Lemon juice",amount:1.5,unit:"tbsp",prep:"freshly squeezed"},
      {name:"Peanuts",amount:2,unit:"tbsp",prep:""},
      {name:"Neutral oil",amount:1,unit:"tbsp",prep:""},
      {name:"Mustard seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Chana dal",amount:1,unit:"tsp",prep:""},
      {name:"Urad dal",amount:1,unit:"tsp",prep:""},
      {name:"Dried red chilli",amount:1,unit:"",prep:"broken in half"},
      {name:"Curry leaves",amount:8,unit:"leaves",prep:""},
      {name:"Turmeric",amount:0.25,unit:"tsp",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"}
    ],
    steps: [
      {title:"Loosen the cooked rice",timerSeconds:0,add:"Cooked rice.",action:"Break up any clumps gently with your fingers or a fork. Keep it nearby.",why:"Separate grains coat with the lemon tempering without turning into a sticky mass.",cue:"The rice is cool enough to handle and the grains are mostly separate."},
      {title:"Toast the peanuts and dals",timerSeconds:90,add:"Oil, mustard seeds, chana dal, urad dal, and peanuts.",action:"Warm oil over medium heat. Add mustard seeds; once they pop, add the dals and peanuts. Stir until golden.",why:"The dals and peanuts take longer to toast than the curry leaves, so they go in first.",cue:"The dals look golden and the peanuts smell roasted. Reduce heat if they darken too fast."},
      {title:"Bloom the aromatics",timerSeconds:45,add:"Dried chilli, curry leaves, and turmeric.",action:"Lower the heat. Add chilli and curry leaves carefully, then stir in turmeric for a few seconds.",why:"Spices release their flavor in the warm oil. Turmeric can taste bitter if it burns, so keep this step brief.",cue:"The curry leaves sizzle and the oil turns a bright yellow."},
      {title:"Coat the rice",timerSeconds:120,add:"Cooked rice and salt.",action:"Add rice and salt. Fold gently until the yellow oil is spread through the grains and the rice is hot.",why:"Folding instead of vigorous stirring protects the grains and spreads the tempering evenly.",cue:"The rice is evenly yellow with no large clumps. Taste and adjust salt."},
      {title:"Add the lemon off the heat",timerSeconds:0,add:"Lemon juice.",action:"Turn off the heat, pour in lemon juice, and fold once more. Taste before adding extra.",why:"Fresh lemon stays bright when it is not boiled. Adding it gradually makes it easier to balance the tang.",cue:"It tastes tangy and savory, not sharp. Serve warm or at room temperature."}
    ]
  },
  {
    id: "dal-tadka", title: "Everyday Dal Tadka", category: "Comfort food", emoji: "🍲", theme: "theme-tomato",
    summary: "Soft red lentils finished with a sizzling cumin, garlic, and chilli tadka.",
    prepMinutes: 8, cookMinutes: 25, difficulty: "Easy", baseServings: 2,
    note: "Rinse lentils until the water is mostly clear. A saucepan works well; cooking time varies a little by lentil brand.",
    ingredients: [
      {name:"Red lentils (masoor dal)",amount:150,unit:"g",prep:"rinsed"},
      {name:"Water",amount:600,unit:"ml",prep:"for cooking"},
      {name:"Turmeric",amount:0.25,unit:"tsp",prep:""},
      {name:"Tomato",amount:1,unit:"medium",prep:"chopped"},
      {name:"Neutral oil or ghee",amount:1,unit:"tbsp",prep:""},
      {name:"Cumin seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Garlic",amount:3,unit:"cloves",prep:"thinly sliced"},
      {name:"Dried red chilli",amount:1,unit:"",prep:"optional"},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Fresh coriander",amount:1,unit:"tbsp",prep:"chopped"},
      {name:"Lemon juice",amount:1,unit:"tsp",prep:"optional"}
    ],
    steps: [
      {title:"Rinse and start the lentils",timerSeconds:0,add:"Rinsed lentils, water, turmeric, and half the salt.",action:"Put everything in a saucepan. Bring to a boil, then lower the heat to a steady simmer.",why:"Starting the lentils in plenty of water gives them room to soften without sticking to the base.",cue:"Gentle bubbles rise across the pot. Skim away any foam if you prefer."},
      {title:"Simmer until soft",timerSeconds:900,add:"The chopped tomato after the lentils have simmered for 10 minutes.",action:"Partly cover and simmer for about 15 minutes, stirring now and then. Add tomato halfway through.",why:"Adding tomato later lets the lentils soften before the tomato's acidity goes in.",cue:"The lentils squash easily between a spoon and the side of the pot. Add a splash of water if too thick."},
      {title:"Mash to a creamy consistency",timerSeconds:120,add:"A little hot water if needed.",action:"Stir and lightly mash a few lentils against the pan. Simmer for 2 more minutes.",why:"Mashing some of the lentils thickens the dal naturally while leaving plenty whole.",cue:"The dal flows from a spoon but is not watery. Taste and adjust the salt."},
      {title:"Heat oil for the tadka",timerSeconds:30,add:"Oil or ghee in a small pan.",action:"Warm the oil over medium heat until it shimmers, then lower the heat slightly.",why:"The tadka is a quick finish. Getting the oil ready first helps the cumin bloom without burning.",cue:"The surface looks fluid and glossy. It should not smoke."},
      {title:"Bloom cumin and garlic",timerSeconds:45,add:"Cumin seeds, sliced garlic, and dried chilli.",action:"Add cumin. When it sizzles, add garlic and chilli. Stir until the garlic is pale gold, then turn off the heat.",why:"Cumin perfumes the oil first; garlic follows. Pale-gold garlic tastes sweet, while dark garlic turns bitter.",cue:"Cumin crackles and garlic is light golden. It keeps cooking briefly from the pan's heat."},
      {title:"Pour the tadka over the dal",timerSeconds:0,add:"The hot cumin-garlic oil, coriander, and optional lemon.",action:"Pour the tadka over the dal carefully. Stir once, scatter coriander, and add lemon if desired.",why:"The hot tadka releases its aroma on contact with the dal. Lemon adds a fresh finish.",cue:"You can smell cumin and garlic immediately. Serve hot with rice or flatbread."}
    ]
  },
  {
    id: "chana-masala", title: "Quick Chana Masala", category: "Comfort food", emoji: "🫘", theme: "theme-tomato",
    summary: "Chickpeas simmered in a tomato-onion masala for a hearty weeknight curry.",
    prepMinutes: 10, cookMinutes: 25, difficulty: "Easy", baseServings: 2,
    note: "Canned chickpeas make this a quick recipe. Rinse them well to remove the canning liquid.",
    ingredients: [
      {name:"Cooked chickpeas",amount:1,unit:"can (400 g)",prep:"drained and rinsed"},
      {name:"Onion",amount:1,unit:"small",prep:"finely chopped"},
      {name:"Tomatoes",amount:2,unit:"medium",prep:"chopped or grated"},
      {name:"Neutral oil",amount:1,unit:"tbsp",prep:""},
      {name:"Cumin seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Ginger",amount:1,unit:"tsp",prep:"finely grated"},
      {name:"Garlic",amount:2,unit:"cloves",prep:"crushed"},
      {name:"Ground coriander",amount:1,unit:"tsp",prep:""},
      {name:"Ground cumin",amount:0.5,unit:"tsp",prep:""},
      {name:"Turmeric",amount:0.25,unit:"tsp",prep:""},
      {name:"Garam masala",amount:0.5,unit:"tsp",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Fresh coriander",amount:1,unit:"tbsp",prep:"chopped"},
      {name:"Lemon juice",amount:1,unit:"tsp",prep:"optional"}
    ],
    steps: [
      {title:"Warm the cumin",timerSeconds:30,add:"Oil and cumin seeds.",action:"Heat oil in a saucepan over medium heat. Add cumin seeds and stir for a few seconds.",why:"Briefly heating cumin in oil releases its nutty fragrance throughout the masala.",cue:"The seeds smell fragrant and begin to sizzle; do not wait for them to darken."},
      {title:"Cook the onion",timerSeconds:360,add:"Chopped onion and a pinch of salt.",action:"Add onion and cook, stirring often, until soft and lightly golden at the edges.",why:"Softened onion gives the curry sweetness and body. Salt helps draw out its moisture.",cue:"The onion is translucent and golden, not dark brown."},
      {title:"Add ginger, garlic, and powdered spices",timerSeconds:45,add:"Ginger, garlic, coriander, ground cumin, and turmeric.",action:"Stir for 30–45 seconds. Add a spoonful of water if the spices catch on the pan.",why:"Powdered spices can burn in dry heat. A little moisture lets them bloom without scorching.",cue:"The raw garlic smell fades and the pan smells warm and spiced."},
      {title:"Cook down the tomatoes",timerSeconds:480,add:"Chopped tomatoes and the rest of the salt.",action:"Add tomatoes and cook, stirring occasionally, until they collapse into a thick sauce.",why:"Cooking off the tomato water concentrates flavor and removes the raw, sharp taste.",cue:"The sauce looks glossy and oil may appear at the edges."},
      {title:"Simmer with chickpeas",timerSeconds:600,add:"Rinsed chickpeas and 250 ml water.",action:"Add chickpeas and water. Bring to a simmer, then cook gently for about 10 minutes. Mash a few chickpeas into the sauce.",why:"Simmering lets the chickpeas absorb the masala. A few mashed chickpeas thicken the gravy.",cue:"The sauce clings lightly to the chickpeas. Add water if you prefer a looser curry."},
      {title:"Finish with garam masala",timerSeconds:0,add:"Garam masala, coriander, and optional lemon juice.",action:"Turn off the heat. Stir in garam masala and coriander; finish with lemon if you like.",why:"Garam masala is most aromatic when added near the end rather than cooked for a long time.",cue:"Taste for salt and tang. Serve with rice, roti, or toasted bread."}
    ]
  },
  {
    id: "paneer", title: "Paneer Butter Masala", category: "Comfort food", emoji: "🧈", theme: "theme-tomato",
    summary: "Soft paneer in a mellow tomato-cashew sauce with butter and warm spices.",
    prepMinutes: 12, cookMinutes: 28, difficulty: "Easy", baseServings: 2,
    note: "Cashews make the sauce creamy. For a nut-free version, skip them and stir in a little extra cream or milk.",
    ingredients: [
      {name:"Paneer",amount:200,unit:"g",prep:"cut into bite-size cubes"},
      {name:"Tomatoes",amount:3,unit:"medium",prep:"roughly chopped"},
      {name:"Onion",amount:0.5,unit:"small",prep:"roughly chopped"},
      {name:"Cashews",amount:8,unit:"",prep:"soaked in hot water for 10 minutes"},
      {name:"Butter",amount:1,unit:"tbsp",prep:""},
      {name:"Neutral oil",amount:1,unit:"tsp",prep:""},
      {name:"Ginger",amount:1,unit:"tsp",prep:"chopped"},
      {name:"Garlic",amount:2,unit:"cloves",prep:""},
      {name:"Kashmiri chilli powder",amount:0.5,unit:"tsp",prep:"adjust to taste"},
      {name:"Garam masala",amount:0.5,unit:"tsp",prep:""},
      {name:"Cream or milk",amount:2,unit:"tbsp",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Dried fenugreek leaves",amount:0.5,unit:"tsp",prep:"optional"}
    ],
    steps: [
      {title:"Soften the tomato base",timerSeconds:480,add:"Oil, onion, tomatoes, ginger, garlic, chilli powder, and a pinch of salt.",action:"Warm oil in a saucepan. Add everything listed and cook over medium heat until the tomatoes are very soft.",why:"Cooking the vegetables together softens their sharpness before blending into a smooth sauce.",cue:"Tomatoes collapse when pressed with the spoon and no firm onion pieces remain."},
      {title:"Blend the sauce smooth",timerSeconds:0,add:"Soaked cashews and the cooked tomato mixture.",action:"Let the mixture cool briefly. Blend with the drained cashews and a splash of water until smooth.",why:"Cashews add body and silkiness. Cooling first reduces splattering while blending.",cue:"The sauce looks creamy with no visible cashew pieces. Add water a spoon at a time if needed."},
      {title:"Cook the sauce gently",timerSeconds:300,add:"Butter and the blended sauce.",action:"Melt butter in the pan. Pour in the sauce carefully and simmer gently for about 5 minutes, stirring often.",why:"A gentle simmer brings the flavors together. A hard boil can splatter and make the sauce catch.",cue:"Small bubbles appear at the edges and the sauce coats the back of a spoon."},
      {title:"Season the gravy",timerSeconds:60,add:"Garam masala and salt as needed.",action:"Stir in garam masala. Taste the sauce and adjust the salt before adding paneer.",why:"Seasoning the gravy before paneer helps you get the balance right without breaking the cubes later.",cue:"The gravy tastes savory and mildly warm. Adjust chilli or water to your preference."},
      {title:"Warm the paneer in the gravy",timerSeconds:180,add:"Paneer cubes and a splash of water if the gravy is thick.",action:"Slide paneer into the sauce. Simmer gently for 3 minutes; avoid vigorous stirring.",why:"Paneer only needs to warm through. Gentle movement helps the soft cubes keep their shape.",cue:"The cubes are hot in the center and coated in sauce."},
      {title:"Make it mellow and finish",timerSeconds:0,add:"Cream or milk and crushed dried fenugreek leaves, if using.",action:"Turn off the heat. Stir in cream or milk. Rub fenugreek between your fingers over the pan and stir.",why:"Dairy added at the end smooths the tomato's acidity. Fenugreek adds a rounded, restaurant-style aroma.",cue:"The sauce is creamy, not boiling. Serve with rice, roti, or naan."}
    ]
  },
  {
    id: "pulao", title: "One-Pot Vegetable Pulao", category: "Quick meal", emoji: "🍛", theme: "theme-sage",
    summary: "Fragrant rice with simple vegetables and whole spices, all cooked together in one pot.",
    prepMinutes: 12, cookMinutes: 25, difficulty: "Easy", baseServings: 2,
    note: "If your rice package gives a different water ratio, follow its directions. Resting after cooking helps the grains set.",
    ingredients: [
      {name:"Basmati rice",amount:1,unit:"cup",prep:"rinsed and soaked for 15 minutes"},
      {name:"Water",amount:1.5,unit:"cups",prep:"check your rice packet for its ratio"},
      {name:"Mixed vegetables",amount:1,unit:"cup",prep:"small carrot, peas, beans, or what you have"},
      {name:"Onion",amount:0.5,unit:"small",prep:"thinly sliced"},
      {name:"Ghee or neutral oil",amount:1,unit:"tbsp",prep:""},
      {name:"Cumin seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Cinnamon",amount:1,unit:"small piece",prep:""},
      {name:"Green cardamom",amount:2,unit:"pods",prep:"lightly crushed"},
      {name:"Bay leaf",amount:1,unit:"",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Fresh coriander",amount:1,unit:"tbsp",prep:"to serve"}
    ],
    steps: [
      {title:"Rinse and soak the rice",timerSeconds:0,add:"Basmati rice and cool water for rinsing.",action:"Rinse gently until the water looks less cloudy, then soak for 15 minutes. Drain before cooking.",why:"Rinsing removes loose surface starch. Soaking helps the grains cook evenly and lengthen.",cue:"The rice grains are plump but not soft. Drain them well so the water ratio stays right."},
      {title:"Bloom the whole spices",timerSeconds:45,add:"Ghee or oil, cumin, cinnamon, cardamom, and bay leaf.",action:"Heat ghee in a heavy saucepan. Add the whole spices and stir until fragrant.",why:"Whole spices release aroma into the cooking fat, which seasons the rice from the start.",cue:"Cumin crackles and the spices smell fragrant. Do not let them turn dark."},
      {title:"Soften onion and vegetables",timerSeconds:240,add:"Sliced onion and mixed vegetables.",action:"Add onion and stir until it softens. Add vegetables and cook for 2–3 minutes.",why:"Briefly cooking the vegetables in the spiced fat gives them flavor before the rice absorbs water.",cue:"Onion is soft and vegetables are glossy; they do not need to be fully cooked yet."},
      {title:"Add rice and water",timerSeconds:0,add:"Drained rice, water, and salt.",action:"Add rice and fold once gently. Pour in water, season with salt, and bring to a boil.",why:"Folding coats the grains without breaking them. Taste the water; it should be pleasantly seasoned.",cue:"The water is bubbling across the surface. Adjust heat to low before covering."},
      {title:"Cover, cook, and rest",timerSeconds:1200,add:"Nothing else yet. Keep the lid on.",action:"Cover tightly and cook on the lowest heat for about 12–15 minutes, or follow your rice packet. Turn off the heat and rest covered for 5 minutes.",why:"Low, steady steam finishes the rice without scorching the base. The covered rest helps moisture settle evenly.",cue:"Water is absorbed and grains are tender. Fluff gently with a fork and scatter coriander."}
    ]
  },
  {
    id: "aloo-gobi", title: "Aloo Gobi", category: "Comfort food", emoji: "🥔", theme: "theme-sage",
    summary: "A homestyle potato and cauliflower curry with ginger, tomato, and everyday spices.",
    prepMinutes: 14, cookMinutes: 24, difficulty: "Easy", baseServings: 2,
    note: "Cut the potato and cauliflower into similar-size pieces so they finish cooking at about the same time.",
    ingredients: [
      {name:"Potatoes",amount:2,unit:"small",prep:"peeled and cut into 2 cm cubes"},
      {name:"Cauliflower florets",amount:2,unit:"cups",prep:"bite-size"},
      {name:"Tomato",amount:1,unit:"medium",prep:"chopped"},
      {name:"Onion",amount:0.5,unit:"small",prep:"chopped"},
      {name:"Neutral oil",amount:1,unit:"tbsp",prep:""},
      {name:"Cumin seeds",amount:0.5,unit:"tsp",prep:""},
      {name:"Ginger",amount:1,unit:"tsp",prep:"grated"},
      {name:"Turmeric",amount:0.25,unit:"tsp",prep:""},
      {name:"Ground coriander",amount:1,unit:"tsp",prep:""},
      {name:"Garam masala",amount:0.5,unit:"tsp",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Water",amount:3,unit:"tbsp",prep:"for covered steaming"},
      {name:"Fresh coriander",amount:1,unit:"tbsp",prep:"chopped"}
    ],
    steps: [
      {title:"Start the cumin and onion",timerSeconds:210,add:"Oil, cumin seeds, then onion.",action:"Heat oil in a wide pan. Add cumin seeds; when fragrant, add onion and cook until soft.",why:"Cumin flavors the oil first. Soft onion gives the vegetables a savory base.",cue:"The onion is translucent with just a little golden color."},
      {title:"Bloom ginger and spices",timerSeconds:45,add:"Ginger, turmeric, ground coriander, and a pinch of salt.",action:"Stir for 30–45 seconds. Add a spoonful of water if the spices stick.",why:"Briefly cooking spices removes their raw taste. Moisture protects them from burning.",cue:"The pan smells aromatic and the spices coat the onion."},
      {title:"Coat the vegetables",timerSeconds:120,add:"Potato cubes and cauliflower florets.",action:"Add potatoes first and stir to coat. Add cauliflower and fold together gently.",why:"Coating the vegetables now helps the spices cling before the steam is added.",cue:"The florets stay whole and each piece has a light spice coating."},
      {title:"Steam until tender",timerSeconds:900,add:"Chopped tomato and 3 tablespoons of water.",action:"Add tomato and water. Cover and cook on low-medium for 12–15 minutes, stirring gently once or twice.",why:"The lid traps steam so the potato and cauliflower cook through without needing lots of oil.",cue:"A knife slides easily into the potato and the cauliflower is tender but not falling apart. Add a little water if the pan dries."},
      {title:"Season and dry the pan",timerSeconds:120,add:"Garam masala and more salt if needed.",action:"Remove the lid. Stir in garam masala and cook for 1–2 minutes until excess moisture evaporates.",why:"Finishing uncovered concentrates the flavor. Garam masala added near the end stays fragrant.",cue:"The vegetables are coated in masala, not sitting in watery liquid."},
      {title:"Finish with coriander",timerSeconds:0,add:"Chopped coriander.",action:"Turn off the heat, scatter coriander, and taste for salt.",why:"Fresh herbs give the warm, earthy spices a bright finish.",cue:"The vegetables are tender and distinct. Serve with roti or rice."}
    ]
  },
  {
    id: "tomato-soup", title: "Tomato & Basil Soup", category: "Quick meal", emoji: "🍅", theme: "theme-tomato",
    summary: "A simple, cozy tomato soup with onion, garlic, and a splash of cream.",
    prepMinutes: 10, cookMinutes: 25, difficulty: "Easy", baseServings: 2,
    note: "Let the soup cool slightly before blending. Hot liquid expands in a blender; follow your blender's safety instructions.",
    ingredients: [
      {name:"Ripe tomatoes",amount:500,unit:"g",prep:"roughly chopped"},
      {name:"Onion",amount:0.5,unit:"medium",prep:"chopped"},
      {name:"Garlic",amount:2,unit:"cloves",prep:"chopped"},
      {name:"Olive oil or butter",amount:1,unit:"tbsp",prep:""},
      {name:"Water or vegetable stock",amount:250,unit:"ml",prep:""},
      {name:"Dried oregano",amount:0.25,unit:"tsp",prep:"optional"},
      {name:"Cream or milk",amount:2,unit:"tbsp",prep:"optional"},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Black pepper",amount:null,unit:"",prep:"to taste"},
      {name:"Fresh basil",amount:4,unit:"leaves",prep:"torn"}
    ],
    steps: [
      {title:"Soften onion and garlic",timerSeconds:240,add:"Oil or butter, onion, and garlic.",action:"Warm the oil in a saucepan. Add onion and cook until soft. Stir in garlic for the last 30 seconds.",why:"Soft onion makes a mellow base. Garlic cooks quickly, so adding it later prevents bitterness.",cue:"The onion looks translucent and the garlic smells fragrant, not browned."},
      {title:"Cook down the tomatoes",timerSeconds:600,add:"Chopped tomatoes, oregano, and a pinch of salt.",action:"Add tomatoes and oregano. Cook uncovered for about 10 minutes, stirring occasionally, until they soften.",why:"Cooking tomatoes first deepens their flavor and lets excess water evaporate.",cue:"Tomatoes collapse easily when pressed with a spoon."},
      {title:"Simmer until tender",timerSeconds:600,add:"Water or vegetable stock.",action:"Pour in stock, bring to a gentle simmer, and cook for another 10 minutes.",why:"The liquid loosens the tomato base into soup while the simmer blends the flavors.",cue:"The tomatoes are very soft and the liquid looks evenly red."},
      {title:"Blend carefully",timerSeconds:0,add:"Nothing yet. Turn off the heat and let the soup cool slightly.",action:"Blend until smooth using an immersion blender, or carefully transfer in batches following your blender's instructions.",why:"Blending breaks down tomato skins and onion for a smooth texture. Cooling helps reduce hot splashes.",cue:"The soup looks smooth. If it is too thick, stir in a little more stock."},
      {title:"Season and finish",timerSeconds:60,add:"Cream or milk if using, black pepper, and torn basil.",action:"Return the soup to low heat. Stir in cream or milk, taste for salt and pepper, then turn off the heat and add basil.",why:"Dairy added at the end keeps the soup mellow. Basil's fresh aroma fades if boiled for long.",cue:"The soup is hot but not bubbling hard. Serve with toast."}
    ]
  },
  {
    id: "besan-chilla", title: "Besan Chilla", category: "Snack", emoji: "🥞", theme: "theme-lilac",
    summary: "Savory chickpea-flour pancakes with onion, herbs, and a crisp golden edge.",
    prepMinutes: 10, cookMinutes: 14, difficulty: "Easy", baseServings: 2,
    note: "Let the batter rest briefly so the flour hydrates. Add water slowly; batter thickness is easy to adjust.",
    ingredients: [
      {name:"Besan (chickpea flour)",amount:1,unit:"cup",prep:""},
      {name:"Water",amount:0.75,unit:"cup",prep:"add gradually"},
      {name:"Onion",amount:0.5,unit:"small",prep:"finely chopped"},
      {name:"Tomato",amount:0.5,unit:"small",prep:"finely chopped"},
      {name:"Green chilli",amount:1,unit:"",prep:"finely chopped"},
      {name:"Ground cumin",amount:0.25,unit:"tsp",prep:""},
      {name:"Turmeric",amount:0.125,unit:"tsp",prep:""},
      {name:"Salt",amount:null,unit:"",prep:"to taste"},
      {name:"Fresh coriander",amount:1,unit:"tbsp",prep:"chopped"},
      {name:"Neutral oil",amount:2,unit:"tsp",prep:"for the pan"}
    ],
    steps: [
      {title:"Make a smooth batter",timerSeconds:0,add:"Besan, cumin, turmeric, and salt.",action:"Whisk the dry ingredients. Add water a little at a time, whisking until you have a smooth, pourable batter.",why:"Gradual water makes it easier to whisk out lumps and control the thickness.",cue:"The batter pours in a ribbon and spreads slowly. Add a spoon of water if it is too thick."},
      {title:"Fold in the vegetables",timerSeconds:180,add:"Onion, tomato, chilli, and coriander.",action:"Stir the chopped vegetables into the batter and let it rest for 3 minutes.",why:"The short rest hydrates the flour and lets the vegetables release a little flavor into the batter.",cue:"The batter is still pourable. If it thickened, loosen with a small splash of water."},
      {title:"Heat and grease the pan",timerSeconds:60,add:"A few drops of oil to a nonstick or well-seasoned pan.",action:"Heat the pan over medium. Wipe a thin film of oil over the surface.",why:"A moderately hot, lightly oiled pan helps the chilla release and brown evenly.",cue:"A tiny drop of batter sizzles gently rather than smoking or burning immediately."},
      {title:"Pour and cook the first side",timerSeconds:150,add:"One ladle of batter. Spread it gently into a thin circle.",action:"Pour batter into the center and spread outward with the back of the ladle. Drizzle a little oil around the edge.",why:"A thin layer cooks through before the outside gets too dark.",cue:"The top begins to look set and the edges lift slightly from the pan."},
      {title:"Flip and finish",timerSeconds:90,add:"Nothing else. Flip only after the first side releases.",action:"Slide a spatula underneath, flip, and cook the second side until golden spots appear.",why:"Waiting for the first side to set makes flipping easier and prevents tearing.",cue:"Both sides have golden patches and the center is cooked. Repeat with the remaining batter."}
    ]
  }
];

const state = {
  selectedId: recipes[0].id,
  category: "All",
  search: "",
  servings: recipes[0].baseServings,
  checkedIngredients: new Set(),
  favorites: loadFavorites(),
  stepIndex: 0,
  timerRemaining: 0,
  timerInterval: null,
  toastTimeout: null
};

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("cookwise-favorites") || "[]");
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("cookwise-favorites", JSON.stringify([...state.favorites]));
  } catch {
    showToast("Favorites could not be saved in this browser.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getSelectedRecipe() {
  return recipes.find(recipe => recipe.id === state.selectedId) || recipes[0];
}

function formatQuantity(value) {
  if (value >= 10) return String(Math.round(value));
  const whole = Math.floor(value + 0.00001);
  const fractional = value - whole;
  const fractions = [
    [0.125, "⅛"], [0.167, "⅙"], [0.25, "¼"], [0.333, "⅓"],
    [0.375, "⅜"], [0.5, "½"], [0.625, "⅝"], [0.667, "⅔"],
    [0.75, "¾"], [0.833, "⅚"], [0.875, "⅞"]
  ];
  const match = fractions.find(([number]) => Math.abs(number - fractional) < 0.025);
  if (match) return whole ? String(whole) + " " + match[1] : match[1];
  if (Math.abs(fractional) < 0.025) return String(whole);
  return value < 1 ? value.toFixed(1) : value.toFixed(1).replace(/\.0$/, "");
}

function ingredientAmount(ingredient, servings, baseServings) {
  if (ingredient.amount === null) return "to taste";
  const quantity = formatQuantity(ingredient.amount * servings / baseServings);
  const noSpace = ingredient.unit === "g" || ingredient.unit === "ml";
  return quantity + (ingredient.unit ? (noSpace ? "" : " ") + ingredient.unit : "");
}

function formatDuration(seconds) {
  if (!seconds) return "No timer";
  const minutes = Math.ceil(seconds / 60);
  return minutes + (minutes === 1 ? " minute" : " minutes");
}

function formatClock(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return String(minutes).padStart(2, "0") + ":" + String(remaining).padStart(2, "0");
}

function renderRecipeList() {
  const query = state.search.trim().toLowerCase();
  const visible = recipes.filter(recipe => {
    const matchesCategory = state.category === "All" || recipe.category === state.category;
    const searchable = [recipe.title, recipe.category, recipe.summary, ...recipe.ingredients.map(item => item.name)].join(" ").toLowerCase();
    return matchesCategory && (!query || searchable.includes(query));
  });
  const list = document.querySelector("#recipeList");
  document.querySelector("#recipeCount").textContent = recipes.length + " dishes";
  document.querySelector("#matchCount").textContent = String(visible.length).padStart(2, "0");
  document.querySelector("#emptySearch").hidden = visible.length > 0;
  list.innerHTML = visible.map(recipe => {
    const selected = recipe.id === state.selectedId;
    const favorite = state.favorites.has(recipe.id) ? " · saved" : "";
    return '<button type="button" class="recipe-tile' + (selected ? " is-selected" : "") + '" data-recipe-id="' + escapeHtml(recipe.id) + '" aria-pressed="' + selected + '">' +
      '<span class="tile-emoji" aria-hidden="true">' + recipe.emoji + '</span>' +
      '<span class="tile-main"><strong>' + escapeHtml(recipe.title) + '</strong><small>' + escapeHtml(recipe.category) + favorite + '</small></span>' +
      '<span class="tile-time">' + recipe.cookMinutes + ' min</span></button>';
  }).join("");
}

function renderDetail() {
  const recipe = getSelectedRecipe();
  const favorite = state.favorites.has(recipe.id);
  const ingredientMarkup = recipe.ingredients.map((ingredient, index) => {
    const checked = state.checkedIngredients.has(index);
    const prep = ingredient.prep ? '<span class="ingredient-prep">' + escapeHtml(ingredient.prep) + '</span>' : "";
    return '<label class="ingredient-check"><input type="checkbox" data-ingredient-index="' + index + '"' + (checked ? " checked" : "") + '><span><span class="ingredient-name">' + escapeHtml(ingredient.name) + '</span>' + prep + '</span><span class="ingredient-amount">' + escapeHtml(ingredientAmount(ingredient, state.servings, recipe.baseServings)) + '</span></label>';
  }).join("");

  const stepMarkup = recipe.steps.map((step, index) => {
    return '<article class="step-card"><div class="step-topline"><div class="step-title"><span class="step-number">' + String(index + 1).padStart(2, "0") + '</span><h4>' + escapeHtml(step.title) + '</h4></div><span class="step-duration">' + escapeHtml(formatDuration(step.timerSeconds)) + '</span></div>' +
      '<p class="step-description">' + escapeHtml(step.action) + '</p><div class="add-strip"><strong>ADD NOW</strong><span>' + escapeHtml(step.add) + '</span></div>' +
      '<div class="step-details"><div class="step-detail-box"><b>WHY IT MATTERS</b><p>' + escapeHtml(step.why) + '</p></div><div class="step-detail-box"><b>LOOK FOR</b><p>' + escapeHtml(step.cue) + '</p></div></div></article>';
  }).join("");

  document.querySelector("#recipeDetail").innerHTML =
    '<div class="recipe-hero ' + escapeHtml(recipe.theme) + '"><div class="recipe-hero-top"><span class="recipe-label">' + escapeHtml(recipe.category.toUpperCase()) + ' · BEGINNER FRIENDLY</span><button type="button" class="favorite-button' + (favorite ? " is-favorite" : "") + '" data-favorite="' + escapeHtml(recipe.id) + '" aria-label="' + (favorite ? "Remove from saved recipes" : "Save recipe") + '" aria-pressed="' + favorite + '">' + (favorite ? "♥" : "♡") + '</button></div><div class="recipe-hero-bottom"><div class="recipe-title-wrap"><h2>' + escapeHtml(recipe.title) + '</h2><p class="recipe-summary">' + escapeHtml(recipe.summary) + '</p></div><span class="hero-emoji" aria-hidden="true">' + recipe.emoji + '</span></div></div>' +
    '<div class="recipe-body"><div class="metric-row"><div class="metric"><span>PREP</span><strong>' + recipe.prepMinutes + ' min</strong></div><div class="metric"><span>COOK</span><strong>' + recipe.cookMinutes + ' min</strong></div><div class="metric"><span>MAKES</span><strong>' + state.servings + ' servings</strong></div><div class="metric"><span>LEVEL</span><strong>' + escapeHtml(recipe.difficulty) + '</strong></div></div>' +
    '<div class="recipe-actions"><div><p class="eyebrow-small">ADJUST THE QUANTITIES</p><div class="serving-control"><button type="button" id="servingsDown" aria-label="Decrease servings" ' + (state.servings <= 1 ? "disabled" : "") + '>−</button><output aria-live="polite">' + state.servings + '</output><button type="button" id="servingsUp" aria-label="Increase servings" ' + (state.servings >= 8 ? "disabled" : "") + '>+</button></div></div><button type="button" class="button button-dark" id="beginCooking">Start cooking <span aria-hidden="true">↗</span></button></div>' +
    '<div class="recipe-columns"><section><div class="column-heading"><div><p class="eyebrow-small">GET READY</p><h3>What you need</h3></div><span>Tap to check off</span></div><div class="ingredient-list">' + ingredientMarkup + '</div><div class="prep-note"><strong>Cookwise note</strong>' + escapeHtml(recipe.note) + '</div></section>' +
    '<section><div class="column-heading"><div><p class="eyebrow-small">IN ORDER, WITH THE WHY</p><h3>How to make it</h3></div><span>' + recipe.steps.length + ' steps</span></div><p class="steps-intro">Each step says exactly what to add, when to add it, and what to notice as it cooks.</p><div class="step-list">' + stepMarkup + '</div></section></div>' +
    '<div class="start-cooking-row"><p><strong>Want to cook hands-free?</strong> Open one instruction at a time with a timer.</p><button type="button" class="button button-outline" id="beginCookingAgain">Open step-by-step mode ↗</button></div>' +
    '<p class="disclaimer">Home cooking times are estimates and vary with equipment and ingredient size. Taste and adjust as you go; check labels for allergens.</p></div>';
}

function renderAll() {
  renderRecipeList();
  renderDetail();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(state.toastTimeout);
  state.toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function chooseRecipe(id) {
  const next = recipes.find(recipe => recipe.id === id);
  if (!next) return;
  state.selectedId = next.id;
  state.servings = next.baseServings;
  state.checkedIngredients = new Set();
  renderAll();
  if (window.matchMedia("(max-width: 700px)").matches) {
    document.querySelector("#recipeDetail").scrollIntoView({behavior:"smooth",block:"start"});
  }
}

function setServings(change) {
  state.servings = Math.max(1, Math.min(8, state.servings + change));
  renderDetail();
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast("Removed from your saved recipes.");
  } else {
    state.favorites.add(id);
    showToast("Recipe saved on this device.");
  }
  saveFavorites();
  renderAll();
}

function clearTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = null;
}

function showTimerDisplay() {
  const step = getSelectedRecipe().steps[state.stepIndex];
  const display = document.querySelector("#timerDisplay");
  const button = document.querySelector("#timerButton");
  display.textContent = formatClock(state.timerRemaining);
  if (state.timerInterval) button.textContent = "Pause timer";
  else if (state.timerRemaining > 0 && state.timerRemaining < step.timerSeconds) button.textContent = "Resume timer";
  else if (state.timerRemaining === 0 && step.timerSeconds > 0) button.textContent = "Start timer again";
  else button.textContent = "Start " + formatClock(step.timerSeconds);
  button.disabled = step.timerSeconds === 0;
  if (step.timerSeconds === 0) {
    display.textContent = "—";
    button.textContent = "No timer needed";
  }
}

function renderCookStep() {
  const recipe = getSelectedRecipe();
  const step = recipe.steps[state.stepIndex];
  clearTimer();
  state.timerRemaining = step.timerSeconds;
  document.querySelector("#dialogRecipeName").textContent = recipe.title + " · " + state.servings + " servings";
  document.querySelector("#dialogProgressBar").style.width = ((state.stepIndex + 1) / recipe.steps.length * 100) + "%";
  document.querySelector("#dialogStepCount").textContent = "STEP " + String(state.stepIndex + 1).padStart(2, "0") + " OF " + String(recipe.steps.length).padStart(2, "0");
  document.querySelector("#dialogStepTime").textContent = formatDuration(step.timerSeconds);
  document.querySelector("#cookStepTitle").textContent = step.title;
  document.querySelector("#dialogAddNow").textContent = step.add;
  document.querySelector("#dialogInstructions").textContent = step.action;
  document.querySelector("#dialogWhy").textContent = step.why;
  document.querySelector("#dialogCue").textContent = step.cue;
  document.querySelector("#previousStep").disabled = state.stepIndex === 0;
  document.querySelector("#nextStep").innerHTML = state.stepIndex === recipe.steps.length - 1 ? "Finish recipe <span aria-hidden='true'>✓</span>" : "Next step <span aria-hidden='true'>→</span>";
  showTimerDisplay();
}

function beginCooking() {
  state.stepIndex = 0;
  const dialog = document.querySelector("#cookDialog");
  renderCookStep();
  if (!dialog.open) dialog.showModal();
}

function toggleTimer() {
  const step = getSelectedRecipe().steps[state.stepIndex];
  if (!step.timerSeconds) return;
  if (state.timerInterval) {
    clearTimer();
    showTimerDisplay();
    return;
  }
  if (state.timerRemaining <= 0) state.timerRemaining = step.timerSeconds;
  state.timerInterval = setInterval(() => {
    state.timerRemaining = Math.max(0, state.timerRemaining - 1);
    showTimerDisplay();
    if (state.timerRemaining === 0) {
      clearTimer();
      showTimerDisplay();
      showToast("Timer finished. Check the cooking cue.");
    }
  }, 1000);
  showTimerDisplay();
}

function moveStep(direction) {
  const recipe = getSelectedRecipe();
  const next = state.stepIndex + direction;
  if (next >= recipe.steps.length) {
    clearTimer();
    document.querySelector("#cookDialog").close();
    showToast(recipe.title + " guide complete. Enjoy your meal!");
    return;
  }
  if (next < 0) return;
  state.stepIndex = next;
  renderCookStep();
}

function closeCookMode() {
  clearTimer();
  const dialog = document.querySelector("#cookDialog");
  if (dialog.open) dialog.close();
}

document.querySelector("#recipeSearch").addEventListener("input", event => {
  state.search = event.target.value;
  renderRecipeList();
});

document.querySelector("#categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach(chip => {
    const selected = chip === button;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderRecipeList();
});

document.querySelector("#recipeList").addEventListener("click", event => {
  const tile = event.target.closest("[data-recipe-id]");
  if (tile) chooseRecipe(tile.dataset.recipeId);
});

document.querySelector("#recipeDetail").addEventListener("click", event => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    toggleFavorite(favorite.dataset.favorite);
    return;
  }
  if (event.target.closest("#servingsDown")) setServings(-1);
  if (event.target.closest("#servingsUp")) setServings(1);
  if (event.target.closest("#beginCooking") || event.target.closest("#beginCookingAgain")) beginCooking();
});

document.querySelector("#recipeDetail").addEventListener("change", event => {
  const checkbox = event.target.closest("[data-ingredient-index]");
  if (!checkbox) return;
  const index = Number(checkbox.dataset.ingredientIndex);
  if (checkbox.checked) state.checkedIngredients.add(index);
  else state.checkedIngredients.delete(index);
});

document.querySelector("#closeCookDialog").addEventListener("click", closeCookMode);
document.querySelector("#previousStep").addEventListener("click", () => moveStep(-1));
document.querySelector("#nextStep").addEventListener("click", () => moveStep(1));
document.querySelector("#timerButton").addEventListener("click", toggleTimer);
document.querySelector("#cookDialog").addEventListener("click", event => {
  if (event.target.id === "cookDialog") closeCookMode();
});
document.querySelector("#cookDialog").addEventListener("close", clearTimer);

document.addEventListener("keydown", event => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#recipeSearch").focus();
  }
});

renderAll();
