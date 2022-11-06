const piece = document.querySelector('#piece');
const type = document.querySelector('#type');
const btn = document.querySelector('button');
const displayResult = document.querySelector('#display-result')

const results = {
    keep: 'Keep this artifact',
    trash: 'Destroy this artifact',
    defaultPiece: 'Please select a piece',
}

btn.addEventListener('click', function(){
    let inputPiece = piece.value;
    let inputType = type.value;

    const result = determineWorth(inputPiece, inputType);

    renderResult(result);
});


function determineWorth(piece, type) {

    if (piece === 'default') {
        return results.defaultPiece;
    }

    if (type === 'crits') {
        return results.keep;
    }
    if (piece === 'flower' || piece === 'feather') {
        if (type > 0) return results.trash;
    } else {
        if (type > 1) return results.trash;
    }
    return results.keep;
}

function renderResult(result) {
    displayResult.textContent = result;
}


