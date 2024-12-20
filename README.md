
# Habit Tracker App

This project is a simple Habit Tracker application built using React and Redux Toolkit. It allows users to add habits they want to track and update the daily status of each habit. The app is designed to help users stay consistent with their routines.




## Features

- **Add Habits:** Create new habits to track, like "Reading a book" or "Going to the gym."
- **Daily Habit Tracking:** Update the status of each habit daily:
    - **Done:** The habit was completed for the day.
    - **Not Done:** The habit was not completed for the day.
    - **None:** No action was taken for the day.
- **View All Habits:** Display a list of all the habits being tracked.
- **Responsive Design:** The app layout is responsive and user-friendly.


## Project Structure

- Here is the folder structure of the app:

```
src/
├── components/
│   ├── CreateHabit.jsx       // Component for creating a new habit
│   ├── HabitDetails.jsx      // Component to display details of a specific habit
│   ├── HabitDisplay.jsx      // Component to display all habits
│   ├── Header.jsx            // Component for the app header
│   ├── overview.css          // Styles for the overview page
│   └── Overview.jsx          // Component for the main dashboard view
├── features/
│   └── habitsSlice.js        // Redux slice for managing habit states
├── App.js                    // Root component
├── bootstrap.min.css         // CSS framework for styling
├── index.css                 // Global styles
└── index.js                  // App entry point
```
## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/habit-tracker.git
   cd habit-tracker
    ```
2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start Development Server:**

   ```bash
   npm run Start
   ```
## Usage

**Adding a habit:**  
- Navigate to the "Add Habit" button on the main dashboard. 
- Enter the name of the habit and save it.

**Updating Daily Status:**  
- View all your habits on the dashboard.  
- Select a habit and mark its status as Done, Not Done, or None for the day.

**Viewing Habits:**  
- The dashboard lists all the current habits.
- You can see the status of each habit for the current day.


## Dependencies

This project uses the following libraries and tools:

- React: Frontend framework
- Redux Toolkit: State management
- Bootstrap: For styling
