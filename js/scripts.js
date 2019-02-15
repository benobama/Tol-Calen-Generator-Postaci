//Business Logic
//----------------------------------------

//Animate CSS to apply effects in js
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//localStorage Saved Input Array Objects

if (!localStorage.savedCharacters) {
  localStorage.savedCharacters = JSON.stringify([]);
  }

var savedCharacters = JSON.parse(localStorage.savedCharacters);

document.addEventListener("DOMContentLoaded", function() {
  savedCharacters.forEach(function(char) {
    $("ul#savedList").prepend("<li class='clickSave'>" + char.name + "</li>");
    $(".clickSave").first().click(function() {
      //when clicked, print
      printCharacterOutput(char);
    });
  });
});

//Character Constructor
function Character(characterName, characterSurname, gender, age, att, skills, pros, cons, realm, race, profession, description, quest){
  this.name = characterName;
  this.surname = characterSurname;
  this.age = age;
  this.att = att;
  this.skills = skills;
  this.pros = pros;
  this.cons = cons;
  this.gender = gender;
  this.realm = realm;
  this.race = race;
  this.profession = profession;
  this.description = description;
  this.quest = quest;
  console.log(gender);
}

//random testing
Character.prototype.random = function(library) {
  return library[Math.floor(Math.random()*library.length)];
}


//User Interface Logic
//----------------------------------------

//Randomize function

// GENERALNIE
function randomize(charObj) {

  //PŁEĆ
  if (charObj.gender === '') {
    charObj.gender = charObj.random(gender);
  }

//SPOKREWNIENIE
  if (charObj.age === '') {
    charObj.age = charObj.random(ages);
  }

//TESTY
if (charObj.att === '') {
  charObj.att = charObj.random(atts);
}

//2

if (charObj.skills === '') {
  charObj.skills = charObj.random(skillsy);
}

//3

if (charObj.pros === '') {
  charObj.pros = charObj.random(prosy);
}

//4

if (charObj.cons === '') {
  charObj.cons = charObj.random(consy);
}

//OPIS


  if (charObj.realm === '') {
    charObj.realm = charObj.random(realm);
  }

// GŁÓWNE RODY--------------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (charObj.race === '' && charObj.realm === 'Glowne Rody Tol Calen') {
  charObj.race = charObj.random(racesGRTC);
//Wasyle
  if (charObj.race === 'Rodu Wasylewiczów') {
    if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleGRTCwasyl)
    } else if (charObj.name === '' && charObj.gender === 'Female') {
        charObj.name = charObj.random(namesFemaleGRTCwasyl);
          }
      else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleGRTCwasyl);
          } else {
            charObj.name = charObj.random(namesFemaleGRTCwasyl);
          }
    }

  }

  if (charObj.race === 'Rodu Wasylewiczów') {
    if (charObj.surname === '' && charObj.gender === 'Male') {
      charObj.surname = charObj.random(surnamesMaleGRTCwasyl) }
      else if (charObj.surname === '' && charObj.gender === 'Female'){
        charObj.surname = charObj.random(surnamesFemaleGRTCwasyl);
        }
      else if (charObj.surname === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
            charObj.surname = charObj.random(surnamesMaleGRTCwasyl);
          } else {
              charObj.surname = charObj.random(surnamesFemaleGRTCwasyl);
              }
    }
    if (charObj.profession === '' && charObj.age === "spokrewnioną") {
      charObj.profession = charObj.random(professionsGRTCwasyl);
    }
  }

//Ligaturowie
  if (charObj.race === 'Klanu Ligaturów Einherjar') {
    if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleGRTCligatur);
    } else if (charObj.name === '' && charObj.gender === 'Female'){
      charObj.name = charObj.random(namesFemaleGRTCligatur);
    } else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
          charObj.name = charObj.random(namesMaleGRTCligatur);
        } else {
          charObj.name = charObj.random(namesFemaleGRTCligatur);
        }
      }
    }

    if (charObj.race === 'Klanu Ligaturów Einherjar') {
      if (charObj.surname === '' && charObj.gender === 'Male') {
        charObj.surname = charObj.random(surnamesMaleGRTCligatur) }
        else if (charObj.surname === '' && charObj.gender === 'Female'){
          charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
          }
        else if (charObj.surname === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.surname = charObj.random(surnamesMaleGRTCligatur);
            } else {
                charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
                }
      }
      if (charObj.profession === '' && charObj.age === "spokrewnioną") {
        charObj.profession = charObj.random(professionsGRTCspok);
      }
    }
//Ligaturowie Eldren
    if (charObj.race === 'Klanu Ligaturów Eldren') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleGRTCligatur);
      } else if (charObj.name === '' && charObj.gender === 'Female'){
        charObj.name = charObj.random(namesFemaleGRTCligatur);
      } else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleGRTCligatur);
          } else {
            charObj.name = charObj.random(namesFemaleGRTCligatur);
          }
        }
      }

      if (charObj.race === 'Klanu Ligaturów Eldren') {
        if (charObj.surname === '' && charObj.gender === 'Male') {
          charObj.surname = charObj.random(surnamesMaleGRTCligatur) }
          else if (charObj.surname === '' && charObj.gender === 'Female'){
            charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
            }
          else if (charObj.surname === '') {
            var randomValue = Math.random();
            if (randomValue < 0.5) {
                charObj.surname = charObj.random(surnamesMaleGRTCligatur);
              } else {
                  charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
                  }
        }
        if (charObj.profession === '' && charObj.age === "spokrewnioną") {
          charObj.profession = charObj.random(professionsGRTCligatur);
        }
      }

  //Ligaturowie Kintor Unnar

  if (charObj.race === 'Klanu Ligaturów Kintor Unnar') {
    if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleGRTCligatur);
    } else if (charObj.name === '' && charObj.gender === 'Female'){
      charObj.name = charObj.random(namesFemaleGRTCligatur);
    } else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
          charObj.name = charObj.random(namesMaleGRTCligatur);
        } else {
          charObj.name = charObj.random(namesFemaleGRTCligatur);
        }
      }
    }

    if (charObj.race === 'Klanu Ligaturów Kintor Unnar') {
      if (charObj.surname === '' && charObj.gender === 'Male') {
        charObj.surname = charObj.random(surnamesMaleGRTCligatur) }
        else if (charObj.surname === '' && charObj.gender === 'Female'){
          charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
          }
        else if (charObj.surname === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.surname = charObj.random(surnamesMaleGRTCligatur);
            } else {
                charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
                }
      }
      if (charObj.profession === '' && charObj.age === "spokrewnioną") {
        charObj.profession = charObj.random(professionsGRTCspok);
      }
    }

  //Fullioci
  if (charObj.race === 'Rodu Fuliocci') {
    if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleGRTCfuliocci);
        } else if (charObj.name === '' && charObj.gender === 'Female'){
            charObj.name = charObj.random(namesFemaleGRTCfuliocci);
        } else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
          charObj.name = charObj.random(namesMaleGRTCfuliocci);
        } else {
          charObj.name = charObj.random(namesFemaleGRTCfuliocci);
        }
      }
      if (charObj.profession === '' && charObj.age === "spokrewnioną") {
        charObj.profession = charObj.random(professionsGRTCspok);
      }
    }

    if (charObj.race === 'Rodu Fuliocci') {
      charObj.surname = charObj.random(surnamesGRTCfuliocci);
    }

  //Strutmeiserowie
    if (charObj.race === 'Rodu Strutmeiserów') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleGRTCstrut);
          } else if (charObj.name === '' && charObj.gender === 'Female'){
              charObj.name = charObj.random(namesFemaleGRTCstrut);
          } else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleGRTCstrut);
          } else {
            charObj.name = charObj.random(namesFemaleGRTCstrut);
          }
        }
        if (charObj.profession === '' && charObj.age === "spokrewnioną") {
          charObj.profession = charObj.random(professionsGRTCspok);
        }
      }

    //McCormicków Garoo
    if (charObj.race === 'Rodu McCormicków Garoo') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleGRTCgaroo);
          } else if (charObj.name === '' && charObj.gender === 'Female'){
              charObj.name = charObj.random(namesFemaleGRTCgaroo);
          } else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleGRTCgaroo);
          } else {
            charObj.name = charObj.random(namesFemaleGRTCgaroo);
          }
        }
        if (charObj.profession === '' && charObj.age === "spokrewnioną") {
          charObj.profession = charObj.random(professionsGRTCgaroo);
        }
      }

    //McCormicków Druigh
    if (charObj.race === 'Rodu McCormicków Druigh') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleGRTCdruigh);
          } else if (charObj.name === '' && charObj.gender === 'Female'){
              charObj.name = charObj.random(namesFemaleGRTCdruigh);
          } else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleGRTCdruigh);
          } else {
            charObj.name = charObj.random(namesFemaleGRTCdruigh);
          }
        }
        if (charObj.profession === '' && charObj.age === "spokrewnioną") {
          charObj.profession = charObj.random(professionsGRTCspok);
        }
      }
//Velasquezowie
      if (charObj.race === 'Rodu Velasquezów') {
        if (charObj.name === '' && charObj.gender === 'Male') {
          charObj.name = charObj.random(namesMaleGRTCvel);
            } else if (charObj.name === '' && charObj.gender === 'Female'){
                charObj.name = charObj.random(namesFemaleGRTCvel);
            } else if (charObj.name === '') {
            var randomValue = Math.random();
            if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMaleGRTCvel);
            } else {
              charObj.name = charObj.random(namesFemaleGRTCvel);
            }
          }

          if (charObj.profession === '' && charObj.age === "spokrewnioną") {
            charObj.profession = charObj.random(professionsGRTCvel);
          }

        }

        if (charObj.race === 'Rodu Velasquezów') {
          charObj.surname = charObj.random(surnamesGRTCvel);
        }

      if (charObj.profession === '') {
        charObj.profession = charObj.random(professionsGRTC);
      }


      charObj.description = charObj.random(descriptionGRTC)

      charObj.quest = charObj.random(questGRTC)


//POMNIEJSZE RODY-----------------------------------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  } else if (charObj.race === '' && charObj.realm === 'Pomniejsze Rody Tol Calen') {
     charObj.race = charObj.random(racesPRTC);
  //Kozak
    if (charObj.race === 'Rodu Kozaków') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMalePRTCkoz)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemalePRTCkoz);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMalePRTCkoz);
            } else {
              charObj.name = charObj.random(namesFemalePRTCkoz);
            }
      }
    }

//Merkowie
    if (charObj.race === 'Rodu Merków') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleGRTCfuliocci)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemaleGRTCfuliocci);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMaleGRTCfuliocci);
            } else {
              charObj.name = charObj.random(namesFemaleGRTCfuliocci);
            }
      }
    }

    if (charObj.race === 'Rodu Merków') {
      if (charObj.surname === '' && charObj.gender === 'Male') {
        charObj.surname = charObj.random(namesMaleUNG) }
        else if (charObj.surname === '' && charObj.gender === 'Female'){
          charObj.surname = charObj.random(namesFemaleUNG);
          }
        else if (charObj.surname === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.surname = charObj.random(namesMaleUNG);
            } else {
                charObj.surname = charObj.random(namesFemaleUNG);
                }
      }
    }

    if (charObj.race === 'Ludu Muethirów wychowanych poza Puszczą') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMalePAR)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemalePAR);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMalePAR);
            } else {
              charObj.name = charObj.random(namesFemalePAR);
            }
      }
    }

    if (charObj.race === 'Rodu Kozaków') {
      charObj.profession = charObj.random(professionsPRTCkoz);
    } else if (charObj.race === "Rodu Merków") {
      charObj.profession = charObj.random(professionsPRTCmerk);
    } else {
      charObj.profession = charObj.random(professionsPAR);
    }


    if (charObj.race === 'Rodu Kozaków') {
      charObj.description = charObj.random(descriptionPRTCkoz);
    } else if (charObj.race === "Rodu Merków") {
      charObj.description = charObj.random(descriptionPRTCmerk);
    } else {
      charObj.description = charObj.random(descriptionPAR);
    }

    if (charObj.race === 'Rodu Kozaków') {
      charObj.quest = charObj.random(questPRTC);
    } else if (charObj.race === "Rodu Merków") {
      charObj.quest = charObj.random(questPRTC);
    } else {
      charObj.quest = charObj.random(questPRTC);
    }


}
//PUSZCZA
////////////////////////////////////////////////////////////////////////////////
else if (charObj.race === '' && charObj.realm === 'Puszcza') {
   charObj.race = charObj.random(racesPUS);
//aethirowie + muethirowie
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMalePUS)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemalePUS);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMalePUS);
            } else {
              charObj.name = charObj.random(namesFemalePUS);
            }
      }

    //Profesja

    if (charObj.profession === '') {
      charObj.profession = charObj.random(professionsPUS);
    }

    //Przeszłość
    charObj.description = charObj.random(descriptionPUS)

    charObj.quest = charObj.random(questPUS)

}
//BEZMIARY
////////////////////////////////////////////////////////////////////////////////
else if (charObj.race === '' && charObj.realm === 'Bezmiary') {
       charObj.race = charObj.random(racesBEZ);
//Velasq
    if (charObj.race === 'Rodu Velasquezów Kolonialnych') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleGRTCvel);
          } else if (charObj.name === '' && charObj.gender === 'Female'){
              charObj.name = charObj.random(namesFemaleGRTCvel);
          } else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleGRTCvel);
          } else {
            charObj.name = charObj.random(namesFemaleGRTCvel);
          }
        }
      }

      if (charObj.race === 'Rodu Velasquezów Kolonialnych') {
        charObj.surname = charObj.random(surnamesBEZvel);
      }

      if (charObj.race === 'Niewolnego Ludu Archipelagów') {
        if (charObj.name === '' && charObj.gender === 'Male') {
          charObj.name = charObj.random(namesMalePAR);
            } else if (charObj.name === '' && charObj.gender === 'Female'){
                charObj.name = charObj.random(namesFemalePAR);
            } else if (charObj.name === '') {
            var randomValue = Math.random();
            if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMalePAR);
            } else {
              charObj.name = charObj.random(namesFemalePAR);
            }
          }
        }

//Profesja

        if (charObj.race === 'Rodu Velasquezów Kolonialnych') {
          charObj.profession = charObj.random(professionsBEZvel);
        } else {
          charObj.profession = charObj.random(professionsBEZ);
        }


//Przeszłość
        if (charObj.race === 'Rodu Velasquezów Kolonialnych') {
          charObj.description = charObj.random(descriptionBEZvel);
        } else {
          charObj.description = charObj.random(descriptionBEZ);
        }


