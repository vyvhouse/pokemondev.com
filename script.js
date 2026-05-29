const translations = {
  ko: {
    meta: {
      title: 'PokemonDev : AI가 포켓몬을 깰 수 있을까?',
      description: 'PokemonDev — AI가 포켓몬 레드를 플레이해 초록마을까지 갈 수 있는지 실험하는 에이전트 하네스 밈-해커톤.',
      ogDescription: '포켓몬 레드에서 초록마을까지. 에이전트 하네스를 깎고 AI가 정신 나가는 걸 같이 봅니다.',
    },
    brand: { tagline: 'HARNESS HACKATHON' },
    language: { aria: '언어 선택' },
    nav: { aria: '상단 내비게이션', homeAria: 'PokemonDev 홈', event: 'EVENT', demo: 'DEMO', fix: 'THE FIX', items: 'ITEMS', join: 'JOIN' },
    hero: {
      shout: 'AI는 강하다. 하지만 벽은 더 강했다.',
      cta: { pass: 'Request Pass', watch: 'Watch the run' },
      status: { countdown: 'T-8 days · limited trainer slots', hashed: 'Hashed-backed agent harness sprint.' },
      menuAria: '배틀 커맨드',
      menu: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' },
      videoAria: 'AI 포켓몬 플레이 영상', videoGbaAria: 'GBA 안 AI 포켓몬 플레이 영상',
      mobileCalloutAria: 'AI 하네스 안내', mobileCallout: 'AI 하네스로 포켓몬을 정복하세요!',
      playerVideoAria: '왼쪽 아래 하네스 배틀 영상', playerVideoLabel: '왼쪽 아래 배틀 커맨드 영상', videoError: '영상 파일을 불러오지 못했습니다',
    },
    news: {
      kicker: 'TRAINER WARNING', title: 'POKEMON RALPH',
      copy: '두 영상은 같은 문제의 전후입니다. 그냥 맡기면 벽에 박고 길을 잃지만, 하네스를 붙이면 관찰·리트라이·목표 회복 루프로 다시 진행합니다.',
      cta: 'Join the run', noteTitle: 'Naive Agent vs Harnessed Agent', noteBody: '이 섹션은 “AI가 똑똑한가?”보다 “실패한 AI를 다시 목표로 돌려보낼 장치가 있는가?”를 보여줍니다.',
      cardLeftVideoAria: 'Naive Wall Loop 카드 영상', cardLeftTitle: 'Naive Wall Loop', cardLeftMove: '왜 실패하나 · 화면만 보면 같은 벽 앞에서 루프가 납니다.', cardLeftFlavor: 'Naive agent는 현재 위치와 다음 목표를 안정적으로 기억하지 못합니다.',
      cardRightVideoAria: 'Harness Recovery 카드 영상', cardRightTitle: 'Harness Recovery', cardRightMove: '어떻게 회복하나 · 관찰, 리트라이, 목표 체크를 묶어 다시 진행시킵니다.', cardRightFlavor: '실행 로그와 상태 복구 루프가 다음 시도를 더 똑똑하게 만듭니다.',
      galleryTitle: 'Failure Gallery', wallCounterLabel: 'Wall bump counter',
      failure: {
        wall: { title: 'Wall loop', body: '화면이 “거의 맞아 보여서” 같은 걸음을 반복합니다.' },
        menu: { title: 'Menu panic', body: '메뉴를 열고, 취소하고, 왜 열었는지 잊습니다.' },
        grass: { title: 'Grass fear', body: '풀숲을 프로덕션 장애처럼 대합니다.' },
        button: { title: 'Button mash', body: 'A 버튼을 더 누른다고 계획이 생기진 않습니다.' },
        oak: { title: 'Oak parole violation', body: '오박사가 위험하다고 하자 메뉴를 19번 열며 반성합니다.' },
        sign: { title: 'Signpost theology', body: '같은 표지판을 너무 오래 읽어서 종교가 생겼습니다.' },
        potion: { title: 'Potion hoarding', body: '오지 않는 미래를 위해 상처약 하나를 끝까지 아낍니다.' },
        missingno: { title: 'MissingNo alignment', body: '모델은 벽이 latent space의 지름길이라고 주장합니다.' },
      },
    },
    fix: {
      kicker: 'THE FIX', title: 'Before / After Harness', copy: '같은 루트, 다른 루프: memory, retry, goal check가 벽 코미디를 측정 가능한 전진으로 바꿉니다.',
      beforeVideoAria: '하네스 전 벽 루프 영상', afterVideoAria: '하네스 후 회복 영상', beforeLabel: 'BEFORE: wall loop', afterLabel: 'AFTER: recovery loop', sliderLabel: 'Harness mix',
      metric: { memory: { label: 'Memory', value: 'route + objective kept alive' }, retry: { label: 'Retry', value: 'failed states become next attempts' }, goal: { label: 'Goal check', value: 'Viridian stays on screen' } },
    },
    runStatus: {
      kicker: 'RUN STATUS', title: 'Route to Viridian', copy: '해커톤 스프린트용 정적 스코어보드: 루트 체크포인트, 웃긴 실패, 회복 성공을 함께 봅니다.', boardTitle: 'Static Leaderboard',
      route: { lab: 'Starter selected', pallet: 'Door found', route01: 'Wall boss engaged', viridian: 'Target city' },
      leader: { wall: { label: 'Most wall bumps', value: 'Ralph baseline · 404' }, recovery: { label: 'Best recovery', value: 'Harness loop · save-state retry' }, clip: { label: 'Funniest clip', value: 'Menu panic into victory pose' } },
    },
    glitch: {
      kicker: 'GLITCH LAB', title: 'MissingNo Protocol', copy: '에이전트가 벽을 유효한 전략이라고 우기면, 말싸움 대신 저주를 계측합니다.', trigger: 'Rare candy 주입', toast: 'MISSINGNO PROTOCOL: RALPH가 4초 동안 합법적으로 맛이 갔습니다.',
      log: { vision: 'vision_model: “저 회색 타일은 감정적으로 걸을 수 있어 보임”', action: 'action_policy: UP UP UP UP UP UP UP', memory: 'memory: 이전 벽 충돌 기록을 분위기상 삭제', harness: 'harness: checkpoint restored · shame preserved' },
      patch: { wall: { title: '벽이 보스로 승격됨', body: 'HP, 페이즈, 법적으로 별개인 분노 게이지를 얻었습니다.' }, dex: { title: 'Failure Dex 해금', body: '모든 부끄러운 루프가 웃음 트랙 달린 학습 데이터가 됩니다.' }, candy: { title: '에이전트용 Rare Candy', body: '더 똑똑해진 게 아니라, 더 관측 가능하고 덜 가스라이팅됩니다.' } },
    },
    bag: {
      kicker: 'THE BAG', title: 'Harness Items', copy: '에이전트를 wall enjoyer에서 route finisher로 바꾸기 위한 트레이너 장비입니다.', cta: 'Get starter kit',
      pokedex: { title: 'Harness Pokédex', body: '관찰, memory, retry, input exorcism, scoring을 담은 저주 방지 카드.' },
      quest: { title: 'Quest Board', body: '루트 목표를 고르고, 실패 패턴을 맡고, 작은 fix를 ship합니다.' },
      judge: { title: 'Judge Stats', body: '진행도, 견고함, 코미디, 설명 가능성, 그리고 벽에게 지지 않는 태도가 모두 점수입니다.' },
      github: { title: 'GitHub Starter', body: 'Repo link는 이벤트에서 공개합니다. 지금은 trainer pass를 요청하세요.', cta: 'Request Pass' },
    },
    how: {
      title: 'BATTLE COMMANDS', copy: '참여자는 포켓몬 트레이너처럼 입장해, AI가 헤매는 장면을 관찰하고, 하네스 명령을 하나씩 붙여가며 초록마을까지 보내는 실험을 함께 진행합니다.',
      step: {
        fight: { label: 'FIGHT', body: '현장에서 문제를 고릅니다. AI가 벽에 박거나 길을 잃는 실패 장면을 보고, 오늘 해결할 배틀 목표를 정합니다.' },
        dex: { label: 'DEX', body: '실패 패턴을 도감처럼 기록합니다. 화면 관찰, 버튼 입력, 위치 기억, 목표 유지 중 어디가 깨지는지 팀과 공유합니다.' },
        bag: { label: 'BAG', body: '하네스 아이템을 꺼냅니다. save state, memory, retry, goal check를 조합해 에이전트가 다시 시도할 장치를 붙입니다.' },
        run: { label: 'RUN', body: '수정한 하네스로 재도전합니다. 진행 로그와 웃긴 장면을 같이 보며 다음 루프를 돌리고, 마지막에는 결과를 공유합니다.' },
      },
    },
    register: {
      title: 'WHERE TO JOIN', copy: '6월 6일 토요일 · 11:00–15:00 · 청담동. 등록은 호스트 승인 후 확정됩니다.', cardAria: 'PokemonDev 해커톤 참가 안내 카드', kicker: 'TRAINER PASS', cardTitle: 'Harness Hackathon', summary: 'AI가 포켓몬 레드를 플레이하도록 관찰, 입력, save-state, retry 루프를 한 덱으로 조립합니다.',
      prep: { title: 'Slots & Prep', body: '소수 트레이너 슬롯. 노트북과 실험할 마음만 가져오세요. 에뮬레이터와 하네스 스타터는 현장에서 안내합니다.' },
      faq: { who: { q: '누가 참여할 수 있나요?', a: '에이전트, 게임, 해커톤, 밈 중 하나라도 좋아하면 충분합니다.' }, code: { q: '코드를 꼭 잘해야 하나요?', a: '아니요. 관찰, 프롬프트, 테스트, 클립 기록도 중요한 역할입니다.' }, bring: { q: '무엇을 가져가면 되나요?', a: '노트북, 충전기, 그리고 AI가 벽에 박아도 웃을 수 있는 마음이면 됩니다.' } },
      fact: { dateLabel: 'DATE', date: '6월 6일 토요일', timeLabel: 'TIME', time: '11:00–15:00', placeLabel: 'PLACE', place: '청담동', statusLabel: 'STATUS', status: '호스트 승인 후 확정' }, cta: 'Request Pass',
    },
    sponsor: { backedBy: 'BACKED BY' }, footer: { contact: 'CONTACT' },
  },
  en: {
    meta: { title: 'PokemonDev: Can AI beat Pokémon?', description: 'PokemonDev is an agent-harness meme hackathon testing whether AI can play Pokémon Red all the way to Viridian City.', ogDescription: 'From Pokémon Red to Viridian City. Build agent harnesses and watch AI lose its mind together.' },
    brand: { tagline: 'HARNESS HACKATHON' }, language: { aria: 'Language selection' },
    nav: { aria: 'Top navigation', homeAria: 'PokemonDev home', event: 'EVENT', demo: 'DEMO', fix: 'THE FIX', items: 'ITEMS', join: 'JOIN' },
    hero: { shout: 'The model is smart. The wall is smarter.', cta: { pass: 'Request Pass', watch: 'Watch the run' }, status: { countdown: 'T-8 days · limited trainer slots', hashed: 'Hashed-backed agent harness sprint.' }, menuAria: 'Battle commands', menu: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' }, videoAria: 'AI Pokémon gameplay video', videoGbaAria: 'AI Pokémon gameplay inside GBA', mobileCalloutAria: 'AI harness callout', mobileCallout: 'Conquer Pokémon with an AI harness!', playerVideoAria: 'Lower-left harness battle video', playerVideoLabel: 'Lower-left battle command video', videoError: 'Could not load the video file' },
    news: { kicker: 'TRAINER WARNING', title: 'POKEMON RALPH', copy: 'These two clips show the before and after of the same problem. Left alone, the agent walks into walls and gets lost. With a harness, observation, retry, and goal-recovery loops get it moving again.', cta: 'Join the run', noteTitle: 'Naive Agent vs Harnessed Agent', noteBody: 'This section is less about “is AI smart?” and more about “do we have a mechanism that sends a failed AI back toward the goal?”', cardLeftVideoAria: 'Naive Wall Loop card video', cardLeftTitle: 'Naive Wall Loop', cardLeftMove: 'Why it fails · Screen-only control loops in front of the same wall.', cardLeftFlavor: 'The naive agent cannot reliably remember its current position or next objective.', cardRightVideoAria: 'Harness Recovery card video', cardRightTitle: 'Harness Recovery', cardRightMove: 'How it recovers · Observation, retry, and goal checks are bundled into a loop.', cardRightFlavor: 'Execution logs and state-recovery loops make the next attempt smarter.', galleryTitle: 'Failure Gallery', wallCounterLabel: 'Wall bump counter', failure: { wall: { title: 'Wall loop', body: 'Repeats the same step because the screen looks “almost right.”' }, menu: { title: 'Menu panic', body: 'Opens menus, cancels menus, then forgets why it opened them.' }, grass: { title: 'Grass fear', body: 'Treats tall grass like a production outage.' }, button: { title: 'Button mash', body: 'More A presses do not create a plan.' }, oak: { title: 'Oak parole violation', body: 'Professor Oak says it is unsafe, so the agent opens the menu 19 times.' }, sign: { title: 'Signpost theology', body: 'Reads the same sign until it becomes a religion.' }, potion: { title: 'Potion hoarding', body: 'Saves one potion for a future that never arrives.' }, missingno: { title: 'MissingNo alignment', body: 'The model claims the wall is actually a shortcut in latent space.' } } },
    fix: { kicker: 'THE FIX', title: 'Before / After Harness', copy: 'Same route, different loop: memory, retry, and goal checks turn wall comedy into measurable progress.', beforeVideoAria: 'Before harness wall loop', afterVideoAria: 'After harness recovery', beforeLabel: 'BEFORE: wall loop', afterLabel: 'AFTER: recovery loop', sliderLabel: 'Harness mix', metric: { memory: { label: 'Memory', value: 'route + objective kept alive' }, retry: { label: 'Retry', value: 'failed states become next attempts' }, goal: { label: 'Goal check', value: 'Viridian stays on screen' } } },
    runStatus: { kicker: 'RUN STATUS', title: 'Route to Viridian', copy: 'A static scoreboard for the hackathon sprint: clear route checkpoints, funny failures, and recovery wins.', boardTitle: 'Static Leaderboard', route: { lab: 'Starter selected', pallet: 'Door found', route01: 'Wall boss engaged', viridian: 'Target city' }, leader: { wall: { label: 'Most wall bumps', value: 'Ralph baseline · 404' }, recovery: { label: 'Best recovery', value: 'Harness loop · save-state retry' }, clip: { label: 'Funniest clip', value: 'Menu panic into victory pose' } } },
    glitch: { kicker: 'GLITCH LAB', title: 'MissingNo Protocol', copy: 'When the agent insists the wall is a valid strategy, we stop arguing and instrument the curse.', trigger: 'Inject rare candy', toast: 'MISSINGNO PROTOCOL: RALPH is legally unhinged for 4 seconds.', log: { vision: 'vision_model: “that gray tile looks emotionally walkable”', action: 'action_policy: UP UP UP UP UP UP UP', memory: 'memory: previous wall collision deleted for vibes', harness: 'harness: checkpoint restored · shame preserved' }, patch: { wall: { title: 'Wall is now a boss', body: 'It has HP, phases, and a legally distinct rage meter.' }, dex: { title: 'Failure Dex unlocked', body: 'Every embarrassing loop becomes training data with a laugh track.' }, candy: { title: 'Rare candy for agents', body: 'Not smarter, just more observable and harder to gaslight.' } } },
    bag: { kicker: 'THE BAG', title: 'Harness Items', copy: 'Everything a trainer needs to turn an agent from wall enjoyer into route finisher.', cta: 'Get starter kit', pokedex: { title: 'Harness Pokédex', body: 'Anti-curse cards for observation, memory, retry, input exorcism, and scoring.' }, quest: { title: 'Quest Board', body: 'Pick a route objective, claim a failure pattern, ship a tiny fix.' }, judge: { title: 'Judge Stats', body: 'Progress, robustness, comedy, explainability, and refusing to lose to a wall all count.' }, github: { title: 'GitHub Starter', body: 'Repo link drops at the event. For now, request a trainer pass.', cta: 'Request Pass' } },
    how: { title: 'BATTLE COMMANDS', copy: 'Participants enter like Pokémon trainers, watch where the AI gets lost, then add harness commands one by one to help it reach Viridian City.', step: { fight: { label: 'FIGHT', body: 'Pick a problem on site. Watch the AI hit walls or lose its path, then choose today’s battle objective.' }, dex: { label: 'DEX', body: 'Log failure patterns like a Pokédex: screen observation, button input, position memory, and goal retention.' }, bag: { label: 'BAG', body: 'Pull out harness items. Combine save states, memory, retry, and goal checks so the agent can try again.' }, run: { label: 'RUN', body: 'Run the revised harness. Watch logs and funny moments together, loop again, then share the result.' } } },
    register: { title: 'WHERE TO JOIN', copy: 'Saturday, June 6 · 11:00–15:00 · Cheongdam-dong. Registration is confirmed after host approval.', cardAria: 'PokemonDev hackathon registration card', kicker: 'TRAINER PASS', cardTitle: 'Harness Hackathon', summary: 'Assemble observation, inputs, save states, and retry loops into one deck so AI can play Pokémon Red.', prep: { title: 'Slots & Prep', body: 'Limited trainer slots. Bring a laptop and a willingness to experiment. Emulator and harness starter notes are provided on site.' }, faq: { who: { q: 'Who can join?', a: 'If you like agents, games, hackathons, or memes, you are qualified.' }, code: { q: 'Do I need to be a strong coder?', a: 'No. Observation, prompts, tests, and clip logging all matter.' }, bring: { q: 'What should I bring?', a: 'A laptop, charger, and the ability to laugh when AI hits a wall.' } }, fact: { dateLabel: 'DATE', date: 'Saturday, June 6', timeLabel: 'TIME', time: '11:00–15:00', placeLabel: 'PLACE', place: 'Cheongdam-dong', statusLabel: 'STATUS', status: 'Confirmed after host approval' }, cta: 'Request Pass' },
    sponsor: { backedBy: 'BACKED BY' }, footer: { contact: 'CONTACT' },
  },
  ja: {
    meta: { title: 'PokemonDev：AIはポケモンを攻略できるか？', description: 'PokemonDevは、AIがポケットモンスター 赤をプレイしてトキワシティまで進めるかを試すエージェント・ハーネス系ミームハッカソンです。', ogDescription: 'ポケモン赤からトキワシティまで。エージェントのハーネスを作りながら、AIが迷走する様子を一緒に見届けます。' },
    brand: { tagline: 'HARNESS HACKATHON' }, language: { aria: '言語選択' },
    nav: { aria: '上部ナビゲーション', homeAria: 'PokemonDev ホーム', event: 'EVENT', demo: 'DEMO', fix: 'THE FIX', items: 'ITEMS', join: 'JOIN' },
    hero: { shout: 'AIは強い。でも壁はもっと強かった。', cta: { pass: 'Request Pass', watch: 'Watch the run' }, status: { countdown: 'T-8 days · limited trainer slots', hashed: 'Hashed-backed agent harness sprint.' }, menuAria: 'バトルコマンド', menu: { fight: 'FIGHT', dex: 'DEX', bag: 'BAG', join: 'JOIN' }, videoAria: 'AIのポケモンプレイ動画', videoGbaAria: 'GBA内のAIポケモンプレイ動画', mobileCalloutAria: 'AIハーネス案内', mobileCallout: 'AIハーネスでポケモンを攻略しよう！', playerVideoAria: '左下のハーネス・バトル動画', playerVideoLabel: '左下のバトルコマンド動画', videoError: '動画ファイルを読み込めませんでした' },
    news: { kicker: 'TRAINER WARNING', title: 'POKEMON RALPH', copy: '2つの動画は、同じ問題のビフォー／アフターです。そのまま任せると壁にぶつかって迷いますが、ハーネスを付けると観察・リトライ・目標復帰ループで再び進みます。', cta: 'Join the run', noteTitle: 'Naive Agent vs Harnessed Agent', noteBody: 'このセクションでは「AIは賢いか？」よりも、「失敗したAIを再びゴールへ戻す仕組みがあるか？」を見せます。', cardLeftVideoAria: 'Naive Wall Loopカード動画', cardLeftTitle: 'Naive Wall Loop', cardLeftMove: 'なぜ失敗するか · 画面だけを見ると同じ壁の前でループします。', cardLeftFlavor: 'Naive agentは現在位置と次の目標を安定して記憶できません。', cardRightVideoAria: 'Harness Recoveryカード動画', cardRightTitle: 'Harness Recovery', cardRightMove: 'どう復帰するか · 観察、リトライ、目標チェックを束ねて再び進ませます。', cardRightFlavor: '実行ログと状態復帰ループが、次の試行をより賢くします。', galleryTitle: 'Failure Gallery', wallCounterLabel: 'Wall bump counter', failure: { wall: { title: 'Wall loop', body: '画面が「ほぼ正しい」ように見えて同じ一歩を繰り返します。' }, menu: { title: 'Menu panic', body: 'メニューを開き、キャンセルし、なぜ開いたか忘れます。' }, grass: { title: 'Grass fear', body: '草むらを本番障害のように扱います。' }, button: { title: 'Button mash', body: 'Aボタンを増やしても計画は生まれません。' }, oak: { title: 'Oak parole violation', body: 'オーキド博士に止められ、メニューを19回開いて反省します。' }, sign: { title: 'Signpost theology', body: '同じ看板を読みすぎて宗教になります。' }, potion: { title: 'Potion hoarding', body: '来ない未来のためにキズぐすりを最後まで温存します。' }, missingno: { title: 'MissingNo alignment', body: 'モデルは壁をlatent spaceの近道だと主張します。' } } },
    fix: { kicker: 'THE FIX', title: 'Before / After Harness', copy: '同じルート、違うループ。memory、retry、goal checkが壁コメディを測定できる前進に変えます。', beforeVideoAria: 'ハーネス前の壁ループ動画', afterVideoAria: 'ハーネス後の復帰動画', beforeLabel: 'BEFORE: wall loop', afterLabel: 'AFTER: recovery loop', sliderLabel: 'Harness mix', metric: { memory: { label: 'Memory', value: 'route + objective kept alive' }, retry: { label: 'Retry', value: 'failed states become next attempts' }, goal: { label: 'Goal check', value: 'Viridian stays on screen' } } },
    runStatus: { kicker: 'RUN STATUS', title: 'Route to Viridian', copy: 'ハッカソン用の静的スコアボード。ルート、面白い失敗、復帰成功を追います。', boardTitle: 'Static Leaderboard', route: { lab: 'Starter selected', pallet: 'Door found', route01: 'Wall boss engaged', viridian: 'Target city' }, leader: { wall: { label: 'Most wall bumps', value: 'Ralph baseline · 404' }, recovery: { label: 'Best recovery', value: 'Harness loop · save-state retry' }, clip: { label: 'Funniest clip', value: 'Menu panic into victory pose' } } },
    glitch: { kicker: 'GLITCH LAB', title: 'MissingNo Protocol', copy: 'エージェントが壁を有効な戦略だと言い張るなら、議論せず呪いを計測します。', trigger: 'Rare candy注入', toast: 'MISSINGNO PROTOCOL: RALPHは4秒間だけ合法的にバグります。', log: { vision: 'vision_model:「あの灰色タイル、感情的には歩けそう」', action: 'action_policy: UP UP UP UP UP UP UP', memory: 'memory: 直前の壁衝突を雰囲気で削除', harness: 'harness: checkpoint restored · shame preserved' }, patch: { wall: { title: '壁がボスに昇格', body: 'HP、フェーズ、法的に別物の怒りゲージを獲得。' }, dex: { title: 'Failure Dex解放', body: '恥ずかしいループはすべて笑い声つきの学習データになります。' }, candy: { title: 'エージェント用Rare Candy', body: '賢くなったのではなく、観測しやすく騙されにくくなっただけ。' } } },
    bag: { kicker: 'THE BAG', title: 'Harness Items', copy: 'エージェントをwall enjoyerからroute finisherへ変えるためのトレーナー装備です。', cta: 'Get starter kit', pokedex: { title: 'Harness Pokédex', body: '観察、memory、retry、入力除霊、scoringの呪い対策カード。' }, quest: { title: 'Quest Board', body: 'ルート目標を選び、失敗パターンを担当し、小さなfixをshipします。' }, judge: { title: 'Judge Stats', body: '進捗、堅牢性、コメディ、説明可能性、そして壁に負けない態度がすべてスコアです。' }, github: { title: 'GitHub Starter', body: 'Repo linkはイベントで共有します。まずはtrainer passを申請してください。', cta: 'Request Pass' } },
    how: { title: 'BATTLE COMMANDS', copy: '参加者はポケモントレーナーのように入り、AIが迷う場面を観察し、ハーネスコマンドを一つずつ追加してトキワシティまで送る実験に参加します。', step: { fight: { label: 'FIGHT', body: '現場で問題を選びます。AIが壁にぶつかったり道を失ったりする失敗シーンを見て、今日のバトル目標を決めます。' }, dex: { label: 'DEX', body: '失敗パターンを図鑑のように記録します。画面観察、ボタン入力、位置記憶、目標維持のどこが壊れるかを共有します。' }, bag: { label: 'BAG', body: 'ハーネスアイテムを取り出します。save state、memory、retry、goal checkを組み合わせ、エージェントが再挑戦できる仕組みを付けます。' }, run: { label: 'RUN', body: '修正したハーネスで再挑戦します。ログと面白い場面を一緒に見ながら次のループを回し、最後に結果を共有します。' } } },
    register: { title: 'WHERE TO JOIN', copy: '6月6日（土）· 11:00–15:00 · 清潭洞。登録はホスト承認後に確定します。', cardAria: 'PokemonDevハッカソン参加案内カード', kicker: 'TRAINER PASS', cardTitle: 'Harness Hackathon', summary: 'AIがポケモン赤をプレイできるよう、観察、入力、save-state、retryループを一つのデッキに組み立てます。', prep: { title: 'Slots & Prep', body: '少人数のトレーナースロットです。ノートPCと実験する気持ちを持ってきてください。エミュレータとハーネススターターは現地で案内します。' }, faq: { who: { q: '誰が参加できますか？', a: 'エージェント、ゲーム、ハッカソン、ミームのどれかが好きなら十分です。' }, code: { q: 'コードが得意である必要がありますか？', a: 'いいえ。観察、プロンプト、テスト、クリップ記録も重要です。' }, bring: { q: '何を持って行けばいいですか？', a: 'ノートPC、充電器、そしてAIが壁にぶつかっても笑える気持ちです。' } }, fact: { dateLabel: 'DATE', date: '6月6日（土）', timeLabel: 'TIME', time: '11:00–15:00', placeLabel: 'PLACE', place: '清潭洞', statusLabel: 'STATUS', status: 'ホスト承認後に確定' }, cta: 'Request Pass' },
    sponsor: { backedBy: 'BACKED BY' }, footer: { contact: 'CONTACT' },
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
  try { return window.localStorage.getItem(LANGUAGE_STORAGE_KEY); } catch (_) { return null; }
}

function saveLanguage(lang) {
  try { window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); } catch (_) {}
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

function initWallCounter() {
  const counter = document.querySelector('[data-wall-counter]');
  if (!counter) return;
  const valueNode = counter.querySelector('[data-wall-counter-value]');
  if (!valueNode) return;
  const start = Number(counter.dataset.start || 0);
  const end = Number(counter.dataset.end || 404);
  const suffix = counter.dataset.suffix || '';
  const setValue = (value) => { valueNode.textContent = `${Math.round(value)}${suffix}`; };
  if (reduceMotion || !('IntersectionObserver' in window)) {
    setValue(end);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.disconnect();
      const started = performance.now();
      const duration = 1100;
      const tick = (now) => {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(start + (end - start) * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, { threshold: 0.35 });
  observer.observe(counter);
}

function initFixSlider() {
  for (const slider of document.querySelectorAll('[data-fix-slider]')) {
    const range = slider.querySelector('[data-fix-range]');
    const overlay = slider.querySelector('[data-fix-overlay]');
    if (!range || !overlay) continue;
    const sync = () => { overlay.style.width = `${range.value}%`; };
    range.addEventListener('input', sync);
    sync();
  }
}

initWallCounter();
initFixSlider();

function showGlitchToast(message) {
  let toast = document.querySelector('[data-glitch-toast]');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'glitch-toast';
    toast.dataset.glitchToast = '';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showGlitchToast.timer);
  showGlitchToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 3600);
}

function triggerGlitchMode() {
  document.body.classList.add('glitch-mode');
  showGlitchToast(getTranslation(document.documentElement.lang, 'glitch.toast') || 'MISSINGNO PROTOCOL');
  window.clearTimeout(triggerGlitchMode.timer);
  triggerGlitchMode.timer = window.setTimeout(() => document.body.classList.remove('glitch-mode'), 4200);
}

function initGlitchLab() {
  for (const button of document.querySelectorAll('[data-glitch-trigger]')) {
    button.addEventListener('click', triggerGlitchMode);
  }
  const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  const pressed = [];
  window.addEventListener('keydown', (event) => {
    pressed.push(event.key.length === 1 ? event.key.toLowerCase() : event.key);
    if (pressed.length > code.length) pressed.shift();
    if (code.every((key, index) => pressed[index] === key)) {
      pressed.length = 0;
      triggerGlitchMode();
    }
  });
}

initGlitchLab();

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
