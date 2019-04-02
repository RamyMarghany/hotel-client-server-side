class User {
    constructor(){
        this.user =  this.getFromLocalStorage("user")
        this.isLoggedIn = false
    }

    getFromLocalStorage(key){
        return JSON.parse(localStorage.getItem(key)) || ""
    }

    setToLocalStorage(key, value){
         localStorage.setItem(key, JSON.stringify(value))
    }

    logIn(FirstName, LastName){
        this.user = {
            FirstName,
            LastName,
        }
        this.isLoggedIn = true
        this.setToLocalStorage("user", this.user)
    }

    logOut(){
        this.user = {
            FirstName:"",
            LastName:"",
        }
        this.isLoggedIn = false
        this.setToLocalStorage("user", this.user)
    }

}

export default new User()