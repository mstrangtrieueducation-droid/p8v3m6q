const A = "assets/images/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  {
    "letter": "A",
    "title": "Look and circle the correct words.",
    "note": "Quan sát từng tranh rồi chọn từ diễn tả đúng hình ảnh.",
    "points": 3,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. Choose the correct word.",
        "options": [
          "awful",
          "lovely"
        ],
        "answers": [
          "awful"
        ],
        "explanation": "Bạn nhỏ đang bịt tai và nhăn mặt vì âm thanh rất khó chịu. Awful nghĩa là rất tệ, rất khó chịu.",
        "image": "assets/images/page1-img3-335x243.png"
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. Choose the correct word.",
        "options": [
          "soft",
          "loud"
        ],
        "answers": [
          "loud"
        ],
        "explanation": "Chiếc loa đang phát âm thanh lớn và bạn nhỏ phải hét. Loud nghĩa là to, ồn.",
        "image": "assets/images/page1-img2-326x239.png"
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. Choose the correct word.",
        "options": [
          "slow",
          "fast"
        ],
        "answers": [
          "fast"
        ],
        "explanation": "Bạn nhỏ đang đạp xe rất nhanh. Fast nghĩa là nhanh.",
        "image": "assets/images/page1-img4-273x226.png"
      }
    ]
  },
  {
    "letter": "B",
    "title": "Complete the words. Then match.",
    "note": "Hoàn thành 5 từ chỉ nhạc cụ, sau đó ghép mỗi từ với đúng tranh a-e.",
    "points": 10,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. i _ _ _ r _ _ _ _ t s",
        "answers": [
          "instruments"
        ],
        "explanation": "Instruments nghĩa là các nhạc cụ. Tranh có nhiều loại nhạc cụ khác nhau.",
        "image": "assets/images/page1-img6-375x374.png"
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. t _ _ _ _ u _ _ _ e",
        "answers": [
          "tambourine"
        ],
        "explanation": "Tambourine là trống lắc cầm tay.",
        "image": "assets/images/page1-img8-372x372.png"
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. t r _ _ _ _ l _",
        "answers": [
          "triangle"
        ],
        "explanation": "Triangle là nhạc cụ hình tam giác, được gõ bằng một thanh kim loại.",
        "image": "assets/images/page1-img5-384x373.png"
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4. x _ _ _ p h _ _ _",
        "answers": [
          "xylophone"
        ],
        "explanation": "Xylophone là đàn phiến gõ bằng dùi.",
        "image": "assets/images/page1-img9-456x377.png"
      },
      {
        "id": "B5",
        "type": "input",
        "prompt": "5. c _ _ _ _ l s",
        "answers": [
          "cymbals"
        ],
        "explanation": "Cymbals là hai chiếc chũm chọe được đập vào nhau.",
        "image": "assets/images/page1-img7-381x378.png"
      },
      {
        "id": "B6",
        "type": "choice",
        "prompt": "6. instruments - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c",
          "d",
          "e"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Tranh b có nhiều nhạc cụ nên ghép với instruments.",
        "image": ""
      },
      {
        "id": "B7",
        "type": "choice",
        "prompt": "7. tambourine - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c",
          "d",
          "e"
        ],
        "answers": [
          "d"
        ],
        "explanation": "Tranh d là một chiếc tambourine.",
        "image": ""
      },
      {
        "id": "B8",
        "type": "choice",
        "prompt": "8. triangle - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c",
          "d",
          "e"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Tranh a cho thấy bạn nhỏ đang chơi triangle.",
        "image": ""
      },
      {
        "id": "B9",
        "type": "choice",
        "prompt": "9. xylophone - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c",
          "d",
          "e"
        ],
        "answers": [
          "e"
        ],
        "explanation": "Tranh e là một chiếc xylophone.",
        "image": ""
      },
      {
        "id": "B10",
        "type": "choice",
        "prompt": "10. cymbals - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c",
          "d",
          "e"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Tranh c cho thấy bạn nhỏ đang chơi cymbals.",
        "image": ""
      }
    ]
  },
  {
    "letter": "C",
    "title": "Listen and circle the correct words.",
    "note": "Nghe kỹ từng câu rồi chọn dạng khẳng định hoặc phủ định đúng với audio.",
    "points": 4,
    "audio": "assets/audio/Listening-C.mp3",
    "questions": [
      {
        "id": "C1",
        "type": "choice",
        "prompt": "1. ___ playing a triangle.",
        "options": [
          "He's",
          "He isn't"
        ],
        "answers": [
          "He's"
        ],
        "explanation": "Audio nói He’s playing a triangle: Cậu ấy đang chơi đàn tam giác.",
        "image": ""
      },
      {
        "id": "C2",
        "type": "choice",
        "prompt": "2. ___ striking the cymbals together.",
        "options": [
          "They're",
          "They aren't"
        ],
        "answers": [
          "They're"
        ],
        "explanation": "Audio dùng They’re, nghĩa là họ đang đập hai chiếc chũm chọe vào nhau.",
        "image": ""
      },
      {
        "id": "C3",
        "type": "choice",
        "prompt": "3. ___ shaking the tambourines.",
        "options": [
          "We're",
          "We aren't"
        ],
        "answers": [
          "We aren't"
        ],
        "explanation": "Audio dùng We aren’t, nghĩa là chúng tôi không đang lắc trống tambourine.",
        "image": ""
      },
      {
        "id": "C4",
        "type": "choice",
        "prompt": "4. ___ playing a drum.",
        "options": [
          "I'm",
          "I'm not"
        ],
        "answers": [
          "I'm not"
        ],
        "explanation": "Audio dùng I’m not, nghĩa là tôi không đang chơi trống.",
        "image": ""
      }
    ]
  },
  {
    "letter": "D",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Sắp xếp toàn bộ từ gợi ý thành câu hoàn chỉnh. Nhớ viết hoa đầu câu và đặt dấu chấm.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. the drums / isn't / He / playing",
        "answers": [
          "he isn't playing the drums",
          "he isn't playing the drums."
        ],
        "explanation": "Chủ ngữ He đứng đầu, sau đó là isn’t + playing + the drums: He isn’t playing the drums.",
        "image": ""
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. I'm / the tambourines / striking",
        "answers": [
          "i'm striking the tambourines",
          "i'm striking the tambourines."
        ],
        "explanation": "I’m là I am. Sau I’m dùng động từ thêm -ing: I’m striking the tambourines.",
        "image": ""
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. aren't / They / the cymbals / playing",
        "answers": [
          "they aren't playing the cymbals",
          "they aren't playing the cymbals."
        ],
        "explanation": "Với They, dùng aren’t + playing: They aren’t playing the cymbals.",
        "image": ""
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "4. shaking / You / the triangle / aren't",
        "answers": [
          "you aren't shaking the triangle",
          "you aren't shaking the triangle."
        ],
        "explanation": "Với You, dùng aren’t + shaking: You aren’t shaking the triangle.",
        "image": ""
      }
    ]
  },
  {
    "letter": "E",
    "title": "Look and complete the sentences.",
    "note": "Dùng playing và is, are, isn't hoặc aren't để hoàn thành câu theo tranh.",
    "points": 4,
    "sectionImage": "assets/images/page2-img1-1227x445.png",
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. He ___ the triangle.",
        "answers": [
          "is playing",
          "'s playing"
        ],
        "explanation": "Bạn nam số 1 đang chơi triangle, nên viết is playing. Câu đầy đủ: He is playing the triangle.",
        "image": ""
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. He ___ the cymbals.",
        "answers": [
          "isn't playing",
          "is not playing"
        ],
        "explanation": "Bạn nam số 2 không chơi cymbals, nên viết isn’t playing.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. We ___ the xylophone.",
        "answers": [
          "are playing",
          "'re playing"
        ],
        "explanation": "Hai bạn số 3 đang cùng chơi xylophone. Với We dùng are playing.",
        "image": ""
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. They ___ the drums.",
        "answers": [
          "aren't playing",
          "are not playing"
        ],
        "explanation": "Hai bạn số 4 không chơi trống. Với They dùng aren’t playing.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Look and circle the correct words.",
    "note": "Quan sát hành động trong mỗi tranh rồi chọn đúng cụm từ.",
    "points": 3,
    "questions": [
      {
        "id": "F1",
        "type": "choice",
        "prompt": "1. Choose the correct activity.",
        "options": [
          "play",
          "ballet"
        ],
        "answers": [
          "ballet"
        ],
        "explanation": "Các bạn đang múa ba-lê, nên chọn ballet.",
        "image": "assets/images/page3-img2-527x360.png"
      },
      {
        "id": "F2",
        "type": "choice",
        "prompt": "2. Choose the correct activity.",
        "options": [
          "take pictures",
          "give money"
        ],
        "answers": [
          "give money"
        ],
        "explanation": "Bạn nhỏ đang bỏ tiền vào chiếc xô, nên chọn give money.",
        "image": "assets/images/page3-img3-487x348.png"
      },
      {
        "id": "F3",
        "type": "choice",
        "prompt": "3. Choose the correct activity.",
        "options": [
          "sing",
          "clap"
        ],
        "answers": [
          "clap"
        ],
        "explanation": "Mọi người đang vỗ tay, nên chọn clap.",
        "image": "assets/images/page3-img4-529x378.png"
      }
    ]
  },
  {
    "letter": "G",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio rồi điền đúng một từ vào mỗi chỗ trống.",
    "points": 4,
    "audio": "assets/audio/Listening-G.mp3",
    "questions": [
      {
        "id": "G1",
        "type": "input",
        "prompt": "1. I ___ to the beat of the music.",
        "answers": [
          "clap"
        ],
        "explanation": "Clap nghĩa là vỗ tay. Câu đầy đủ: I clap to the beat of the music.",
        "image": ""
      },
      {
        "id": "G2",
        "type": "input",
        "prompt": "2. The boy ___ a ticket to the circus.",
        "answers": [
          "buys"
        ],
        "explanation": "The boy là một bạn nam, vì vậy động từ buy thêm -s: buys.",
        "image": ""
      },
      {
        "id": "G3",
        "type": "input",
        "prompt": "3. We ___ in our music lesson at school.",
        "answers": [
          "sing"
        ],
        "explanation": "Với We, động từ giữ nguyên: We sing.",
        "image": ""
      },
      {
        "id": "G4",
        "type": "input",
        "prompt": "4. People ___ at a concert.",
        "answers": [
          "dance"
        ],
        "explanation": "People là nhiều người, nên dùng động từ nguyên mẫu dance.",
        "image": ""
      }
    ]
  },
  {
    "letter": "H",
    "title": "Complete the words. Then match.",
    "note": "Hoàn thành 3 từ chỉ sự kiện, sau đó ghép mỗi từ với tranh a-c.",
    "points": 6,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. c _ _ _ _ _ t",
        "answers": [
          "concert"
        ],
        "explanation": "Concert nghĩa là buổi hòa nhạc.",
        "image": "assets/images/page3-img6-600x300.png"
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. p _ _ _ _ e",
        "answers": [
          "parade"
        ],
        "explanation": "Parade nghĩa là cuộc diễu hành.",
        "image": "assets/images/page3-img7-600x300.png"
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. p _ _ _ _ t - s _ _ w",
        "answers": [
          "puppet show",
          "puppet-show"
        ],
        "explanation": "Puppet show nghĩa là buổi biểu diễn múa rối.",
        "image": "assets/images/page3-img5-600x300.png"
      },
      {
        "id": "H4",
        "type": "choice",
        "prompt": "4. concert - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Tranh a là các bạn biểu diễn nhạc trên sân khấu.",
        "image": ""
      },
      {
        "id": "H5",
        "type": "choice",
        "prompt": "5. parade - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Tranh b là đoàn người đang diễu hành trên đường.",
        "image": ""
      },
      {
        "id": "H6",
        "type": "choice",
        "prompt": "6. puppet show - choose the matching picture.",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Tranh c là một buổi biểu diễn múa rối.",
        "image": ""
      }
    ]
  },
  {
    "letter": "I",
    "title": "Circle the correct words.",
    "note": "Chọn từ đúng để tạo câu hỏi ở thì Hiện tại tiếp diễn.",
    "points": 4,
    "questions": [
      {
        "id": "I1",
        "type": "choice",
        "prompt": "1. ___ I singing too fast?",
        "options": [
          "Are",
          "Am"
        ],
        "answers": [
          "Am"
        ],
        "explanation": "Với chủ ngữ I, câu hỏi dùng Am: Am I singing too fast?",
        "image": ""
      },
      {
        "id": "I2",
        "type": "choice",
        "prompt": "2. What ___ he playing?",
        "options": [
          "is",
          "are"
        ],
        "answers": [
          "is"
        ],
        "explanation": "He là một bạn nam, ngôi thứ ba số ít, nên dùng is.",
        "image": ""
      },
      {
        "id": "I3",
        "type": "choice",
        "prompt": "3. Is she ___ the drum?",
        "options": [
          "shakes",
          "shaking"
        ],
        "answers": [
          "shaking"
        ],
        "explanation": "Sau is trong thì Hiện tại tiếp diễn, động từ phải thêm -ing: shaking.",
        "image": ""
      },
      {
        "id": "I4",
        "type": "choice",
        "prompt": "4. What ___ we practicing?",
        "options": [
          "are",
          "is"
        ],
        "answers": [
          "are"
        ],
        "explanation": "Với chủ ngữ We, câu hỏi dùng are.",
        "image": ""
      }
    ]
  },
  {
    "letter": "J",
    "title": "Look and read. Write the answers.",
    "note": "Quan sát đúng người được đánh số trong tranh rồi chọn câu trả lời ngắn phù hợp.",
    "points": 4,
    "sectionImage": "assets/images/section-j-numbered.jpg",
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. Are they singing?",
        "options": [
          "Yes, they are.",
          "No, they aren't."
        ],
        "answers": [
          "No, they aren't."
        ],
        "explanation": "Những người số 1 đang nhảy, không phải đang hát, nên trả lời No, they aren’t.",
        "image": ""
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. Is he dancing?",
        "options": [
          "Yes, he is.",
          "No, he isn't."
        ],
        "answers": [
          "No, he isn't."
        ],
        "explanation": "Người số 2 đang hát vào micro, không phải đang nhảy.",
        "image": ""
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. Is she taking pictures?",
        "options": [
          "Yes, she is.",
          "No, she isn't."
        ],
        "answers": [
          "Yes, she is."
        ],
        "explanation": "Người số 3 đang cầm máy ảnh và chụp hình.",
        "image": ""
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. Is she taking a nap?",
        "options": [
          "Yes, she is.",
          "No, she isn't."
        ],
        "answers": [
          "No, she isn't."
        ],
        "explanation": "Người số 4 đang chơi trống, không phải đang ngủ.",
        "image": ""
      }
    ]
  },
  {
    "letter": "K",
    "title": "Write the questions. Look at the pictures and answer.",
    "note": "Mỗi tranh có hai ý: sắp xếp từ thành câu hỏi, sau đó viết câu trả lời theo hành động trong tranh.",
    "points": 4,
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1a. he / What / is / doing",
        "answers": [
          "what is he doing",
          "what is he doing?"
        ],
        "explanation": "Đưa từ hỏi What lên đầu, sau đó là is + he + doing: What is he doing?",
        "image": "assets/images/page4-img3-329x237.png"
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "1b. Answer question 1.",
        "answers": [
          "he's buying a ticket",
          "he is buying a ticket",
          "he's buying a ticket.",
          "he is buying a ticket."
        ],
        "explanation": "Người đàn ông đang mua vé ở quầy. Câu trả lời là He’s buying a ticket.",
        "image": ""
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "2a. are / doing / they / What",
        "answers": [
          "what are they doing",
          "what are they doing?"
        ],
        "explanation": "Với chủ ngữ they, dùng are: What are they doing?",
        "image": "assets/images/page4-img4-337x210.png"
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "2b. Answer question 2.",
        "answers": [
          "they're dancing",
          "they are dancing",
          "they're dancing.",
          "they are dancing."
        ],
        "explanation": "Hai bạn đang nhảy. Câu trả lời là They’re dancing.",
        "image": ""
      }
    ]
  }
];

