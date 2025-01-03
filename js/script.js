window.addEventListener('load', function () {
    let id = document.getElementById("app");
    let loading = document.getElementById("loading");
    setTimeout(() => {
        loading.textContent = "WELCOME TO OUR PAGE";
    }, 3000);
    setTimeout(() => {
        id.style.top = "-100vh";
    }, 5000);
    setTimeout(() => {
        id.style.display = "none";
    }, 7000);
});
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('hovered');
        });
        link.addEventListener('mouseout', () => {
            cursor.classList.remove('hovered');
        });
    });
    const navLinks = document.querySelectorAll('.navheader ul li a');
    const body = document.body;
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            setTimeout(() => {
                targetSection.style.setProperty('--before-height', '300px');
            },); // Sedikit delay untuk memicu transisi
            targetSection.style.display = "grid";
            setTimeout(() => {
                targetSection.style.top = "0";
            }, 100);

            if (targetId == "experience") {
                setTimeout(() => {
                    body.style.overflowY = "hidden";
                }, 500);
            }
        });
    });
    const firstNavLinks = document.querySelectorAll('.navmenu ul li:first-of-type a');
    firstNavLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const span = link.nextElementSibling;
            if (span && span.tagName === 'SPAN') {
                span.style.width = "100%";
            }


            setTimeout(() => {
                document.body.style.overflow = 'visible';
                document.querySelectorAll('section').forEach(section => {
                    section.style.top = "100%";
                    section.style.setProperty('--before-height', '0px');
                });
            }, 400);
            setTimeout(() => {
                document.querySelectorAll('section').forEach(section => {
                    section.style.display = "none";
                });
                if (span && span.tagName === 'SPAN') {
                    span.style.width = "0.001%";
                }
            }, 1000);
        });
    });
    let wrkprj = document.querySelectorAll('.wrkprj');
    let nsa = document.querySelectorAll('.nsa');

    window.onscroll = () => {
        wrkprj.forEach(wrpr => {
            let top = window.scrollY;
            let offset = wrpr.offsetTop;
            let height = wrpr.offsetHeight;
            let id = wrpr.getAttribute('id');

            if (top >= offset && top < offset + height) {
                nsa.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

});