//Quest

        if (charObj.race === 'Rodu Velasquezów Kolonialnych') {
          charObj.quest = charObj.random(questBEZvel);
        } else {
          charObj.quest = charObj.random(questBEZ);
        }


//HIKUNI---------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////
  }
  else if (charObj.race === '' && charObj.realm === 'Hikuni') {
     charObj.race = charObj.random(racesHIK);
  //Klan Smoka
    if (charObj.race === 'Klanu Smoka') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleHIKsmo)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemaleHIKsmo);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMaleHIKsmo);
            } else {
              charObj.name = charObj.random(namesFemaleHIKsmo);
            }
      }
    }


      if (charObj.race === 'Klanu Smoka') {
      charObj.surname = charObj.random(surnamesHIKsmo);
      }

      if (charObj.race === 'Klanu Smoka') {
      charObj.profession = charObj.random(professionsHIKsmo);
      }


//Klan ognia
    if (charObj.race === 'Klanu Ognia') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleHIKog)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemaleHIKog);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMaleHIKog);
            } else {
              charObj.name = charObj.random(namesFemaleHIKog);
            }
      }
    }

    if (charObj.race === 'Klanu Ognia') {
    charObj.surname = charObj.random(surnamesHIKog);
    }

//Profesje
    if (charObj.race === 'Klanu Smoka') {
      charObj.profession = charObj.random(professionsHIKsmo);
    } else {
      charObj.profession = charObj.random(professionsHIKog);
    }


//Przeszłość
    if (charObj.race === 'Klanu Smoka') {
      charObj.description = charObj.random(descriptionHIKsmo);
    } else {
      charObj.description = charObj.random(descriptionHIKog);
    }


//Quest

    if (charObj.race === 'Klanu Smoka') {
      charObj.quest = charObj.random(questHIKsmo);
    } else {
        charObj.quest = charObj.random(questHIKog);
    }

  }

  //PARIASI---------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////
  else if (charObj.race === '' && charObj.realm === 'Parias') {
     charObj.race = charObj.random(racesPAR);
  //Pariasi
    if (charObj.race === 'Ludu Pariasów') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMalePAR)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemalePAR);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMalePAR);
            } else {
              charObj.name = charObj.random(namesFemalePAR);
            }
      }
    }

    //Profesja

    if (charObj.profession === '') {
      charObj.profession = charObj.random(professionsPAR);
    }

    //Przeszłość
    charObj.description = charObj.random(descriptionPAR)

    charObj.quest = charObj.random(questPAR)

  }

//AL SADIJA-------------------------------------------------------
///////////////////////////////////////////////////////////////////
  else if (charObj.race === '' && charObj.realm === 'Harani') {
     charObj.race = charObj.random(racesAS);
  //Harani
    if (charObj.race === 'Ludu Harani') {
      if (charObj.name === '' && charObj.gender === 'Male') {
        charObj.name = charObj.random(namesMaleASharani)
      } else if (charObj.name === '' && charObj.gender === 'Female') {
          charObj.name = charObj.random(namesFemaleASharani);
            }
        else if (charObj.name === '') {
          var randomValue = Math.random();
          if (randomValue < 0.5) {
              charObj.name = charObj.random(namesMaleASharani);
            } else {
              charObj.name = charObj.random(namesFemaleASharani);
            }
      }
    }


      if (charObj.race === 'Ludu Harani') {
      charObj.surname = charObj.random(surnamesASharani);
      }

          //Isfahani

              if (charObj.race === 'Ludu Isfahani') {
                if (charObj.name === '' && charObj.gender === 'Male') {
                  charObj.name = charObj.random(namesMaleASharani)
                } else if (charObj.name === '' && charObj.gender === 'Female') {
                    charObj.name = charObj.random(namesFemaleASharani);
                      }
                  else if (charObj.name === '') {
                    var randomValue = Math.random();
                    if (randomValue < 0.5) {
                        charObj.name = charObj.random(namesMaleASharani);
                      } else {
                        charObj.name = charObj.random(namesFemaleASharani);
                      }
                }
              }

              if (charObj.race === 'Ludu Isfahani') {
              charObj.surname = charObj.random(surnamesASharani);
              }

    //Profesja

    if (charObj.profession === '') {
      charObj.profession = charObj.random(professionsAS);
    }

    //Przeszłość
    charObj.description = charObj.random(descriptionAS)

    charObj.quest = charObj.random(questAS)

  }

  //KUDHELOWIE----------------------------------------------------------------
  ////////////////////////////////////////////////////////////////////////////
  else if (charObj.race === '' && charObj.realm === 'Kudlehowie') {
     charObj.race = charObj.random(racesKUD);

    if (charObj.realm === 'Kudlehowie') {
      if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleKUD);
    } else if (charObj.name === '' && charObj.gender === 'Female'){
      charObj.name = charObj.random(namesFemaleKUD);
    } else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
          charObj.name = charObj.random(namesMaleKUD);
        } else {
          charObj.name = charObj.random(namesFemaleKUD);
        }
      }
    }

    //Profesja

    if (charObj.profession === '') {
      charObj.profession = charObj.random(professionsKUD);
    }

    //Przeszłość
    charObj.description = charObj.random(descriptionKUD)

    charObj.quest = charObj.random(questKUD)

  }

//DALEKI SKOLMJAR-------------------------------------------------------
else if (charObj.race === '' && charObj.realm === 'Skolmjar') {
   charObj.race = charObj.random(racesSKO);

  if (charObj.realm === 'Skolmjar') {
    if (charObj.name === '' && charObj.gender === 'Male') {
    charObj.name = charObj.random(namesMaleGRTCligatur);
  } else if (charObj.name === '' && charObj.gender === 'Female'){
    charObj.name = charObj.random(namesFemaleGRTCligatur);
  } else if (charObj.name === '') {
      var randomValue = Math.random();
      if (randomValue < 0.5) {
        charObj.name = charObj.random(namesMaleGRTCligatur);
      } else {
        charObj.name = charObj.random(namesFemaleGRTCligatur);
      }
    }
  }

  if (charObj.realm === 'Skolmjar') {
    if (charObj.surname === '' && charObj.gender === 'Male') {
      charObj.surname = charObj.random(surnamesMaleGRTCligatur) }
      else if (charObj.surname === '' && charObj.gender === 'Female'){
        charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
        }
      else if (charObj.surname === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
            charObj.surname = charObj.random(surnamesMaleGRTCligatur);
          } else {
              charObj.surname = charObj.random(surnamesFemaleGRTCligatur);
              }
    }
  }



  //Profesja

  if (charObj.profession === '') {
    charObj.profession = charObj.random(professionsSKO);
  }

  //Przeszłość
  charObj.description = charObj.random(descriptionSKO)

  charObj.quest = charObj.random(questSKO)


}
//UNGWAI--------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////
else if (charObj.race === '' && charObj.realm === 'Ungwai') {
   charObj.race = charObj.random(racesUNG);
//Ungawaj
    if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleUNG)
    } else if (charObj.name === '' && charObj.gender === 'Female') {
        charObj.name = charObj.random(namesFemaleUNG);
          }
      else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleUNG);
          } else {
            charObj.name = charObj.random(namesFemaleUNG);
          }
    }


    if (charObj.surname === '' && charObj.gender === 'Male') {
      charObj.surname = charObj.random(surnamesMaleUNG) }
      else if (charObj.surname === '' && charObj.gender === 'Female'){
        charObj.surname = charObj.random(surnamesFemaleUNG);
        }
      else if (charObj.surname === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
            charObj.surname = charObj.random(surnamesMaleUNG);
          } else {
              charObj.surname = charObj.random(surnamesFemaleUNG);
              }
    }


    //Profesja

            if (charObj.race === 'Ludu niewolnych Ungwai') {
              charObj.profession = charObj.random(professionsBEZ);
            } else {
              charObj.profession = charObj.random(professionsUNG);
            }


    //Przeszłość
            if (charObj.race === 'Ludu niewolnych Ungwai') {
              charObj.description = charObj.random(descriptionBEZ);
            } else {
              charObj.description = charObj.random(descriptionUNG);
            }


    //Quest

            if (charObj.race === 'Ludu niewolnych Ungwai') {
              charObj.quest = charObj.random(questUNG);
            } else {
              charObj.quest = charObj.random(questUNG);
            }

}


//GNOMY
/////////////////////////////////////////////////////////////////////////////

else if (charObj.race === '' && charObj.realm === 'Gnom') {
   charObj.race = charObj.random(racesGNO);
//gnomy
  if (charObj.race === 'Ludu Gnomów') {
    if (charObj.name === '' && charObj.gender === 'Male') {
      charObj.name = charObj.random(namesMaleASgnom)
    } else if (charObj.name === '' && charObj.gender === 'Female') {
        charObj.name = charObj.random(namesFemaleASgnom);
          }
      else if (charObj.name === '') {
        var randomValue = Math.random();
        if (randomValue < 0.5) {
            charObj.name = charObj.random(namesMaleASgnom);
          } else {
            charObj.name = charObj.random(namesFemaleASgnom);
          }
    }
  }

  //Profesja

  if (charObj.profession === '') {
    charObj.profession = charObj.random(professionsPAR);
  }

  //Przeszłość
  charObj.description = charObj.random(descriptionPAR)

  charObj.quest = charObj.random(questPAR)

}
//POTOMEK BOGA-------------------------------------------------------
////////////////////////////////////////////////////////////////////////
else if (charObj.race === '' && charObj.realm === 'Potomek') {
   charObj.race = charObj.random(racesPOT);

  if (charObj.realm === 'Potomek') {
    if (charObj.name === '' && charObj.gender === 'Male') {
    charObj.name = charObj.random(namesMalePAR);
  } else if (charObj.name === '' && charObj.gender === 'Female'){
    charObj.name = charObj.random(namesFemalePAR);
  } else if (charObj.name === '') {
      var randomValue = Math.random();
      if (randomValue < 0.5) {
        charObj.name = charObj.random(namesMalePAR);
      } else {
        charObj.name = charObj.random(namesFemalePAR);
      }
    }
  }

  //Profesja

  if (charObj.profession === '') {
    charObj.profession = charObj.random(professionsPOT);
  }

  //Przeszłość
  charObj.description = charObj.random(descriptionPOT)

  charObj.quest = charObj.random(questPOT)

}

///NAWIAS ZAMYKAJĄCY
}
//print output paragraph for character
function printCharacterOutput (charObj) {
  $("#outputName").text(charObj.name);
  $("#outputSurname").text(charObj.surname);
  $("#outputAge").text(charObj.age);
  $("#outputAtt").text(charObj.att);
  $("#outputSkills").text(charObj.skills);
  $("#outputPros").text(charObj.pros);
  $("#outputCons").text(charObj.cons);
  $("#outputRace").text(charObj.race);
  $("#outputGender").text(charObj.gender);
  $("#outputProfession").text(charObj.profession);
  $("#outputRealm").text(charObj.realm);
  $("#outputDescription").text(charObj.description);
  $("#outputQuest").text(charObj.quest);
  $("#characterOutput").show();
  $('#characterOutput').animateCss('fadeIn');


  //shows output box dependent on realm
  if (charObj.realm === 'Glowne Rody Tol Calen') {
    document.getElementById('outputImageBackground').style.background = "url('')";
  } else if (charObj.realm === 'Pomniejsze Rody Tol Calen') {
    document.getElementById('outputImageBackground').style.background = "url('')";
  } else if (charObj.realm === 'Star Trek') {
    document.getElementById('outputImageBackground').style.background = "url('')";
  }
}


//print history list
function printHistoryList (charObj) {
  //show button to allow list to be cleared
  $("#clearHistory").show();
  //add character to top of list
  $("ul#historyList").prepend("<li class='clickHistory'>" + charObj.name  + "</li>");
  //create listener to re-display character when clicked
  $(".clickHistory").first().click(function() {
    //temp variable to remove from history list when character is moved to save list
    var histListItem = this;
    //call print function
    printCharacterOutput(charObj);
    //update currentChar variable
    currentChar = charObj;
    //show save button
    $("#saveChar").show();

    //listener to remove from history list when saved
    // $("#saveChar").click(function () {
    //  histListItem.remove();
    // });
  });
}

//print save list
function printSaveList (charObj) {
  //add character to top of save list
  $("ul#savedList").prepend("<li class='clickSave'>" + currentChar.name  + "</li>");
  $(".clickSave").first().click(function() {
    //when clicked, print
    printCharacterOutput(charObj);
    //hide save button (already been saved)
    $("#saveChar").hide();
  });
}

// clear history
function clearHistoryList() {
  $("ul#historyList").html('');
}
//User Interface Logic---------------------------------------------------------------

//global variable used to keep track of character to add to save list
var currentChar = undefined;

$(document).ready(function() {
  $('#characterOutput').hide();
  $("#clearHistory").hide();
  $("#saveChar").hide();

  //removes clear button on load if no saved characters exist
  if (!savedCharacters[0]) {
    $('#clearSavedCharacters').hide();
  }

  //submit for new character
  $("#submitCharacter").submit(function(event){
    event.preventDefault();

    var genderChoice;

    if ($('#altGender').val() === '') {
      genderChoice = $('#gender').val();
    } else {
      genderChoice = $('#altGender').val();
    }

    //create character
    var newCharacter = new Character($('#characterName').val(), $('#characterSurname').val(), $('#gender').val(), $('#age').val(), $('#att').val(), $('#skills').val(), $('#pros').val(), $('#cons').val(), $('#realm').val(), $('#race').val(), $('#profession').val());
    //randomize character (where fields were left blank)
    randomize(newCharacter);
    //print latest character
    printCharacterOutput(newCharacter);
    printHistoryList(newCharacter);

    //show save button
    $("#saveChar").show();
    //update currentChar
    currentChar = newCharacter;
    // reset form after submit
    document.getElementById("submitCharacter").reset();
  });


  $("#saveChar").click(function () {

    //create listener for save button
    printSaveList(currentChar);
    //hide save button
    $("#saveChar").hide();
    savedCharacters.push(currentChar);
    localStorage.savedCharacters = JSON.stringify(savedCharacters);
    $("#clearSavedCharacters").show();
  });

  $("#clearHistory").click(function() {
    //clears history list
    clearHistoryList();
    $("#clearHistory").hide();
  });

  $("#clearSavedCharacters").click(function() {
    localStorage.clear();
    $("ul#savedList").html('');
    $("#clearSavedCharacters").hide();
  });

});


