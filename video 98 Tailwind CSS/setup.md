# How to setup Tailwind CSS

Step 1: Run the following commands

```
npm install -D tailwindcss
npm install tailwindcss @tailwindcss/cli
```

Step 2: create src/input.css to include:

```
@import "tailwindcss";
```

Step 3: Run the following command:

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Step 4: Include the src/output.css file to your html


<!-- This is the latest version support for taiwind css  -->
