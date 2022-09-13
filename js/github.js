class GitHub {
    constructor(){
        this.client_id = 'f9395324edfea31d04d7';
        this.client_secret = 'ec0663b74e853b24ac2f81d2bc2df25e9a534b7a'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}