const missions = [
  {id:'phishing',title:'Inbox Undercover',level:'Beginner',category:'Phishing awareness',duration:'4 min',icon:'✉',color:'#70e6a0',iconBg:'#11281c',description:'Spot the fake email, the urgency trap, and the suspicious link before it gets you.',intro:'A message lands in your inbox claiming your account will be paused. Use safe thinking to inspect the clues before acting.',questions:[{scenario:'From: support@acme-security.example\nSubject: URGENT — account suspended!\n“Verify your password in the next 10 minutes or lose access.” The link preview points to acme-login.example.co.',options:['Click the link urgently because it says your account may be closed.','Treat the urgency and mismatched domain as red flags; report it using the official process.','Reply and ask the sender to confirm your password.'],answer:1,explanation:'Correct. Urgency, mismatched domains, and credential requests are warning signs. Report it and verify through a trusted channel instead of the suspicious email.'},{scenario:'You are unsure whether a message from a familiar brand is genuine. What is the safest response?',options:['Use a known official website or contact method you trust, not the suspicious message itself.','Use the phone number embedded in the email body.','Forward it to a colleague and ask them to click the link.'],answer:0,explanation:'Exactly. Independent, trusted channels help you verify the message without risking your account.'}]},
  {id:'passwords',title:'Passphrase Forge',level:'Beginner',category:'Account security',duration:'3 min',icon:'⌘',color:'#70e6a0',iconBg:'#11281c',description:'Learn strong passphrase habits, unique accounts, and balanced usability.',intro:'Your teammate wants a more secure setup without making login harder. Help them choose better account hygiene.',questions:[{scenario:'Which approach offers the best balance of security and usability?',options:['Use one long password everywhere.','Use a long passphrase and a reputable password manager with unique passwords for each account.','Change a short password by adding a year each month.'],answer:1,explanation:'Right. Unique, long passwords reduce blast radius and a password manager helps keep them manageable.'},{scenario:'What is the best next step if the service supports MFA?',options:['Turn on multi-factor authentication using an authenticator or passkey method.','Share recovery codes with a friend.','Use the same recovery email as all accounts.'],answer:0,explanation:'Correct. MFA adds a second layer, and passkeys or authenticator methods are typically stronger than SMS-only setups.'}]},
  {id:'incident',title:'Incident First Response',level:'Intermediate',category:'Incident response',duration:'5 min',icon:'⌁',color:'#7eb9f2',iconBg:'#11212b',description:'Stay calm, preserve evidence, and escalate in the right order during security alerts.',intro:'A work laptop shows an unusual alert. Your duty is to follow the right process and avoid making the situation worse.',questions:[{scenario:'A colleague reports an unexpected warning on a work device. What should happen first?',options:['Follow the incident response process and report the alert through the approved channel.','Delete suspect files before anyone sees them.','Ask the public chat for random advice.'],answer:0,explanation:'Good call. Prompt reporting and evidence preservation are the correct first steps.'},{scenario:'The response team tells the user to stop using the affected device. What is the best action?',options:['Submit to the guidance and use a separate trusted device only if instructed.','Keep working normally.','Try a cleanup tool from a random internet page.'],answer:0,explanation:'Exactly. Follow authorized responders and avoid uncoordinated cleanup that can destroy evidence.'}]},
  {id:'secure-design',title:'Secure by Design',level:'Intermediate',category:'Application security',duration:'5 min',icon:'◈',color:'#7eb9f2',iconBg:'#11212b',description:'Build safer features with minimal data, clear permissions, and secure defaults.',intro:'The team is planning a new feature. Protect user trust by designing for privacy and least privilege.',questions:[{scenario:'A feature only needs a user’s first name. What is the safer design choice?',options:['Collect full profile data “just in case.”','Only collect what is required and set a retention limit.','Copy the full database to a developer laptop.'],answer:1,explanation:'Right. This reduces exposure, lowers risk, and keeps data handling aligned with purpose.'},{scenario:'A developer wants everyone to have administrator-level access for easier testing. What is better?',options:['Apply least privilege and use individual, auditable accounts.','Use a shared admin account with a common password.','Disable all logging to avoid noise.'],answer:0,explanation:'Correct. Least privilege reduces blast radius and keeps permissions easier to audit and recover.'}]},
  {id:'threat-model',title:'Threat Model: Vault',level:'Advanced',category:'Threat modeling',duration:'6 min',icon:'⬡',color:'#c59afa',iconBg:'#21182d',description:'Map assets, trust boundaries, and mitigations before a service launches.',intro:'A fictional file-sharing service needs a stronger review. Focus on assets, likely threats, and safe design decisions.',questions:[{scenario:'Which is the right place to start a threat model?',options:['Ask what matters, who could affect it, and where trust boundaries exist.','Find the fastest exploit against a live provider.','Disable logging to save cost.'],answer:0,explanation:'Exactly. Threat modeling starts with assets, trust, and plausible threats to shape the right mitigation strategy.'},{scenario:'A user can share files with another account. Which design is strongest?',options:['Public access by default for convenience.','Explicit access controls, clear visibility, and simple revocation.','Hide settings so the interface looks cleaner.'],answer:1,explanation:'Good. Clear controls, revocation, and secure defaults reduce accidental exposure.'}]},
  {id:'crypto',title:'Crypto Concepts',level:'Advanced',category:'Cryptography basics',duration:'6 min',icon:'⎔',color:'#c59afa',iconBg:'#21182d',description:'Understand what encryption protects and where it doesn’t replace good security design.',intro:'Test key cryptography concepts in a safe, educational setting. This is conceptual understanding, not implementation guidance.',questions:[{scenario:'A service stores customer records and wants protection against someone copying the storage volume. What control is relevant?',options:['Encrypt data at rest with strong key management and access controls.','Rename the directory to something secret.','Add a privacy policy with no technical controls.'],answer:0,explanation:'Correct. Encryption at rest can help, but key management and access controls still matter.'},{scenario:'A browser shows a valid secure connection to a website. What does that prove?',options:['The site is definitely good and harmless.','The connection is encrypted and valid for that domain, but not necessarily that the site is trustworthy.','The website cannot collect personal data.'],answer:1,explanation:'Exactly. TLS protects the connection and verifies the domain; it does not guarantee the content or service is benign.'}]},
  {id:'osint',title:'OSINT Checkpoint',level:'Intermediate',category:'Open-source intelligence',duration:'5 min',icon:'◌',color:'#83c4ff',iconBg:'#0f1823',description:'Learn how public information is collected, assessed, and used ethically.',intro:'Explore how digital information can be gathered safely and responsibly without crossing ethical or legal boundaries.',questions:[{scenario:'A public company profile lists office locations and employee names. Which choice is the most responsible?',options:['Use the information to contact employees directly without notice.','Treat it as publicly available context and handle it responsibly without exposing private details.','Post the list publicly for other teams to use.'],answer:1,explanation:'Correct. Publicly available information is still sensitive in context, and responsible handling matters.'},{scenario:'What is the best way to distinguish legitimate public research from harmful behavior?',options:['Follow the organization’s rules, respect boundaries, and avoid collecting sensitive personal data.','Share every result in open forums for transparency.','Use the data to launch pressure campaigns.'],answer:0,explanation:'Right. Ethical practice, consent awareness, and respecting boundaries matter just as much as discovering information.'}]},
  {id:'forensics',title:'Digital Forensics 101',level:'Advanced',category:'Forensics',duration:'7 min',icon:'▣',color:'#c59afa',iconBg:'#221826',description:'Preserve evidence, identify patterns, and reason from artifacts without guesswork.',intro:'Investigators must be careful not to distort evidence. Learn the principles behind sound digital forensic handling.',questions:[{scenario:'A suspicious file is found on a machine. What is the safest first move?',options:['Capture a forensic image or preserve evidence according to policy before making changes.','Delete the file to reduce risk.','Run random cleanup tools.'],answer:0,explanation:'Correct. Preserve evidence first. Changing the system can remove context and compromise the investigation.'},{scenario:'Why are hashes useful in forensics?',options:['They help verify whether a file changed after it was collected.','They make files self-repairing.','They automatically hide malware.'],answer:0,explanation:'Exactly. Hashes provide integrity checks and allow investigators to confirm whether evidence has been altered.'}]},
  {id:'firewall',title:'Firewall Triage',level:'Advanced',category:'Network defense',duration:'7 min',icon:'▤',color:'#f5d17a',iconBg:'#262117',description:'Review alerts, prioritize risk, and separate normal noise from meaningful threats.',intro:'Your security dashboard is noisy. Sort true concerns from routine traffic and focus on impact first.',questions:[{scenario:'A firewall logs repeated failed login attempts from the same external IP across multiple accounts. What is the likely interpretation?',options:['This is a probable brute-force or credential stuffing pattern, so it should be reviewed and monitored.','It is harmless because the service is always under attack.','It only matters if the same user is affected.'],answer:0,explanation:'Right. Repeated failed logins across multiple accounts suggest a targeted pattern that should be monitored and acted on appropriately.'},{scenario:'What is the best immediate defensive action before deeper investigation?',options:['Validate the severity, confirm the affected assets, and review access controls or blocking policies per policy.','Immediately block all external traffic to the internet.','Ignore it if the service is still working.'],answer:0,explanation:'Correct. Controlled response based on risk, scope, and policy is a sound first step.'}]}
];