//Library
//----------------------------------------
var realm = ['Główne Rody Tol Calen', 'Pomniejsze Rody Tol Calen'];
var gender = ['Male', 'Female'];
var ages = ['spokrewnioną', 'niespokrewnioną', 'niespokrewnioną'];
var atts = ['Zręczność', 'Krzepa', 'Wytrzymałość', 'Zmysły', 'Intelekt', 'Charakter'];
var skillsy = ['Blef', 'Handel', 'Jeździectwo', 'Leczenie', 'Obrona', 'Obycie', 'Perswazja', 'Postrzeganie emocji', 'Przetrwanie', 'Siła Woli', 'Skradanie', 'Skupienie', 'Spostrzegawczość', 'Wysportowanie', 'Zastraszanie', 'Złodziejstwo', 'Żegluga', 'Walka Bronią (doprecyzuj jaką)', 'Rzemiosło, bądź sztuka (doprecyzuj jakie)', 'Wiedza (doprecyzuj jaka)'];
var prosy = ['Specjalizacja (I stopień)', 'Specjalizacja (II stopień)', 'Autorytet', 'Cyrkowiec', 'Czuły Słuch', 'Czuły Węch', 'Goniec', 'Żelazne Trzewia', 'Mocny Głos', 'Oburęczność', 'Grotołaz', 'Sokoli Wzrok', 'Cichy', 'Część Mapy', 'Majątek (I stopień)', 'Majątek (II Stopień)', 'Majątek (III stopień)', 'Immunitet', 'List Gończy', 'Kontakty (I stopień)', 'Kontakty (II stopień)', 'Kontakty (III stopień)', 'Reputacja (I stopień)', 'Reputacja (II stopień)', 'Reputacja (III stopień)', 'Sprzymierzeniec (I Stopień)', 'Sprzymierzeniec (II stopień)', 'Sprzymierzeniec (III stopień)', 'Stróż Prawa (I stopień)', 'Stróż Prawa (II stopień)', 'Stróż Prawa (III Stopień)', 'Czytanie z ruchu warg', 'Bakałarz', 'Niezłomny', 'Szczęście', 'Zwierzęcy towarzysz (I stopień)', 'Zwierzęcy towarzysz (II stopień)', 'Język (I stopień)', 'Język (II stopień)', 'Uroda', 'Taktyka'];
var consy = ['Uczony', 'Cwaniak', 'Waleczny'];


//Pochodzenie GŁÓWNE RODY------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rasy
var racesGRTC = ['Rodu Wasylewiczów', 'Klanu Ligaturów Einherjar', 'Klanu Ligaturów Eldren', 'Klanu Ligaturów Kintor Unnar', 'Rodu Fuliocci', 'Rodu Strutmeiserów', 'Rodu McCormicków Garoo', 'Rodu McCormicków Druigh', 'Rodu Velasquezów'];
//Imiona nazwiska []
var namesMaleGRTCwasyl = ['Bądźsław', 'Bodarwit', 'Bogdał', 'Błogisław', 'Chocian', 'Choroman', 'Ciechan', 'Danko', 'Giedymin', 'Gniewomir', 'Idzimir', 'Jacz', 'Kajmił', 'Kosław', 'Lasław', 'Lechosław', 'Leścisław', 'Macimił', 'Małomir', 'Nacław', 'Ocław', 'Racibor', 'Racimir', 'Sambor', 'Samowit', 'Siemowit', 'Tomił', 'Trosław', 'Umił', 'Zawisza', 'Zbawit'];
var namesFemaleGRTCwasyl =  ['Adelina', 'Alina', 'Bochna', 'Chronimira', 'Cimira', 'Elza', 'Jana', 'Jaromira', 'Kalina', 'Lubawa', 'Lubomira', 'Mirogniewa', 'Odyla', 'Rzepicha', 'Pężyrka', 'Sjęgniewa', 'Oszka', 'Nadmira', 'Ciecirada', 'Czębira', 'Dobromiła', 'Miłka', 'Gosława', 'Mścisława', 'Nawoja', 'Rosława'];
var surnamesMaleGRTCwasyl = ['Bądźsławowicz', 'Bodarwitowicz', 'Bogdałowicz', 'Błogisławowicz', 'Chocianowicz', 'Choromanowicz', 'Ciechanowicz', 'Dankowicz', 'Giedyminowicz', 'Gniewomirowicz', 'Idzimirowicz', 'Jaczowicz', 'Kajmiłowicz', 'Kosławowicz', 'Lasławowicz', 'Lechosławowicz', 'Leścisławowicz', 'Macimiłowicz', 'Małomirowicz', 'Nacławowicz', 'Ocławowicz', 'Raciborowicz', 'Racimirowicz', 'Samborowicz', 'Samowitowicz', 'Siemowitowicz', 'Tomiłowicz', 'Trosławowicz', 'Umiłowicz', 'Zawiszowicz', 'Zbawitowicz'];
var surnamesFemaleGRTCwasyl = ['Bądźsławówna', 'Bodarwiczówna', 'Bogdałówna', 'Błogisławówna', 'Chocianówna', 'Choromanówna', 'Ciechanówna', 'Dankówna', 'Giedyminówna', 'Gniewomirówna', 'Idzimirówna', 'Jaczówna', 'Kajmiłówna', 'Kosławówna', 'Lasławówna', 'Lechosławówna', 'Leścisławówna', 'Macimiłówna', 'Małomirówna', 'Nacławówna', 'Ocławówna', 'Raciborówna', 'Racimirówna', 'Samborówna', 'Samowitówna', 'Siemowitówna', 'Tomiłówna', 'Trosławówna', 'Umiłówna', 'Zawiszówna', 'Zbawitówna']
//Ligaturowie
var namesMaleGRTCligatur = ['Aegir', 'Agnar', 'Agni', 'Ansgar', 'Ari', 'Armod', 'Arnjolf', 'Arnvald', 'Arnvind', 'Asbjorn', 'Asgeir', 'Asgrim', 'Asmund', 'Asvald', 'Audun', 'Bjorn', 'Borg', 'Bork', 'Brand', 'Dallak', 'Egil', 'Einar', 'Eryk', 'Eskil', 'Gardhar', 'Gizur', 'Grim', 'Gunnar', 'Hallbjorn', 'Hallgrim', 'Harald', 'Hjorleif', 'Ingvar', 'Ivar', 'Jorund', 'Kjallak', 'Kjartan', 'Kolbein', 'Koll', 'Kormak', 'Kolgrim', 'Kelbor', 'Leif', 'Niels', 'Olaf', 'Orm', 'Osvald', 'Ranulf', 'Ragnar', 'Rolf', 'Sigurd', 'Svart', 'Sven', 'Thorbjorn', 'Thorfinn', 'Thorgal', 'Thorleik', 'Tengel', 'Tarjei', 'Tronnd', 'Ulf', 'Ulfhedin', 'Valgard', 'Vandrad', 'Yngvar'];
var namesFemaleGRTCligatur = ['Aldis', 'Astrid', 'Asvor', 'Berthora', 'Borga', 'Freydhis', 'Frigga', 'Gerda', 'Grima', 'Groa', 'Gudgruna', 'Halldis', 'Hallberga', 'Hallgerda', 'Hallveiga', 'Hekia', 'Helg', 'Herdis', 'Hervor', 'Hilda', 'Hildigunn', 'Hrafnhilda', 'Hrefna', 'Hrodna', 'Inbjorga', 'Ingibiorga', 'Ingunn', 'Jofridd', 'Joreid', 'Jorunn', 'Kadlin', 'Nidbjor', 'Olof', 'Ormiga', 'Osk', 'Rafarta', 'Ragnheida', 'Rangveig', 'Reginleifa', 'Sigrida', 'Svanlaug', 'Tharlauga', 'Thora', 'Thorbjorga', 'Thordis', 'Thoreja', 'Thorgerda', 'Thorguna', 'Thorhalla', 'Thorhilda', 'Thorlauga', 'Thorkatla', 'Thoroda', 'Thorunn', 'Thorvor', 'Thurid', 'Thyria', 'Ud', 'Unn', 'Valborga', 'Valgerd', 'Yngvild'];
var surnamesMaleGRTCligatur = ['Aegirson', 'Agnarson', 'Agnison', 'Ansgarson', 'Arison', 'Armodson', 'Arnjolfson', 'Arnvaldson', 'Arnvindson', 'Asbjornson', 'Asgeirson', 'Asgrimson', 'Asmundson', 'Asvaldson', 'Audunson', 'Bjornson', 'Borgson', 'Borkson', 'Brandson', 'Dallakson', 'Egilson', 'Einarson', 'Erykson', 'Eskilson', 'Gardharson', 'Gizurson', 'Grimson', 'Gunnarson', 'Hallbjornson', 'Hallgrimson', 'Haraldson', 'Hjorleifson', 'Ingvarson', 'Ivarson', 'Jorundson', 'Kjallakson', 'Kjartanson', 'Kolbeinson', 'Kollson', 'Kormakson', 'Kolgrimson', 'Kelborson', 'Leifson', 'Nielsson', 'Olafson', 'Ormson', 'Osvaldson', 'Ranulfson', 'Ragnarson', 'Rolfson', 'Sigurdson', 'Svartson', 'Svenson', 'Thorbjornson', 'Thorfinnson', 'Thorgalson', 'Thorleikson', 'Tengelson', 'Tarjeison', 'Tronndson', 'Ulfson', 'Ulfhedinson', 'Valgardson', 'Vandradson', 'Yngvarson'];
var surnamesFemaleGRTCligatur = ['Aegirdottir', 'Agnardottir', 'Agnidottir', 'Ansgardottir', 'Aridottir', 'Armoddottir', 'Arnjolfdottir', 'Arnvalddottir', 'Arnvinddottir', 'Asbjorndottir', 'Asgeirdottir', 'Asgrimdottir', 'Asmunddottir', 'Asvalddottir', 'Audundottir', 'Bjorndottir', 'Borgdottir', 'Borkdottir', 'Branddottir', 'Dallakdottir', 'Egildottir', 'Einardottir', 'Erykdottir', 'Eskildottir', 'Gardhardottir', 'Gizurdottir', 'Grimdottir', 'Gunnardottir', 'Hallbjorndottir', 'Hallgrimdottir', 'Haralddottir', 'Hjorleifdottir', 'Ingvardottir', 'Ivardottir', 'Jorunddottir', 'Kjallakdottir', 'Kjartandottir', 'Kolbeindottir', 'Kolldottir', 'Kormakdottir', 'Kolgrimdottir', 'Kelbordottir', 'Leifdottir', 'Nielsdottir', 'Olafdottir', 'Ormdottir', 'Osvalddottir', 'Ranulfdottir', 'Ragnardottir', 'Rolfdottir', 'Sigurddottir', 'Svartdottir', 'Svendottir', 'Thorbjorndottir', 'Thorfinndottir', 'Thorgaldottir', 'Thorleikdottir', 'Tengeldottir', 'Tarjeidottir', 'Tronnddottir', 'Ulfdottir', 'Ulfhedindottir', 'Valgarddottir', 'Vandraddottir', 'Yngvardottir'];
//Fuliocci
var namesMaleGRTCfuliocci = ['Adamo', 'Alessandro', 'Aloisio', 'Ambrogio', 'Andrea', 'Bartolomeo', 'Biagio', 'Daniele', 'Dario', 'Domenico', 'Fabio', 'Fabrizio', 'Filippo', 'Francesco', 'Enrico', 'Ilario', 'Ignazio', 'Giacomo', 'Giacobbe', 'Giulio', 'Giuliano', 'Giovanni', 'Giorgio', 'Giuseppe', 'Gaetano', 'Camillo', 'Carlo', 'Cristoforo', 'Luigi', 'Luca', 'Mattia', 'Massimo', 'Massimiliano', 'Martino', 'Matteo', 'Marco', 'Mario', 'Michele', 'Paolo', 'Pietro', 'Raffaele', 'Raffaello', 'Roberto', 'Romano', 'Sergio', 'Taddeo', 'Tommaso', 'Tiziano'];
var namesFemaleGRTCfuliocci =  ['Agata', 'Agnese', 'Alice', 'Anastasia', 'Angela', 'Anna', 'Cecilia', 'Domenica', 'Dorotea', 'Elisabetta', 'Eva', 'Evelina', 'Felicia', 'Francesca', 'Enrica', 'Irene', 'Isabella', 'Edvige', 'Gianna', 'Giovanna', 'Giuseppina', 'Giuditta', 'Giulia', 'Giustina', 'Caterina', 'Chiara', 'Cristina', 'Lucia', 'Maddalena', 'Margherita', 'Maria', 'Marta', 'Monica', 'Patrizia', 'Silvia', 'Orsola', 'Valentina', 'Susanna'];
var surnamesGRTCfuliocci = ['di Argento', 'di Media', 'da Vivero', 'di Artoria', 'Porza', 'Tagiano', 'di Lauro', 'Nunzio', 'Taziano', 'da Fennes', 'da Liveral', 'Pellegrino', 'Marazzo', 'di Patruno', 'Perino', 'di Frontino', 'Ciresi', 'Guarini', 'Crespi', 'di Ambra'];
//Strutmeiserowie
var namesMaleGRTCstrut = ['Adelard', 'Ademar', 'Aelred', 'Alwar', 'Anzelm', 'Arbogast', 'Armin', 'Artald', 'Arwid', 'Aubert', 'Audomar', 'Berengar', 'Bernard', 'Burchard', 'Dagobert', 'Ditmar', 'Eberhard', 'Eckard', 'Egbert', 'Ekhard', 'Frederik', 'Fulko', 'Galfryd', 'Gerwin', 'Gwido', 'Hekard', 'Helmut', 'Heinrich', 'Herbert', 'Herman', 'Hugo', 'Lothar', 'Otto', 'Roderik', 'Roland', 'Wilhelm', 'Wolfgang', 'Siegfried'];
var namesFemaleGRTCstrut = ['Adalberta', 'Adela', 'Adelajda', 'Adelinda', 'Alwina', 'Arleta', 'Astryda', 'Benilda', 'Bernadeta', 'Berta', 'Blanka', 'Dagna', 'Erwina', 'Gerda', 'Gertruda', 'Helga', 'Hermenegilda', 'Hermina', 'Hilda', 'Hildegarda', 'Inga', 'Ingeborga', 'Irmina', 'Lorelei', 'Luiza', 'Olga', 'Otylia', 'Radegunda', 'Romualda', 'Roselina', 'Segolena'];
//Garoo
var namesMaleGRTCgaroo = ['Abbán', 'Aibhne', 'Aodhán', 'Brógán', 'Cairell', 'Cassair', 'Conall', 'Coinneach', 'Diarmaid', 'Fearghus', 'Fechín', 'Gobán', 'Leannán', 'Lochlann', 'Lorcán', 'Ríoghán', 'Ríordán', 'Rónán', 'Ross', 'Rúadhán', 'Ruarc', 'Sárán', 'Scoithín', 'Seanán', 'Síoda', 'Tanaí', 'Torcán', 'Treasach', 'Tuama', 'Tuathal', 'Ultán'];
var namesFemaleGRTCgaroo = ['Ainnir', 'Ana', 'Aoife', 'Bébhinn', 'Bláthín', 'Blinne', 'Bríghid', 'Dáirine', 'Deirdre', 'Easnadh', 'Éile', 'Éirne', 'Éibhleann', 'Echna', 'Eithne', 'Féthnaid', 'Fionnait', 'Geiléis', 'Grian', 'Íde', 'Íonait', 'Laoise', 'Meadhbh', 'Meallá', 'Moinnine', 'Naomh', 'Neamhain', 'Neasa', 'Nuala', 'Órlaith', 'Ríona', 'Róisín', 'Sláine', 'Sorcha'];
//Druigh
var namesMaleGRTCdruigh = ['Aeron', 'Briok', 'Gildas', 'Callan', 'Malcolm', 'Ludan', 'Sebbus', 'Brendan', 'Gwenol', 'Kadok', 'Firtan', 'Finan', 'Cedmon', 'Collin', 'Cedric', 'Donovan', 'Edan', 'Erc', 'Eoin', 'Ferris', 'Logan', 'Liam', 'Lunn', 'Mael', 'Duncan', 'Dunn', 'Willem', 'Llud', 'Angus', 'Leroy', 'Shaun', 'Lind', 'Callum', 'Cullough', 'Ronan', 'Darian'];
var namesFemaleGRTCdruigh = ['Arlena', 'Annais', 'Eileen', 'Ethlinn', 'Gladys', 'Gwyneth', 'Jenna', 'Leslie', 'Maureen', 'Rhonda', 'Shannon', 'Tara', 'Tracy', 'Sabrina', 'Brenda', 'Aoife', 'Ena', 'Elatha', 'Fanny', 'Ida', 'Isa', 'Kiara', 'Keara', 'Kiley', 'Kelly', 'Kinnat', 'Nevina', 'Taylor', 'Siobhan', 'Loreena', 'Uma', 'Laisa', 'Kayleigh'];
//Velasquezowie
var namesMaleGRTCvel = ['Abelardo', 'Adolpho', 'Agustin', 'Alejandro', 'Alfonso', 'Alfredo', 'Armando', 'Bajardo', 'Benedicto', 'Benito', 'Camilo', 'Carlitto', 'Carloss', 'Conrado', 'Diego', 'Dimas', 'Eduardo', 'Emilio', 'Enrique', 'Eusebio', 'Fabrico', 'Fabian', 'Fernando', 'Fransisco', 'Gerardo', 'Gonzalo', 'Guillermo', 'Hector', 'Hieronimo', 'Ignacio', 'Idelfonso', 'Jacobo', 'Jeronimo', 'Jorge', 'Juan', 'Leandro', 'Leon', 'Lope', 'Lucio', 'Luis', 'Manuel', 'Miguel', 'Narciso', 'Nicolao', 'Octavio', 'Pablo', 'Patriscio', 'Pepe', 'Rafael', 'Raul', 'Remigio', 'Roberto', 'Rogerio', 'Salvador', 'Saulo', 'Sergio', 'Teodoro', 'Timoteo', 'Valentino', 'Vincente', 'Victor', 'Zacarias'];
var namesFemaleGRTCvel = ['Abella', 'Adora', 'Alondra', 'Ana', 'Angela', 'Ariadna', 'Beatriz', 'Benita', 'Bibianna', 'Blanca', 'Camila', 'Carmen', 'Catherina', 'Chiquita', 'Cruz', 'Deifilia', 'Dolores', 'Dominga', 'Dorita', 'Eduarda', 'Emilia', 'Enriquieta', 'Esmeralda', 'Felicia', 'Felicidad', 'Fransesca', 'Gabriela', 'Gracia', 'Hermina', 'Ines', 'Isabell', 'Izelda', 'Jimena', 'Juana', 'Leocadia', 'Lita', 'Lolitta', 'Luz', 'Margeritta', 'Maria', 'Matilde', 'Mercedes', 'Milagros', 'Nita', 'Novia', 'Odalis', 'Paquita', 'Perla', 'Piedad', 'Pili', 'Priscila', 'Ria', 'Rita', 'Rosa', 'Rosario', 'Sancha', 'Sofia', 'Sol', 'Susanita', 'Teofila', 'Tonia', 'Valencia', 'Veronica', 'Yazmin', 'Ynez', 'Ysabel', 'Zarit'];
var surnamesGRTCvel = ['de Puerto Lunar', 'de Arena', 'de Margeritta', 'de Bursada', 'de Promesa', 'de Puerto Admiral y Velasquez', 'de Puerto Admiral', 'de Port La Sand y Velasquez', 'de Port La Sand', 'Abelardez', 'Adolphez', 'Augustinez', 'Armandez', 'Bajardez', 'Benitez', 'Camilez', 'Carlittez', 'Conradez', 'Dimanez', 'Eduardez', 'Enriquez', 'Fabianez', 'Fernandez', 'Hernandez', 'Gerardez', 'Gonzalez', 'Guillermez', 'Juanez', 'Leonez', 'Salvadorez', 'Teodorez', 'Valentinez'];
//POCHODZENIE POMNIEJSZE RODY---------------------------------------------------------------------------------------------------------\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesPRTC = ['Rodu Kozaków', 'Rodu Merków', 'Ludu Muethirów wychowanych poza Puszczą'];
//Kozacy
var namesMalePRTCkoz = ['Aleksiej', 'Alijosza', 'Dymitr', 'Hryhorij', 'Galo', 'Jewhen', 'Jegor', 'Jurij', 'Pavlo', 'Semen', 'Uta', 'Andriej', 'Anatolij', 'Bohdan', 'Bosiljko', 'Danko', 'Giedymin', 'Idoslav', 'Ivan', 'Kajmił', 'Kuprijan', 'Kiprian', 'Petro', 'Pokaj', 'Vasilij', 'Vasko', 'Gavroj', 'Hokka', 'Żenia', 'Miraj', 'Sasza', 'Michaił', 'Nikolaj'];
var namesFemalePRTCkoz = ['Akilina', 'Cilinka', 'Elena', 'Felicija', 'Gaina', 'Halszka', 'Ida', 'Jerina', 'Jilji', 'Kalina', 'Larysa', 'Najmila', 'Oksena', 'Olena', 'Radovanka', 'Semka', 'Solomija', 'Nadiezda', 'Terezija', 'Ulana', 'Urka', 'Walimka', 'Vaclavka', 'Zbavita', 'Dalija', 'Slavena', 'Tatjana', 'Tanja', 'Zizela'];
//Merkowie = imię fulliot, naziwsko Ungawi
//Muethirowie spoza puszczy = Parias

