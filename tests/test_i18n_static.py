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
    'data-i18n="how.step.fight.body"',
    'data-i18n="register.summary"',
]

for attr in required_attrs:
    assert attr in html, f"missing i18n attribute: {attr}"

assert 'class="language-switcher"' in html, "missing language switcher"
for lang in ("ko", "en", "ja"):
    assert f'data-lang="{lang}"' in html, f"missing language button: {lang}"

for lang in ("ko", "en", "ja"):
    assert re.search(rf"\b{lang}:\s*{{", js), f"missing translations for {lang}"

for token in ["applyLanguage", "localStorage", "document.documentElement.lang", "data-i18n"]:
    assert token in js, f"missing runtime token: {token}"

print("i18n static checks passed")
