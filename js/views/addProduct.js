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



function uplodImage(file,name){
    var firebaseConfig = {
        apiKey: "AIzaSyDwC0g34NJBWXyaj8zW_McvQ75m_mz7oFo",
        authDomain: "messagerie-23212.firebaseapp.com",
        databaseURL: "https://messagerie-23212.firebaseio.com",
        storageBucket: 'messagerie-23212.appspot.com'
      };
    
    firebase.initializeApp(firebaseConfig);
    var ref = firebase.storage().ref();
    ref.child(name).putString(file, 'data_url').then(function(snapshot) {
        console.log(snapshot);
      });
}