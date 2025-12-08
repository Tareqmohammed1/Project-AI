var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        var href = this.getAttribute('href');
        var target = document.querySelector(href);
        
        if (target) {
            var header = document.querySelector('.header');
            var headerHeight = 80;
            if (header) {
                headerHeight = header.offsetHeight;
            }
            
            var title = target.querySelector('.section-title');
            var element = target;
            if (title) {
                element = title;
            }
            
            var rect = element.getBoundingClientRect();
            var scrollPosition = window.pageYOffset;
            if (!scrollPosition) {
                scrollPosition = document.documentElement.scrollTop;
            }
            
            var finalPosition = rect.top + scrollPosition - headerHeight - 8;
            
            window.scrollTo({
                top: finalPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var scrollWithOffset = scrollY + 145;
    
    var sections = document.querySelectorAll('.section');
    var activeSection = '';
    
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        
        if (scrollWithOffset >= sectionTop && scrollWithOffset < sectionTop + sectionHeight) {
            activeSection = section.getAttribute('id');
        }
    });
    
    var allLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.remove('active');
    }
    
    if (activeSection) {
        var activeLink = document.querySelector('a[href="#' + activeSection + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
