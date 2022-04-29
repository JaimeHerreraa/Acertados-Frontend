const saveUser = () => {
    const user = document.getElementById('username').value;
    localStorage.setItem('user', JSON.stringify(user));
}

const getUser = () => {
    const user = localStorage.getItem('user');
    const data = JSON.parse(user);
    return data;
}

const saveCategory = (category = 1) => {
    localStorage.setItem('category', JSON.stringify(category));
}

const updateCategory = () => {
    const category = JSON.parse(localStorage.getItem('category'));
    localStorage.setItem('category', category + 1);
}

const getCategory = () => {
    const category = localStorage.getItem('category');
    const data = JSON.parse(category);
    return data;
}

const saveScore = (score = 0) => {
    localStorage.setItem('score', JSON.stringify(score));
}

const getScore = () => {
    const score = localStorage.getItem('score');
    const data = JSON.parse(score);
    return data;
}

const updatePoints = () => {
    const score = getScore();
    saveScore(score + 1);
}

const saveMessage = (message) => {
    localStorage.setItem('message', JSON.stringify(message));
}

const getMessage = () => {
    const message = localStorage.getItem('message');
    const data = JSON.parse(message);
    return data
}
   

export default {saveUser, saveCategory, getUser, saveScore, getScore, updateCategory, updatePoints, getCategory, saveMessage, getMessage};