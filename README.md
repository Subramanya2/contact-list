# React Contact List Project

This is a single-page contact list application built with React. It's a personal project focused on creating a clean, responsive, and user-friendly interface for managing contacts.

### [Live Demo](https://my-new-contact-list.netlify.app)

---

## Features

* **View Contacts**: See the complete list of contacts on load.
* **Advanced Search**: Filter the list in real-time by typing a name, email, **or** phone number.
* **Search Highlighting**: The matching text (name, email, or phone) is highlighted in yellow within the search results for clear visibility.
* **Add Contact**: A toggleable form allows for adding new contacts to the list.
* **Inline Form Validation**: The form provides real-time validation feedback.
    * Name is required.
    * Phone is required and must be exactly 10 digits.
    * Email is optional.
* **Toast Notifications**: Receive a non-intrusive "Contact added" notification upon successful submission.
* **Responsive Design**: The layout adapts to mobile, tablet, and desktop screen sizes.

---

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Subramanya2/contact-list.git
    cd react-contact-list
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

The application will be running at `http://localhost:3000`.

---

## Design Choices & Assumptions

Here are some of the design choices and assumptions made during this project:

1.  **API Mocking**: The contact data is hardcoded into the main `App.js` component's state. This mimics fetching data from an API on application load.
2.  **State Management**: All state is managed within React using `useState`, `useMemo`, and `useEffect`. No external state management libraries were needed.
3.  **Unique IDs**: When adding a new contact, a unique ID is generated using `Date.now()`. In a real-world application, this would be handled by the backend.
4.  **UX for Validation**: I replaced disruptive `alert()` boxes with inline error messages under the respective input fields. This provides a much smoother user experience, guiding the user to fix errors without interrupting their flow.
5.  **UX for Feedback**: I added a "toast" notification for success actions (like adding a contact). This gives the user clear confirmation that their action was completed.
6.  **Styling**: I used a single `App.css` file for all styling. For a larger application, I would opt for CSS Modules or a styled-component library, but for this task, a single file is simpler to review.
7.  **No Extra Libraries**: I used **only React** to demonstrate core framework skills.