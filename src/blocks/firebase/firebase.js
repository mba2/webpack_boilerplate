    
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyCXwp4swc8izbLAnIRm7C9QqfKkbgiaeiE",
        authDomain: "code-editor-5c1b3.firebaseapp.com",
        databaseURL: "https://code-editor-5c1b3.firebaseio.com",
        projectId: "code-editor-5c1b3",
        storageBucket: "code-editor-5c1b3.appspot.com",
        messagingSenderId: "76658150537"
      };
      firebase.initializeApp(config);
        
      var model__users = firebase.database().ref().child('users');
      model__users.on('value', snap => console.log(snap.val()));

      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '.',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          // firebase.auth.GithubAuthProvider.PROVIDER_ID,
          // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: ''
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('.user-area__auth', uiConfig);