const shapes = [
  {
    name: "triangle", 
    svg: `<svg width="200px" height="200px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4a148c" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"></path></g></svg>`,
    plus: 3
  },{
    name: "rectangle",
    svg: `<svg width="200px" height="200px"  fill="#4a148c" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,20V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Z"></path></g></svg>`,
    plus: 50
  },{
    name: "circle", 
    svg: `<svg width="200px" heigh="200px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill="#4a148c"></circle> </g></svg>`,
    plus: 7 
  },{
    name: "love",
    svg: `<svg width="200px" heigh="200px" viewBox="0 -2.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4a148c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>love [#1488]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-139.000000, -361.000000)" fill="#4a148c"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M103.991908,206.599878 C103.779809,210.693878 100.744263,212.750878 96.9821188,215.798878 C94.9997217,217.404878 92.0324261,217.404878 90.042679,215.807878 C86.3057345,212.807878 83.1651892,210.709878 83.0045394,206.473878 C82.8029397,201.150878 89.36438,198.971878 93.0918745,203.314878 C93.2955742,203.552878 93.7029736,203.547878 93.9056233,203.309878 C97.6205178,198.951878 104.274358,201.159878 103.991908,206.599878" id="love-[#1488]"> </path> </g> </g> </g> </g></svg>`,
    plus: 12
  },{
    name: "parallelogram",
    svg: `<svg width="200px" height="200px" viewBox="0 0 48 48" fill="#4a148c" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="#4a148c" stroke-width="4"></path> </g></svg>`,
    plus: 15
  }, {
    name: "diamond",
    svg: `<svg width="200px" heigh="200px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 8L7 0H9L15 8L9 16H7L1 8Z" fill="#4a148c"></path> </g></svg>`, 
    plus: 10
  }
  ];
  
function getRandomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function spin(){
  let i = 0;
  const timeToStart = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - timeToStart > 1000) {
      clearInterval;
      return;
    }

    svgShape.innerHTML = shapes[i++].svg;
    if (i == shapes.length) i = 0;
  }, 100)
}