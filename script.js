const cursor = document.querySelector('.custom-cursor'); 
     
document.addEventListener('mousemove', (e) => { 
    cursor.style.left = e.clientX + 'px'; 
    cursor.style.top = e.clientY + 'px'; 
}); 
 
// Add a hover effect to interactive elements 
const interactiveElements = document.querySelectorAll('.interactive'); 
interactiveElements.forEach((element) => { 
    element.addEventListener('mouseenter', () => { 
        cursor.style.width = '40px'; 
        cursor.style.height = '40px'; 
    }); 
    element.addEventListener('mouseleave', () => { 
        cursor.style.width = '20px'; 
        cursor.style.height = '20px'; 
    }); 
}); 