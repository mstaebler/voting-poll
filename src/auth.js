import Axios from 'axios'

module.exports = {
    login(email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if( localStorage.token) {
            if(cb) cb(true)
            this.onChange(true)
            return
        }
        Axios.get('/auth/user?username='+email+'&password='+pass)
        .then((res) => {
            if(res.data.authenticated) {
                localStorage.token = res.data.token
                if(cb) cb(true)
                this.onChange(true)
            } else {
                if(cb) cb(false)
                this.onChange(false)
            }
        })
        .catch((err) => console.log(err))
    },

    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token
        if(cb) cb()
        this.onChange(false)
    },
    loggedIn() {
        return !!localStorage.token
    },

    onChange() {}    
}