document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        let direction = 1;
        let position = 0;
        const speed = 0.3;

        function animate() {
            position += direction * speed;
            if (position >= 10 || position <= 0) {
                direction *= -1;
            }
            scrollDown.style.transform = `translateX(-50%) translateY(${position}px)`;
            requestAnimationFrame(animate);
        }

        animate();

        scrollDown.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([43.6112, 3.8708], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    
    L.marker([43.601723, 3.910771]).addTo(map)
        .bindPopup('<strong>EPSI Montpellier <br> 349 Rue de la Cavalade <br> 34000 Montpellier <br> Tél. : 04 67 04 20 01 <br> <u>info@montpellier-epsi.fr</u></strong>')
        .openPopup();
});
document.addEventListener('DOMContentLoaded', function() {
    const userMenu = document.getElementById('user-menu');
    const userOptions = document.getElementById('user-options');
  
    userMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      userOptions.style.display = userOptions.style.display === 'none' ? 'block' : 'none';
    });
  
    document.addEventListener('click', function() {
      userOptions.style.display = 'none';
    });
  
    userOptions.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            // Afficher les Élèves
            const elevesList = document.getElementById('eleves-list');
            data.eleves.forEach(eleve => {
                const li = document.createElement('li');
                li.textContent = `${eleve.Prénom} ${eleve.Nom} - ${eleve.Âge} ans`;
                elevesList.appendChild(li);
            });

            // Afficher les Entreprises
            const entreprisesList = document.getElementById('entreprises-list');
            data.entreprises.forEach(entreprise => {
                const li = document.createElement('li');
                li.textContent = `${entreprise.Nom_Entreprise} - ${entreprise.Lieu}`;
                entreprisesList.appendChild(li);
            });
        })
        .catch(error => console.error('Erreur:', error));
}); 
document.addEventListener('DOMContentLoaded', function() {
  const userIcon = document.getElementById('user-icon');
  const userOptions = document.getElementById('user-options');

  userIcon.addEventListener('click', function(event) {
      userOptions.style.display = userOptions.style.display === 'none' ? 'block' : 'none';
      event.stopPropagation();
  });

  document.addEventListener('click', function() {
      userOptions.style.display = 'none';
  });
});  