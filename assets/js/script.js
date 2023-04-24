const REQUESTAPODURL = 'https://api.nasa.gov/planetary/apod/?api_key=mzTxnxnGx9DLnVoAugcd52XptUxh4FL1XpzOSmyw';
const ONECALLSOLARSYSTEM = 'https://api.le-systeme-solaire.net/rest/bodies/';
const INFONOTFOUND = "No information was found in our database.";

const ONEG = 9.8;
var idToEngName = {};
var engNameToId = {};
var frenchToEngName = {};
var frenchToId = {};

function getIdToEngName() {
    fetch(ONECALLSOLARSYSTEM)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.bodies.length; i++) {
                if (data.bodies[i].englishName !== '') {
                    idToEngName[data.bodies[i].id] = data.bodies[i].englishName;
                    engNameToId[data.bodies[i].englishName] = data.bodies[i].id;
                    engNameToId[data.bodies[i].englishName.toLowerCase()] = data.bodies[i].id;
                    frenchToEngName[data.bodies[i].name] = data.bodies[i].englishName;
                } else {
                    idToEngName[data.bodies[i].id] = data.bodies[i].id;
                    engNameToId[data.bodies[i].id] = data.bodies[i].id;
                    frenchToEngName[data.bodies[i].name] = data.bodies[i].id;
                }
                frenchToId[data.bodies[i].name] = data.bodies[i].id;
            }
        })
}

function getApod() {
    fetch(REQUESTAPODURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var apodCopyRight = data.copyright;
            var apodExplanation = data.explanation;
            var apodTitle = data.title;
            $('#apod-img').attr('src', data.url);
            $('#apod-title').text(apodTitle);
            $('#apod-explanation').text(apodExplanation);
            $('#apod-copyright').text("© " + apodCopyRight);
        })
}

