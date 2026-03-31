const baseUrl = 'https://api.github.com';

export async function fetchUserData(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado! Por favor verifique o nome do usuário e tente novamente.');
    }
    return await response.json();
}