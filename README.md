# Develop.me - UI design implementation using React.JS

## Prerequisites

To run this project, you need to have **Node.js** and **npm** installed on your machine.

- **Node.js**: JavaScript runtime environment
- **npm**: Node package manager (comes bundled with Node.js)

You can download and install Node.js (which includes npm) from the official website:  
[https://nodejs.org/](https://nodejs.org/)

To verify installation, run these commands in your terminal:

```bash
node -v
npm -v
```

## Setup instructions

- Open command line, power shell or your os-terminal in any folder where you want to place your project.

- Type `git clone https://github.com/IsteakShupto/devlop.me.git` and place enter.

- Now go into the directory, basically `cd` is used to get inside a directory, follow your terminal manual to go into the directory.

- Run `npm run install` and press enter.

- After the completion of previous step run `npm run dev` and open `http://localhost:5173` to view the web app.

## Tasks completed

- Framework: The technology/framework I have chosen to perform this task is React.JS.

- Styling: I have used tailwindcss to design the whole UI.

- Component-based architechture: I have divided whole UI into several parts, major twos are components and pages. Some of resuable components are placed in components and the core sections like `Home`, `About` etc. are placed in the pages section.

- Responsive-ness: The whole web UI is responsiveness from mobile sized (375px at least) to 4k monitors. I have primarily used five tailwindcss breakpoints `sm`, `md`, `lg`, `xl` and `2xl`.

- Animations: Several animations were added such like scaling up or down of links, button etc. Some icons are floating / bouncing to attract user-base such as call icons and scroll-down icons are motivating users to go down to explore more of the UI.

- Skeleton loader / spinner: I have added skeleton and loading in two sections to demonstrate because in real-world scenario most of the time API will called from backend and we will be needing skeletons and loading icons before data reaches UI. Here in `WhyChooseMe.tsx` and `WorkProcess.tsx`, I have triggered a two second delay manually to show the skeleton and loadings.

- Error boundary: Using `react-error-boundary` I have added a `FallBackUi.tsx` configuration. It is located in the fallback folder.

- Accessibility: To ensure and demonstrate keyboard navigation and accessibility, I have tried to use semantic tags as much as possible, also attributes like aria-label etc. used.

- Modular architechture: I have used proper folders and file namings to keep the architechture modular. The folders in src folders contributing to my app UI's are `components`, `pages`, `context`, `tests` etc.

- Type safety: For type safety, I have used typescript with react here.

- Clean code: I have used proper function naming, file namings and variable namings to keep the code clean and readable.

- Formatting tools: Used prettier throughtout the whole coding session.