$(document).ready(function () {
    function solarBodySearch(solarBody) {
        var bodyExists = false;
        var hasMoons = false;
        var orbitsAround = '';

        $('.apod').css('display', 'none');
        $('#body-name').css('display', 'none');
        $('#search-break').css('display', 'none');
        $('#search-content').css('display', 'none');
        $('.has-moons').css('display', 'none');

        fetch(ONECALLSOLARSYSTEM + solarBody)
            .then(function (response) {
                if (response.ok) {
                    bodyExists = true;
                    return response.json();
                }
            })
            .then(function (data) {
                $('.moon-entry').remove();

                if (bodyExists) {
                    if (data.englishName !== '') {
                        $('#body-name').text(data.englishName);
                    } else {
                        $('#body-name').text(data.id);
                    }

                    $('#body-type-text').text('Classification: ' + data.bodyType);
                    if (data.discoveredBy !== '') {
                        $('#discoverer-text').text('Discovered by: ' + data.discoveredBy);
                        $('#discovery-date-text').text('Discovered on: ' + data.discoveryDate);
                    } else {
                        $('#discoverer-text').text('Knowledge of this body has existed since the beginning of recorded history.');
                        $('#discovery-date-text').text('');
                    }
                    if (data.englishName === 'Sun') {
                        $('#orbits-around-text').text('The sun is the body around which all planets, asteroids, and comets in the solar system orbit.');
                        $('#orbits').css('display', 'none');
                        $('#apoapsis-text').text('');
                        $('#periapsis-text').text('');
                        $('#orbital-period-text').text('');
                        $('#rotational-period-text').text('');
                    } else {
                        $('orbits').css('display', 'block');
                        if (data.aroundPlanet !== null) {
                            orbitsAround = idToEngName[data.aroundPlanet.planet];
                            $('#orbits-around-text').text('Orbits around: ');
                            $('#orbits').text(orbitsAround);
                            $('#orbits').attr('data-search-term', data.aroundPlanet.planet);
                        } else {
                            orbitsAround = 'the sun';
                            $('#orbits-around-text').text('Orbits around: ');
                            $('#orbits').text(orbitsAround);
                            $('#orbits').attr('data-search-term', 'sun');
                        }

                        if (data.aphelion > 0) {
                            $('#apoapsis-text').text('Distance from ' + orbitsAround + ' at farthest point of orbit: ' + data.aphelion.toLocaleString('en-US') + ' kilometers');
                        } else {
                            $('#apoapsis-text').text('Distance from ' + orbitsAround + ' at farthest point of orbit: ' + INFONOTFOUND);
                        }

                        if (data.perihelion > 0) {
                            $('#periapsis-text').text('Distance from ' + orbitsAround + ' at closest point of orbit: ' + data.perihelion.toLocaleString('en-US') + ' kilometers');
                        } else {
                            $('#periapsis-text').text('Distance from ' + orbitsAround + ' at closest point of orbit: ' + INFONOTFOUND);
                        }

                        if (data.sideralOrbit > 0) {
                            $('#orbital-period-text').text('Length of one full orbit around ' + orbitsAround + ': ' + data.sideralOrbit.toLocaleString('en-US') + ' days');
                        } else {
                            $('#orbital-period-text').text('Length of one full orbit around ' + orbitsAround + ': ' + INFONOTFOUND);
                        }

                        if (data.sideralRotation > 0) {
                            $('#rotational-period-text').text('Time for one full rotation relative to the stars: ' + data.sideralRotation.toLocaleString('en-US') + ' hours');
                        } else {
                            $('#rotational-period-text').text('Time for one full rotation relative to the stars: ' + INFONOTFOUND)
                        }
                    }

                    if (data.equaRadius > 0) {
                        $('#equa-radius-text').text('Radius at equator: ' + data.equaRadius.toLocaleString('en-US') + ' kilometers');
                    } else {
                        $('#equa-radius-text').text('Radius at equator: ' + INFONOTFOUND);
                    }

                    if (data.polarRadius > 0) {
                        $('#polar-radius-text').text('Radius at poles: ' + data.polarRadius.toLocaleString('en-US') + ' kilometers');
                    } else {
                        $('#polar-radius-text').text('Radius at poles: ' + INFONOTFOUND);
                    }

                    if (data.meanRadius > 0) {
                        $('#mean-radius-text').text('Average radius: ' + data.meanRadius.toLocaleString('en-US') + " kilometers");
                    } else {
                        $('#mean-radius-text').text('Average radius: ' + INFONOTFOUND);
                    }

                    
                    if (data.mass !== null) {
                        var newExponent = data.mass.massExponent - 3;
                        $('#mass-text').text('Mass: ' + data.mass.massValue + ' * 10^(' + newExponent + ') metric tons');
                    } else {
                        $('#mass-text').text('Mass: ' + INFONOTFOUND);
                    }
                    if (data.density > 0 && data.density !== 1) {
                        var convertedDensity = data.density * 1000;
                        $('#density-text').text('Density: ' + convertedDensity.toLocaleString('en-US') + ' kilograms per cubic meter')
                    } else {
                        $('#density-text').text('Density: ' + INFONOTFOUND);
                    }
                    if (data.gravity > 0) {
                        var gravityGs = data.gravity / ONEG;
                        $('#gravity-text').text('Surface gravity: ' + gravityGs.toFixed('5') + 'Gs');
                    } else {
                        $('#gravity-text').text('Surface gravity: ' + INFONOTFOUND);
                    }
                    if (data.moons !== null) {
                        hasMoons = true;
                        for (var i = 0; i < data.moons.length; i++) {
                            var newMoonEl = $('<p>');
                            newMoonEl.text(frenchToEngName[data.moons[i].moon]);
                            newMoonEl.addClass('moon-entry');
                            newMoonEl.addClass('search-this-body');
                            newMoonEl.attr('data-search-term', frenchToId[data.moons[i].moon]);
                            $('#moons-div').append(newMoonEl);
                        }
                    }
                    console.log("About to generate an image");
                    if (BODIES[data.englishName] !== '' && BODIES[data.englishName] !== undefined) {
                        $('#body-image').attr('src', BODIES[data.englishName]);
                    } else if (BODIES[data.id] !== '' && BODIES[data.id] !== undefined) {
                        $('#body-image').attr('src', BODIES[data.id]);
                    } else {
                        $('#body-image').attr('src', 'https://cdn.discordapp.com/attachments/929118260887171123/931643733370347530/not-found.png');
                    }
                    $('#body-name').css('display', 'block');
                    $('#search-break').css('display', 'block');
                    $('#search-content').css('display', 'block');
                    if (hasMoons) {
                        $('.has-moons').css('display', 'block');
                    }
                    $('.moon-entry').on('click', function (event) {
                        console.log("Clicked on .moon-entry")
                        solarBodySearch($(event.target).attr('data-search-term'));
                    });

                } else {
                    $('#body-name').text(INFONOTFOUND);
                    $('#body-name').css('display', 'block');
                }
            })
    }

    //Event listeners
    $('#orbits').on('click', function (event) {
        console.log("Cliked on #orbits");
        solarBodySearch($(event.target).attr('data-search-term'));
    });

    $('form').on('submit', function (event) {
        event.preventDefault()
        //$('.apod-container').addClass('hide');
        //$('.apod-container').css('display', 'none');
        var solarBody = engNameToId[$('#planet-input').val()];
        $('#planet-input').val('');
        solarBodySearch(solarBody);
    })
})

getIdToEngName();
getApod();

