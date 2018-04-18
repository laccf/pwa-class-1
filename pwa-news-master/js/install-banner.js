(function () {
    'use strict';

    var eventInstall;
    var btInstall = $("#bt-install");

    window.addEventListener('beforeinstallprompt', function (event)  {
        console.log('beforeinstallprompt >>>');
        eventInstall = event;
        event.preventDefault();
        btInstall.show();
    });

    btInstall.click(function () {
        if(eventInstall)
        {
            eventInstall.prompt();
            eventInstall.userChoice.then(function (choiceResult) {
                if(choiceResult.outcome == "dismissed")
                {
                    alert("Ok, a aplicação não será instalada.");
                } else{
                    alert("Aplicação instalada com sucesso.");
                }
            });

            eventInstall = null;
            btInstall.hide();
        }
    });

})();