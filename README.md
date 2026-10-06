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

The portfolio uses Web3Forms for the contact form. Configure the Web3Forms access key for the receiving address `prosenjitswarnakar2002@gmail.com`.

For local development, create `.env.local` in the project root using `.env.example` as a reference, then set the real key there:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_REAL_ACCESS_KEY
```

`.env.local` is ignored by Git and must never be committed. The tracked `.env.example` intentionally contains an empty value only.

For production deployment, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as an Environment Variable in the Vercel project settings for the environments you deploy (Production, Preview, and/or Development). Set its value to the key from Web3Forms, configured to deliver submissions to the receiving address above, then redeploy so Next.js can include the value in the build. Never add the real key to source code or `.env.example`.

The form submits to `https://api.web3forms.com/submit`. If the key is missing, it shows a configuration message and does not send a request or report a successful submission.

## Resume

The resume is served from:

- `public/resume/prosenjit-swarnakar-resume.pdf`
- `/resume/prosenjit-swarnakar-resume.pdf`

## Featured projects

The Projects section uses text-first editorial case studies and does not require project screenshots or image assets.

- SplitEasy: [source repository](https://github.com/PROSENJIT-RONI/spliteasy-flutter)
- FaceLive: [source repository](https://github.com/PROSENJIT-RONI/facelive)
