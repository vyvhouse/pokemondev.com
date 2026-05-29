const translations = {
  ko: {
    meta: {
      title: 'ULWmon : AI가 포켓몬을 깰 수 있을까?',
      description: 'ULWmon — AI가 포켓몬 레드를 플레이해 초록마을까지 갈 수 있는지 실험하는 에이전트 하네스 밈-해커톤.',
      ogDescription: '포켓몬 레드에서 초록마을까지. 에이전트 하네스를 깎고 AI가 정신 나가는 걸 같이 봅니다.',
    },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: '언어 선택' },
    nav: {
      aria: '상단 내비게이션',
      homeAria: 'ULWmon 홈',
      event: 'EVENT',
      ralph: 'POKEMON RALPH',
      how: 'HOW TO PLAY',
      join: 'WHERE TO JOIN',
    },
    hero: {
      shout: 'Go! HARNESS!',
      menuAria: '배틀 커맨드',
      menu: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' },
      videoAria: 'AI 포켓몬 플레이 영상',
      videoGbaAria: 'GBA 안 AI 포켓몬 플레이 영상',
      mobileCalloutAria: 'AI 하네스 안내',
      mobileCallout: 'AI 하네스로 포켓몬을 정복하세요!',
      playerVideoAria: '왼쪽 아래 하네스 배틀 영상',
      playerVideoLabel: '왼쪽 아래 배틀 커맨드 영상',
      videoError: '영상 파일을 불러오지 못했습니다',
    },
    news: {
      kicker: 'TRAINER WARNING',
      title: 'POKEMON RALPH',
      copy: '두 영상은 같은 문제의 전후입니다. 그냥 맡기면 벽에 박고 길을 잃지만, 하네스를 붙이면 관찰·리트라이·목표 회복 루프로 다시 진행합니다.',
      cta: 'Join the run',
      noteTitle: 'Naive Agent vs Harnessed Agent',
      noteBody: '이 섹션은 “AI가 똑똑한가?”보다 “실패한 AI를 다시 목표로 돌려보낼 장치가 있는가?”를 보여줍니다.',
      cardLeftVideoAria: 'Naive Wall Loop 카드 영상',
      cardLeftTitle: 'Naive Wall Loop',
      cardLeftMove: '왜 실패하나 · 화면만 보면 같은 벽 앞에서 루프가 납니다.',
      cardLeftFlavor: 'Naive agent는 현재 위치와 다음 목표를 안정적으로 기억하지 못합니다.',
      cardRightVideoAria: 'Harness Recovery 카드 영상',
      cardRightTitle: 'Harness Recovery',
      cardRightMove: '어떻게 회복하나 · 관찰, 리트라이, 목표 체크를 묶어 다시 진행시킵니다.',
      cardRightFlavor: '실행 로그와 상태 복구 루프가 다음 시도를 더 똑똑하게 만듭니다.',
    },
    how: {
      title: 'BATTLE COMMANDS',
      copy: '참여자는 포켓몬 트레이너처럼 입장해, AI가 헤매는 장면을 관찰하고, 하네스 명령을 하나씩 붙여가며 초록마을까지 보내는 실험을 함께 진행합니다.',
      step: {
        fight: { label: 'FIGHT', body: '현장에서 문제를 고릅니다. AI가 벽에 박거나 길을 잃는 실패 장면을 보고, 오늘 해결할 배틀 목표를 정합니다.' },
        dex: { label: 'DEX', body: '실패 패턴을 도감처럼 기록합니다. 화면 관찰, 버튼 입력, 위치 기억, 목표 유지 중 어디가 깨지는지 팀과 공유합니다.' },
        bag: { label: 'BAG', body: '하네스 아이템을 꺼냅니다. save state, memory, retry, goal check를 조합해 에이전트가 다시 시도할 장치를 붙입니다.' },
        run: { label: 'RUN', body: '수정한 하네스로 재도전합니다. 진행 로그와 웃긴 장면을 같이 보며 다음 루프를 돌리고, 마지막에는 결과를 공유합니다.' },
      },
    },
    register: {
      title: 'WHERE TO JOIN',
      copy: '6월 6일 토요일 · 11:00–15:00 · 청담동. 등록은 호스트 승인 후 확정됩니다.',
      cardAria: 'ULWmon 해커톤 참가 안내 카드',
      kicker: 'TRAINER PASS',
      cardTitle: 'Harness Hackathon',
      summary: 'AI가 포켓몬 레드를 플레이하도록 관찰, 입력, save-state, retry 루프를 한 덱으로 조립합니다.',
      fact: {
        dateLabel: 'DATE', date: '6월 6일 토요일',
        timeLabel: 'TIME', time: '11:00–15:00',
        placeLabel: 'PLACE', place: '청담동',
        statusLabel: 'STATUS', status: '호스트 승인 후 확정',
      },
      cta: 'Request Pass',
    },
    sponsor: { backedBy: 'BACKED BY' },
    footer: { contact: 'CONTACT' },
  },
  en: {
    meta: {
      title: 'ULWmon: Can AI beat Pokémon?',
      description: 'ULWmon is an agent-harness meme hackathon testing whether AI can play Pokémon Red all the way to Viridian City.',
      ogDescription: 'From Pokémon Red to Viridian City. Build agent harnesses and watch AI lose its mind together.',
    },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: 'Language selection' },
    nav: {
      aria: 'Top navigation',
      homeAria: 'ULWmon home',
      event: 'EVENT',
      ralph: 'POKEMON RALPH',
      how: 'HOW TO PLAY',
      join: 'WHERE TO JOIN',
    },
    hero: {
      shout: 'Go! HARNESS!',
      menuAria: 'Battle commands',
      menu: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' },
      videoAria: 'AI Pokémon gameplay video',
      videoGbaAria: 'AI Pokémon gameplay inside GBA',
      mobileCalloutAria: 'AI harness callout',
      mobileCallout: 'Conquer Pokémon with an AI harness!',
      playerVideoAria: 'Lower-left harness battle video',
      playerVideoLabel: 'Lower-left battle command video',
      videoError: 'Could not load the video file',
    },
    news: {
      kicker: 'TRAINER WARNING',
      title: 'POKEMON RALPH',
      copy: 'These two clips show the before and after of the same problem. Left alone, the agent walks into walls and gets lost. With a harness, observation, retry, and goal-recovery loops get it moving again.',
      cta: 'Join the run',
      noteTitle: 'Naive Agent vs Harnessed Agent',
      noteBody: 'This section is less about “is AI smart?” and more about “do we have a mechanism that sends a failed AI back toward the goal?”',
      cardLeftVideoAria: 'Naive Wall Loop card video',
      cardLeftTitle: 'Naive Wall Loop',
      cardLeftMove: 'Why it fails · Screen-only control loops in front of the same wall.',
      cardLeftFlavor: 'The naive agent cannot reliably remember its current position or next objective.',
      cardRightVideoAria: 'Harness Recovery card video',
      cardRightTitle: 'Harness Recovery',
      cardRightMove: 'How it recovers · Observation, retry, and goal checks are bundled into a loop.',
      cardRightFlavor: 'Execution logs and state-recovery loops make the next attempt smarter.',
    },
    how: {
      title: 'BATTLE COMMANDS',
      copy: 'Participants enter like Pokémon trainers, watch where the AI gets lost, then add harness commands one by one to help it reach Viridian City.',
      step: {
        fight: { label: 'FIGHT', body: 'Pick a problem on site. Watch the AI hit walls or lose its path, then choose today’s battle objective.' },
        dex: { label: 'DEX', body: 'Log failure patterns like a Pokédex: screen observation, button input, position memory, and goal retention.' },
        bag: { label: 'BAG', body: 'Pull out harness items. Combine save states, memory, retry, and goal checks so the agent can try again.' },
        run: { label: 'RUN', body: 'Run the revised harness. Watch logs and funny moments together, loop again, then share the result.' },
      },
    },
    register: {
      title: 'WHERE TO JOIN',
      copy: 'Saturday, June 6 · 11:00–15:00 · Cheongdam-dong. Registration is confirmed after host approval.',
      cardAria: 'ULWmon hackathon registration card',
      kicker: 'TRAINER PASS',
      cardTitle: 'Harness Hackathon',
      summary: 'Assemble observation, inputs, save states, and retry loops into one deck so AI can play Pokémon Red.',
      fact: {
        dateLabel: 'DATE', date: 'Saturday, June 6',
        timeLabel: 'TIME', time: '11:00–15:00',
        placeLabel: 'PLACE', place: 'Cheongdam-dong',
        statusLabel: 'STATUS', status: 'Confirmed after host approval',
      },
      cta: 'Request Pass',
    },
    sponsor: { backedBy: 'BACKED BY' },
    footer: { contact: 'CONTACT' },
  },
  ja: {
    meta: {
      title: 'ULWmon：AIはポケモンを攻略できるか？',
      description: 'ULWmonは、AIがポケットモンスター 赤をプレイしてトキワシティまで進めるかを試すエージェント・ハーネス系ミームハッカソンです。',
      ogDescription: 'ポケモン赤からトキワシティまで。エージェントのハーネスを作りながら、AIが迷走する様子を一緒に見届けます。',
    },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: '言語選択' },
    nav: {
      aria: '上部ナビゲーション',
      homeAria: 'ULWmon ホーム',
      event: 'EVENT',
      ralph: 'POKEMON RALPH',
      how: 'HOW TO PLAY',
      join: 'WHERE TO JOIN',
    },
    hero: {
      shout: 'Go! HARNESS!',
      menuAria: 'バトルコマンド',
      menu: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' },
      videoAria: 'AIのポケモンプレイ動画',
      videoGbaAria: 'GBA内のAIポケモンプレイ動画',
      mobileCalloutAria: 'AIハーネス案内',
      mobileCallout: 'AIハーネスでポケモンを攻略しよう！',
      playerVideoAria: '左下のハーネス・バトル動画',
      playerVideoLabel: '左下のバトルコマンド動画',
      videoError: '動画ファイルを読み込めませんでした',
    },
    news: {
      kicker: 'TRAINER WARNING',
      title: 'POKEMON RALPH',
      copy: '2つの動画は、同じ問題のビフォー／アフターです。そのまま任せると壁にぶつかって迷いますが、ハーネスを付けると観察・リトライ・目標復帰ループで再び進みます。',
      cta: 'Join the run',
      noteTitle: 'Naive Agent vs Harnessed Agent',
      noteBody: 'このセクションでは「AIは賢いか？」よりも、「失敗したAIを再びゴールへ戻す仕組みがあるか？」を見せます。',
      cardLeftVideoAria: 'Naive Wall Loopカード動画',
      cardLeftTitle: 'Naive Wall Loop',
      cardLeftMove: 'なぜ失敗するか · 画面だけを見ると同じ壁の前でループします。',
      cardLeftFlavor: 'Naive agentは現在位置と次の目標を安定して記憶できません。',
      cardRightVideoAria: 'Harness Recoveryカード動画',
      cardRightTitle: 'Harness Recovery',
      cardRightMove: 'どう復帰するか · 観察、リトライ、目標チェックを束ねて再び進ませます。',
      cardRightFlavor: '実行ログと状態復帰ループが、次の試行をより賢くします。',
    },
    how: {
      title: 'BATTLE COMMANDS',
      copy: '参加者はポケモントレーナーのように入り、AIが迷う場面を観察し、ハーネスコマンドを一つずつ追加してトキワシティまで送る実験に参加します。',
      step: {
        fight: { label: 'FIGHT', body: '現場で問題を選びます。AIが壁にぶつかったり道を失ったりする失敗シーンを見て、今日のバトル目標を決めます。' },
        dex: { label: 'DEX', body: '失敗パターンを図鑑のように記録します。画面観察、ボタン入力、位置記憶、目標維持のどこが壊れるかを共有します。' },
        bag: { label: 'BAG', body: 'ハーネスアイテムを取り出します。save state、memory、retry、goal checkを組み合わせ、エージェントが再挑戦できる仕組みを付けます。' },
        run: { label: 'RUN', body: '修正したハーネスで再挑戦します。ログと面白い場面を一緒に見ながら次のループを回し、最後に結果を共有します。' },
      },
    },
    register: {
      title: 'WHERE TO JOIN',
      copy: '6月6日（土）· 11:00–15:00 · 清潭洞。登録はホスト承認後に確定します。',
      cardAria: 'ULWmonハッカソン参加案内カード',
      kicker: 'TRAINER PASS',
      cardTitle: 'Harness Hackathon',
      summary: 'AIがポケモン赤をプレイできるよう、観察、入力、save-state、retryループを一つのデッキに組み立てます。',
      fact: {
        dateLabel: 'DATE', date: '6月6日（土）',
        timeLabel: 'TIME', time: '11:00–15:00',
        placeLabel: 'PLACE', place: '清潭洞',
        statusLabel: 'STATUS', status: 'ホスト承認後に確定',
      },
      cta: 'Request Pass',
    },
    sponsor: { backedBy: 'BACKED BY' },
    footer: { contact: 'CONTACT' },
  },
};

