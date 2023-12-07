// REVIEW
const reviews = [
    {
      id: 1,
      name: "John Kristian",
      img:
        "pfp/johnpfp.jpeg",
      text:
        "Gilang is such a good friend. He is always eager to help others. On my first day at President University, I was in a hurry and needed help from someone. The first person to help me was Gilang. I am very grateful to be his friend.",
    },
    {
      id: 2,
      name: "Nafis Adi",
      img:
        "pfp/nafispfp.jpeg",
      text:
        "Damn, Gilang is really kind. I can’t help but think about all the things he helped me with. He was always the first person to come and give me a hand. But I can’t really find a way to repay his kindness. So Gilang, if you see this, I’ve always wanted to say thank you"
    },
    {
      id: 3,
      name: "Rio Papuanto",

      img:
        "pfp/riopfp.jpeg",
      text:
      "To be honest, I’m impressed by Gilang. At first, he might look kinda lazy, and unintelligent. But when he actually tries to learn something, especially if it’s something that he is passionate about, he always learns it fast and can master it easily. He is surprisingly pretty smart, but lazy."
    },
    {
      id: 4,
      name: "Anonymous",
      img:
        "pfp/valentodpfp.jpeg",
      text:
      "Gilang is not a good person. He is arrogant and always praises himself. Everyone who said that he is a nice person are being hypnotized by him. Sometimes, it would look like he's helping others with good intention, but I know that under that mask, he is selfish and only care about himself."
    },
    {
      id: 5,
      name: "Wake",
      img: 
        "pfp/wakepfp.jpg",
      text:
        "In my honest opinion, Gilang is a very humble and hardworking person. He always helped me when I had problems, and we would solve it together. When I was at my lowest, others disappeared while he's always by my side. Thanks Gilang, my brother from another mother. I appreciate everything you've done for me."
    },
    {
      id: 6,
      name: "Ardiansyah",
      img:
        "pfp/ardipp.jpg",
      text:
        "Gilang is a good friend bruh, he is very humble and helped me a lot. He also worked hard to achieve his goals and towards his hobbies like boxing and bodybuilding. I respect him so much."
    }
  ];

  //select items

const img = document.getElementById('personimage');
const author = document.getElementById('author');
const info = document.getElementById('review'); 

const prevBtn = document.getElementById('prev-Btn');
const nextBtn = document.getElementById('next-Btn');

console.log(img)

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
 showPerson(); 
})
// show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;  
  }
  
  // show next person
  function limit(){
    if (currentItem > reviews.length-1){
      currentItem = 0;
    }
    else if (currentItem < 0){
      currentItem = reviews.length - 1;
    }
  
  }
  
  nextBtn.addEventListener('click', function(){
  currentItem++;
  limit();
  showPerson(currentItem);  
  })
  // show previous person
  prevBtn.addEventListener('click', function(){
    currentItem--;
    limit();
    showPerson(currentItem);  
    })
  
    // SIGN UP POP UP

    const signup = document.getElementById('signup');
    const closebtn = document.querySelector('.closebtn');
    const overlay = document.querySelector('.modal-overlay');
    const tnc = document.getElementById('tnc');
    const signup2 = document.querySelector('.signup');
    const input = document.getElementById('username');
    const input1 = document.getElementById('password');
    

    signup.addEventListener('click', function(){
        overlay.classList.add('show-overlay');
        // overlay.style.visibility = "visible";
    })
    closebtn.addEventListener('click', function(){
        overlay.classList.remove('show-overlay');
        // overlay.style.visibility = "hidden";
    })
        
    signup2.disabled = true;
   

   tnc.addEventListener('change', function(){
       if(tnc.checked == false){
           signup2.classList.remove('unlocked');
           signup2.classList.add('locked');
           signup2.disabled = true;
       }
       else if(tnc.checked == true ){
           signup2.classList.remove('locked');
           signup2.classList.add('unlocked');
           signup2.disabled = false;
       }
   })

   signup2.addEventListener('click', function(){
       
        alert('Sign Up Successful');
        input.value="";
        input1.value="";
        tnc.checked = false;
        signup2.disabled = true;
        signup2.classList.remove('unlocked');
        signup2.classList.add('locked');
        overlay.classList.remove('show-overlay');
       
   })
