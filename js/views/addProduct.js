function renderYoutubeSuggestions(videos) {
    let template = `
    <div class="subtitle h6">
    <div class="d-inline-block">
        Suggested videos<br>
        <p class="small text-mute"> ${videos.length} videos</p>
    </div>
</div>
<div class="row">
    
        ${videos.map(
            (video) => {
                return `
                <div onclick="selectVideo('${video.videoId}')"  class="col-12 col-lg-6">
        <div class="card shadow-sm border-0 mb-4">
                <div class="card-body video" style=" background : url('${video.thumbnail}') ; background-size : cover ; height : 20vh ">
                        </div>
                        </div>
                        </div>` 
        ;})}

</div>`
    console.log(template) ;
    return template;
}
