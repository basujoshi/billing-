/*
 B.D. Bajar Billing - Multi User Runtime
 Firebase v8 compatible.
 Every page gets a user-scoped database reference:
   users/{AUTH_UID}/bills
   users/{AUTH_UID}/stocks
   users/{AUTH_UID}/customers
 etc.
*/
(function () {
  "use strict";

  if (!window.firebase) {
    document.body.innerHTML = "<h2 style='font-family:Arial;padding:30px'>Firebase SDK failed to load.</h2>";
    return;
  }

  var config = window.BILLING_FIREBASE_CONFIG || {};
  try {
    if (!firebase.apps.length) firebase.initializeApp(config);
  } catch (e) {
    console.error(e);
  }

  var auth = firebase.auth();
  var database = firebase.database();

  // Keep login alive across page navigation.
  try { auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); } catch (e) {}

  function pathJoin(base, child) {
    base = String(base || "").replace(/^\/+|\/+$/g, "");
    child = String(child || "").replace(/^\/+/, "");
    return child ? (base ? base + "/" + child : child) : base;
  }

  function scopedDb(uid) {
    var base = "users/" + uid;
    return {
      ref: function (path) {
        return database.ref(pathJoin(base, path));
      },
      raw: database
    };
  }

  window.billingAuth = auth;
  window.billingDatabase = database;
  window.billingWaitForUser = new Promise(function(resolve, reject) {
    var unsubscribe = auth.onAuthStateChanged(function(user) {
      unsubscribe();
      if (user) {
        window.billingUser = user;
        window.multiUserDb = scopedDb(user.uid);
        resolve(user);
      } else {
        reject(new Error("AUTH_REQUIRED"));
      }
    });
  });

  window.billingRunAfterAuth = function (fn) {
    window.billingWaitForUser.then(function (user) {
      fn(user);
    }).catch(function () {
      var returnTo = encodeURIComponent(location.pathname.split("/").pop() || "Billing3.html");
      location.replace("index.html?returnTo=" + returnTo);
    });
  };

  window.billingLogout = function () {
    return auth.signOut().then(function () {
      location.replace("index.html");
    });
  };

  window.billingUserProfile = function () {
    var u = auth.currentUser;
    return u ? database.ref("users/" + u.uid + "/profile") : null;
  };
})();
