# 🎉 Jah Pod Sextar?

"Jah pod sextar?" is a fun web application that humorously determines whether it's time to start celebrating the
weekend. The idea came up during a casual joke with my coworkers, where we would often ask each other "Já pode sextar?"
every Friday to see if the weekend mood was officially allowed to begin. This app brings that fun tradition to life!

## 🇧🇷 What is "Sextar"?

In Brazilian culture, "sextar" is derived from "sexta-feira" (Friday) and is widely used to express excitement for the
weekend. People often say "hoje é dia de sextar!" when they're ready to finish work or studies and start unwinding.
Essentially, "sextar" means to begin enjoying Friday — whether by relaxing, going out, or just getting into the weekend
vibe.

## 🇺🇸 Equivalent Expression in the U.S.

In the United States, a similar phrase would be "It's finally Friday!" or "TGIF" (Thank God It's Friday). While "TGIF"
focuses on relief from the workweek, "sextar" is more about actively celebrating the arrival of Friday.

## 🚀 How It Works

- The app checks the current day and time.
- It fetches predefined responses stored in a JSON file.
- Depending on the day and time, it delivers a playful message.
- If it’s Friday after noon, the app confirms that it’s time to “sextar!” with a festive message. 🎉
- If it's not quite time, the app will show a funny or slightly disappointing reply. 😅

## 🛠️ Technologies Used

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS

## ⚙️ Installation & Setup

To run the project locally, follow these steps:

### 1. Fork the repository

Click on the "Fork" button at the top right of this repository to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/your-username/jah-pod-sextar.git
cd jah-pod-sextar
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run start
```

## 🤝 Contributors

This project started as a fun inside joke, and we’re excited to keep it growing! If you have ideas for new responses,
animations, or features, feel free to open an issue or submit a pull request on GitHub. Let’s make this project even
more entertaining together! 🎉

### How to contribute

#### 1. Fork the repository by clicking on the "Fork" button at the top right of this repository to create your own copy

#### 2. Clone your fork

```sh
git clone https://github.com/your-username/jah-pod-sextar.git
cd jah-pod-sextar
```

#### 3. Create a new branch from `stage`

```sh
git checkout -b feat/your-feature-name stage
```

#### 4. Make your changes

#### 5. Commit your changes following conventional commit practices

```sh
git add .
git commit -m '<type>: <message>'
```

#### 6. Push to your forked repository

```sh
git push origin feat/your-feature-name
```

#### 7. Open a Pull Request on this repository with the description of your changes

## 🛠️ Adding New Themes

Adding new themes to the project is simple and straightforward. Just follow these steps:

### 1. Create a new theme class

- Open `src/themes/themes.css` file
- Create a new class following the naming convention `theme--<theme-name>` with the desired colors. For example, if your
  theme is called "Pop Filter", you would add:

```css
.theme--pop-filter {
  --color-text: #ffffff; /* Changes main text color */
  --color-footer: #ffffff; /* Changes footer text color */
  --color-hover: #ffffff; /* Changes footer hover color */
  --color-bg: #ffffff; /* Changes background color */
}
```

### 2. Add the theme name to `availableThemes`

- Open `src/themes/availableThemes.ts` file
- Add the new theme name to the `availableThemes` array. For example, for the "Pop Filter" theme, you would add:

```typescript
const availableThemes: string[] = [
  "Dark",
  "Light",
  "Pop Filter",   // Add your new theme here
  // other themes...
]
```

### 3. Select the new theme

- After following the above steps, your new theme should appear in the dropdown menu and be selectable.

## 📌 Get Ready to Sextar!

Stay tuned for more updates and fun features! Until then... is it time to "sextar"? 🤔