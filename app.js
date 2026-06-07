const exams = {
  jeeMain: {
    name: "JEE Main",
    total: 300,
    candidates: 1400000,
    label: "NTA score estimate",
    confidence: "High confidence",
    mode: "Official formula + trend curve",
    sources: ["NTA percentile method", "JEE Main historical shifts"],
    anchors: [
      [0, 0.05], [25, 13], [50, 48], [75, 73], [100, 88], [120, 93.5],
      [140, 96], [160, 97.8], [180, 98.75], [200, 99.25], [220, 99.55],
      [240, 99.75], [260, 99.9], [280, 99.97], [300, 100]
    ],
    insight(percentile) {
      if (percentile >= 99.5) return "Excellent JEE Main zone. This is normally a strong NIT/IIIT/GFTI position, with branch and home-state choices deciding the final outcome.";
      if (percentile >= 97) return "Strong zone. You should be competitive for many NIT/IIIT branches, but top CSE seats usually need a higher percentile.";
      if (percentile >= 90) return "Good qualifying zone. Focus on category, home-state quota, and branch flexibility during counselling.";
      return "This is a building zone. Use this estimate to set a target score gap and prioritise high-yield chapters.";
    }
  },
  jeeAdvanced: {
    name: "JEE Advanced",
    total: 360,
    candidates: 190000,
    label: "Aggregate marks",
    confidence: "Medium confidence",
    mode: "Official 2025 rank anchors",
    primaryUnit: "estimated rank percentile",
    anchors: [
      [0, 0.1], [36, 8], [74, 38], [95, 55], [110, 65], [130, 76],
      [150, 86], [170, 92], [190, 96], [220, 98.5], [250, 99.35],
      [280, 99.75], [310, 99.93], [332, 99.99], [360, 100]
    ],
    insight(percentile, rank) {
      if (rank <= 1000) return "Elite Advanced range. Top IIT branches become realistic, though exact branch depends heavily on category and seat matrix.";
      if (rank <= 5000) return "Very strong Advanced range. Many IIT options should be open, with branch tradeoffs.";
      if (rank <= 15000) return "IIT admission may be possible depending on category, branch, and counselling choices.";
      return "This estimate is below the safer IIT range. Check subject-wise cutoffs too, because JEE Advanced rank eligibility requires both aggregate and subject minimums.";
    }
  },
  mhtCet: {
    name: "MHT CET PCM",
    total: 200,
    candidates: 420000,
    label: "PCM marks",
    confidence: "High confidence",
    mode: "CET Cell percentile method + trend curve",
    anchors: [
      [0, 0.09], [20, 8], [40, 35], [60, 65], [80, 86], [100, 94],
      [115, 97], [130, 98.5], [145, 99.4], [160, 99.8], [175, 99.93],
      [190, 99.99], [200, 100]
    ],
    insight(percentile) {
      if (percentile >= 99.5) return "Top MHT CET zone. This is the range where highly demanded Mumbai/Pune colleges and branches become realistic.";
      if (percentile >= 97) return "Strong MHT CET zone. Good college options should open, especially with sensible branch choices.";
      if (percentile >= 90) return "Competitive zone. CAP round strategy and category/home university rules will matter a lot.";
      return "Use this as a target planner. MHT CET percentiles are shift-normalised, so official results may move from raw score estimates.";
    }
  },
  kcet: {
    name: "KCET Engineering",
    total: 180,
    candidates: 250000,
    label: "KCET marks",
    confidence: "Medium confidence",
    mode: "50:50 board + CET merit estimate",
    anchors: [
      [0, 0.1], [35, 25], [55, 50], [75, 70], [95, 84], [115, 92],
      [135, 97], [150, 99], [165, 99.7], [180, 100]
    ],
    usesBoard: true,
    insight(percentile) {
      if (percentile >= 99) return "Excellent KCET merit zone. Top college choices become realistic, but board marks can still shift rank.";
      if (percentile >= 95) return "Strong KCET zone. Your final merit can improve noticeably if your board PCM score is high.";
      if (percentile >= 85) return "Good competitive range. College choice depends strongly on category, locality, and branch preference.";
      return "KCET rank is sensitive to board marks. Try the board toggle to see a more realistic merit estimate.";
    }
  },
  wbjee: {
    name: "WBJEE",
    total: 200,
    candidates: 120000,
    label: "WBJEE score",
    confidence: "Medium confidence",
    mode: "Marks-to-rank trend estimate",
    anchors: [[0, 0.1], [30, 35], [50, 62], [70, 80], [90, 92], [110, 97], [130, 99], [150, 99.7], [180, 99.95], [200, 100]],
    insight: genericInsight
  },
  comedk: {
    name: "COMEDK UGET",
    total: 180,
    candidates: 120000,
    label: "COMEDK marks",
    confidence: "Medium confidence",
    mode: "Marks-to-rank trend estimate",
    anchors: [[0, 0.1], [35, 35], [55, 58], [75, 76], [95, 90], [110, 96], [125, 98.5], [140, 99.4], [160, 99.85], [180, 100]],
    insight: genericInsight
  },
  bitsat: {
    name: "BITSAT",
    total: 390,
    candidates: 300000,
    label: "BITSAT score",
    confidence: "Medium confidence",
    mode: "Score band estimate",
    anchors: [[0, 0.1], [120, 35], [160, 58], [200, 76], [230, 88], [260, 95], [290, 98], [320, 99.3], [350, 99.85], [390, 100]],
    insight(percentile) {
      if (percentile >= 98) return "Excellent BITSAT range. Higher-demand branches become possible depending on campus and annual cutoff movement.";
      if (percentile >= 92) return "Strong BITSAT range. You should compare this score with recent campus-wise cutoffs.";
      return "BITSAT admission is cutoff-score based, so treat percentile as a relative strength indicator rather than the final counselling metric.";
    }
  },
  gujcet: {
    name: "GUJCET",
    total: 120,
    candidates: 125000,
    label: "GUJCET marks",
    confidence: "Medium confidence",
    mode: "Board-weighted merit estimate",
    anchors: [[0, 0.1], [20, 28], [35, 55], [50, 75], [65, 88], [80, 96], [95, 99], [110, 99.8], [120, 100]],
    usesBoard: true,
    insight: genericInsight
  },
  apEapcet: {
    name: "AP EAPCET",
    total: 160,
    candidates: 230000,
    label: "EAPCET marks",
    confidence: "Medium confidence",
    mode: "State CET trend estimate",
    anchors: [[0, 0.1], [30, 30], [45, 52], [60, 72], [75, 86], [90, 94], [105, 98], [120, 99.3], [140, 99.85], [160, 100]],
    insight: genericInsight
  },
  tsEamcet: {
    name: "TG EAPCET / TS EAMCET",
    total: 160,
    candidates: 250000,
    label: "EAPCET marks",
    confidence: "Medium confidence",
    mode: "State CET trend estimate",
    anchors: [[0, 0.1], [30, 28], [45, 50], [60, 70], [75, 84], [90, 93], [105, 97.5], [120, 99], [140, 99.8], [160, 100]],
    insight: genericInsight
  }
};

