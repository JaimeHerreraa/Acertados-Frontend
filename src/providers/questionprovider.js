import localStorageProvider from "./localstorage";

const fetchQuestions = async () => {   
    const categorie = localStorageProvider.getCategory();
    const data = await fetch(`http://localhost:8080/categories/${categorie}/questions`);
    const question = await data.json();
    return question;
}

const checkAnswer = async (choice, questionId) => {
    const category = localStorageProvider.getCategory();
    const data = await fetch(`http://localhost:8080/categories/${category}/questions/${questionId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({id: choice.id, value: choice.value})
    });
    return await data.text();
}

const saveUserScore = async () => {
    const username = localStorageProvider.getUser();
    const score = localStorageProvider.getScore();
    const data = await fetch(`http://localhost:8080/users/endgame`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({name: username, score: score})
    });
    return await data.json()
}

export default {fetchQuestions, checkAnswer, saveUserScore}