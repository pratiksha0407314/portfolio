/* ================= PROJECT DETAILS ================= */
function openProject(project){
  const projectDetails=document.getElementById("project-details");
  projectDetails.style.display="block";
  let title="",desc="",link="#";

  if(project==="p1"){
    title="Girls Safety Website";
    desc="A safety-focused website with SOS emergency call feature.";
    link="https://girls-safety-react.vercel.app";
  }

  if(project==="p2"){
    title="Portfolio Website";
    desc="Personal portfolio website.";
    link="#";
  }

  document.getElementById("project-title").innerText=title;
  document.getElementById("project-desc").innerText=desc;
  document.getElementById("project-link").href=link;
}

function closeProject(){
  document.getElementById("project-details").style.display="none";
}

/* ================= SPACE BACKGROUND ================= */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
resize();

let stars=[];
for(let i=0;i<180;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*1.5,
    speed:Math.random()*0.4+0.2
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";

  stars.forEach(s=>{
    s.y+=s.speed;
    if(s.y>canvas.height){
      s.y=0;
      s.x=Math.random()*canvas.width;
    }
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize",resize);
