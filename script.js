var x = 1


function showDiv() {
  if (document.getElementById('divSocials').style.display == 'none') {
    document.getElementById('divSocials').style.display = "block";
  }
  else {
    document.getElementById('divSocials').style.display = "none";

  }
}

function showDivSpotify() {
  if (document.getElementById('divSpotify').style.display == 'none') {
    document.getElementById('divSpotify').style.display = "block";
  }
  else {
    document.getElementById('divSpotify').style.display = "none";

  }
}

function showDivInstagram() {
  if (document.getElementById('ig').style.display == 'none') {
    document.getElementById('ig').style.display = "block";
  }
  else {
    document.getElementById('ig').style.display = "none";

  }
}

function changeBg(){
  const backgrounds = ['wp1','wp2', 'wp3', 'wp4', 'wp5']
  newbg = backgrounds[x%5]
  x+=1
  document.body.style.backgroundImage = `url('static/${newbg}.jpg')`
} 


function goCrazy(){
  console.log('go crazy')
  document.body.style.backgroundImage = `url('static/static.gif')`
}







