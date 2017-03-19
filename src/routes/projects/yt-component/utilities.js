
const utilities = {
  getData: function(url){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.response);
        console.log(data.items);
        return data.items;
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  },

}

export default utilities
