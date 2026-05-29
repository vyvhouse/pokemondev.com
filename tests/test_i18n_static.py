#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "index.html").read_text(encoding="utf-8")
js = (ROOT / "script.js").read_text(encoding="utf-8")

required_attrs = [
    'data-i18n="meta.title"',
    'data-i18n="nav.event"',
    'data-i18n="news.copy"',
    'data-i18n="news.galleryTitle"',
    'data-i18n="fix.title"',
    'data-i18n="runStatus.title"',
    'data-i18n="glitch.title"',
    'data-i18n="bag.title"',
    'data-i18n="how.step.fight.body"',
    'data-i18n="register.summary"',
    'data-i18n="register.faq.who.q"',
]

for attr in required_attrs:
    assert attr in html, f"missing i18n attribute: {attr}"

assert 'class="language-switcher"' in html, "missing language switcher"
assert '<span>PokemonDev</span>' in html, "missing PokemonDev logo text"
assert 'data-wall-counter' in html, "missing wall counter"
assert 'data-fix-slider' in html, "missing fix slider"
assert 'id="run-status"' in html, "missing run-status section"
assert 'id="bag"' in html, "missing the-bag section"
assert 'id="glitch-lab"' in html, "missing glitch-lab section"
assert 'aria-label="PokemonDev 해커톤 참가 안내 카드"' in html, "card aria should use PokemonDev"
for lang in ("ko", "en", "ja"):
    assert f'data-lang="{lang}"' in html, f"missing language button: {lang}"

for lang in ("ko", "en", "ja"):
    assert re.search(rf"\b{lang}:\s*{{", js), f"missing translations for {lang}"

for token in [
    "PokemonDev",
    "The model is smart. The wall is smarter.",
    "AI는 강하다. 하지만 벽은 더 강했다.",
    "AIは強い。でも壁はもっと強かった。",
    "runStatus",
    "bag:",
    "fix:",
    "wallCounterLabel",
    "MissingNo Protocol",
    "Oak parole violation",
    "glitch:",
    "faq:",
    "initWallCounter",
    "initFixSlider",
    "initGlitchLab",
    "triggerGlitchMode",
    "applyLanguage",
    "localStorage",
    "navigator.languages",
    "getBrowserLanguage",
    "document.documentElement.lang",
    "data-i18n",
    "persist: true",
]:
    assert token in js, f"missing runtime token: {token}"

visible_html = re.sub(r'ulwmon-language', '', html, flags=re.IGNORECASE)
visible_js = re.sub(r'ulwmon-language', '', js, flags=re.IGNORECASE)
assert 'ULWmon' not in visible_html, "visible ULWmon remains in index.html"
assert 'ULWmon' not in visible_js, "visible ULWmon remains in script.js"
assert 'PokemonDev' in html and 'PokemonDev' in js, "PokemonDev brand missing"

print("i18n static checks passed")
