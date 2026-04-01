import { fetchUserData, fetchUserRepositories } from './api.js';
import { renderProfile, showAlert } from './ui.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (userName) {
        try {
            const userData = await fetchUserData(userName);
            const userRepos = await fetchUserRepositories(userName);
            console.log(userRepos);
            renderProfile(userData, userRepos);
        } catch (error) {
            console.error('Erro ao buscar perfil do usuário:', error);
            showAlert(error.message);
        }
    } else {
        showAlert("Por favor, digite um nome de usuário para buscar o perfil no GitHub.");
    }
});

