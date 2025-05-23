const filterButtons =  document.querySelectorAll("#filter-buttons button");
const cards = document.querySelectorAll("#item-container .card");

filterButtons.forEach(button => {
    button.addEventListener("click", () =>{
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("Data-filter");

        cards.forEach(card=>{
            const category = card.getAttribute("data-category");
            if(filter === "all" || category === filter){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    });
});