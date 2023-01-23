/**
* #  Ferramenta case. 
* ## Classificação de animais.
* ### Arca de Noé.
*/

var Animal = ['Vaca','Cachorro','Galinha','Girafa','Porco','Dinossauro', 'Cavalo','Egua'] //Array de Animais
for (i=0; i < Animal.length; i++)
switch (Animal[i]) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
    case 'Dinossauro':
    case 'Galinha':
       console.log('Esse animal irá para Arca de Noé:',Animal[i]);
    break;
    case 'Outros':
    default:
        console.log('Esse animal não vai:',Animal[i]);
}

