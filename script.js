const phonemenu =document.querySelector(".phone-menu")
const cancelicon =document.querySelector('.phone-menu-svg-cancel')
const barsicon =document.querySelector('.phone-menu-svg-bars')

function hideandshowmenu(){
   
        phonemenu.classList.toggle("open")
        cancelicon.classList.toggle("cancel")
        barsicon.classList.toggle('bars')
}
const rule1 = document.getElementById('rule1');
const rule2 = document.getElementById('rule2');
const rule3 = document.getElementById('rule3');
const rule4 = document.getElementById('rule4');
const ruledescription1 = document.getElementById('rule-description1');
const ruledescription2 = document.getElementById('rule-description2');
const ruledescription3 = document.getElementById('rule-description3');
const ruledescription4 = document.getElementById('rule-description4');
function rule1showorhide(){
        ruledescription1.classList.toggle("open-description")
        ruledescription2.classList.remove("open-description")
        ruledescription3.classList.remove("open-description")
        ruledescription4.classList.remove("open-description")
}

function rule2showorhide(){
        ruledescription2.classList.toggle("open-description")
        ruledescription1.classList.remove("open-description")
        ruledescription3.classList.remove("open-description")
        ruledescription4.classList.remove("open-description")}
function rule3showorhide(){
        ruledescription3.classList.toggle("open-description")
        ruledescription2.classList.remove("open-description")
        ruledescription1.classList.remove("open-description")
        ruledescription4.classList.remove("open-description")}
function rule4showorhide(){
        ruledescription4.classList.toggle("open-description")
        ruledescription2.classList.remove("open-description")
        ruledescription3.classList.remove("open-description")
        ruledescription1.classList.remove("open-description")}
        