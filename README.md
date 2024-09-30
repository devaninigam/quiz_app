# Quix_app

## Project Overview
**Quix_app** is a modern quiz platform that allows users to register, log in, and participate in multiple-choice quizzes. The application provides real-time feedback and scoring, and it is optimized for a smooth user experience across both desktop and mobile devices. Users can attempt quizzes, view scores, and log out once they are done.

## Project Purpose

### 1. **Interactive Quiz Platform**:
- The primary goal of this project is to provide an interactive platform where users can take quizzes.
- The application allows users to answer multiple-choice or other types of quiz questions.

### 2. **Scoring System**:
- The app includes a scoring mechanism where users earn points based on correct answers.
- Scores are displayed at the end of the quiz or after each question.

### 3. **Database for Questions**:
- The `db.json` file suggests that quiz questions and possibly user data are stored locally in a JSON format, which the application fetches dynamically.

### 4. **Frontend Focus**:
- The project focuses on the frontend using **Vite** as the development tool, with **JavaScript** and **React** for building the user interface.
- Vite is known for its fast build and development server, often used with React or Vue.

### 5. **Responsive Design**:
- The app is designed to be responsive, ensuring compatibility with both desktop and mobile devices.

## User Workflow
- **Login/Register**: Users must first log in or register to access the quizzes.
- **Quiz Attempt**: After login, users can choose a quiz and attempt to answer multiple-choice questions.
- **View Scores**: Upon completion, users are shown their scores.
- **Logout**: Users can log out after completing the quizzes.

## Potential Use Cases
- **Educational Tool**: This quiz application could be used by educators to create interactive quizzes for students.
- **Trivia Games**: The platform can be used for fun trivia games.
- **Survey/Feedback**: With slight modifications, this project could be used to gather feedback or conduct surveys with multiple-choice questions.

## Features
- Dynamic quiz interface
- Scoring system
- Responsive design

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (>= 14.x)
- **npm** (recommended)

## Technology Stack
- **Frontend**: React + JavaScript 
- **Styling**: Tailwind CSS (with theme switching)
- **Build Tool**: Vite

## Installation

Follow the steps below to set up the project on your local machine:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/devaninigam/quiz_app.git
    ```
   
2. **Navigate to the Project Directory**:
    ```bash
    cd quix_app 
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```
    
4. **Start the Development JSON-Server**:
    ```bash
    npx json-server --watch db.json --port 3000
    ```
    
5. **Start the Development Server**:
    ```bash
    npm run dev
    ```
    Vite will start the development server, and the app will be available at:  
    [http://localhost:5173](http://localhost:5173/)

## API Endpoints
The app uses a local JSON database (`db.json`) served by `json-server`. Here are the key API endpoints:

- `GET /questions`: Retrieves all quiz questions
- `POST /results`: Submits quiz results

## Usage
- Open the app in your browser at [http://localhost:5173](http://localhost:5173/).
- Register or log in to access the quiz.
- Select a quiz and start answering the questions.
- View your score at the end and log out when done.

## Adding Screenshots
Below are example screenshots for reference:

![Login in Quiz](https://github.com/user-attachments/assets/f5025341-295f-476b-8562-1313cf2692dc)
![Register in Quiz](https://github.com/user-attachments/assets/d83d4c70-d615-4448-ac94-a9acec631850) 
![Quiz Question](https://github.com/user-attachments/assets/4194b99f-c456-40e4-be34-2abc5a585660)
![Quiz Marks](https://github.com/user-attachments/assets/3becaef3-f619-41ae-bc22-793bbde92ad1)
![Logout Page](https://github.com/user-attachments/assets/b7085aeb-b234-4048-ae33-cc3d9dc87834)

## License
This project is licensed under the MIT License.