//PUSZCZA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesPUS = ['Aethirskiego Klanu Arero', 'Aethirskiego Klanu Kai', 'Aethirskiego Klanu Kaipaoe', 'Aethirskiego Klanu Wairua', 'Ludu Muethirów wychowanych w Puszczy', ];
var namesMalePUS = ['Arapeta', 'Arana', 'Amiri', 'Hare', 'Hahona', 'Hemi', 'Henare', 'Irirangi', 'Maaka', 'Marama', 'Matiu', 'Tipene', 'Rawiri', 'Ropata', 'Rua', 'Ruru', 'Rongo', 'Tane Mahuta', 'Tangaroa'];
var namesFemalePUS = ['Ahorangi', 'Airini', 'Aihe', 'Anahera', 'Ahurewa', 'Arataki', 'Areta', 'Aroha', 'Amiria', 'Arorangi', 'Atarangi', 'Haeata', 'Hahana', 'Hauku', 'Hokaka', 'Hine', 'Marika', 'Mahuika', 'Marama', 'Ngaio', 'Ngaire', 'Pania', 'Whina'];
//Muethirowie z puszczy -> Aethirowie

//BEZMIARY
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesBEZ = ['Rodu Velasquezów Kolonialnych', 'Niewolnego Ludu Archipelagów'];
var surnamesBEZvel = ['de Puerto Lunar', 'de Arena', 'de Margeritta', 'de Bursada', 'de Promesa','de Isla del Verde', 'de Isla del Hierro', 'de Isla de la Plata', 'de Puerto Admiral y Velasquez', 'de Puerto Admiral', 'Abelardez', 'Adolphez', 'Augustinez', 'Armandez', 'Bajardez', 'Benitez', 'Camilez', 'Carlittez', 'Conradez', 'Dimanez', 'Eduardez', 'Enriquez', 'Fabianez', 'Fernandez', 'Hernandez', 'Gerardez', 'Gonzalez', 'Guillermez', 'Juanez', 'Leonez', 'Salvadorez', 'Teodorez', 'Valentinez'];
var namesMaleBEZniew = ['Bądźsław', 'Bodarwit', 'Bogdał', 'Błogisław', 'Chocian', 'Choroman', 'Ciechan', 'Danko', 'Giedymin', 'Gniewomir', 'Idzimir', 'Jacz', 'Kajmił', 'Kosław', 'Lasław', 'Lechosław', 'Leścisław', 'Macimił', 'Małomir', 'Nacław', 'Ocław', 'Racibor', 'Racimir', 'Sambor', 'Samowit', 'Siemowit', 'Tomił', 'Trosław', 'Umił', 'Zawisza', 'Zbawit', 'Aegir', 'Agnar', 'Agni', 'Ansgar', 'Ari', 'Armod', 'Arnjolf', 'Arnvald', 'Arnvind', 'Asbjorn', 'Asgeir', 'Asgrim', 'Asmund', 'Asvald', 'Audun', 'Bjorn', 'Borg', 'Bork', 'Brand', 'Dallak', 'Egil', 'Einar', 'Eryk', 'Eskil', 'Gardhar', 'Gizur', 'Grim', 'Gunnar', 'Hallbjorn', 'Hallgrim', 'Harald', 'Hjorleif', 'Ingvar', 'Ivar', 'Jorund', 'Kjallak', 'Kjartan', 'Kolbein', 'Koll', 'Kormak', 'Kolgrim', 'Kelbor', 'Leif', 'Niels', 'Olaf', 'Orm', 'Osvald', 'Ranulf', 'Ragnar', 'Rolf', 'Sigurd', 'Svart', 'Sven', 'Thorbjorn', 'Thorfinn', 'Thorgal', 'Thorleik', 'Tengel', 'Tarjei', 'Tronnd', 'Ulf', 'Ulfhedin', 'Valgard', 'Vandrad', 'Yngvar', 'Adamo', 'Alessandro', 'Aloisio', 'Ambrogio', 'Andrea', 'Bartolomeo', 'Biagio', 'Daniele', 'Dario', 'Domenico', 'Fabio', 'Fabrizio', 'Filippo', 'Francesco', 'Enrico', 'Ilario', 'Ignazio', 'Giacomo', 'Giacobbe', 'Giulio', 'Giuliano', 'Giovanni', 'Giorgio', 'Giuseppe', 'Gaetano', 'Camillo', 'Carlo', 'Cristoforo', 'Luigi', 'Luca', 'Mattia', 'Massimo', 'Massimiliano', 'Martino', 'Matteo', 'Marco', 'Mario', 'Michele', 'Paolo', 'Pietro', 'Raffaele', 'Raffaello', 'Roberto', 'Romano', 'Sergio', 'Taddeo', 'Tommaso', 'Tiziano', 'Adelard', 'Ademar', 'Aelred', 'Alwar', 'Anzelm', 'Arbogast', 'Armin', 'Artald', 'Arwid', 'Aubert', 'Audomar', 'Berengar', 'Bernard', 'Burchard', 'Dagobert', 'Ditmar', 'Eberhard', 'Eckard', 'Egbert', 'Ekhard', 'Frederik', 'Fulko', 'Galfryd', 'Gerwin', 'Gwido', 'Hekard', 'Helmut', 'Heinrich', 'Herbert', 'Herman', 'Hugo', 'Lothar', 'Otto', 'Roderik', 'Roland', 'Wilhelm', 'Wolfgang', 'Siegfried', 'Aeron', 'Briok', 'Gildas', 'Callan', 'Malcolm', 'Ludan', 'Sebbus', 'Brendan', 'Gwenol', 'Kadok', 'Firtan', 'Finan', 'Cedmon', 'Collin', 'Cedric', 'Donovan', 'Edan', 'Erc', 'Eoin', 'Ferris', 'Logan', 'Liam', 'Lunn', 'Mael', 'Duncan', 'Dunn', 'Willem', 'Llud', 'Angus', 'Leroy', 'Shaun', 'Lind', 'Callum', 'Cullough', 'Ronan', 'Darian', 'Abelardo', 'Adolpho', 'Agustin', 'Alejandro', 'Alfonso', 'Alfredo', 'Armando', 'Bajardo', 'Benedicto', 'Benito', 'Camilo', 'Carlitto', 'Carloss', 'Conrado', 'Diego', 'Dimas', 'Eduardo', 'Emilio', 'Enrique', 'Eusebio', 'Fabrico', 'Fabian', 'Fernando', 'Fransisco', 'Gerardo', 'Gonzalo', 'Guillermo', 'Hector', 'Hieronimo', 'Ignacio', 'Idelfonso', 'Jacobo', 'Jeronimo', 'Jorge', 'Juan', 'Leandro', 'Leon', 'Lope', 'Lucio', 'Luis', 'Manuel', 'Miguel', 'Narciso', 'Nicolao', 'Octavio', 'Pablo', 'Patriscio', 'Pepe', 'Rafael', 'Raul', 'Remigio', 'Roberto', 'Rogerio', 'Salvador', 'Saulo', 'Sergio', 'Teodoro', 'Timoteo', 'Valentino', 'Vincente', 'Victor', 'Zacarias', 'Hao', 'Han', 'Ma', 'Guo', 'Xiang', 'Shen', 'Jin', 'Deng', 'Huang', 'Yi', 'Wu', 'Li', 'Ye', 'Zeng', 'Luo', 'Chang', 'Xuan', 'Lonhg', 'Ren', 'Xue', 'Kuno', 'Shunmyo', 'Nobu', 'Nobuyori', 'Isamu', 'Tetsu', 'Kiichi', 'Takanobu', 'Keitaro', 'Goro', 'Kazuko', 'Kiemon', 'Shigeki', 'Shinzo', 'Tanjiro', 'Yasunobu', 'Ichisake', 'Takeshi', 'Bakin', 'Hiroaki', 'Mutsohito', 'Hiroaki', 'Aali', 'Aamir', 'Abdul', 'Adel', 'Adnan', 'Akram', 'Alim', 'Atiya', 'Bahadur', 'Basim', 'Bilal', 'Dana', 'Diya', 'Ebrahim', 'Faiz', 'Gafar', 'Ghulam', 'Haamid', 'Hafiz', 'Hani', 'Hidayat', 'Irfan', 'Jabbar', 'Jalal', 'Jibril', 'Khalil', 'Mazin', 'Musa', 'Nabil', 'Navid', 'Omar', 'Rashad', 'Sabri', 'Saddam', 'Salah', 'Tahmid', 'Wahid', 'Yasin', 'Zaid'];
var namesFemaleBEZniew = ['Adelina', 'Alina', 'Bochna', 'Chronimira', 'Cimira', 'Elza', 'Jana', 'Jaromira', 'Kalina', 'Lubawa', 'Lubomira', 'Mirogniewa', 'Odyla', 'Rzepicha', 'Pężyrka', 'Sjęgniewa', 'Oszka', 'Nadmira', 'Ciecirada', 'Czębira', 'Dobromiła', 'Miłka', 'Gosława', 'Mścisława', 'Nawoja', 'Rosława', 'Aldis', 'Astrid', 'Asvor', 'Berthora', 'Borga', 'Freydhis', 'Frigga', 'Gerda', 'Grima', 'Groa', 'Gudgruna', 'Halldis', 'Hallberga', 'Hallgerda', 'Hallveiga', 'Hekia', 'Helg', 'Herdis', 'Hervor', 'Hilda', 'Hildigunn', 'Hrafnhilda', 'Hrefna', 'Hrodna', 'Inbjorga', 'Ingibiorga', 'Ingunn', 'Jofridd', 'Joreid', 'Jorunn', 'Kadlin', 'Nidbjor', 'Olof', 'Ormiga', 'Osk', 'Rafarta', 'Ragnheida', 'Rangveig', 'Reginleifa', 'Sigrida', 'Svanlaug', 'Tharlauga', 'Thora', 'Thorbjorga', 'Thordis', 'Thoreja', 'Thorgerda', 'Thorguna', 'Thorhalla', 'Thorhilda', 'Thorlauga', 'Thorkatla', 'Thoroda', 'Thorunn', 'Thorvor', 'Thurid', 'Thyria', 'Ud', 'Unn', 'Valborga', 'Valgerd', 'Yngvild', 'Agata', 'Agnese', 'Alice', 'Anastasia', 'Angela', 'Anna', 'Cecilia', 'Domenica', 'Dorotea', 'Elisabetta', 'Eva', 'Evelina', 'Felicia', 'Francesca', 'Enrica', 'Irene', 'Isabella', 'Edvige', 'Gianna', 'Giovanna', 'Giuseppina', 'Giuditta', 'Giulia', 'Giustina', 'Caterina', 'Chiara', 'Cristina', 'Lucia', 'Maddalena', 'Margherita', 'Maria', 'Marta', 'Monica', 'Patrizia', 'Silvia', 'Orsola', 'Valentina', 'Susanna', 'Adalberta', 'Adela', 'Adelajda', 'Adelinda', 'Alwina', 'Arleta', 'Astryda', 'Benilda', 'Bernadeta', 'Berta', 'Blanka', 'Dagna', 'Erwina', 'Gerda', 'Gertruda', 'Helga', 'Hermenegilda', 'Hermina', 'Hilda', 'Hildegarda', 'Inga', 'Ingeborga', 'Irmina', 'Lorelei', 'Luiza', 'Olga', 'Otylia', 'Radegunda', 'Romualda', 'Roselina', 'Segolena', 'Ainnir', 'Ana', 'Aoife', 'Bébhinn', 'Bláthín', 'Blinne', 'Bríghid', 'Dáirine', 'Deirdre', 'Easnadh', 'Éile', 'Éirne', 'Éibhleann', 'Echna', 'Eithne', 'Féthnaid', 'Fionnait', 'Geiléis', 'Grian', 'Íde', 'Íonait', 'Laoise', 'Meadhbh', 'Meallá', 'Moinnine', 'Naomh', 'Neamhain', 'Neasa', 'Nuala', 'Órlaith', 'Ríona', 'Róisín', 'Sláine', 'Sorcha', 'Arlena', 'Annais', 'Eileen', 'Ethlinn', 'Gladys', 'Gwyneth', 'Jenna', 'Leslie', 'Maureen', 'Rhonda', 'Shannon', 'Tara', 'Tracy', 'Sabrina', 'Brenda', 'Aoife', 'Ena', 'Elatha', 'Fanny', 'Ida', 'Isa', 'Kiara', 'Keara', 'Kiley', 'Kelly', 'Kinnat', 'Nevina', 'Taylor', 'Siobhan', 'Loreena', 'Uma', 'Laisa', 'Kayleigh', 'Abella', 'Adora', 'Alondra', 'Ana', 'Angela', 'Ariadna', 'Beatriz', 'Benita', 'Bibianna', 'Blanca', 'Camila', 'Carmen', 'Catherina', 'Chiquita', 'Cruz', 'Deifilia', 'Dolores', 'Dominga', 'Dorita', 'Eduarda', 'Emilia', 'Enriquieta', 'Esmeralda', 'Felicia', 'Felicidad', 'Fransesca', 'Gabriela', 'Gracia', 'Hermina', 'Ines', 'Isabell', 'Izelda', 'Jimena', 'Juana', 'Leocadia', 'Lita', 'Lolitta', 'Luz', 'Margeritta', 'Maria', 'Matilde', 'Mercedes', 'Milagros', 'Nita', 'Novia', 'Odalis', 'Paquita', 'Perla', 'Piedad', 'Pili', 'Priscila', 'Ria', 'Rita', 'Rosa', 'Rosario', 'Sancha', 'Sofia', 'Sol', 'Susanita', 'Teofila', 'Tonia', 'Valencia', 'Veronica', 'Yazmin', 'Ynez', 'Ysabel', 'Zarit', 'Zhong', 'Long', 'Pan', 'Qiu', 'Ding', 'Zi', 'Qiao', 'Xuan', 'Wei', 'Lang', 'Shi', 'Wang', 'Ding', 'Yuan', 'Huo', 'Xu', 'Zu', 'Geng', 'Liu', 'Han', 'Yumi', 'Aya', 'Chinoko', 'Erisa', 'Kaminari', 'Sakuro', 'Murasaki', 'Gen', 'Sakurako', 'Aeko', 'Moe', 'Kumiyo', 'Dai', 'Aiko', 'Koharu', 'Ibu', 'Mizuki', 'Riho', 'Fumiko', 'Aemi', 'Waki', 'Mina', 'Kichi', 'Yutsuko', 'Ran', 'Aamina', 'Adila', 'Aisha', 'Akilah', 'Amaal', 'Anisa', 'Asma', 'Batul', 'Dalal', 'Dua', 'Fahima', 'Fatima', 'Gamila', 'Hadia', 'Hagir', 'Inas', 'Jalila', 'Jumama', 'Karima', 'Khalida', 'Laila', 'Malika', 'Mona', 'Nadia', 'Nasim', 'Qamar', 'Raja', 'Rashida', 'Samina', 'Sara', 'Shadya', 'Shahd', 'Tasmin', 'Thamina', 'Yasmin', 'Zaahira', 'Zaida', 'Zinat'];

