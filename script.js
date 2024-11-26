function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



let btn = document.querySelector(".btn")
let inputt = document.querySelector(".input2")
let textArea = document.querySelector(".text")
let comment = document.querySelector("review-container")


btn.addEventListener("click", function(){
    setTimeout(() =>{
        let text = textArea.value
        let text2 = inputt.value

    localStorage.setItem("AAAA", text2)
    localStorage.setItem("RRRR", text)
    
    let getText = localStorage.getItem("RRRR")
    let getText2 = localStorage.getItem("AAAA")

    let p2 = document.createElement('p')
    let p = document.createElement('p')
    
    p2.className = "comment_p"

    p.textContent = getText
    p2.textContent = getText2
    
    reviewcontainer.appendChild(p2)
    reviewcontainer.appendChild(p)

    
    

    if(textArea !== ""){
        textArea.value = " "
    }

}, 1000)
    })



    
const reviews = [
    { name: "Олександр", comment: "Сайт дуже зручний і інтуїтивно зрозумілий!" },
    { name: "Катерина", comment: "Дуже гарний дизайн, працює швидко!" },
    { name: "Максим", comment: "Трохи довго завантажуються сторінки, але загалом добре." },
    { name: "Олена", comment: "Класний сайт, все чітко і зрозуміло!" },
    { name: "Ігор", comment: "Чудовий досвід, все працює ідеально." }
  ];
  
  
 
  const reviewContainer = document.getElementById("reviewcontainer");
  
  
  function addRandomReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const { name, comment } = reviews[randomIndex];
  
    
    const reviewElement = document.createElement("div");
    reviewElement.className = "review";
  
    const nameElement = document.createElement("h3");
    nameElement.textContent = name;
    nameElement.textContent = `${name}:`;
  
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
  
    reviewElement.appendChild(nameElement);
    reviewElement.appendChild(commentElement);
    reviewContainer.appendChild(reviewElement);

    
   
  }

  
  addRandomReview();


  setInterval(addRandomReview, 20000);
