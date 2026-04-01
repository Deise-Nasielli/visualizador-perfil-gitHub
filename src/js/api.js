const baseUrl = 'https://api.github.com';

export async function fetchUserData(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado! Por favor verifique o nome do usuário e tente novamente.');
    }
    return await response.json();
}
export async function fetchUserRepositories(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}/repos?per_page=10`)
        if(!response.ok){
            throw new Error('Repositório não encontrado!')
        }
        return await response.json()
}