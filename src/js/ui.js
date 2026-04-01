export function renderProfile(userData, userRepos) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repos => `
        <div class="repository-card">
            <a href="${repos.html_url}" target="_blank">
                <h3>${repos.name}</h3>
            <div class="repository-stats">
                <span>⭐ Stars: ${repos.stargazers_count}</span>
                <span>🍴 Forks: ${repos.forks_count}</span>
                <span>👀 Watchers: ${repos.watchers_count}</span>
                <span>💻 Linguagem: ${repos.language || 'Não informado'}</span>
            </div>
        </a>
        </div>
         `).join('') : `<p>Nenhum repositório encontrado.</p>`
    const profileResults = document.querySelector('.profile-results');
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😕.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>🫂Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>

        
    `;
}

export function showAlert(message) {
    alert(message);
}