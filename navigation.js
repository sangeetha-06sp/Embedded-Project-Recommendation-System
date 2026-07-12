/* ==========================================
   EMBEDCRAFT - NAVIGATION.JS
========================================== */

// Go to Next Page
function goNext(page){

    window.location.href = page;

}

// Go to Previous Page
function goBack(page){

    window.location.href = page;

}

// Update Progress Bar
function updateProgress(step){

    let progress = document.getElementById("progress");

    if(progress){

        let percent = (step / 6) * 100;

        progress.style.width = percent + "%";

        progress.innerHTML = "Step " + step + " of 6";

    }

}

// Highlight Selected Card
function selectCard(card){

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(item){

        item.classList.remove("selected");

    });

    card.classList.add("selected");

}