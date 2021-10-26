function loadImage(img){
    const url = img.getAttribute('lazy-src');
    img.setAttribute('src',url);
    img.removeAttribute('lazy-src');
}

function ready(){
    if('IntersectionObserver' in window){
        // Trình duyệt có hỗ trợ IntersectionObserver
        var lazyImages = document.querySelectorAll("[lazy-src]");
        let observer = new IntersectionObserver((entries) => {
            // các giá trị mà chúng ta đang quan sát 4 tấm hình
            console.log(entries);
            entries.forEach(entry => {
            // Kiểm tra xem giá trị phần tử của chúng ta có đang nằm trong viewport hay không? 
            if(entry.isIntersecting){
                loadImage(entry.target)
            }
        })
    });
    lazyImages.forEach(image => {
    // Quan sát, theo dõi tấm hình. Mặc định tự động lấy cái viewport để so sánh xem xem cái hình của chúng ta nó có nằm trong viewport hay không?s
    observer.observe(image);
    })
    }
    else{
        // Trình duyệt không hỗ trợ IntersectionObserver
    }
};

// Kiểm tra trang web đã load chưa
document.addEventListener('DOMContentLoaded',ready)

// + Ban đầu khi tấm hình chưa được load thì thuộc tính isIntersecting là false. Khi mà chúng ta scroll gần thấy tấm hình thì isIntersecting
// sẽ là true

// + target là lấy ra đối tượng (ở đây là tấm hình)


