# Valeria Litvinova — Portfolio

Персональний сайт-портфоліо AI Automation Engineer. React + TypeScript + Vite.

## Запуск локально

```bash
npm install
npm run dev        # http://localhost:5173
```

## Деплой на GitHub Pages

1. Створи репозиторій на GitHub і запуш цей проєкт у гілку `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:USERNAME/REPO.git
   git push -u origin main
   ```
2. У репозиторії: **Settings → Pages → Source → GitHub Actions**.
3. Все. Воркфлоу `.github/workflows/deploy.yml` збирає і деплоїть сайт
   на кожен пуш у `main`. Лінк з'явиться у Settings → Pages
   (`https://USERNAME.github.io/REPO/`).

`base: './'` у `vite.config.ts` робить збірку незалежною від назви репозиторію.

## Де що редагувати

| Що | Де |
|---|---|
| Контакти, навігація, статистика, послуги, FAQ, факти | `src/data/content.ts` |
| Тексти кейсів | `src/components/Cases.tsx` |
| Хіро (заголовок, мокап пайплайна) | `src/components/Hero.tsx` |
| Всі стилі | `src/styles/global.css` |
| Картинки та відео | `src/assets/` |

## Як повернути ціни

У `src/data/content.ts` додай у тип `Service` поле `price?: string`,
заповни його (напр. `price: 'from $3,000'`) і виведи в
`src/components/Services.tsx` перед `tier-time` — CSS-класи
`.tier-price` вже готові в `global.css`.

## Нотатки

- Відео стиснуті для вебу (`en-avatar.mp4` — 6.7MB, оригінал 61MB).
  Оригінали зберігай окремо, не в репозиторії.
- Анімації поважають `prefers-reduced-motion` і мають safety-фолбеки:
  контент ніколи не залишиться прихованим.
