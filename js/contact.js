
function validerFormulaire() {
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var sujet = document.getElementById('sujet').value;
    var message = document.getElementById('message').value;
    var conditions = document.getElementById('conditions').checked;

    var erreurs = [];

    if (nom === '' || nom.length < 3) {
        erreurs.push('Le nom doit contenir au moins 3 caractères.');
    }

    if (email === '') {
        erreurs.push('L\'email est obligatoire.');
    } else if (!email.includes('@') || !email.includes('.')) {
        erreurs.push('L\'email n\'est pas valide.');
    }

    if (sujet === '') {
        erreurs.push('Veuillez sélectionner un sujet.');
    }

    if (message === '' || message.length < 10) {
        erreurs.push('Le message doit contenir au moins 10 caractères.');
    }

    if (!conditions) {
        erreurs.push('Vous devez accepter les conditions d\'utilisation.');
    }

    var confirmation = document.getElementById('messageConfirmation');

    if (erreurs.length > 0) {
        var messageErreur = '<h4>Erreurs:</h4><ul>';
        for (var i = 0; i < erreurs.length; i++) {
            messageErreur += '<li>' + erreurs[i] + '</li>';
        }
        messageErreur += '</ul>';

        confirmation.innerHTML = messageErreur;
        confirmation.style.display = 'block';
        confirmation.style.backgroundColor = '#f8d7da';
        confirmation.style.color = '#721c24';
        confirmation.style.border = '1px solid #f5c6cb';
        confirmation.style.padding = '15px';
        confirmation.style.borderRadius = '5px';

        return false;
    } else {
        confirmation.innerHTML = '<h4>Message envoyé avec succès!</h4>' +
                                '<p>Merci <strong>' + nom + '</strong> pour votre message.</p>' +
                                '<p>Nous vous répondrons à: <strong>' + email + '</strong></p>';
        
        confirmation.style.display = 'block';
        confirmation.style.backgroundColor = '#d4edda';
        confirmation.style.color = '#155724';
        confirmation.style.border = '1px solid #c3e6cb';
        confirmation.style.padding = '15px';
        confirmation.style.borderRadius = '5px';

        setTimeout(function() {
            document.getElementById('contactForm').reset();
            confirmation.style.display = 'none';
        }, 3000);

        return false;
    }
}