const supportedLanguages = Object.keys(translations);
const languageButtons = document.querySelectorAll('[data-lang]');
const cards = document.querySelectorAll('[data-tilt-card]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const LANGUAGE_STORAGE_KEY = 'ulwmon-language';

function getTranslation(lang, key) {
  return key.split('.').reduce((value, part) => value?.[part], translations[lang]);
}

function getSavedLanguage() {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (_) {
    return null;
  }
}

function saveLanguage(lang) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (_) {
    // Storage can be unavailable in private/embedded browsers; language switching should still work.
  }
}

function normalizeLanguage(lang) {
  const value = String(lang || '').trim().toLowerCase();
  if (!value) return null;

  if (value.startsWith('ko')) return 'ko';
  if (value.startsWith('ja') || value.startsWith('jp')) return 'ja';
  if (value.startsWith('en')) return 'en';

  const base = value.split(/[-_]/)[0];
  return supportedLanguages.includes(base) ? base : null;
}

function getBrowserLanguage() {
  const preferredLanguages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language, navigator.userLanguage, navigator.browserLanguage];

  for (const lang of preferredLanguages) {
    const normalized = normalizeLanguage(lang);
    if (normalized) return normalized;
  }

  return 'ko';
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = normalizeLanguage(params.get('lang'));
  const saved = normalizeLanguage(getSavedLanguage());

  return requested || saved || getBrowserLanguage();
}

