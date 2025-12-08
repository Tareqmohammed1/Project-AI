var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        var href = this.getAttribute('href');
        var target = document.querySelector(href);
        
        if (target) {
            var header = document.querySelector('.header');
            var headerH = header ? header.offsetHeight : 80;
            
            var title = target.querySelector('.section-title');
            var element = title || target;
            var rect = element.getBoundingClientRect();
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
            var pos = rect.top + scroll - headerH - 8;
            
            window.scrollTo({
                top: pos,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    
    var hero = document.querySelector('.hero');
    var heroH = hero ? hero.offsetHeight : 0;
    
    if (scrollY < heroH - 100) {
        var navLinks = document.querySelectorAll('a[href^="#"]');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
        return;
    }
    
    var scrollWithOffset = scrollY + 145;
    var sections = document.querySelectorAll('.section');
    var activeSection = '';
    
    sections.forEach(function(section) {
        var top = section.offsetTop;
        var h = section.offsetHeight;
        
        if (scrollWithOffset >= top && scrollWithOffset < top + h) {
            activeSection = section.getAttribute('id');
        }
    });
    
    var allLinks = document.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < allLinks.length; j++) {
        allLinks[j].classList.remove('active');
    }
    
    if (activeSection) {
        var link = document.querySelector('a[href="#' + activeSection + '"]');
        if (link) {
            link.classList.add('active');
        }
    }
});