const sources = [
  ["NTA JEE Main", "Official percentile normalisation formula", "https://jeemain.nta.nic.in/"],
  ["MHT CET Cell", "Result processing and percentile methodology", "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MHT-CET-2025-Result-Processing-Methodology.pdf"],
  ["JEE Advanced", "2025 report and result cutoffs", "https://jeeadv.ac.in/reports/2025.pdf"],
  ["JEE Advanced", "2025 result press release", "https://jeeadv.ac.in/documents/Result2025PressRelease.pdf"]
];

const examSelect = document.querySelector("#examSelect");
const scoreInput = document.querySelector("#scoreInput");
const totalInput = document.querySelector("#totalInput");
const candidatesInput = document.querySelector("#candidatesInput");
const difficultySelect = document.querySelector("#difficultySelect");
const scoreSlider = document.querySelector("#scoreSlider");
const sliderValue = document.querySelector("#sliderValue");
const scoreLabel = document.querySelector("#scoreLabel");
const boardToggle = document.querySelector("#boardToggle");
const boardPanel = document.querySelector("#boardPanel");
const boardInput = document.querySelector("#boardInput");
const quickButtons = document.querySelectorAll("[data-score-preset]");

for (const [key, exam] of Object.entries(exams)) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = exam.name;
  examSelect.append(option);
}

document.querySelector("#sourceGrid").innerHTML = sources.map(([title, text, url]) => `
  <a href="${url}" target="_blank" rel="noreferrer">
    <strong>${title}</strong>
    <span>${text}</span>
  </a>
`).join("");

examSelect.addEventListener("change", () => {
  const exam = currentExam();
  totalInput.value = exam.total;
  candidatesInput.value = exam.candidates;
  scoreInput.value = Math.round(exam.total * 0.5);
  scoreSlider.max = exam.total;
  scoreSlider.value = scoreInput.value;
  boardToggle.checked = Boolean(exam.usesBoard);
  boardPanel.hidden = !boardToggle.checked;
  update();
});

