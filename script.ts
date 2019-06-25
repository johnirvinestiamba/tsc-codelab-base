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
}
