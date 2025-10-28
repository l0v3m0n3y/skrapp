class skrapp{
    constructor(){
        this.api = "https://api.skrapp.io/v3"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    async req(url, data,method="GET"){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async verify_email(email){
        return (await this.req(`${this.api}/open/verify?email=${email}`));
    }
}
module.exports = {skrapp};