# Modern Portfolio Update

This update replaces the old inline-styled portfolio with a responsive, recruiter-friendly React portfolio.

## Files
- `src/App.jsx`, `src/App.css`, `src/index.css`
- `src/components/` (Home, About, Skill, Project, Contact)
- `src/ThemeContext.jsx`, `src/main.jsx`
- `index.html`
- `public/resume.docx` (downloadable current resume)

## Apply the update
1. Back up your existing project.
2. Copy the files and folders from this package into your Vite React project's root, keeping the shown folder structure.
3. Ensure `@emailjs/browser` is installed (`npm install @emailjs/browser`).
4. Run `npm run dev` and test navigation, theme switching, all project links, resume download, and the contact form.

The contact form retains the EmailJS service/template/public-key values from your submitted source. The EmailJS key is a browser public key; protect the form with EmailJS dashboard restrictions and abuse controls.

## Notes
- Dish Scanner is labelled `In development`; the old unavailable demo link has been removed.
- FusionCraft Hub and Property Listing Platform link to their supplied live previews and repositories.
- The LinkedIn link uses the profile URL previously confirmed by you.
- This is a source update, not a complete project repository: keep your existing `package.json`, Vite configuration, and any project-specific setup files.