[scoreInput, totalInput, candidatesInput, difficultySelect, boardInput, boardToggle].forEach((control) => {
  control.addEventListener("input", update);
});

scoreSlider.addEventListener("input", () => {
  scoreInput.value = scoreSlider.value;
  update();
});

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const total = Math.max(1, Number(totalInput.value || currentExam().total));
    scoreInput.value = Math.round(total * Number(button.dataset.scorePreset));
    update();
  });
});

function currentExam() {
  return exams[examSelect.value || "jeeMain"];
}

function interpolate(score, anchors) {
  if (score <= anchors[0][0]) return anchors[0][1];
  for (let i = 1; i < anchors.length; i += 1) {
    const [x1, y1] = anchors[i - 1];
    const [x2, y2] = anchors[i];
    if (score <= x2) {
      const t = (score - x1) / (x2 - x1);
      const eased = t * t * (3 - 2 * t);
      return y1 + (y2 - y1) * eased;
    }
  }
  return anchors.at(-1)[1];
}

function difficultyOffset(value, total) {
  const ratio = value / total;
  if (difficultySelect.value === "tough") return 1.1 + (1 - ratio) * 1.4;
  if (difficultySelect.value === "easy") return -1.2 - ratio * 1.5;
  return 0;
}

function getPrediction(score, exam, total) {
  const scaled = score * (exam.total / total);
  let percentile = interpolate(scaled, exam.anchors);
  percentile += difficultyOffset(score, total);

  if (boardToggle.checked && exam.usesBoard) {
    const board = clamp(Number(boardInput.value || 0), 0, 100);
    const boardPercentile = Math.pow(board / 100, 1.7) * 100;
    percentile = percentile * 0.5 + boardPercentile * 0.5;
  }

  return clamp(percentile, 0.01, 100);
}

function update() {
  const exam = currentExam();
  const total = Math.max(1, Number(totalInput.value || exam.total));
  const score = clamp(Number(scoreInput.value || 0), 0, total);
  const candidates = Math.max(1000, Number(candidatesInput.value || exam.candidates));
  const percentile = getPrediction(score, exam, total);
  const rank = Math.max(1, Math.round(((100 - percentile) / 100) * candidates + 1));
  const error = exam.confidence.includes("High") ? 0.14 : 0.22;
  const lowRank = Math.max(1, Math.round(rank * (1 - error)));
  const highRank = Math.max(lowRank + 1, Math.round(rank * (1 + error)));
  const milestone = nextMilestone(score, exam, total, percentile);

  scoreSlider.max = total;
  scoreSlider.value = score;
  scoreInput.value = trim(score);
  scoreLabel.textContent = exam.label;
  sliderValue.textContent = `${trim(score)} / ${trim(total)}`;
  boardPanel.hidden = !boardToggle.checked;

  document.querySelector("#examTitle").textContent = exam.name;
  document.querySelector("#confidenceBadge").textContent = exam.confidence;
  document.querySelector("#percentileOutput").textContent = percentile >= 99.995 ? "100.00" : percentile.toFixed(2);
  document.querySelector("#primaryUnit").textContent = exam.primaryUnit || "percentile";
  document.querySelector("#heroExam").textContent = exam.name;
  document.querySelector(".mini-meter span").style.width = `${clamp(percentile, 3, 100)}%`;
  document.querySelector("#scoreContext").textContent = `${trim(score)} / ${trim(total)}`;
  document.querySelector("#nextMilestone").textContent = milestone;
  document.querySelector("#difficultyContext").textContent = difficultyLabel();
  document.querySelector("#rankOutput").textContent = format(rank);
  document.querySelector("#rangeOutput").textContent = `${format(lowRank)} - ${format(highRank)}`;
  document.querySelector("#strengthOutput").textContent = strength(percentile);
  document.querySelector("#modeOutput").textContent = exam.mode;
  document.querySelector("#curveLabel").textContent = `${exam.name} trend`;
  document.querySelector("#insightText").textContent = exam.insight(percentile, rank);
  document.querySelector("#actionList").innerHTML = actionsFor(percentile, rank, exam).map((item, index) => `
    <div class="action-item">
      <span>${index + 1}</span>
      <p>${item}</p>
    </div>
  `).join("");

  drawGauge(percentile);
  drawCurve(exam, score, total);
}

