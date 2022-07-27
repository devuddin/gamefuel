alert("Beta Version Under Development🎮");
// navbar
const ddBtn = () =>{
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


//api fetch
const getGames = async () =>{
    let gdisplay = document.getElementById("gdisplay");
    let load = document.getElementById("loading");
    const resp = await fetch('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games');
    // console.log(resp.json());
    const data = await resp.json();
    // console.log(data[0]);
    load.style.display="none";
    // for(const key in data){
    //     let gData = data[key];
    //     console.log(gData);
    //     gdisplay.insertAdjacentHTML("afterbegin",`
    //     <div class="card">
    //         <img class="card-img" src="${gData.thumbnail}" alt="thumbnail-img">
    //         <div class="card-body">
    //           <h5 class="card-title">${gData.title}</h5>
    //           <p class="card-text">${gData.short_description}</p>
    //           <p class="card-rd"><small class="text-muted">Released On <span>${gData.release_date}</span></small></p>
    //           <p class="card-platform"><small class="text-muted">For <span>${gData.platform}</span></small></p>
    //           <a href="${gData.game_url}" class="btn btn-primary" target="blank">Download</a>
    //         </div>
    //     </div>
    //     `);
    // }
    data.reverse();
    data.forEach(gData => {
        console.log(gData)
        gdisplay.insertAdjacentHTML("afterbegin",`
        <div class="card">
            <img class="card-img" src="${gData.thumbnail}" alt="thumbnail-img">
            <div class="card-body">
              <h5 class="card-title"><a href="#">${gData.title}</a></h5>
              <p class="card-text">${gData.short_description}</p>
              <p class="card-rd"><small class="text-muted">Released On <span>${gData.release_date}</span></small></p>
              <p class="card-platform"><small class="text-muted">For <span>${gData.platform}</span></small></p>
              <a id="btn" href="${gData.game_url}" class="btn btn-primary" target="blank">Download</a>
            </div>
        </div>
        `);
    });
    // console.log(data[0].);
}
getGames();


