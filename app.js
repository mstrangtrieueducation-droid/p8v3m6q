const A = "assets/images/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  { letter: "A", title: "Look and circle the correct words.", note: "Quan sát từng tranh rồi chọn từ diễn tả đúng hình ảnh.", points: 3, questions: [
    choice("A1", "1. Choose the correct word.", ["awful", "lovely"], "awful", "Bạn nhỏ đang bịt tai và nhăn mặt vì âm thanh rất khó chịu. Awful nghĩa là rất tệ, rất khó chịu.", A + "page1-img3-335x243.png"),
    choice("A2", "2. Choose the correct word.", ["soft", "loud"], "loud", "Chiếc loa đang phát âm thanh lớn và bạn nhỏ phải hét. Loud nghĩa là to, ồn.", A + "page1-img2-326x239.png"),
    choice("A3", "3. Choose the correct word.", ["slow", "fast"], "fast", "Bạn nhỏ đang đạp xe rất nhanh. Fast nghĩa là nhanh.", A + "page1-img4-273x226.png") ] },

  { letter: "B", title: "Complete the words. Then match.", note: "Hoàn thành 5 từ chỉ nhạc cụ, sau đó ghép mỗi từ với đúng tranh a-e.", points: 10, questions: [
    input("B1", "1. i _ _ _ r _ _ _ _ t s", ["instruments"], "Instruments nghĩa là các nhạc cụ. Tranh có nhiều loại nhạc cụ khác nhau.", A + "page1-img6-375x374.png"),
    input("B2", "2. t _ _ _ _ u _ _ _ e", ["tambourine"], "Tambourine là trống lắc cầm tay.", A + "page1-img8-372x372.png"),
    input("B3", "3. t r _ _ _ _ l _", ["triangle"], "Triangle là nhạc cụ hình tam giác, được gõ bằng một thanh kim loại.", A + "page1-img5-384x373.png"),
    input("B4", "4. x _ _ _ p h _ _ _", ["xylophone"], "Xylophone là đàn phiến gõ bằng dùi.", A + "page1-img9-456x377.png"),
    input("B5", "5. c _ _ _ _ l s", ["cymbals"], "Cymbals là hai chiếc chũm chọe được đập vào nhau.", A + "page1-img7-381x378.png"),
    choice("B6", "6. instruments - choose the matching picture.", ["a", "b", "c", "d", "e"], "b", "Tranh b có nhiều nhạc cụ nên ghép với instruments."),
    choice("B7", "7. tambourine - choose the matching picture.", ["a", "b", "c", "d", "e"], "d", "Tranh d là một chiếc tambourine."),
    choice("B8", "8. triangle - choose the matching picture.", ["a", "b", "c", "d", "e"], "a", "Tranh a cho thấy bạn nhỏ đang chơi triangle."),
    choice("B9", "9. xylophone - choose the matching picture.", ["a", "b", "c", "d", "e"], "e", "Tranh e là một chiếc xylophone."),
    choice("B10", "10. cymbals - choose the matching picture.", ["a", "b", "c", "d", "e"], "c", "Tranh c cho thấy bạn nhỏ đang chơi cymbals.") ] },

  { letter: "C", title: "Listen and circle the correct words.", note: "Nghe kỹ từng câu rồi chọn dạng khẳng định hoặc phủ định đúng với audio.", points: 4, audio: "assets/audio/Listening-C.mp3", questions: [
    choice("C1", "1. ___ playing a triangle.", ["He's", "He isn't"], "He's", "Audio nói He’s playing a triangle: Cậu ấy đang chơi đàn tam giác."),
    choice("C2", "2. ___ striking the cymbals together.", ["They're", "They aren't"], "They're", "Audio dùng They’re, nghĩa là họ đang đập hai chiếc chũm chọe vào nhau."),
    choice("C3", "3. ___ shaking the tambourines.", ["We're", "We aren't"], "We aren't", "Audio dùng We aren’t, nghĩa là chúng tôi không đang lắc trống tambourine."),
    choice("C4", "4. ___ playing a drum.", ["I'm", "I'm not"], "I'm not", "Audio dùng I’m not, nghĩa là tôi không đang chơi trống.") ] },

  { letter: "D", title: "Write the words in the correct order to make sentences.", note: "Sắp xếp toàn bộ từ gợi ý thành câu hoàn chỉnh. Nhớ viết hoa đầu câu và đặt dấu chấm.", points: 4, questions: [
    input("D1", "1. the drums / isn't / He / playing", ["he isn't playing the drums", "he isn't playing the drums."], "Chủ ngữ He đứng đầu, sau đó là isn’t + playing + the drums: He isn’t playing the drums."),
    input("D2", "2. I'm / the tambourines / striking", ["i'm striking the tambourines", "i'm striking the tambourines."], "I’m là I am. Sau I’m dùng động từ thêm -ing: I’m striking the tambourines."),
    input("D3", "3. aren't / They / the cymbals / playing", ["they aren't playing the cymbals", "they aren't playing the cymbals."], "Với They, dùng aren’t + playing: They aren’t playing the cymbals."),
    input("D4", "4. shaking / You / the triangle / aren't", ["you aren't shaking the triangle", "you aren't shaking the triangle."], "Với You, dùng aren’t + shaking: You aren’t shaking the triangle.") ] },

  { letter: "E", title: "Look and complete the sentences.", note: "Dùng playing và is, are, isn't hoặc aren't để hoàn thành câu theo tranh.", points: 4, sectionImage: A + "page2-img1-1227x445.png", questions: [
    input("E1", "1. He ___ the triangle.", ["is playing", "'s playing"], "Bạn nam số 1 đang chơi triangle, nên viết is playing. Câu đầy đủ: He is playing the triangle."),
    input("E2", "2. He ___ the cymbals.", ["isn't playing", "is not playing"], "Bạn nam số 2 không chơi cymbals, nên viết isn’t playing."),
    input("E3", "3. We ___ the xylophone.", ["are playing", "'re playing"], "Hai bạn số 3 đang cùng chơi xylophone. Với We dùng are playing."),
    input("E4", "4. They ___ the drums.", ["aren't playing", "are not playing"], "Hai bạn số 4 không chơi trống. Với They dùng aren’t playing.") ] },

  { letter: "F", title: "Look and circle the correct words.", note: "Quan sát hành động trong mỗi tranh rồi chọn đúng cụm từ.", points: 3, questions: [
    choice("F1", "1. Choose the correct activity.", ["play", "ballet"], "ballet", "Các bạn đang múa ba-lê, nên chọn ballet.", A + "page3-img2-527x360.png"),
    choice("F2", "2. Choose the correct activity.", ["take pictures", "give money"], "give money", "Bạn nhỏ đang bỏ tiền vào chiếc xô, nên chọn give money.", A + "page3-img3-487x348.png"),
    choice("F3", "3. Choose the correct activity.", ["sing", "clap"], "clap", "Mọi người đang vỗ tay, nên chọn clap.", A + "page3-img4-529x378.png") ] },

  { letter: "G", title: "Listen and complete the sentences.", note: "Nghe audio rồi điền đúng một từ vào mỗi chỗ trống.", points: 4, audio: "assets/audio/Listening-G.mp3", questions: [
    input("G1", "1. I ___ to the beat of the music.", ["clap"], "Clap nghĩa là vỗ tay. Câu đầy đủ: I clap to the beat of the music."),
    input("G2", "2. The boy ___ a ticket to the circus.", ["buys"], "The boy là một bạn nam, vì vậy động từ buy thêm -s: buys."),
    input("G3", "3. We ___ in our music lesson at school.", ["sing"], "Với We, động từ giữ nguyên: We sing."),
    input("G4", "4. People ___ at a concert.", ["dance"], "People là nhiều người, nên dùng động từ nguyên mẫu dance.") ] },

  { letter: "H", title: "Complete the words. Then match.", note: "Hoàn thành 3 từ chỉ sự kiện, sau đó ghép mỗi từ với tranh a-c.", points: 6, questions: [
    input("H1", "1. c _ _ _ _ _ t", ["concert"], "Concert nghĩa là buổi hòa nhạc.", A + "page3-img6-600x300.png"),
    input("H2", "2. p _ _ _ _ e", ["parade"], "Parade nghĩa là cuộc diễu hành.", A + "page3-img7-600x300.png"),
    input("H3", "3. p _ _ _ _ t - s _ _ w", ["puppet show", "puppet-show"], "Puppet show nghĩa là buổi biểu diễn múa rối.", A + "page3-img5-600x300.png"),
    choice("H4", "4. concert - choose the matching picture.", ["a", "b", "c"], "a", "Tranh a là các bạn biểu diễn nhạc trên sân khấu."),
    choice("H5", "5. parade - choose the matching picture.", ["a", "b", "c"], "b", "Tranh b là đoàn người đang diễu hành trên đường."),
    choice("H6", "6. puppet show - choose the matching picture.", ["a", "b", "c"], "c", "Tranh c là một buổi biểu diễn múa rối.") ] },

  { letter: "I", title: "Circle the correct words.", note: "Chọn từ đúng để tạo câu hỏi ở thì Hiện tại tiếp diễn.", points: 4, questions: [
    choice("I1", "1. ___ I singing too fast?", ["Are", "Am"], "Am", "Với chủ ngữ I, câu hỏi dùng Am: Am I singing too fast?"),
    choice("I2", "2. What ___ he playing?", ["is", "are"], "is", "He là một bạn nam, ngôi thứ ba số ít, nên dùng is."),
    choice("I3", "3. Is she ___ the drum?", ["shakes", "shaking"], "shaking", "Sau is trong thì Hiện tại tiếp diễn, động từ phải thêm -ing: shaking."),
    choice("I4", "4. What ___ we practicing?", ["are", "is"], "are", "Với chủ ngữ We, câu hỏi dùng are.") ] },

  { letter: "J", title: "Look and read. Write the answers.", note: "Quan sát đúng người được đánh số trong tranh rồi chọn câu trả lời ngắn phù hợp.", points: 4, sectionImage: A + "section-j-numbered.jpg", questions: [
    choice("J1", "1. Are they singing?", ["Yes, they are.", "No, they aren't."], "No, they aren't.", "Những người số 1 đang nhảy, không phải đang hát, nên trả lời No, they aren’t."),
    choice("J2", "2. Is he dancing?", ["Yes, he is.", "No, he isn't."], "No, he isn't.", "Người số 2 đang hát vào micro, không phải đang nhảy."),
    choice("J3", "3. Is she taking pictures?", ["Yes, she is.", "No, she isn't."], "Yes, she is.", "Người số 3 đang cầm máy ảnh và chụp hình."),
    choice("J4", "4. Is she taking a nap?", ["Yes, she is.", "No, she isn't."], "No, she isn't.", "Người số 4 đang chơi trống, không phải đang ngủ.") ] },

  { letter: "K", title: "Write the questions. Look at the pictures and answer.", note: "Mỗi tranh có hai ý: sắp xếp từ thành câu hỏi, sau đó viết câu trả lời theo hành động trong tranh.", points: 4, questions: [
    input("K1", "1a. he / What / is / doing", ["what is he doing", "what is he doing?"], "Đưa từ hỏi What lên đầu, sau đó là is + he + doing: What is he doing?", A + "page4-img3-329x237.png"),
    input("K2", "1b. Answer question 1.", ["he's buying a ticket", "he is buying a ticket", "he's buying a ticket.", "he is buying a ticket."], "Người đàn ông đang mua vé ở quầy. Câu trả lời là He’s buying a ticket."),
    input("K3", "2a. are / doing / they / What", ["what are they doing", "what are they doing?"], "Với chủ ngữ they, dùng are: What are they doing?", A + "page4-img4-337x210.png"),
    input("K4", "2b. Answer question 2.", ["they're dancing", "they are dancing", "they're dancing.", "they are dancing."], "Hai bạn đang nhảy. Câu trả lời là They’re dancing.") ] }
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
const STORAGE_KEY = "discover1-written-test8-v1";

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

function matches(value, answers) {
  return answers.some((answer) => normalize(answer) === normalize(value));
}

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
