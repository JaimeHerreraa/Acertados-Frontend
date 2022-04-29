const saveUser = () => {
    const user = document.getElementById('username').value;
    localStorage.setItem('user', JSON.stringify(user));
}

export default {saveUser};