function nextMilestone(score, exam, total, percentile) {
  const milestones = [75, 85, 90, 95, 97, 99, 99.5, 99.9];
  const target = milestones.find((value) => value > percentile + 0.05);
  if (!target) return "Top band reached";

  for (let candidate = Math.ceil(score); candidate <= total; candidate += 1) {
    if (getPrediction(candidate, exam, total) >= target) {
      const gap = Math.max(1, candidate - score);
      return `${target}%ile in ${trim(gap)} mark${gap === 1 ? "" : "s"}`;
    }
  }
  return `${target}%ile needs a near-perfect score`;
}

function difficultyLabel() {
  if (difficultySelect.value === "tough") return "Tough shift boost";
  if (difficultySelect.value === "easy") return "Easy shift penalty";
  return "Normal";
}

function actionsFor(percentile, rank, exam) {
  const rankText = format(rank);
  if (percentile >= 99.5) {
    return [
      `Use your estimated ${rankText} rank band to shortlist dream colleges first.`,
      "Compare the last three counselling rounds instead of relying on only one cutoff.",
      "Protect this score with revision, mock analysis, and low-error question selection."
    ];
  }
  if (percentile >= 95) {
    return [
      "Push accuracy in your strongest two subjects before adding new chapters.",
      `Track choices around the ${rankText} rank band and keep backup branches ready.`,
      exam.usesBoard ? "Improve board-score inputs too, because merit can move from both sides." : "Try the tough/easy shift control to understand realistic percentile movement."
    ];
  }
  if (percentile >= 85) {
    return [
      "Target the next percentile milestone using high-frequency chapters first.",
      "Build a college list with reach, match, and safer options before counselling starts.",
      "Reduce negative marking by reviewing every mock mistake pattern."
    ];
  }
  return [
    "Raise the raw score floor with formula-based and direct questions first.",
    "Use the 40/55/70/85 quick presets to set a practical next target.",
    "Focus on chapter completion plus timed practice before worrying about final rank."
  ];
}

function drawGauge(percentile) {
  const pathLength = 283;
  const progress = clamp(percentile / 100, 0, 1);
  document.querySelector("#meterFill").style.strokeDashoffset = String(pathLength * (1 - progress));
  const angle = Math.PI * (1 - progress);
  const cx = 110 + Math.cos(angle) * 90;
  const cy = 110 - Math.sin(angle) * 90;
  const dot = document.querySelector("#meterNeedle");
  dot.setAttribute("cx", cx.toFixed(2));
  dot.setAttribute("cy", cy.toFixed(2));
}

function drawCurve(exam, score, total) {
  const canvas = document.querySelector("#curveCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = 34;
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#dfe4ec";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = pad + ((height - pad * 2) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#0f8b8d";
  for (let x = 0; x <= exam.total; x += exam.total / 80) {
    const p = interpolate(x, exam.anchors);
    const px = pad + (x / exam.total) * (width - pad * 2);
    const py = height - pad - (p / 100) * (height - pad * 2);
    if (x === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();

  const scaled = score * (exam.total / total);
  const percentile = getPrediction(score, exam, total);
  const markerX = pad + (scaled / exam.total) * (width - pad * 2);
  const markerY = height - pad - (percentile / 100) * (height - pad * 2);

  ctx.fillStyle = "#ef6f6c";
  ctx.beginPath();
  ctx.arc(markerX, markerY, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#667085";
  ctx.font = "700 13px Inter, Segoe UI, sans-serif";
  ctx.fillText("0", pad - 4, height - 10);
  ctx.fillText(String(exam.total), width - pad - 22, height - 10);
  ctx.fillText("100%", 6, pad + 4);
}

function strength(percentile) {
  if (percentile >= 99.5) return "Elite";
  if (percentile >= 97) return "Strong";
  if (percentile >= 90) return "Competitive";
  if (percentile >= 75) return "Developing";
  return "Needs work";
}

function genericInsight(percentile) {
  if (percentile >= 99) return "Excellent exam standing. Use recent counselling cutoffs to shortlist colleges and branches.";
  if (percentile >= 95) return "Strong competitive range. Your final result will depend on category, seat matrix, and annual difficulty.";
  if (percentile >= 85) return "Useful range for counselling planning. Keep flexible branch and college choices.";
  return "This is a planning estimate. Raising marks in high-weight sections can move the rank band quickly.";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function format(value) {
  return new Intl.NumberFormat("en-IN").format(value);
}

function trim(value) {
  return Number(value).toFixed(2).replace(/\.00$/, "");
}

examSelect.value = "jeeMain";
update();
