const asyncAwaitExample = async function () {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=one more time"
      );
  
      console.log(res);
      if (res.ok) {
        let data = await res.json();
        console.log("data", data);
  
        let listReference = document.querySelector("#section1");
  
        data.data.forEach((album) => {
          if (album.id === 3135553) {
            listReference.innerHTML =
              listReference.innerHTML +
              `
            
            <div
            class="card bg-dark col-12 d-flex w-100 h-100 flex-row justify-content-between align-items-center"
          >
            <a href=""><img id="img-center"
              src=${album.album.cover}
              class="ms-5 card-img-top bg-dark w-100 h-100"
              alt="..."
            /></a>
            <div
              id="first-card"
              class="card-body  w-25 h-100 d-flex flex-column justify-content-between"
            >
              <div class="w-100  d-flex justify-content-between">
                <p>ALBUM</p>
                <a class="btn rounded-pill text-light ">NASCONDI ANNUNCI</a>
              </div>
              <a href=""><h5 class="card-title">${album.title}</h5></a>
              <a href=""><p class="card-text">${album.artist.name}</p></a>
              <p class="card-text">Ascolta il singolo di ${album.artist.name}!</p>
              <div class="d-flex">
                <a href="#" class="btn btn-success rounded-pill me-3 w-25">Play</a>
                <a
                  href="#"
                  class="btn btn-dark border border-light rounded-pill w-25"
                  >Salva</a
                >
              </div>
            </div>
          </div>




            `;
          }
        });
      } else {
        console.log("Qualcosa è andato storto con la nostra chiamata!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  asyncAwaitExample();
  




  const asyncAwaitExample5 = async function () {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q= blurryface "
      );
  
      console.log(res);
      if (res.ok) {
        let data = await res.json();
        console.log("data", data);
  
        let listReference = document.querySelector("#section2");
  
        data.data.forEach((album) => {
          if (album.id === 99976952) {
            listReference.innerHTML =
              listReference.innerHTML +
              `
              
              <h2 class="fs-5">Buonasera</h2>
              <div id="id-buonasera" class="row w-100 justify-content-around">
  
                <a class="col-6 col-md-4" style="width: 32%;" href=""><div
                  id="buonasera"
                  class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
                >
                  <img
                    src="${album.album.cover}"
                    class="card-img-top bg-dark w-50 h-100"
                    alt="..."
                  />
                  <div
                    class="card-body w-100 h-100 d-flex flex-column justify-content-between"
                  >
                    <h5 class="card-title">${album.album.title}</h5>
                  </div>
                </div></a>
  
  
                <a class="col-6 col-md-4" style="width: 32%;" href=""><div
                  id="buonasera"
                  class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
                >
                  <img
                    src="${album.album.cover}"
                    class="card-img-top bg-dark w-50 h-100"
                    alt="..."
                  />
                  <div
                    class="card-body w-100 h-100 d-flex flex-column justify-content-between"
                  >
                    <h5 class="card-title">${album.album.title}</h5>
                  </div>
                </div></a>
                <a class="col-6 col-md-4" style="width: 32%;" href=""><div
                  id="buonasera"
                  class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
                >
                  <img
                    src="${album.album.cover}"
                    class="card-img-top bg-dark w-50 h-100"
                    alt="..."
                  />
                  <div
                    class="card-body w-100 h-100 d-flex flex-column justify-content-between"
                  >
                    <h5 class="card-title">${album.album.title}</h5>
                  </div>
                </div></a>
                <a class="col-6 col-md-4" style="width: 32%;" href=""><div
                  id="buonasera"
                  class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
                >
                  <img
                    src="${album.album.cover}"
                    class="card-img-top bg-dark w-50 h-100"
                    alt="..."
                  />
                  <div
                    class="card-body w-100 h-100 d-flex flex-column justify-content-between"
                  >
                    <h5 class="card-title">${album.album.title}</h5>
                  </div>
                </div></a>
                <a class="col-6 col-md-4" style="width: 32%;" href=""><div
                  id="buonasera"
                  class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
                >
                  <img
                    src="${album.album.cover}"
                    class="card-img-top bg-dark w-50 h-100"
                    alt="..."
                  />
                  <div
                    class="card-body w-100 h-100 d-flex flex-column justify-content-between"
                  >
                    <h5 class="card-title">${album.album.title}</h5>
                  </div>
                </div></a>
                <a class="col-6 col-md-4" style="width: 32%;" href=""><div
                  id="buonasera"
                  class="card bg-dark d-flex flex-row mb-2 justify-content-between align-items-center" 
                >
                  <img
                    src=${album.album.cover}
                    class="card-img-top bg-dark w-50 h-100"
                    alt="..."
                  />
                  <div
                    class="card-body w-100 h-100 d-flex flex-column justify-content-between"
                  >
                    <h5 class="card-title">${album.album.title}</h5>
                  </div>
                </div></a>
  
  
  
  
  
  
  
  
  
  
                
  
                
              </div>
  
                    
                    
                    
                    
                    
  
  
                    
  
                    
                    `;
          }
        });
      } else {
        console.log("Qualcosa è andato storto con la nostra chiamata!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  asyncAwaitExample5();
  










  const asyncAwaitExample6 = async function () {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q= translation "
      );
  
      console.log(res);
      if (res.ok) {
        let data = await res.json();
        console.log("data", data);
  
        let listReference = document.querySelector("#section3");
  
        data.data.forEach((album) => {
          if (album.id === 990604232) {
            listReference.innerHTML =
              listReference.innerHTML +
              `
              
                    
                    
            



                    <div class=" d-flex mb-3 w-100 justify-content-between align-items-center">
              <h3 class="fs-5">Altro di ciò che ti piace</h3>
              <a class="btn rounded-pill">VISUALIZZA TUTTO</a>
            </div>





            <div id="id-altro" class="d-flex justify-content-between  w-100">





                
                <a style="width: 18%" href="">
              <div id="card-altro" class="card bg-dark" >
                <img
                  src=${album.album.cover}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body bg-dark text-light">
                  <h5 class="w-100 card-title">${album.album.title}</h5>
                  <p class="card-text">
                  ${album.artist.name}
                  </p>
                </div>
            </div>
            </a>

                <a style="width: 18%" href="">
              <div id="card-altro" class="card bg-dark" >
                <img
                  src=${album.album.cover}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body bg-dark text-light">
                  <h5 class="card-title">${album.album.title}</h5>
                  <p class="card-text">
                  ${album.artist.name}
                  </p>
                </div>
            </div>
            </a>

                <a style="width: 18%" href="">
              <div id="card-altro" class="card bg-dark" >
                <img
                  src=${album.album.cover}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body bg-dark text-light">
                  <h5 class="card-title">${album.album.title}</h5>
                  <p class="card-text">
                  ${album.artist.name}
                  </p>
                </div>
            </div>
            </a>

                <a style="width: 18%" href="">
              <div id="card-altro" class="card bg-dark" >
                <img
                  src=${album.album.cover}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body bg-dark text-light">
                  <h5 class="card-title">${album.album.title}</h5>
                  <p class="card-text">
                  ${album.artist.name}
                  </p>
                </div>
            </div>
            </a>

                <a style="width: 18%" href="">
              <div id="card-altro" class="card bg-dark" >
                <img
                  src=${album.album.cover}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body bg-dark text-light">
                  <h5 class="card-title">${album.album.title}</h5>
                  <p class="card-text">
                  ${album.artist.name}
                  </p>
                </div>
            </div>
            </a>

        </div>



            </div>

                    `;
          }
        });
      } else {
        console.log("Qualcosa è andato storto con la nostra chiamata!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  asyncAwaitExample6();
  







  const asyncAwaitExample7 = async function () {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q= the highlights "
      );
  
      console.log(res);
      if (res.ok) {
        let data = await res.json();
        console.log("data", data);
  
        let listReference = document.querySelector("#section4");
  
        data.data.forEach((album) => {
          if (album.id === 1225758602) {
            listReference.innerHTML =
              listReference.innerHTML +
              `
              
                    
                    
                    

                           <div class="col">
                           <div class="row flex-nowrap">
                             <div class="col col-bg d-flex align-items-center">
                               <a href="#"><img class="ms-2" src=${album.album.cover} /></a>
                               <div class="me-2 ms-2">
                                 <p class="m-0">${album.title}</p>
                                 <p class="m-0">${album.artist.name}</p>
                               </div>
                               <div><i class="bi bi-heart-fill"></i></div>
                             </div>
                   
                             <div
                               class="col col-bg d-flex flex-wrap flex-column justify-content-between align-items-center"
                             >
                               <div class="player-buttons d-flex">
                                 <a href="#"><i class="bi bi-shuffle"></i> </a>
                                 <a href="#"><i class="bi bi-skip-start-fill"></i> </a>
                                 <a id="play" id="pause" href="#"
                                   ><i class="player-button-play bi bi-play-circle-fill"></i>
                                 </a>
                                 <a href="#"><i class="bi bi-skip-end-fill"></i> </a>
                                 <a href="#"><i class="bi bi-repeat"></i> </a>
                               </div>
                   
                               <div class="player-timeline d-flex">
                                 <span>0:00</span>
                                 <progress
                                   class="player-progress-bar"
                                   id="file"
                                   max="100"
                                   value="20"
                                 >
                                   100%
                                 </progress>
                                 <span>3:00</span>
                               </div>
                             </div>
                             <div class="col col-bg d-flex align-items-center">
                               <div class="player-buttons-right d-flex">
                                 <a href="#"><i class="bi bi-mic-fill"></i></a>
                                 <a href="#"><i class="bi bi-card-list"></i></a>
                                 <a href="#"><i class="bi bi-pc-display"></i></a>
                                 <a href="#"><i class="bi bi-volume-down"></i></a>
                                 <progress
                                   class="player-volume-bar"
                                   id="file"
                                   max="100"
                                   value="20"
                                 >
                                   100%
                                 </progress>
                               </div>
                             </div>
                           </div>
                         </div>











  
                    
                    `;
          }
        });
      } else {
        console.log("Qualcosa è andato storto con la nostra chiamata!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  asyncAwaitExample7();
  













//   let button = document.getElementById('pause')
	



// 	button.addEventListener('click', () => {
// 		button.classList.toggle('none')
// 	})

// 	let button1 = document.getElementById('play')
	



// 	button1.addEventListener('click', () => {
// 		button1.innerHTML.toggle =
//         button1.innerHTML +
//         `<ion-icon class="" name="pause-outline"></ion-icon>`
// 	})