function applyLanguage(lang, options = {}) {
  const nextLang = normalizeLanguage(lang) || 'ko';
  document.documentElement.lang = nextLang;
  document.documentElement.dataset.language = nextLang;

  for (const node of document.querySelectorAll('[data-i18n]')) {
    const value = getTranslation(nextLang, node.dataset.i18n);
    if (typeof value === 'string') node.textContent = value;
  }

  for (const node of document.querySelectorAll('[data-i18n-content]')) {
    const value = getTranslation(nextLang, node.dataset.i18nContent);
    if (typeof value === 'string') node.setAttribute('content', value);
  }

  for (const node of document.querySelectorAll('[data-i18n-aria-label]')) {
    const value = getTranslation(nextLang, node.dataset.i18nAriaLabel);
    if (typeof value === 'string') node.setAttribute('aria-label', value);
  }

  document.title = translations[nextLang].meta.title;
  for (const button of languageButtons) {
    const isActive = button.dataset.lang === nextLang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  }

  if (options.persist) saveLanguage(nextLang);
}

for (const button of languageButtons) {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang, { persist: true }));
}

applyLanguage(getInitialLanguage());

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

const videos = document.querySelectorAll('video[autoplay]');
const canLazyStart = 'IntersectionObserver' in window;

function prepareVideo(video) {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const startVideo = () => video.play().catch(() => {});

  video.addEventListener('canplay', startVideo, { once: true });
  video.addEventListener('error', () => {
    const message = getTranslation(document.documentElement.lang, 'hero.videoError') || 'Could not load the video file';
    video.setAttribute('aria-label', `${video.getAttribute('aria-label') || 'Video'} ${message}`);
  });

  return startVideo;
}

if (canLazyStart) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const video = entry.target;
      observer.unobserve(video);
      const startVideo = prepareVideo(video);
      startVideo();
    }
  }, { rootMargin: '220px 0px' });

  for (const video of videos) observer.observe(video);
} else {
  for (const video of videos) prepareVideo(video)();
}
