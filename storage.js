class Storage {

    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films)); // objelerimizi atıyoruz

    }
    static getFilmsFromStorage(){
        let films;
    
        //filmelrimizi array olarak alıyoruz
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
    
        }
    
        return films;
    }
    static deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();
        // splice local strogedan kaldırmış oluyoruz
        films.forEach(function(film,index){
            if(film.title === filmTitle) {
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    
    
    
    
    }
    static clearAllFilmsFromStorage(){
    
        localStorage.removeItem("films");
        
    }

}