//HIKUNI----------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////
var racesHIK = ['Klanu Smoka', 'Klanu Ognia'];
//Klan smoka
var namesMaleHIKsmo = ['Hao', 'Han', 'Ma', 'Guo', 'Xiang', 'Shen', 'Jin', 'Deng', 'Huang', 'Yi', 'Wu', 'Li', 'Ye', 'Zeng', 'Luo', 'Chang', 'Xuan', 'Lonhg', 'Ren', 'Xue'];
var namesFemaleHIKsmo = ['Zhong', 'Long', 'Pan', 'Qiu', 'Ding', 'Zi', 'Qiao', 'Xuan', 'Wei', 'Lang', 'Shi', 'Wang', 'Ding', 'Yuan', 'Huo', 'Xu', 'Zu', 'Geng', 'Liu', 'Han'];
var surnamesHIKsmo = ['Yijun', 'Su', 'Qiu', 'Chin', 'Jun', 'Hu', 'Zhenya', 'Yan', 'Yimu', 'Shi', 'Jiang', 'Zhelan', 'An', 'Xuegang', 'Zexi', 'Yun', 'Shuren', 'Chan', 'Wei', 'Hong', 'Delan', 'Gengxin', 'Wu', 'Ju', 'Xuefeng', 'Zhou', 'Feng', 'Yi', 'Xiulan', 'Lei', 'Yahui', 'ZhenKang'];
var surnamesHIKog = ['Toritaka', 'Toyoharu', 'Kenko', 'Yakumo', 'Kanda', 'Ishimoto', 'Muranaka', 'Uehashi', 'Okada', 'Yahuchi', 'Ishii', 'Azuma', 'Mayeda', 'Suda', 'Makino', 'Miyasaki', 'Kozue', 'Kanai', 'Kusumoto', 'Kuramoto', 'Yasui', 'Machi'];
var namesMaleHIKog = ['Kuno', 'Shunmyo', 'Nobu', 'Nobuyori', 'Isamu', 'Tetsu', 'Kiichi', 'Takanobu', 'Keitaro', 'Goro', 'Kazuko', 'Kiemon', 'Shigeki', 'Shinzo', 'Tanjiro', 'Yasunobu', 'Ichisake', 'Takeshi', 'Bakin', 'Hiroaki', 'Mutsohito', 'Hiroaki'];
var namesFemaleHIKog = ['Yumi', 'Aya', 'Chinoko', 'Erisa', 'Kaminari', 'Sakuro', 'Murasaki', 'Gen', 'Sakurako', 'Aeko', 'Moe', 'Kumiyo', 'Dai', 'Aiko', 'Koharu', 'Ibu', 'Mizuki', 'Riho', 'Fumiko', 'Aemi', 'Waki', 'Mina', 'Kichi', 'Yutsuko', 'Ran'];

