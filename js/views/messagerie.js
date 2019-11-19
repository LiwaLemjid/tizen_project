var user = JSON.parse(sessionStorage.getItem("user"));

const config = {
    apiKey: "AIzaSyDwC0g34NJBWXyaj8zW_McvQ75m_mz7oFo",
    authDomain: "messagerie-23212.firebaseapp.com",
    databaseURL: "https://messagerie-23212.firebaseio.com",
    projectId: "messagerie-23212",
    storageBucket: "messagerie-23212.appspot.com",
    messagingSenderId: "400412680066",
    appId: "1:400412680066:web:d326bb25d9ac2703b5f99b",
    measurementId: "G-JZEH5HC7LX"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
this.database = firebase.database();

if (!user) {
    window.location.href = "login.html";
}

async function getCurrentUserMsgs() {
    return new Promise(resolve => {
        var starCountRef = firebase.database().ref('/' + user.id);
        starCountRef.once('value').then(
            (snapshot) => {
                let discussions = snapshot.val();
                let messages = [];
                if (discussions) {
                    for (var id in discussions) {
                        var lastMsgId = Object.keys(discussions[id]).pop();
                        message = discussions[id][lastMsgId];
                        message['other'] = (message['sender'] == user.id ? message['receiver'] : message['sender']);
                        messages.push(message);
                    }
                } else {
                    console.log("not msgs");
                }
                resolve(messages);
            }
        );
    });
}

function sendMessage(receiver, message) {
    var timestamp = Date.now();
    var messageObject = {
        sender: user.id * 1,
        receiver: receiver.id * 1,
        message,
        timestamp
    }
    var newMessageRef = firebase.database().ref('/' + user.id + '/' + receiver.id).push();
    newMessageRef.set(messageObject);
    newMessageRef = firebase.database().ref('/' + receiver.id + '/' + user.id).push();
    newMessageRef.set(messageObject);
}

async function renderInbox() {
    let template = '';
    var messages = await getCurrentUserMsgs();
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        console.log(message);
        let otherProfile = await getProfile(message.other);
        if (!otherProfile) {
            otherProfile = { nom: "uknown", prenom: "", id: "" }
        }
        console.log(otherProfile);
        template +=
            `
            <a href="single-message.html?contact=${otherProfile.id}" class="list-group-item ">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-2 text-dark">${otherProfile.nom + ' ' + otherProfile.prenom}</h6>
                    <small class="text-muted">${$.timeago(message.timestamp)}</small>
                </div>
                <p class="text-secondary mb-2">${message.message}</p>
            </a>
            
            `
    };
    return template;
}


function renderDiscussionHeader(otherProfile) {
    var template = `
    <div class="row">
        <div class="col-auto pr-0 align-self-center">
            <figure class="avatar avatar-70">
                <img src="${otherProfile.image}" alt="">
            </figure>
        </div>
        <div class="col">
            <h5 class="mb-2 text-dark text-secondary">${otherProfile.prenom + ' ' + otherProfile.nom}</h5>
        </div>
    </div>
    `;
    return template;
}


function renderDiscussion(messages, otherProfile) {
    if (messages.length == 0) return '<hr>';
    var template = '';
    for (var i = 0; i < messages.length; i++) {
        let message = messages[i];
        if (message.sender == user.id) {
            template += `
            <hr>
            <div class="row">
                <div class="col messageSent">
                    <p class="text-secondary mb-2">${message.message}</p>
                    <small class="text-muted">${$.timeago(message.timestamp)}</small>
                </div>
            </div>`;
        } else {
            template += `
            <hr>
            <div class="row">
                <div class="col-auto pr-0 align-self-center">
                    <figure class="avatar avatar-30">
                        <img src="${otherProfile.image}" alt="">
                    </figure>
                </div>
                <div class="col">
                <p class="text-secondary mb-2">${message.message}</p>
                <small class="text-muted">${$.timeago(message.timestamp)}</small>
                </div>
            </div>`;
        }
    }
    template += `
            <div class="row">
                <div class="col messageSent">
                    <p class="text-secondary mb-2"></p>
                    <small class="text-muted"></small>
                </div>
            </div>
            <br>`;
    return template;
}