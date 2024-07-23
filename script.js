document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Thread Voyage",
            description: "Developed an web application which consists of 2 major parts. One is related to e-commerce of styling and other part is related to bike service which is indicating by voyage in title. The technologies used HTML,CSS,BOOTSTRAP, JAVASCRIPT,LOCAL STORAGE",
            image: "https://img.freepik.com/premium-photo/e-commerce-online-payment-woman-s-hands-holding-credit-card-using-laptop-online-shopping_117255-1455.jpg?w=996"
        },
        {
            title: "RYB Bike service",
            description: "Webpage is developed for Bike rentals that are including features like Ride your bike,Book your bike,share your bike. The frontend technologies are included like HTML, CSS, JAVASCRIPT,BOOTSTRAp ",
            image: "https://img.freepik.com/premium-photo/close-up-clock-with-message-against-black-background_1048944-6674498.jpg?w=996"
        },
        {
            title: "Advanced Retail System",
            description: "This project is classified in to 2 parts. One part is packed products which is a part of web page and QR code technology is implemented and other part is unpacked products which is a part of IoT based system.The technologies used for developing packed products web page is HTML,CSS, BOOTSTRAP, JAVASCRIPT.",
            image: "https://img.freepik.com/premium-vector/shopper-purchasing-unpackaged-goods-from-bulk-section-using-reusable-container-vector_216520-64983.jpg?w=1380"
        },
        {
            title: "Health and Hospitality",
            description: "This website is used to get a service from nearby medical shops and it is used to guide the patient basic needs  related to health ",
            image: "https://img.freepik.com/free-vector/online-doctor-concept_23-2148529537.jpg?t=st=1717771078~exp=1717774678~hmac=a5fa673795123134dac516e9bf73b392547dea6e7b2aeb4f72a9c92fe0c22611&w=740"
        }
    ];

    const projectGrid = document.querySelector('#project-grid');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('col-md-6', 'col-lg-4', 'mb-4', 'animated', 'fadeIn');
        projectElement.innerHTML = `
            <div class="card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
        projectGrid.appendChild(projectElement);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Sql', icon: 'fas fa-database' },
        { name: 'Python', icon: 'fab fa-python' }
    ];

    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('col-md-4', 'col-sm-6', 'skill', 'animated', 'heartbeat');
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <h4>${skill.name}</h4>
        `;
        skillsContainer.appendChild(skillElement);
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for contacting me, ${name}! I'll get back to you soon.`);
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
