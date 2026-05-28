const translations = {
  ko: {
    meta: {
      title: 'ULWmon : AI가 포켓몬을 깰 수 있을까?',
      description: 'ULWmon — AI가 포켓몬 레드를 플레이해 초록마을까지 갈 수 있는지 실험하는 에이전트 하네스 밈-해커톤.',
      ogTitle: 'ULWmon : AI가 포켓몬을 깰 수 있을까?',
      ogDescription: '포켓몬 레드에서 초록마을까지. 에이전트 하네스를 깎고 AI가 정신 나가는 걸 같이 봅니다.'
    },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: '언어 선택' },
    nav: { aria: '상단 내비게이션', homeAria: 'ULWmon 홈', event: 'EVENT', ralph: 'POKEMON RALPH', how: 'HOW TO PLAY', join: 'WHERE TO JOIN' },
    hero: {
      menuAria: '배틀 커맨드', shout: 'Go! HARNESS!', videoShellAria: 'AI 포켓몬 플레이 영상', gbaVideoAria: 'GBA 안 AI 포켓몬 플레이 영상', calloutAria: 'AI 하네스 안내', callout: 'AI 하네스로 포켓몬을 정복하세요!', playerShellAria: '왼쪽 아래 하네스 배틀 영상', playerVideoAria: '왼쪽 아래 배틀 커맨드 영상', videoError: '영상 파일을 불러오지 못했습니다',
      commands: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' }
    },
    news: {
      kicker: 'TRAINER WARNING', title: 'POKEMON RALPH', copy: '두 영상은 같은 문제의 전후입니다. 그냥 맡기면 벽에 박고 길을 잃지만, 하네스를 붙이면 관찰·리트라이·목표 회복 루프로 다시 진행합니다.', joinRun: 'Join the run', prof: 'PROF. DEBUG', trainerTitle: 'Naive Agent vs Harnessed Agent', trainerCopy: '이 섹션은 “AI가 똑똑한가?”보다 “실패한 AI를 다시 목표로 돌려보낼 장치가 있는가?”를 보여줍니다.', naiveVideoAria: 'Naive Wall Loop 카드 영상', naiveTitle: 'Naive Wall Loop', naiveMove: '왜 실패하나 · 화면만 보면 같은 벽 앞에서 루프가 납니다.', naiveFlavor: 'Naive agent는 현재 위치와 다음 목표를 안정적으로 기억하지 못합니다.', recoveryVideoAria: 'Harness Recovery 카드 영상', recoveryTitle: 'Harness Recovery', recoveryMove: '어떻게 회복하나 · 관찰, 리트라이, 목표 체크를 묶어 다시 진행시킵니다.', recoveryFlavor: '실행 로그와 상태 복구 루프가 다음 시도를 더 똑똑하게 만듭니다.'
    },
    how: {
      title: 'BATTLE COMMANDS', copy: '참여자는 포켓몬 트레이너처럼 입장해, AI가 헤매는 장면을 관찰하고, 하네스 명령을 하나씩 붙여가며 초록마을까지 보내는 실험을 함께 진행합니다.',
      fight: { title: 'FIGHT', copy: '현장에서 문제를 고릅니다. AI가 벽에 박거나 길을 잃는 실패 장면을 보고, 오늘 해결할 배틀 목표를 정합니다.' },
      dex: { title: 'DEX', copy: '실패 패턴을 도감처럼 기록합니다. 화면 관찰, 버튼 입력, 위치 기억, 목표 유지 중 어디가 깨지는지 팀과 공유합니다.' },
      bag: { title: 'BAG', copy: '하네스 아이템을 꺼냅니다. save state, memory, retry, goal check를 조합해 에이전트가 다시 시도할 장치를 붙입니다.' },
      run: { title: 'RUN', copy: '수정한 하네스로 재도전합니다. 진행 로그와 웃긴 장면을 같이 보며 다음 루프를 돌리고, 마지막에는 결과를 공유합니다.' }
    },
    register: { title: 'WHERE TO JOIN', copy: '6월 6일 토요일 · 11:00–15:00 · 청담동. 등록은 호스트 승인 후 확정됩니다.', cardAria: 'ULWmon 해커톤 참가 안내 카드', pass: 'TRAINER PASS', cardTitle: 'Harness Hackathon', summary: 'AI가 포켓몬 레드를 플레이하도록 관찰, 입력, save-state, retry 루프를 한 덱으로 조립합니다.', dateLabel: 'DATE', date: '6월 6일 토요일', timeLabel: 'TIME', time: '11:00–15:00', placeLabel: 'PLACE', place: '청담동', statusLabel: 'STATUS', status: '호스트 승인 후 확정', cta: 'Request Pass' },
    sponsor: { backedBy: 'BACKED BY' },
    footer: { contact: 'CONTACT' }
  },
  en: {
    meta: { title: 'ULWmon: Can AI beat Pokémon?', description: 'ULWmon is an agent-harness meme hackathon testing whether AI can play Pokémon Red all the way to Viridian City.', ogTitle: 'ULWmon: Can AI beat Pokémon?', ogDescription: 'From Pokémon Red to Viridian City. Build agent harnesses and watch AI lose its mind with us.' },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: 'Language selector' },
    nav: { aria: 'Primary navigation', homeAria: 'ULWmon home', event: 'EVENT', ralph: 'POKEMON RALPH', how: 'HOW TO PLAY', join: 'WHERE TO JOIN' },
    hero: { menuAria: 'Battle commands', shout: 'Go! HARNESS!', videoShellAria: 'AI Pokémon gameplay video', gbaVideoAria: 'AI Pokémon gameplay inside a GBA', calloutAria: 'AI harness guide', callout: 'Conquer Pokémon with an AI harness!', playerShellAria: 'Lower-left harness battle video', playerVideoAria: 'Lower-left battle command video', videoError: 'video file could not be loaded', commands: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' } },
    news: { kicker: 'TRAINER WARNING', title: 'POKEMON RALPH', copy: 'The two videos show the same problem before and after. Alone, the agent bumps into walls and loses its way; with a harness, observation, retry, and goal-recovery loops get it moving again.', joinRun: 'Join the run', prof: 'PROF. DEBUG', trainerTitle: 'Naive Agent vs Harnessed Agent', trainerCopy: 'This section is less about “is the AI smart?” and more about “do we have the machinery to push a failed AI back toward its goal?”', naiveVideoAria: 'Naive Wall Loop card video', naiveTitle: 'Naive Wall Loop', naiveMove: 'Why it fails · with only the screen, it loops in front of the same wall.', naiveFlavor: 'The naive agent cannot reliably remember its current position or next objective.', recoveryVideoAria: 'Harness Recovery card video', recoveryTitle: 'Harness Recovery', recoveryMove: 'How it recovers · observation, retries, and goal checks are bundled to keep it progressing.', recoveryFlavor: 'Execution logs and state-recovery loops make the next attempt smarter.' },
    how: { title: 'BATTLE COMMANDS', copy: 'Participants enter like Pokémon trainers, watch where the AI gets lost, and add harness commands one by one to help it reach Viridian City.', fight: { title: 'FIGHT', copy: 'Pick the problem on site. Watch the AI bump into walls or lose the path, then choose today’s battle objective.' }, dex: { title: 'DEX', copy: 'Log failure patterns like Pokédex entries. Share where screen observation, button input, position memory, or goal retention breaks.' }, bag: { title: 'BAG', copy: 'Pull out harness items. Combine save states, memory, retries, and goal checks so the agent can try again.' }, run: { title: 'RUN', copy: 'Rerun with the improved harness. Watch logs and hilarious moments together, iterate, and share results at the end.' } },
    register: { title: 'WHERE TO JOIN', copy: 'Saturday, June 6 · 11:00–15:00 · Cheongdam-dong. Registration is confirmed after host approval.', cardAria: 'ULWmon hackathon participation card', pass: 'TRAINER PASS', cardTitle: 'Harness Hackathon', summary: 'Build a deck of observation, input, save-state, and retry loops so AI can play Pokémon Red.', dateLabel: 'DATE', date: 'Saturday, June 6', timeLabel: 'TIME', time: '11:00–15:00', placeLabel: 'PLACE', place: 'Cheongdam-dong', statusLabel: 'STATUS', status: 'Confirmed after host approval', cta: 'Request Pass' },
    sponsor: { backedBy: 'BACKED BY' }, footer: { contact: 'CONTACT' }
  },
  ja: {
    meta: { title: 'ULWmon：AIはポケモンをクリアできるか？', description: 'ULWmonは、AIがポケットモンスター 赤をトキワシティまで進められるかを試すエージェント・ハーネス系ミームハッカソンです。', ogTitle: 'ULWmon：AIはポケモンをクリアできるか？', ogDescription: 'ポケットモンスター 赤からトキワシティへ。エージェント・ハーネスを磨き、AIが迷走する様子を一緒に見届けます。' },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: '言語選択' },
    nav: { aria: 'メインナビゲーション', homeAria: 'ULWmon ホーム', event: 'イベント', ralph: 'POKEMON RALPH', how: '遊び方', join: '参加場所' },
    hero: { menuAria: 'バトルコマンド', shout: 'Go! HARNESS!', videoShellAria: 'AIのポケモンプレイ動画', gbaVideoAria: 'GBA内のAIポケモンプレイ動画', calloutAria: 'AIハーネス案内', callout: 'AIハーネスでポケモンを攻略しよう！', playerShellAria: '左下のハーネスバトル動画', playerVideoAria: '左下のバトルコマンド動画', videoError: '動画ファイルを読み込めませんでした', commands: { fight: 'たたかう', dex: '図鑑', bag: 'バッグ', join: '参加' } },
    news: { kicker: 'トレーナー警告', title: 'POKEMON RALPH', copy: '2つの動画は同じ問題の前後です。任せきりだと壁にぶつかり道を失いますが、ハーネスを付けると観察・リトライ・目標復帰ループで再び前進します。', joinRun: '参加する', prof: 'PROF. DEBUG', trainerTitle: 'ナイーブエージェント vs ハーネス付きエージェント', trainerCopy: 'ここで見せたいのは「AIは賢いか？」よりも、「失敗したAIを目標へ戻す仕組みがあるか？」です。', naiveVideoAria: 'Naive Wall Loopカード動画', naiveTitle: 'Naive Wall Loop', naiveMove: 'なぜ失敗するか · 画面だけを見ると同じ壁の前でループします。', naiveFlavor: 'ナイーブなエージェントは現在位置と次の目標を安定して記憶できません。', recoveryVideoAria: 'Harness Recoveryカード動画', recoveryTitle: 'Harness Recovery', recoveryMove: 'どう復帰するか · 観察、リトライ、目標チェックを束ねて前進させます。', recoveryFlavor: '実行ログと状態復旧ループが、次の試行をより賢くします。' },
    how: { title: 'バトルコマンド', copy: '参加者はポケモントレーナーのように参加し、AIが迷う場面を観察し、ハーネス命令を1つずつ追加しながらトキワシティまで送る実験を進めます。', fight: { title: 'たたかう', copy: '現場で問題を選びます。AIが壁にぶつかったり道に迷ったりする失敗場面を見て、今日解くバトル目標を決めます。' }, dex: { title: '図鑑', copy: '失敗パターンを図鑑のように記録します。画面観察、ボタン入力、位置記憶、目標維持のどこが壊れるかをチームで共有します。' }, bag: { title: 'バッグ', copy: 'ハーネスアイテムを取り出します。save state、memory、retry、goal checkを組み合わせ、エージェントが再挑戦できる仕組みを付けます。' }, run: { title: 'RUN', copy: '修正したハーネスで再挑戦します。進行ログと面白い場面を一緒に見ながら次のループを回し、最後に結果を共有します。' } },
    register: { title: '参加場所', copy: '6月6日（土）・11:00–15:00・清潭洞。登録はホスト承認後に確定します。', cardAria: 'ULWmonハッカソン参加案内カード', pass: 'TRAINER PASS', cardTitle: 'Harness Hackathon', summary: 'AIがポケットモンスター 赤をプレイできるよう、観察・入力・save-state・retryループを1つのデッキに組み立てます。', dateLabel: '日程', date: '6月6日（土）', timeLabel: '時間', time: '11:00–15:00', placeLabel: '場所', place: '清潭洞', statusLabel: 'ステータス', status: 'ホスト承認後に確定', cta: 'パスを申請' },
    sponsor: { backedBy: 'BACKED BY' }, footer: { contact: 'CONTACT' }
  }
};

