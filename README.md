# Prosenjit Swarnakar Portfolio

A premium personal portfolio website for Prosenjit Swarnakar, built with Next.js and focused on practical software development, Flutter engineering, and community-driven product building.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules for styling

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Contact form setup

The portfolio uses Web3Forms for the contact form.

Create a local environment file:

```bash
cp .env.example .env.local
```

Then add:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

The contact form will gracefully show a fallback message if the key is missing instead of falsely claiming success.

## Resume

The resume is served from:

- `public/resume/prosenjit-swarnakar-resume.pdf`
- `/resume/prosenjit-swarnakar-resume.pdf`

## Featured projects

The Projects section uses text-first editorial case studies and does not require project screenshots or image assets.

- SplitEasy: [source repository](https://github.com/PROSENJIT-RONI/spliteasy-flutter)
- FaceLive: [source repository](https://github.com/PROSENJIT-RONI/facelive)
