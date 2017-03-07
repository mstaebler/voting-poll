import Axios from 'axios'

module.exports = {
    login(email, pass) {
        if(localStorage.token) {
            this.onChange(true, localStorage.username)
            return
        }
        Axios.get('/auth/user?username='+email+'&password='+pass)
        .then((res) => {
            if(res.data.authenticated) {
                localStorage.token = res.data.token
                localStorage['username'] = email
                this.onChange(true, email)
            } else {
                this.onChange(false)
            }
        })
        .catch((err) => console.log(err))
    },

    getToken() {
        return localStorage.token
    },

    logout() {
        delete localStorage.token
        delete localStorage.username
        this.onChange(false, '')
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() {}    
}