//UNGWAI--------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ungawi
var racesUNG = ['Ludu przyfuliockich Ungwai', 'Ludu niewolnych Ungwai']
var namesMaleUNG = ['Abidemi', 'Adegoke', 'Adongo', 'Afolabi', 'Akua', 'Anan', 'Apunda', 'Arapmoi', 'Atsu', 'Ayo', 'Babatunde', 'Bamidele', 'Bongani', 'Boitumelo', 'Buziba', 'Cetshwayo', 'Chibuzo', 'Chieng', 'Chinaza', 'Chukwuemeka', 'Dambudzo', 'Dayo', 'Delmar', 'Dubaku', 'Dumisani', 'Ekene', 'Ekwueme', 'Enu', 'Farai', 'Fumbe', 'Gatura', 'Gebhuza', 'Gero', 'Gwala', 'Gwandale', 'Helelile', 'Idowu', 'Imamu', 'Isoba', 'Jengo', 'Jumaane', 'Kamau', 'Kato', 'Kgosi', 'Kibwe', 'Kojo', 'Kwesi', 'Lungile', 'Lusala', 'Manyara', 'Masego', 'Mchumba', 'Mwenye', 'Nkemdlim', 'Nkosano', 'Nnamdi', 'Nthanda', 'Odhiambo', 'Olufemi', 'Olwenyo', 'Onyeka', 'Paki', 'Punnu', 'Ramle', 'Rutendo', 'Sango', 'Sipho', 'Tafari', 'Tatende', 'Thabo', 'Unathi', 'Uzome', 'Wekesa', 'Yaw', 'Zola', 'Zuberi'];
var namesFemaleUNG = ['Abena', 'Abidemi', 'Adaeze', 'Adanna', 'Adisa', 'Agot', 'Akachi', 'Ama', 'Amadi', 'Amara', 'Andile', 'Ayodele', 'Babatunde', 'Belakane', 'Bolanle', 'Bosede', 'Chandaki', 'Chibuzo', 'Chidi', 'Chinwendu', 'Chioma', 'Chizoba', 'Chukwuma', 'Dakari', 'Desta', 'Dikeledi', 'Dumisame', 'Ebele', 'Ekenedili', 'Ekundayo', 'Emeka', 'Enitan', 'Eshe', 'Folami', 'Fumnaya', 'Furaha', 'Gbemisola', 'Gwandoya', 'Hlengiwe', 'Ife', 'Ifunanya', 'Imani', 'Isingoma', 'Jelani', 'Kagiso', 'Kamaria', 'Kayode', 'Kefilwe', 'Kirabo', 'Kunto', 'Kwabena', 'Kwame', 'Lanre', 'Lerato', 'Lesedi', 'Lundiwe', 'Makena', 'Masamba', 'Mbali, Malisiwe', 'Mwanajuma', 'Mosi', 'Mudiwa', 'Nakato', 'Ndidi', 'Nia', 'Nkechi', 'Nkosazana', 'Nneka', 'Nomusa', 'Nuru', 'Ochiena', 'Oluchi', 'Olufunke', 'Opeyemi', 'Osumare','Ramla', 'Refilwe', 'Rufaro', 'Rumdi', 'Sanaa', 'Sekai', 'Simisola', 'Tatenda', 'Tendai', 'Tumelo', 'Unathi', 'Uzoma', 'Wekesa', 'Zuri'];
var surnamesMaleUNG = ['', 'Drugi', 'Trzeci', 'Czwarty', 'Piąty', 'Szósty', 'Siódmy', 'Ósmy', 'Dziewiąty'];
var surnamesFemaleUNG = ['', 'Druga', 'Trzecia', 'Czwarta', 'Piąta', 'Szósta', 'Siódma', 'Ósma', 'Dziewiąta'];
//GNOMY----------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesGNO = ['Ludu Gnomów'];
var namesMaleASgnom = ['Adir', 'Agam', 'Aharon', 'Akiva', 'Amichai', 'Amir', 'Anshel', 'Alter', 'Benesh', 'Chatzkel', 'Diklah', 'Dror', 'Dov', 'Efraim', 'Evron', 'Ezra', 'Faivish', 'Falk', 'Fayvel', 'Feibush', 'Gavriel', 'Hadar', 'Hayim', 'Hyam', 'Idan', 'Issur', 'Koppel', 'Lazer', 'Lieber', 'Melech', 'Motke', 'Niv', 'Oren', 'Ori', 'Selig', 'Shimmel', 'Sroel', 'Teivel', 'Yidel', 'Yussel', 'Zelig', 'Zeev', 'Ziv', 'Zusman'];
var namesFemaleASgnom = ['Adara', 'Adva', 'Agam', 'Ahava', 'Aliya', 'Aliza', 'Alomng', 'Atarah', 'Bashe', 'Basya', 'Chaya', 'Dafna', 'Dalia', 'Diklah', 'Dorit', 'Eidel', 'Faiga', 'Freyde', 'Geula', 'Gittel', 'Hendel', 'Kayla', 'Kreindel', 'Leeba', 'Livana', 'Meital', 'Menuha', 'Mirele', 'Raisel', 'Rayna', 'Rifka', 'Shaynah', 'Sapir', 'Shani', 'Shamira', 'Shoshanah', 'Talya', 'Tamar', 'Yakira', 'Zohar'];
//ALSADIJA----------------------------------------------------------------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesAS = ['Ludu Harani', 'Ludu Isfahani'];
//Harani
var namesMaleASharani = ['Aali', 'Aamir', 'Abdul', 'Adel', 'Adnan', 'Akram', 'Alim', 'Atiya', 'Bahadur', 'Basim', 'Bilal', 'Dana', 'Diya', 'Ebrahim', 'Faiz', 'Gafar', 'Ghulam', 'Haamid', 'Hafiz', 'Hani', 'Hidayat', 'Irfan', 'Jabbar', 'Jalal', 'Jibril', 'Khalil', 'Mazin', 'Musa', 'Nabil', 'Navid', 'Omar', 'Rashad', 'Sabri', 'Saddam', 'Salah', 'Tahmid', 'Wahid', 'Yasin', 'Zaid'];
var namesFemaleASharani = ['Aamina', 'Adila', 'Aisha', 'Akilah', 'Amaal', 'Anisa', 'Asma', 'Batul', 'Dalal', 'Dua', 'Fahima', 'Fatima', 'Gamila', 'Hadia', 'Hagir', 'Inas', 'Jalila', 'Jumama', 'Karima', 'Khalida', 'Laila', 'Malika', 'Mona', 'Nadia', 'Nasim', 'Qamar', 'Raja', 'Rashida', 'Samina', 'Sara', 'Shadya', 'Shahd', 'Tasmin', 'Thamina', 'Yasmin', 'Zaahira', 'Zaida', 'Zinat'];
var surnamesASharani = ['ibn Ben', 'el-Sesay', 'al-Can', 'el-Akbar', 'al-Ally', 'al-Hashem', 'al-Sami', 'al-Atallah', 'el-Ebrahim', 'el-Halaby', 'el-Farra', 'el-Salim', 'el-Harron', 'al-Hakim', 'al-Wahba', 'el-Mitri', 'al-Saladin', 'el-Hasan', 'al-Badie', 'al-Karim', 'el-Khalil'];
//Gnomy
var namesMaleASgnom = ['Adir', 'Agam', 'Aharon', 'Akiva', 'Amichai', 'Amir', 'Anshel', 'Alter', 'Benesh', 'Chatzkel', 'Diklah', 'Dror', 'Dov', 'Efraim', 'Evron', 'Ezra', 'Faivish', 'Falk', 'Fayvel', 'Feibush', 'Gavriel', 'Hadar', 'Hayim', 'Hyam', 'Idan', 'Issur', 'Koppel', 'Lazer', 'Lieber', 'Melech', 'Motke', 'Niv', 'Oren', 'Ori', 'Selig', 'Shimmel', 'Sroel', 'Teivel', 'Yidel', 'Yussel', 'Zelig', 'Zeev', 'Ziv', 'Zusman'];
var namesFemaleASgnom = ['Adara', 'Adva', 'Agam', 'Ahava', 'Aliya', 'Aliza', 'Alomng', 'Atarah', 'Bashe', 'Basya', 'Chaya', 'Dafna', 'Dalia', 'Diklah', 'Dorit', 'Eidel', 'Faiga', 'Freyde', 'Geula', 'Gittel', 'Hendel', 'Kayla', 'Kreindel', 'Leeba', 'Livana', 'Meital', 'Menuha', 'Mirele', 'Raisel', 'Rayna', 'Rifka', 'Shaynah', 'Sapir', 'Shani', 'Shamira', 'Shoshanah', 'Talya', 'Tamar', 'Yakira', 'Zohar'];
//KUDLEHOWIE---------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesKUD = ['Szczepu Kudlehów dBaarun (Zachodnich)', 'Szczepu Kudlehów dZuun (Wschodnich)', 'Szczepu Kudlehów Mankhan (Pustynnych)'];
var namesMaleKUD = ['Khan', 'Rhun', 'Drag', 'Sukh', 'Deris', 'Zuka', 'Osun', 'Tenngeri', 'Otgonbayar', 'Otgoo', 'Oyunaa', 'Chimgee', 'Enkhee', 'Narantsetseg', 'Naraa', 'Delge', 'Deeg', 'Baatar', 'Ganbold', 'Nergui', 'Enkhjargal', 'Narantsetseg', 'Purevsuren', 'Ganbaatar', 'Munkhbat', 'Munkh-Erdene', 'Nergui', 'Nadakh', 'Drawhdat', 'Temuthani'];
var namesFemaleKUD = ['Namseai', 'Nara', 'Nyema', 'Khishka', 'Tuul', 'Natsaka', 'Gansuk', 'Terbish', 'Slavia', 'Kahel', 'Kath', 'Irimis', 'Roa', 'Ratahan', 'Ghira', 'Gjonani', 'Nemenes', 'Demeris', 'Deaneri', 'Dakoth', 'Sylva', 'Xandh', 'Osanin', 'Kirani', 'Etriakh', 'Ethla', 'Slavhis', 'Deanri', 'Beathlin', 'Larah'];
//PARIASI-----------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var racesPAR = ['Ludu Pariasów'];
var namesMalePAR = ['Bądźsław', 'Bodarwit', 'Bogdał', 'Błogisław', 'Chocian', 'Choroman', 'Ciechan', 'Danko', 'Giedymin', 'Gniewomir', 'Idzimir', 'Jacz', 'Kajmił', 'Kosław', 'Lasław', 'Lechosław', 'Leścisław', 'Macimił', 'Małomir', 'Nacław', 'Ocław', 'Racibor', 'Racimir', 'Sambor', 'Samowit', 'Siemowit', 'Tomił', 'Trosław', 'Umił', 'Zawisza', 'Zbawit', 'Aegir', 'Agnar', 'Agni', 'Ansgar', 'Ari', 'Armod', 'Arnjolf', 'Arnvald', 'Arnvind', 'Asbjorn', 'Asgeir', 'Asgrim', 'Asmund', 'Asvald', 'Audun', 'Bjorn', 'Borg', 'Bork', 'Brand', 'Dallak', 'Egil', 'Einar', 'Eryk', 'Eskil', 'Gardhar', 'Gizur', 'Grim', 'Gunnar', 'Hallbjorn', 'Hallgrim', 'Harald', 'Hjorleif', 'Ingvar', 'Ivar', 'Jorund', 'Kjallak', 'Kjartan', 'Kolbein', 'Koll', 'Kormak', 'Kolgrim', 'Kelbor', 'Leif', 'Niels', 'Olaf', 'Orm', 'Osvald', 'Ranulf', 'Ragnar', 'Rolf', 'Sigurd', 'Svart', 'Sven', 'Thorbjorn', 'Thorfinn', 'Thorgal', 'Thorleik', 'Tengel', 'Tarjei', 'Tronnd', 'Ulf', 'Ulfhedin', 'Valgard', 'Vandrad', 'Yngvar', 'Adamo', 'Alessandro', 'Aloisio', 'Ambrogio', 'Andrea', 'Bartolomeo', 'Biagio', 'Daniele', 'Dario', 'Domenico', 'Fabio', 'Fabrizio', 'Filippo', 'Francesco', 'Enrico', 'Ilario', 'Ignazio', 'Giacomo', 'Giacobbe', 'Giulio', 'Giuliano', 'Giovanni', 'Giorgio', 'Giuseppe', 'Gaetano', 'Camillo', 'Carlo', 'Cristoforo', 'Luigi', 'Luca', 'Mattia', 'Massimo', 'Massimiliano', 'Martino', 'Matteo', 'Marco', 'Mario', 'Michele', 'Paolo', 'Pietro', 'Raffaele', 'Raffaello', 'Roberto', 'Romano', 'Sergio', 'Taddeo', 'Tommaso', 'Tiziano', 'Adelard', 'Ademar', 'Aelred', 'Alwar', 'Anzelm', 'Arbogast', 'Armin', 'Artald', 'Arwid', 'Aubert', 'Audomar', 'Berengar', 'Bernard', 'Burchard', 'Dagobert', 'Ditmar', 'Eberhard', 'Eckard', 'Egbert', 'Ekhard', 'Frederik', 'Fulko', 'Galfryd', 'Gerwin', 'Gwido', 'Hekard', 'Helmut', 'Heinrich', 'Herbert', 'Herman', 'Hugo', 'Lothar', 'Otto', 'Roderik', 'Roland', 'Wilhelm', 'Wolfgang', 'Siegfried', 'Aeron', 'Briok', 'Gildas', 'Callan', 'Malcolm', 'Ludan', 'Sebbus', 'Brendan', 'Gwenol', 'Kadok', 'Firtan', 'Finan', 'Cedmon', 'Collin', 'Cedric', 'Donovan', 'Edan', 'Erc', 'Eoin', 'Ferris', 'Logan', 'Liam', 'Lunn', 'Mael', 'Duncan', 'Dunn', 'Willem', 'Llud', 'Angus', 'Leroy', 'Shaun', 'Lind', 'Callum', 'Cullough', 'Ronan', 'Darian', 'Abelardo', 'Adolpho', 'Agustin', 'Alejandro', 'Alfonso', 'Alfredo', 'Armando', 'Bajardo', 'Benedicto', 'Benito', 'Camilo', 'Carlitto', 'Carloss', 'Conrado', 'Diego', 'Dimas', 'Eduardo', 'Emilio', 'Enrique', 'Eusebio', 'Fabrico', 'Fabian', 'Fernando', 'Fransisco', 'Gerardo', 'Gonzalo', 'Guillermo', 'Hector', 'Hieronimo', 'Ignacio', 'Idelfonso', 'Jacobo', 'Jeronimo', 'Jorge', 'Juan', 'Leandro', 'Leon', 'Lope', 'Lucio', 'Luis', 'Manuel', 'Miguel', 'Narciso', 'Nicolao', 'Octavio', 'Pablo', 'Patriscio', 'Pepe', 'Rafael', 'Raul', 'Remigio', 'Roberto', 'Rogerio', 'Salvador', 'Saulo', 'Sergio', 'Teodoro', 'Timoteo', 'Valentino', 'Vincente', 'Victor', 'Zacarias'];
var namesFemalePAR = ['Adelina', 'Alina', 'Bochna', 'Chronimira', 'Cimira', 'Elza', 'Jana', 'Jaromira', 'Kalina', 'Lubawa', 'Lubomira', 'Mirogniewa', 'Odyla', 'Rzepicha', 'Pężyrka', 'Sjęgniewa', 'Oszka', 'Nadmira', 'Ciecirada', 'Czębira', 'Dobromiła', 'Miłka', 'Gosława', 'Mścisława', 'Nawoja', 'Rosława', 'Aldis', 'Astrid', 'Asvor', 'Berthora', 'Borga', 'Freydhis', 'Frigga', 'Gerda', 'Grima', 'Groa', 'Gudgruna', 'Halldis', 'Hallberga', 'Hallgerda', 'Hallveiga', 'Hekia', 'Helg', 'Herdis', 'Hervor', 'Hilda', 'Hildigunn', 'Hrafnhilda', 'Hrefna', 'Hrodna', 'Inbjorga', 'Ingibiorga', 'Ingunn', 'Jofridd', 'Joreid', 'Jorunn', 'Kadlin', 'Nidbjor', 'Olof', 'Ormiga', 'Osk', 'Rafarta', 'Ragnheida', 'Rangveig', 'Reginleifa', 'Sigrida', 'Svanlaug', 'Tharlauga', 'Thora', 'Thorbjorga', 'Thordis', 'Thoreja', 'Thorgerda', 'Thorguna', 'Thorhalla', 'Thorhilda', 'Thorlauga', 'Thorkatla', 'Thoroda', 'Thorunn', 'Thorvor', 'Thurid', 'Thyria', 'Ud', 'Unn', 'Valborga', 'Valgerd', 'Yngvild', 'Agata', 'Agnese', 'Alice', 'Anastasia', 'Angela', 'Anna', 'Cecilia', 'Domenica', 'Dorotea', 'Elisabetta', 'Eva', 'Evelina', 'Felicia', 'Francesca', 'Enrica', 'Irene', 'Isabella', 'Edvige', 'Gianna', 'Giovanna', 'Giuseppina', 'Giuditta', 'Giulia', 'Giustina', 'Caterina', 'Chiara', 'Cristina', 'Lucia', 'Maddalena', 'Margherita', 'Maria', 'Marta', 'Monica', 'Patrizia', 'Silvia', 'Orsola', 'Valentina', 'Susanna', 'Adalberta', 'Adela', 'Adelajda', 'Adelinda', 'Alwina', 'Arleta', 'Astryda', 'Benilda', 'Bernadeta', 'Berta', 'Blanka', 'Dagna', 'Erwina', 'Gerda', 'Gertruda', 'Helga', 'Hermenegilda', 'Hermina', 'Hilda', 'Hildegarda', 'Inga', 'Ingeborga', 'Irmina', 'Lorelei', 'Luiza', 'Olga', 'Otylia', 'Radegunda', 'Romualda', 'Roselina', 'Segolena', 'Ainnir', 'Ana', 'Aoife', 'Bébhinn', 'Bláthín', 'Blinne', 'Bríghid', 'Dáirine', 'Deirdre', 'Easnadh', 'Éile', 'Éirne', 'Éibhleann', 'Echna', 'Eithne', 'Féthnaid', 'Fionnait', 'Geiléis', 'Grian', 'Íde', 'Íonait', 'Laoise', 'Meadhbh', 'Meallá', 'Moinnine', 'Naomh', 'Neamhain', 'Neasa', 'Nuala', 'Órlaith', 'Ríona', 'Róisín', 'Sláine', 'Sorcha', 'Arlena', 'Annais', 'Eileen', 'Ethlinn', 'Gladys', 'Gwyneth', 'Jenna', 'Leslie', 'Maureen', 'Rhonda', 'Shannon', 'Tara', 'Tracy', 'Sabrina', 'Brenda', 'Aoife', 'Ena', 'Elatha', 'Fanny', 'Ida', 'Isa', 'Kiara', 'Keara', 'Kiley', 'Kelly', 'Kinnat', 'Nevina', 'Taylor', 'Siobhan', 'Loreena', 'Uma', 'Laisa', 'Kayleigh', 'Abella', 'Adora', 'Alondra', 'Ana', 'Angela', 'Ariadna', 'Beatriz', 'Benita', 'Bibianna', 'Blanca', 'Camila', 'Carmen', 'Catherina', 'Chiquita', 'Cruz', 'Deifilia', 'Dolores', 'Dominga', 'Dorita', 'Eduarda', 'Emilia', 'Enriquieta', 'Esmeralda', 'Felicia', 'Felicidad', 'Fransesca', 'Gabriela', 'Gracia', 'Hermina', 'Ines', 'Isabell', 'Izelda', 'Jimena', 'Juana', 'Leocadia', 'Lita', 'Lolitta', 'Luz', 'Margeritta', 'Maria', 'Matilde', 'Mercedes', 'Milagros', 'Nita', 'Novia', 'Odalis', 'Paquita', 'Perla', 'Piedad', 'Pili', 'Priscila', 'Ria', 'Rita', 'Rosa', 'Rosario', 'Sancha', 'Sofia', 'Sol', 'Susanita', 'Teofila', 'Tonia', 'Valencia', 'Veronica', 'Yazmin', 'Ynez', 'Ysabel', 'Zarit'];