const progressKey='whiteHatLearningProgress';
let activeFilter='All';
let currentMission=null;
let questionIndex=0;
let score=0;
let answered=false;

const grid=document.querySelector('#mission-grid');
const dialog=document.querySelector('#game-dialog');
const gameContent=document.querySelector('#game-content');
const searchInput=document.querySelector('#search');

function getProgress(){
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || { completed: [], xp: 0, days: [] };
  } catch {
    return { completed: [], xp: 0, days: [] };
  }
}

function saveProgress(data){
  localStorage.setItem(progressKey, JSON.stringify(data));
}

function updateStats(){
  const progress=getProgress();
  document.querySelector('#stat-completed').textContent=progress.completed.length;
  document.querySelector('#stat-xp').innerHTML = `${progress.xp} <small>XP</small>`;
  const streak = progress.days.length ? 1 : 0;
  document.querySelector('#stat-streak').innerHTML = `${streak} <small>day</small>`;
}

function render(){
  const searchTerm=searchInput.value.trim().toLowerCase();
  const filtered=missions.filter((m)=>{
    const matchesFilter = activeFilter === 'All' || m.level === activeFilter;
    const searchable = `${m.title} ${m.category} ${m.description} ${m.level}`.toLowerCase();
    const matchesSearch = searchable.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const progress=getProgress();
  document.querySelector('#all-count').textContent=String(missions.length).padStart(2,'0');
  grid.innerHTML = filtered.map((m)=>{
    const completed = progress.completed.includes(m.id);
    return `
      <article class="mission-card ${completed ? 'is-complete' : ''}" style="--card-color:${m.color};--icon-bg:${m.iconBg}">
        <div class="card-top">
          <span class="mission-icon" aria-hidden="true">${m.icon}</span>
          <span class="level-badge">${m.level.toUpperCase()}</span>
        </div>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
        <div class="card-bottom">
          <span class="card-meta"><span>◷ ${m.duration}</span>· ${m.category}</span>
          <span class="completed-mark">✓ COMPLETED</span>
          <button class="play-link" data-play="${m.id}">Play mission <span class="arrow">→</span></button>
        </div>
      </article>
    `;
  }).join('');

  document.querySelector('#empty-state').hidden = filtered.length !== 0;
  updateStats();
}

function startMission(id){
  currentMission = missions.find((m) => m.id === id);
  questionIndex = 0;
  score = 0;
  answered = false;
  renderQuestion();
  dialog.showModal();
}

function renderQuestion(){
  const q = currentMission.questions[questionIndex];
  const pct = (questionIndex / currentMission.questions.length) * 100;

  gameContent.innerHTML = `
    <div class="game-kicker">${currentMission.level.toUpperCase()} / ${currentMission.category.toUpperCase()}</div>
    <h2 id="game-title">${currentMission.title}</h2>
    <p class="game-desc">${currentMission.intro}</p>
    <div class="game-progress" aria-label="Mission progress"><span style="width:${pct}%"></span></div>
    <div class="question-count">CHALLENGE ${String(questionIndex + 1).padStart(2, '0')} <span> / ${String(currentMission.questions.length).padStart(2, '0')}</span></div>
    <div class="scenario-box">${q.scenario.replaceAll('\n','<br>')}</div>
    <div class="answer-list">
      ${q.options.map((option, index) => `<button class="answer-option" data-answer="${index}">${String.fromCharCode(65 + index)}. ${option}</button>`).join('')}
    </div>
    <div id="feedback" aria-live="polite"></div>
    <div class="game-next"><button id="next-question" disabled>${questionIndex === currentMission.questions.length - 1 ? 'Finish mission' : 'Next challenge'} →</button></div>
  `;

  gameContent.querySelectorAll('[data-answer]').forEach((btn) => {
    btn.addEventListener('click', () => chooseAnswer(Number(btn.dataset.answer)));
  });

  document.querySelector('#next-question').addEventListener('click', () => {
    if (!answered) return;
    if (questionIndex < currentMission.questions.length - 1) {
      questionIndex += 1;
      renderQuestion();
    } else {
      finishMission();
    }
  });
}

function chooseAnswer(choice){
  if (answered) return;
  answered = true;

  const q = currentMission.questions[questionIndex];
  const correct = choice === q.answer;
  if (correct) score += 1;

  gameContent.querySelectorAll('[data-answer]').forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.answer) btn.classList.add('correct');
    else if (index === choice) btn.classList.add('incorrect');
  });

  const feedback = document.querySelector('#feedback');
  feedback.className = `feedback ${correct ? '' : 'wrong'}`;
  feedback.textContent = `${correct ? '✓ Nice work.' : 'Not quite.'} ${q.explanation}`;
  document.querySelector('#next-question').disabled = false;
}

