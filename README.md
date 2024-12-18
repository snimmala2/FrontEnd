
# Todo List App - Front-End

This is the front-end for the Todo List application, built with **Next.js**, **TypeScript**, and styled using **Tailwind CSS**.

---

## Features

- View, add, edit, delete tasks.
- Mark tasks as completed/not completed.
- Summary of tasks and their completion status.
- Responsive and clean UI.

---

## Prerequisites

- Node.js v16 or later
- npm or yarn

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <https://github.com/snimmala2/FrontEnd>
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
   Replace the URL with your back-end API's base URL if different.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   Navigate to `http://localhost:3000`.

---

## Scripts

- `npm run dev` - Run the development server.
- `npm run build` - Build the application for production.
- `npm run start` - Start the production server.

---

## Project Structure

- `app/` - Application routes.
- `components/` - Reusable UI components.
- `UI/` - CSS and global styles.

---

## API Endpoints

The app interacts with the following API endpoints:

- `GET /tasks` - Fetch all tasks.
- `POST /tasks` - Create a new task.
- `PUT /tasks/:id` - Update a task.
- `DELETE /tasks/:id` - Delete a task.

---

## Deployment

To deploy, build the project and host it on your platform of choice:
```bash
npm run build
npm run start
```

---

## Troubleshooting

If you encounter issues, ensure that:
- The back-end API is running and accessible.
- Environment variables are correctly configured.

---

## License

This project is licensed under the MIT License.