const supportedLanguages = Object.keys(translations);
const languageNames = { ko: '한국어', en: 'English', ja: '日本語' };
const defaultLanguage = 'ko';

function getNestedValue(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

function normalizeLanguage(value) {
  const code = String(value || '').toLowerCase().split('-')[0];
  return supportedLanguages.includes(code) ? code : defaultLanguage;
}

function readSavedLanguage() {
  try {
    return localStorage.getItem('ulwmon-language');
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem('ulwmon-language', language);
  } catch {
    // Language switching still works for the current page when storage is unavailable.
  }
}

function detectInitialLanguage() {
  const savedLanguage = readSavedLanguage();
  if (savedLanguage) return normalizeLanguage(savedLanguage);
  return normalizeLanguage(navigator.language);
}

let currentLanguage = detectInitialLanguage();

function applyLanguage(language) {
  const nextLanguage = normalizeLanguage(language);
  const dictionary = translations[nextLanguage];

  document.documentElement.lang = nextLanguage;
  document.title = dictionary.meta.title;

  for (const element of document.querySelectorAll('[data-i18n]')) {
    const value = getNestedValue(dictionary, element.dataset.i18n);
    if (value !== undefined) element.textContent = value;
  }

  for (const element of document.querySelectorAll('[data-i18n-attr]')) {
    for (const pair of element.dataset.i18nAttr.split(',')) {
      const [attribute, key] = pair.split(':').map((part) => part.trim());
      const value = getNestedValue(dictionary, key);
      if (attribute && value !== undefined) element.setAttribute(attribute, value);
    }
  }

  for (const button of document.querySelectorAll('[data-lang]')) {
    const isActive = button.dataset.lang === nextLanguage;
    button.setAttribute('aria-pressed', String(isActive));
    button.setAttribute('aria-label', languageNames[button.dataset.lang]);
  }

  saveLanguage(nextLanguage);
  currentLanguage = nextLanguage;
}

for (const button of document.querySelectorAll('[data-lang]')) {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
}

applyLanguage(currentLanguage);

const cards = document.querySelectorAll('[data-tilt-card]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setCardVars(card, clientX, clientY) {
  const rect = card.getBoundingClientRect();
  const px = (clientX - rect.left) / rect.width;
  const py = (clientY - rect.top) / rect.height;
  const rx = (0.5 - py) * 9;
  const ry = (px - 0.5) * 11;
  card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
  card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
  card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
}

if (!reduceMotion) {
  for (const card of cards) {
    card.addEventListener('pointermove', (event) => setCardVars(card, event.clientX, event.clientY));
    card.addEventListener('pointerenter', () => card.classList.add('is-active'));
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-active');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
    });
  }
}

for (const video of document.querySelectorAll('video')) {
  if (!video.autoplay) continue;

  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const startVideo = () => video.play().catch(() => {});

  video.addEventListener('canplay', startVideo, { once: true });
  video.addEventListener('error', () => {
    video.setAttribute('aria-label', `${video.getAttribute('aria-label') || 'video'}: ${translations[currentLanguage].hero.videoError}`);
  });
  startVideo();
}