//DALEKI SKOLMJAR-----------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////
var racesSKO = ['Klanu Tolkhun Dreki (Węża)', 'Klanu Ystävät (Przyjaźni)', 'Klanu Grøin Alda (Foki)', 'Klanu Snær Bjǫrn (Śnieżnego Niedźwiedzia)', 'Klanu ĺss Geirr (Lodowego Kowadła)', 'Klanu Svartr Hyrr (Czarnego Ognia)'];
// -> Imiona jak Ligaturowie
//POTOMEK BOGA---------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////////
var racesPOT = ['Linii boga/bogini niewielkiego lasu, bądź zagajnika', 'Linii boga/bogini miasteczka', 'Lini boga/bogini jeziora, bądź oczka wodnego', 'Linii boga/bogini zwierzęcia', 'Linii boga/bogini góry, bądź pagórka', 'Linii boga/bogini rzeki, badź strumienia', 'Linii Atenajosa, boga przyjaźni', 'Linii Kasary, bogini Utraty', 'Linii Cynthi, bogini okrucieństwa', 'Linii Dyamara, boga snów', 'Linii Glavia, boga deszczu', 'Linii Pevnosta, boga siły', 'Linii Hodina, boga oszustw', 'Linii Dimetiego, boga kotów', 'Linii Oka, boga kotków', 'Linii Eris, bogini chaosu'];
//
//
//

