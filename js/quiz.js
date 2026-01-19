
const bonnesReponses = {
    q1: 'a',
    q2: 'b',
    q3: 'c',
    q4: 'c',
    q5: 'b',
    q6: 'b',
    q7: ['a', 'b', 'c'],
    q8: 'd',
    q9: 'b',
    q10: 'a',
    q11: 'b',
    q12: 'b'
};

function validerQuiz() {
    var score = 0;
    var total = 12;

    if (document.querySelector('input[name="q1"]:checked')) {
        if (document.querySelector('input[name="q1"]:checked').value === bonnesReponses.q1) {
            score++;
        }
    }

    if (document.querySelector('input[name="q2"]:checked')) {
        if (document.querySelector('input[name="q2"]:checked').value === bonnesReponses.q2) {
            score++;
        }
    }

    if (document.querySelector('input[name="q3"]:checked')) {
        if (document.querySelector('input[name="q3"]:checked').value === bonnesReponses.q3) {
            score++;
        }
    }

    if (document.querySelector('input[name="q4"]:checked')) {
        if (document.querySelector('input[name="q4"]:checked').value === bonnesReponses.q4) {
            score++;
        }
    }

    if (document.querySelector('input[name="q5"]:checked')) {
        if (document.querySelector('input[name="q5"]:checked').value === bonnesReponses.q5) {
            score++;
        }
    }

    if (document.querySelector('input[name="q6"]:checked')) {
        if (document.querySelector('input[name="q6"]:checked').value === bonnesReponses.q6) {
            score++;
        }
    }

    var checkboxes = document.querySelectorAll('input[name="q7[]"]:checked');
    if (checkboxes.length === 3) {
        var toutBon = true;
        for (var i = 0; i < checkboxes.length; i++) {
            if (bonnesReponses.q7.indexOf(checkboxes[i].value) === -1) {
                toutBon = false;
            }
        }
        if (toutBon) {
            score++;
        }
    }

    if (document.querySelector('input[name="q8"]:checked')) {
        if (document.querySelector('input[name="q8"]:checked').value === bonnesReponses.q8) {
            score++;
        }
    }

    if (document.querySelector('input[name="q9"]:checked')) {
        if (document.querySelector('input[name="q9"]:checked').value === bonnesReponses.q9) {
            score++;
        }
    }

    if (document.querySelector('input[name="q10"]:checked')) {
        if (document.querySelector('input[name="q10"]:checked').value === bonnesReponses.q10) {
            score++;
        }
    }

    if (document.querySelector('input[name="q11"]:checked')) {
        if (document.querySelector('input[name="q11"]:checked').value === bonnesReponses.q11) {
            score++;
        }
    }

    if (document.querySelector('input[name="q12"]:checked')) {
        if (document.querySelector('input[name="q12"]:checked').value === bonnesReponses.q12) {
            score++;
        }
    }

    var pourcentage = Math.round((score / total) * 100);

    var message = '';
    if (pourcentage >= 80) {
        message = 'Excellent! Vous maîtrisez bien le sujet.';
    } else if (pourcentage >= 60) {
        message = 'Bon travail! Continuez vos efforts.';
    } else {
        message = 'Il faut encore travailler. Révisez le cours.';
    }

    var resultat = document.getElementById('resultat');
    resultat.innerHTML = '<h3>Résultats du Quiz</h3>' +
                        '<p><strong>Score: ' + score + ' / ' + total + '</strong></p>' +
                        '<p><strong>Pourcentage: ' + pourcentage + '%</strong></p>' +
                        '<p>' + message + '</p>' +
                        '<hr>' +
                        '<h4>Réponses correctes:</h4>' +
                        '<ol>' +
                        '<li>Hyper Text Markup Language</li>' +
                        '<li>&lt;a&gt;</li>' +
                        '<li>color</li>' +
                        '<li>Langage de script</li>' +
                        '<li>&lt;!-- commentaire --&gt;</li>' +
                        '<li>&lt;nav&gt;</li>' +
                        '<li>var, let, const (toutes les trois)</li>' +
                        '<li>Toutes les réponses ci-dessus</li>' +
                        '<li>getElementById()</li>' +
                        '<li>Cascading Style Sheets</li>' +
                        '<li>style</li>' +
                        '<li>console.log()</li>' +
                        '</ol>';

    resultat.scrollIntoView({ behavior: 'smooth' });
}