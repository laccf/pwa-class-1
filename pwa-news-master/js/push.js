(function () {
    'use strict';

    var swPush;
    var publicKey;

    if('serviceWorker' in navigator && 'PushManager' in window)
    {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('pwa-news-sw-push.js')
            .then(function (swRegister)
            {
                console.log('Service work push: Register');
                swPush = swRegister;

                getSubscription();
            });
        });
    }

    function getSubscription()
    {
        if(swPush)
        {
            swPush.pushManager.getSubscription()
            .then(function (subscription) {
                if(subscription)
                {
                    console.log('User is subscribed');
                }
                else
                {
                    console.log('User is Not subscribed');
                    registerUser();
                }
            });
        }
    }

    function registerUser()
    {
        swPush.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array(publicKey)
        }).then(function(subscription) {
            console.log(JSON.stringify(subscription));
        });
    }

    function urlB64ToUint8Array(base64String)
    {

    }

})(); 