// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509


//Suspending application
var app = WinJS.Application;
app.addEventListener("checkpoint", checkpointHandler);

function checkpointHandler(eventArgs) 
{
    var stateObject = new Object();

    // TODO: Populate the state object with app data

    // Save the state object to the session object
    app.sessionState.stateObject = stateObject;
}

//Implementation of timer
var hours = 0;
var minutes = 0;
var seconds = 0;





//Resuming application
Windows.UI.WebUI.WebUIApplication.addEventListener("resuming", resumingHandler, false);
function resumingHandler() {
    // TODO: Refresh network data
}


(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                WinJS.Application.onsettings = function (e) {
                    e.detail.applicationcommands = {
                        "privacy": { title: "Privacy policy", href: "privacy.html" },
                        "help": { title: "How to play", href: "help.html" }
                    
                    };
                    WinJS.UI.SettingsFlyout.populateSettings(e);
                   
                    //WinJS.UI.SettingsFlyout.populateSettings(e);
                    
                   
                };
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();



