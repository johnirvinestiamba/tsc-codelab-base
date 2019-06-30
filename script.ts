interface GitHubUser {
    name: string,
    location: string,
    avatar: string,
    bio: string,
    hireable: boolean
}

class Profile implements GitHubUser{
    name: string;   
    location: string;
    avatar: string;
    bio: string;
    hireable: boolean;
 
    constructor(name: string, location: string, avatar: string, bio: string, hireable: boolean) {
        this.name = name;
        this.location = location;
        this.avatar = avatar;
        this.bio = bio;
        this.hireable = hireable;
    }

    displayProfile() {
        console.log('display details');
        const doc = <HTMLDocument>document;
        doc.getElementById('name').innerHTML = this.name;
        (<HTMLImageElement>document.getElementById('avatar')).src = this.avatar;
        doc.getElementById('location').innerHTML = this.location;
        doc.getElementById('bio').innerHTML = this.bio;
        doc.getElementById('hireable').innerHTML = this.hireable ? 'Yes' : 'No';
    }
}

function getGitHubUser(username: string, callback: any) {
    let url = 'https://api.github.com/users/' + username;
    const xhr = new XMLHttpRequest();
 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.response);
        }
    }
    xhr.open('GET', url, true);
    xhr.send('');
}

function searchUser() {
    const username = (<HTMLInputElement>document.getElementById('username')).value;

    getGitHubUser(username, (response: string) => {
        let responseObj = JSON.parse(response);
        console.log('responseObj : ', responseObj);

        const profile = new Profile(responseObj.name, responseObj.location, responseObj.avatar_url, responseObj.bio, responseObj.hireable);
        profile.displayProfile();

    })

}