function finishMission(){
  const progress = getProgress();
  const alreadyCompleted = progress.completed.includes(currentMission.id);
  const xpGain = score * 50 + (alreadyCompleted ? 10 : 35);

  if (!alreadyCompleted) {
    progress.completed.push(currentMission.id);
    progress.xp += xpGain;
    const today = new Date().toISOString().slice(0, 10);
    if (!progress.days.includes(today)) progress.days.push(today);
    saveProgress(progress);
  }

  const perfect = score === currentMission.questions.length;

  gameContent.innerHTML = `
    <div class="result-card">
      <div class="result-symbol">${perfect ? '✦' : '✓'}</div>
      <div class="game-kicker">MISSION ${alreadyCompleted ? 'REPLAYED' : 'COMPLETE'}</div>
      <h2 id="game-title">${perfect ? 'Excellent work.' : 'Nice progress.'}</h2>
      <p>You got <strong>${score} of ${currentMission.questions.length}</strong> questions right. ${perfect ? 'You showed strong cyber instincts and decision quality.' : 'Review the explanations and try again—every run sharpens your judgment.'}</p>
      <div class="result-xp">${alreadyCompleted ? 'PROGRESS UPDATED' : `+${xpGain} XP EARNED`}</div>
      <button class="button button-primary" id="finish-button">Back to missions <span>→</span></button>
      <div class="result-review">Learn safely. Practice ethically. Real-world security always follows policy and authorization.</div>
    </div>
  `;

  document.querySelector('#finish-button').addEventListener('click', () => {
    dialog.close();
    render();
  });
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-play]');
  if (btn) startMission(btn.dataset.play);
});

searchInput.addEventListener('input', render);

document.querySelectorAll('.filter-chip').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach((item) => item.classList.toggle('selected', item === btn));
    render();
  });
});

document.querySelector('#close-game').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && dialog.open) dialog.close();
});

render();
