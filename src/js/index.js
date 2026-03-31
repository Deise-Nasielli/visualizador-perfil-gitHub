const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');
const baseUrl = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        try{
        const response = await fetch(`${baseUrl}/users/${userName}`);

        if(!response.ok){
            alert("Usuário não encontrado!Por favor verifique o nome do usuário e tente novamente."); 
            return
        }

        const userData = await response.json()

       

        profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😕.'}</p>
                    <p>Seguidores: ${userData.followers}</p>
                    <p>Seguindo: ${userData.following}</p>
                </div>
                
            </div>
        `

    }catch(error){
        console.error('Erro ao buscar perfil do usuário: ',error)
    }
    }else{
        alert("Por favor, digite um nome de usuário para buscar o perfil no GitHub.");
    }
});

