import axios from "axios";
const SEARCH_URL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {

  getGoogleBookSearch: function(query) {
    return axios.get(SEARCH_URL + query);
  },

    saveBook: function(bookSaveChoice) {
      return axios.post("/api/books", bookSaveChoice);
    },
  
  getBooks: function() {
    return axios.get("/api/books");
  },

  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },


};
