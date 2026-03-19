function DyanamicCard (title, cName, views, monthsOld, thumbnail){
    let html=` <div class="container">
        <div class="card">
            <div class="image">
            <img src="${thumbnail}">
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName}. ${views} . ${monthsOld} </p>
            </div>
        </div>
    </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
}

DyanamicCard("Introduction to Backend|Sigma Web Dev #73", "CodeWithHarry", "7.2M views", "2 months ago", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg");