const form = document.querySelector("#testForm");
const root = document.querySelector("#sections");
const jumpRoot = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test8-v1-source-audit-v2";

render();
restore();
update();

form.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  const question = button.closest(".question");
  question.querySelectorAll("[data-choice]").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  question.dataset.value = button.dataset.value;
  question.classList.remove("is-missing");
  save();
  update();
});

form.addEventListener("input", (event) => {
  if (!event.target.matches("input")) return;
  event.target.closest(".question")?.classList.remove("is-missing");
  save();
  update();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelectorAll(".is-missing").forEach((item) => item.classList.remove("is-missing"));
  const incomplete = missing();
  if (incomplete.length) {
    incomplete.forEach((item) => item.closest(".question").classList.add("is-missing"));
    document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${incomplete.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`;
    incomplete[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  grade();
});

document.querySelector("#restartTest").onclick = () => {
  if (confirm("Em muốn xóa toàn bộ câu trả lời và làm lại từ đầu?")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
};

document.querySelector("#reviewMistakes").onclick = () => {
  (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });
};

function render() {
  sections.forEach((section) => {
    const jump = document.createElement("button");
    jump.type = "button";
    jump.textContent = section.letter;
    jump.dataset.jump = section.letter;
    jump.onclick = () => document.querySelector("#section-" + section.letter).scrollIntoView({ behavior: "smooth" });
    jumpRoot.appendChild(jump);

    const element = document.createElement("section");
    element.className = "test-section";
    element.id = "section-" + section.letter;
    element.innerHTML = `<header class="section-heading"><span class="section-letter">${section.letter}</span><div><h2>${section.title}</h2><p>${section.note}</p></div><span class="section-points">/${section.points}</span></header>${section.audio ? `<div class="audio-panel"><p>Audio phần ${section.letter}</p><audio controls preload="metadata" src="${section.audio}"></audio></div>` : ""}${sectionImage(section)}<div class="question-list">${section.questions.map((question, index) => questionMarkup(section, question, index)).join("")}</div>`;
    root.appendChild(element);
  });
}

function questionMarkup(section, question, index) {
  const label = section.letter + (index + 1);
  const control = question.type === "choice"
    ? `<div class="choice-grid">${question.options.map((option, optionIndex) => `<button type="button" class="choice" data-choice data-value="${escapeHtml(option)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span></button>`).join("")}</div>`
    : `<input class="answer-input" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`;
  return `<article class="question" data-id="${question.id}"><span class="question-number">${label}</span><div class="question-copy">${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh họa câu ${label}">` : ""}<p class="question-prompt">${question.prompt}</p>${control}</div></article>`;
}

function sectionImage(section) {
  return section.sectionImage ? `<img class="source-image" src="${section.sectionImage}" alt="Hình minh họa phần ${section.letter}">` : "";
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[?.!,]/g, "").replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

function missing() {
  const output = [];
  sections.forEach((section) => section.questions.forEach((question) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      if (!element.dataset.value) output.push(element.querySelector(".choice"));
    } else {
      const field = element.querySelector("input");
      if (!field.value.trim()) output.push(field);
    }
  }));
  return output;
}

function grade() {
  let score = 0;
  const reviews = [];
  sections.forEach((section) => section.questions.forEach((question, index) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    const value = question.type === "choice" ? element.dataset.value || "" : element.querySelector("input").value;
    const correct = matches(value, question.answers);
    if (correct) score++;
    reviews.push({ question, label: section.letter + (index + 1), value, correct });
  }));

  scoreValue.textContent = score;
  scoreMessage.textContent = score === 50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`;
  answerReview.innerHTML = reviews.map((review) => `<article class="review-card ${review.correct ? "" : "is-wrong"}"><div class="review-head"><h3>Câu ${review.label}</h3><span class="review-status">${review.correct ? "1/1" : "0/1"} điểm</span></div><p class="review-question">${review.question.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(review.value || "(trống)")}</b></span><span>Đáp án: <b>${html(review.question.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${review.question.explanation}</p></article>`).join("");
  results.hidden = false;
  form.hidden = true;
  document.querySelector("#stickyProgress").hidden = true;
  results.scrollIntoView({ behavior: "smooth" });
}

function update() {
  let total = 0;
  sections.forEach((section) => {
    let completed = 0;
    section.questions.forEach((question) => {
      const element = document.querySelector(`[data-id="${question.id}"]`);
      const done = question.type === "choice" ? Boolean(element.dataset.value) : Boolean(element.querySelector("input").value.trim());
      if (done) { total++; completed++; }
    });
    const jump = document.querySelector(`[data-jump="${section.letter}"]`);
    jump.classList.toggle("has-progress", completed > 0);
    jump.classList.toggle("is-complete", completed === section.questions.length);
  });
  progressText.textContent = `${total} / 50`;
  progressBar.style.width = `${total * 2}%`;
}

function save() {
  const data = {};
  sections.forEach((section) => section.questions.forEach((question) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    data[question.id] = question.type === "choice" ? element.dataset.value || "" : element.querySelector("input").value;
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restore() {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch {}
  sections.forEach((section) => section.questions.forEach((question) => {
    const value = data[question.id];
    if (!value) return;
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      element.dataset.value = value;
      element.querySelectorAll("[data-choice]").forEach((button) => {
        const selected = button.dataset.value === value;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });
    } else {
      element.querySelector("input").value = value;
    }
  }));
}

function html(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}

function escapeHtml(value) { return html(value); }
