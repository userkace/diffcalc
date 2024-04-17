const cursor = document.querySelector('.custom-cursor'); 
     
document.addEventListener('mousemove', (e) => { 
    cursor.style.left = e.clientX + 'px'; 
    cursor.style.top = e.clientY + 'px'; 
}); 
 
// Add a hover effect to interactive elements 
const interactiveElements = document.querySelectorAll('.interactive'); 
interactiveElements.forEach((element) => { 
    element.addEventListener('mouseenter', () => { 
        cursor.style.width = '100px'; 
        cursor.style.height = '100px'; 
    }); 
    element.addEventListener('mouseleave', () => { 
        cursor.style.width = '80px'; 
        cursor.style.height = '80px'; 
    }); 
}); 