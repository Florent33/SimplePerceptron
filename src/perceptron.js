/**
 * Created by FERRAND on 04/02/2015.
 */

function getPoids(poids, t, A, O, E){
    poids += t * (A - O) * E;
    return poids;
}

function getSortieAttendue(poids){
    if(poids != 0)
        return 1;
    else
        return 0;
}

function learn(number) {
    for(var i  = 0; i < GRID_WIDTH ; i++){
        for(var j  = 0; j < GRID_HEIGHT ; j++){
            var E = 0;
            if(pixels[i][j]){
                E = 1;
            }
            grille[i][j][number] = getPoids(grille[i][j][number], 0.5, getSortieAttendue(grille[i][j][number]), 1, E);
        }
    }
}

function process() {
    for(var i = 0; i < OUTPUT_COUNT; i++)
        sorties[i] = 0;
    for(var i  = 0; i < GRID_WIDTH ; i++){
        for(var j  = 0; j < GRID_HEIGHT ; j++){
            for(var k = 0; k < OUTPUT_COUNT ; k++){
                if(pixels[i][j] == true && grille[i][j][k] != 0)
                    sorties[k]++;
            }
        }
    }

    var numbers = [];
    var z = 0;
    for(var i = 0; i < OUTPUT_COUNT; i++){
        if(sorties[i] > NEURONE_SEUIL){
            numbers[z] = i;
            z++;
        }
    }
    return numbers;
}