//Profesje
var professionsGRTC = ['pracujesz dla Zakonu Skjaldborg', 'współpracujesz z Timorią jako jej kontakt ', 'należysz do armi swojego rodu', 'jesteś badacz(em/ką) z Uniwersytetu Liveralskiego', 'jesteś badacz(em/ką) z Uniwersytetu w Nowym Vivero', 'jesteś badacz(em/ką) z Uniwersytetu w Nowym Fennes', 'jesteś urzędni(kiem/czką) jednego z magistratów bądź ratuszy', 'jesteś Ulfrabrooirem Zakonu Skjaldborg', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsGRTCspok = ['jesteś Heillem z Kapituły', 'jesteś Fjari', 'jesteś Gefandi z Kapituły', 'jesteś magi(em/nią) Run', 'jesteś Guślarzem/Szeptuchą'];
var professionsGRTCvel = ['jesteś hydromant(ą/ką) z Kapituły', 'jesteś hydromant(ą/ką) o dzikim darze'];
var professionsGRTCligatur = ['jesteś piromant(ą/ką) z Kapituły', 'jesteś piromant(ą/ką) o dzikim darze'];
var professionsGRTCgaroo = ['jesteś aeromant(ą/ką) z Kapituły', 'jesteś aeromant(ą/ką) o dzikim darze'];
var professionsGRTCwasyl = ['jesteś geomant(ą/ką) z Kapituły', 'jesteś geomant(ą/ką) o dzikim darze'];
var professionsPRTCmerk = ['tułasz się by zarobić nieco tolenów', 'zarabiasz grając na ulicy', 'jesteś szpiegiem jednej z grup przestępczych','jesteś członki(em/nią) cyrku bądź trupy aktorskiej', 'jesteś zamaskowanym mściciel(em/ką)', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym', 'pracujesz dla Zakonu Skjaldborg', 'współpracujesz z Timorią jako jej kontakt ', 'jesteś badacz(em/ką) z Uniwersytetu Liveralskiego', 'jesteś badacz(em/ką) z Uniwersytetu w Nowym Vivero', 'jesteś badacz(em/ką) z Uniwersytetu w Nowym Fennes', 'jesteś urzędni(kiem/czką) jednego z magistratów bądź ratuszy'];
var professionsPRTCkoz = ['uczysz jazdy konnej', 'wojujesz ze Wschodnimi Kudlehami', 'jesteś kowal(em/ką) tworząc(ym/ą) kozackie szabelki', 'zarabiasz ściagjąc się w wyścigach konnych', 'hodujesz sokoły', 'hodujesz psy gończe', 'ochraniasz możnych z innych rodów', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym', 'pracujesz dla Zakonu Skjaldborg', 'współpracujesz z Timorią jako jej kontakt ', 'należysz do armi swojego rodu', 'jesteś urzędni(kiem/czką) jednego z magistratów bądź ratuszy', 'jesteś Ulfrabrooirem Zakonu Skjaldborg'];
var professionsPUS = ['jesteś treser(em/ką) zwierząt', 'przeprowadzasz obcych przez Pnie', 'zajmujesz się leczeniem pobratymców', 'jesteś wojowni(kiem/czką) swojego plemienia', 'jesteś tropi(cielem/cielką) i badasz ruchy nieprzyjaciół', 'jesteś rzemieślni(kiem/czką)', 'jesteś strażni(kiem/czką) wiedzy swojego plemienia', 'jesteś zbieracz(em/ką) leśnych darów', 'poszukiwacz(em/ką) przygód i niebezpieczeństw', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przeswymianą różnych towarów z innymi plemionami', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'zapisujesz historię twojego plemienia'];
var professionsBEZ = ['jesteś guślarzem/szeptuchą', 'należysz do buntowniczego podziemia', 'jesteś pirat(em/ką) i napadasz na velasquezkie statki', 'jesteś pirat(em/ką) i napadasz na harańskie/hikuńskie statki', 'pracujesz fizycznie', 'jesteś znachor(em/ką)', 'jesteś kowal(em/ką)', 'tułasz się po świecie', 'ledwo wiążesz koniec z końcem', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsBEZvel = ['jesteś hydromant(ą/ką)', 'jesteś hydromant(ą/ką) o dzikim darze', 'jesteś pirat(em/ką) i napadasz harańskie/hikuńskie statki', 'jesteś łow(cą/czynią) skarbów', 'polujesz na członków własnego rodu', 'po kryjomu wyswobadzasz zniewolony lud Archipelagu', 'jesteś pirat(em/ką) i napadasz na harańskie/hikuńskie statki', 'obijasz sie, doglądając niewolników', 'handlujesz zniewolonym ludem Archipelagu', 'jesteś hydromant(ą/ką)', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do ochrony portowej', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach portach', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych'];
var professionsHIKog = ['jesteś badacz(em/ką) tolcaleńskiej kultury', 'szmuglujesz towary z Tol Calen', 'należysz do grupy polującej na Tol Caleńczyków','należysz do oddziału polującego na tatuowanych mnichów','zajmujesz się budowami fabryk','jesteś członki(em/nią) Popielnych, tajnej policji', 'jesteś strażni(kiem/czką) miasta Kawloon', 'jesteś ucz(niem/ennicą) jednego z mistrzów pieczęci', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dżunglę', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsHIKsmo = ['jesteś badacz(em/ką) tolcaleńskiej kultury', 'polujesz na łowców niewolników', 'szmuglujesz towary z Tol Calen','opiekujesz się jednym ze zborów imaków', 'jesteś adept(em/ką) tatuowanych mnichów', 'jesteś członkiem partyzanckiej grupy Szponów', 'bojowni(kiem/czką) o wolność Klanu', 'jesteś ucz(niem/ennicą) jednego z mistrzów pieczęci', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dżunglę', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsAS = ['jesteś badacz(em/ką) tolcaleńskiej kultury', 'handlujesz niewolnikami', 'handlujesz kaf', 'ochraniasz karawany', 'podążasz Drogą Umysłu i gromadzisz wiedzę', 'jesteś jedn(ym/ą) z Derwiszów', 'trenujesz niewolnych wojowników i gladiatorów', 'jesteś dyplomatą', 'jesteś jeźdcem wielbłądów', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsKUD = ['jesteś łuczni(kiem/czką) konn(ym/ą)', 'uczysz jazdy konnej', 'wojujesz z innymi szczepami', 'zarabiasz ściagjąc się w wyścigach konnych', 'hodujesz sokoły', 'przeprowadzasz karawany przez stepy', 'jesteś konn(ym/ą) rozbójni(kiem/czką)', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów khana', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'ochraniasz karawany tolcaleńczyków', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez bezdroża', 'uczysz się w innym szczepie', 'jesteś pustelni(kiem/czką)', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) silniejszych od siebie', 'jesteś kugla(rzem/rką)', 'jesteś gawędzia(rzem/rką)', 'jesteś dziejopisa(rzem/rką) swojego ludu', 'prowadzisz niewielki kramik', 'jesteś morder(cą/czynią) na zlecenie khanów', 'pomagasz przetrwać słabszym od siebie'];
var professionsSKO = ['jesteś skaldem', 'jesteś pomocni(kiem/cą) Kerling', 'polujesz na foki bądź śnieżne niedźwiedzie', 'jesteś wojowni(kiem/czką)', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do wojów swego klanu', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś opowiadacz(em/ką) legend i sag', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz grupy zbójców', 'zajmujesz się handlem z innymi klanami', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się u członków innego klanu', 'jesteś pustelni(kiem/czką)', 'pomagasz przetrwać słabszym od siebie', 'żeglujesz na niewielkim drakkarze', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) Jarla', 'zabawiasz współklanowców kuglarstwem', 'jesteś skrybą klanu', 'prowadzisz niewielki handel'];
var professionsUNG = ['jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsPAR = ['jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var professionsPOT = ['jesteś Heillem z Kapituły', 'jesteś Fjari', 'jesteś Gefandi z Kapituły', 'jesteś magi(em/nią) Run', 'jesteś Guślarzem/Szeptuchą', 'polujesz na wrogów swojego rodzica', 'jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];
var proffesionsUNIWERSALNE = ['jesteś alchemi(kiem/czką)','trudnisz się najemnictwem', 'utrzymujesz się z poszukiwania przygód i awanturnictwa', 'jesteś uzdrowiciel(em/ką)', 'żyjesz z okradania innych', 'należysz do zbrojnych oddziałów w swojej okolicy', 'jesteś mentorem/mentorką młodszego pokolenia w dziedzinie walki bronią', 'jesteś nauczyciel(em/ką) którejś z nauk', 'ochraniasz biednych i zastraszonych w zamian za jedzenie', 'należysz do niewielkiej szajki przestępczej', 'zajmujesz się handlem w różnych wioskach i miastach', 'jesteś tropiciel(em/ką) i przeprowadzasz innych przez dzicz', 'uczysz się w dużym mieście', 'jesteś pustelni(kiem/czką)', 'żeglujesz na niewielkim statku', 'zarabiasz z napadania na innych', 'jesteś rzemieślni(kiem/czką)', 'jesteś podróżni(kiem/czką) i wagabundą', 'jesteś słu(gą/żką) bogatszych od siebie', 'jesteś kuglarzem', 'jesteś poet(ą/ką)', 'piszesz księgi, bądź przewodniki', 'prowadzisz niewielki kramik', 'jesteś skrytobój(cą/czynią) na usługach możnych', 'jesteś mściciel(em/ką) pomagają(cym/cą) uciskanym'];

//----------------------------------------------------------------------------------------------------------

//Przeszłość
var description = [];
var descriptionGRTC = ['Wykrwawiacze zabli ci kogoś bliskiego', 'szalony alchemik przeprowadzał na tobie eksperymenty', 'Zakon Skjaldborg skazał na śmierć twojego przyjaciela', 'władze wydały za tobą list gończy', 'rybacy znaleźli cię dryfując(ego/ą) na tratwie', 'należał(eś/aś) do młodocianego gangu', 'wyrzucono cię z uniwersytetu, bądź akademii', 'Szeptucha wygnała z ciebie cienia', 'byłeś członkiem wyprawy do Puszczy', 'brał(eś/aś) udział w powstaniu lub puczu', 'śnił(eś/aś) dziwne sny o nadchodzącej ciemności', 'mówiono, że nie nie jesteś z Tol Calen', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionPRTCmerk = ['ogrywał(eś/aś) ludzi w trzy kubki', 'podróżowałeś wraz z taborem od miasta do miasta', 'był(eś/aś) mistrz(em/ynią) gry w karty', 'Wykrwawiacze zabli ci kogoś bliskiego', 'szalony alchemik przeprowadzał na tobie eksperymenty', 'Zakon Skjaldborg skazał na śmierć twojego przyjaciela', 'władze wydały za tobą list gończy', 'znaleźli cię dryfując(ego/ą) na tratwie', 'należał(eś/aś) do młodocianego gangu', 'wyrzucono cię z uniwersytetu, bądź akademii', 'Szeptucha wygnała z ciebie cienia', 'byłeś członkiem wyprawy do Puszczy', 'brał(eś/aś) udział w powstaniu lub puczu', 'śnił(eś/aś) dziwne sny o nadchodzącej ciemności', 'mówiono, że nie nie jesteś z Tol Calen', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionPRTCkoz = ['nie dało się zdjąć cię z końskiego grzbietu', 'włóczył(eś/aś) się samopas po całej okolicy', 'podkradał(eś/aś) skaahom jaja', 'ujeżdżał(eś/aś) dzikie konie', 'Wykrwawiacze zabli ci kogoś bliskiego', 'szalony alchemik przeprowadzał na tobie eksperymenty', 'Zakon Skjaldborg skazał na śmierć twojego przyjaciela', 'władze wydały za tobą list gończy', 'znaleźli cię dryfując(ego/ą) na tratwie', 'należał(eś/aś) do młodocianego gangu', 'wyrzucono cię z uniwersytetu, bądź akademii', 'Szeptucha wygnała z ciebie cienia', 'byłeś członkiem wyprawy do Puszczy', 'brał(eś/aś) udział w powstaniu lub puczu', 'śnił(eś/aś) dziwne sny o nadchodzącej ciemności', 'mówiono, że nie nie jesteś z Tol Calen', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionPUS = ['ujeżdżał(eś/aś) Aarny', 'oswajał(eś/aś) zdziczałe Aarny', 'twoi rodzice zginęli w przeprowadzając obcych przez Korzenie', 'był(eś/aś) łączni(kiem/czką) między twoim plemieniem, a Verminami', 'twóje plamię napadły i przerzedziły zdziczałe Onkari', 'był(eś/aś) przyjaci(elem/ółką) Dhaurów', 'szykowano cię na wyprawę do Pomroków', 'Skrille wymordowały twoich współplemieńców', 'przywarł do ciebie pseudonim -zabójc(a/czyni) skrilli- mimo, że nigdy żadnego nie zabił(eś/aś)', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do innych lasów', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych lasach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' , 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z plemienia', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że zostaniesz niszczyciel(em/ką) plemienia', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionBEZ = ['przez długi popadł(eś/aś) w niewolę', 'rodzice sprzedali cię Velasquezom', 'skazano cię za zbrodnie której nie popełnił(eś/aś)', 'porwano cię z rodzinnego domu', 'był(eś/aś) niewolni(kiem/cą) w Al Sadiji', 'był(eś/aś) niewolni(kiem/cą) w Hikuni'];
var descriptionBEZvel = ['przypły(nąłeś/nęłaś) na Kolonie z rodziną', 'zaszył(eś/aś) się na wyspach po Wojnnie Klejnotów', 'musiał(eś/aś) opuścić kontynent przez machlojki twych wrogów', 'zwrócił(eś/aś) wolność niewolnikom w swoim gospodarstwie', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po wyspach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w tawernach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionHIKsmo = ['często przesiadywałeś w herbaciarniach', 'Klan Ognia wymordował twoich towarzyszy','uratował cię wytatuowany mnich', 'Klan Ognia wziął twoją rodzinę do niewoli', 'naruszył(eś/aś) spokój zboru Imaków', 'ocalił(eś/aś) jednego z imaków', 'przesłuchiwali cię Popielni', 'żyłeś wśród dzikich plemion w Dżungli', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w herbaciarniach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionHIKog = ['często strzelałeś z broni palnej', 'Klan Smoka wziął twoją rodzinę do niewoli', 'wytatuowany mnich wymordował twoich towarzyszy', 'naruszyłeś spokój zboru Imaków', 'przesłuchiwały cię Szpony', 'polowałeś na członków dzikich plemion w dżungli', 'służył(eś/aś) mistrzowi pieczęci', 'był(eś/aś) adeptką mistrzów pieczęci', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w herbaciarniach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionAS = ['sprzedano cię do jednej z Siedmiu Sióstr jako niewolni(k/ca)', 'obstawiał(eś/aś) wyścigi Al Hakarów', 'twoi krewni mieli ogromnego Al Hakara', 'zmieniłeś swoją życiową ścieżkę', 'pomagałeś prowadzić hammam (łaźnie)', 'wpadł(eś/aś) w długi z których udało ci się wyjść', 'rodzice zaaranżowali twoje małżeństwo z kimś bogatym', 'rodzice zaaranżowali twoje małżeństwo z kimś wpływowym', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionKUD = ['byłeś synem jednego z Kho', 'nie dało się zdjąć cię z końskiego grzbietu', 'włóczył(eś/aś) się samopas po całej okolicy', 'ujeżdżał(eś/aś) dzikie konie', 'marzył(eś/aś) o zbadaniu nieznanych krain', 'marzył(eś/aś) o znalezieniu najwspanialszego wierzchowca na świecie', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory pijąc', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) na stepy', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać Kho, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz Khanem', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionSKO = ['spekulowano, że zastąpisz samego Jarla', 'jesteś pierworodn(ym/ą) thana', 'wróciłeś z lodowych pustkowi', 'samotnie żeglował(eś/aś) drakkarem', 'często odwiedzał(eś/aś) inne klany', 'Kerling wywróżyła ci wielki los', 'zasłuchiwał(eś/aś) się w sagach o bohaterach', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina wcześniej uciekła z innego klanu', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po bezdrożach i szukasz niebezpieczeństw', 'życie było dla ciebie dosyć lekkie', 'ciągle spędzał(eś/aś) czas na piciu', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z klanu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpiał twój klan', 'miał(eś/aś) zostać thanem klanu, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach i sagach', 'wywróżono ci, że zostaniesz wielk(im/ką) niszczyciel(em/ką) swego klanu', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionUNG = ['uważano cię za odmieńca', 'fascynował(eś/aś) się nauką', 'uczył(eś/aś) inne nacje o swojej kulturze', 'spędził(eś/aś) dobre dzieciństwo pośród życzliwych Fuliocci', 'wytykano cię palcami na ulicy', 'pobił(eś/aś) grupę fuliockich dzieciaków', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełniłeś zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionPAR = ['zawsze szukał(eś/aś) swojego miejsca w świeci', 'marzył(eś/aś) by być kimś innym', 'nienawidził(eś/aś) spokrewnionych', 'nienawidził(eś/aś) Cesarstwa', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionPOT = ['twój boski rodzic porzucił cię bez słowa', 'boski rodzic wplątał cię w wielkie tarapaty', 'niczego nie chciano ci powiedzieć o twym pochodzeniu', 'marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
var descriptionUNIWERSALNE = ['marzył(eś/aś) o wielkości', 'marzył(eś/aś) by być kimś innym', 'marzył(eś/aś) o podróży do nieznanych krain', 'uważano cię za odmieńca', 'dostał(eś/aś) się do niewoli', 'uwielbiał(eś/aś) słuchać opowieści o innych krainach', 'zdarzyło się coś, co odebrało ci pamięć', 'został(eś/aś) sierotą, którą wychowywali krewni', 'ciężko chorował(eś/aś)', 'twoja rodzina się ciebie wyparła', 'twoja rodzina zmieniała ciągle miejsce zamieszkania', 'uważano cię za dziwa(ka/czke) i odludka', 'mentor uwziął się na ciebie i przestał nauczać' ,'ciągle widziano cię jak szlajasz się po traktach i szukasz guza', 'życie było dla ciebie beztroskie i pogodne', 'ciągle spędzał(eś/aś) wieczory w gospodach', 'przez twoje przewiny, został(eś/aś) wygnan(y/a) z domu', 'popełnił(eś/aś) zbrodnie, przez którą ucierpieli twoi bliscy', 'miał(eś/aś) zostać ważnym przedstawicielem swoich ludzi, jednak ktoś cię uprzedził', 'zdradzili cię najbliżsi', 'zdradzili cię ludzie którzy byli twoimi przyjaciółmi', 'od śmierci uratowała cię jakaś dobra osoba', 'wywróżono ci, że twą postać będą opiewać w legendach', 'wywróżono ci, że zostaniesz wielk(im/ką) antagonist(ą/ką)', 'miewał(eś/aś) dziwne i niepokojące sny'];
//---------------------------------------------------------------------------
//Quest
var quest = [];
var questGRTC = ['wyruszenie do Białego Matecznika Puszczy', 'odnalezienie zaginionego Karn', 'odkrycie tajemnicy Ruin Bielogrodu', 'poznanie całej historii Siste Ligatura', 'dołączenie do Zakonu Skjaldborg', 'zostanie wysoko postawioną osobą w Timorii', 'otrzymanie zaszczytnego miana członk(a/ini) Pretorii', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych', 'poznanie jak największej liczby bogów', 'dyskredytacja bogów'];
var questPRTC = ['wyruszenie do Białego Matecznika Puszczy', 'odnalezienie zaginionego Karn', 'odkrycie tajemnicy Ruin Bielogrodu', 'poznanie całej historii Siste Ligatura', 'dołączenie do Zakonu Skjaldborg', 'zostanie wysoko postawioną osobą w Timorii', 'otrzymanie zaszczytnego miana członk(a/ini) Pretorii', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych', 'poznanie jak największej liczby bogów', 'dyskredytacja bogów'];
var questPUS = ['zbadanie co czycha w Pomrokach', 'zostanie strażni(kiem/czką) Białego Matecznika', 'zyskanie uznania Oldata', 'poznanie świata poza Puszczą', 'zaprzyjaźnienie się z kimś obcym', 'założenie nowego leśnego klanu', 'odszukanie innego lasu takiego jak Puszcza', 'znalezienie żyjącego krewnego', 'odszukanie skrytego Karn', 'nawiązanie sojuszu z niebezpiecznymi Onkari', 'zmazanie złego czynu swoich przodków', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego plemienia', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'podróżowanie do najdalszych zakątków Puszczy', 'odkrycie nieznanej części lasu'];
var questBEZ = ['stać się ponownie woln(ym/ą)', 'wyciągnąć z niewoli swoich bliskich', 'zemścić się za wszystkie przewiny', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'zasiedlenie bezludnej wyspy', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'kupno ziemi', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej rodziny', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niewolników'];
var questBEZvel = ['kupno własnej wyspy', 'opłynięcie Bezmiarów wzdłuż i wszerz', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych', 'poznanie jak największej liczby bogów', 'dyskredytacja bogów'];
var questHIKsmo = ['zaprzestanie wojny domowej', 'zniszczenie tajnej Policji, Popielnych', 'poznanie Widzących', 'zostanie przyja(cielem/ciółką) Imaków', 'walka z łowcami niewolników', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji swojej rodziny', 'poznanie jakiś tolcaleńskich bogów'];
var questHIKog = ['namówienie możnych, do inwazji zbrojnej na Tol Calen', 'zniszczenie partyzantów z klanu Smoka', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji swojej rodziny', 'poznanie jakiegoś tolcaleńskiego boga'];
var questPAR = ['zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych', 'poznanie jak największej liczby bogów', 'dyskredytacja bogów'];
var questAS = ['namówienie możnych do inwazji zbrojnej na Tol Calen', 'zaistnienie w Al Haarze', 'zostanie prawą ręką Asada', 'kupno Al Hakara', 'otworzenie bazaru w którymś z miast Tol Calen', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'zbadanie Interioru', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niewolników', 'poznanie tolcaleńskich bogów'];
var questKUD = ['zjednoczyć Khanów i najechać Wschodnie Wrota po raz kolejny', 'zostanie Khu', 'zostanie Khanem', 'przeprawa przez kamienistą pustynię', 'dołączenie do któregoś z ludów Tol Calen', 'zjednoczenie rozproszonych plemion', 'nawiązanie kontaktów z Harani', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnej kompanii', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na stepie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanej krainy', 'wynalezienie nowej, innowacyjnej broni', 'poprawienie sytuacji swojej rodziny', 'poznanie jakiegoś tolcaleńskiego boga'];
var questSKO = ['założenie nowej osady klanu', 'odłączenie się od klanu i założenie własnego', 'zostanie Jarlem klanu', 'zostanie Thanem klanu', 'wyprawa na najdalej wysunięty punkt na północy', 'zapewnienie przetrwania klanu', 'osiedlenie się na półwyspie Skolmjar', 'stoczenie walki z lodowym gigantem', 'chwalebna śmierć w epickim pojedynku', 'zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zdobycie ziemi pod nowy dom', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej rodziny', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanej wyspy', 'dokonanie chwalebnego czynu', 'odnalezienie prastarej broni', 'poprawienie sytuacji klanu', 'poznanie jak największej liczby przybyszów z południa'];
var questUNG = ['walka o przetrwanie twej rasy', 'zorganizowanie wyprawy na kontynent Ungwai', 'poznanie tajemnic swojej rasy', 'skosztowanie tolcaleńskiego boga', 'odtworzenie Tablic Ungwai', 'przywrócenie dawnej świetności rasie Ungwai', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych'];
var questPOT = ['dogłębsze poznanie własnej natury', 'zyskanie uznania swojego rodzica', 'głoszenie idei swojego rodzica', 'walka z przeciwnikami boskiego rodzica', 'walka z zwolennikami swojego boskiego rodzica', 'unikanie wszystkich bogów', 'założenie nowego, silnego rodu', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych', 'poznanie jak największej liczby bogów', 'dyskredytacja bogów'];
var questUNIWERSALNE = ['zemsta za wyrządzone zbrodnie', 'pomszczenie bliskich', 'stoczenie epickiego pojedynku na śmierć i życie', 'założenie własnego miasta', 'ucieczka do innych krain', 'odpokutowanie dawnych, przewin bądź zbrodni', 'zabicie swojego długoletniego rywala', 'zdobycie sławy i poklasku', 'zbicie majątku', 'zakup ziemi pod nową posiadłość', 'założenie licznej i szczęśliwej rodziny', 'pomszczenie swoich bliskich', 'szukanie przygód i niebezpieczeństw na trakcie', 'zapisanie się w legendach i opowieściach', 'osiągnięcie potęgi i władzy', 'stworzenie podwalin nowej, silnej dynastii', 'podróżowanie do najdalszych zakątków znanych krain', 'odkrycie nieznanego lądu', 'dokonanie rewolucyjnego odkrycia naukowego', 'wynalezienie nowej, zaawansowanej broni', 'poprawienie sytuacji niespokrewnionych', 'poznanie jak największej liczby bogów', 'dyskredytacja bogów'];
