(function () {
    'use strict';

    self.addEventListener('notifictionclick', function (event) {
        event.notification.close();

        event.waitUntil(
            clients.openWindow('https://google.com')
        );
    });

    self.addEventListener('push', function(event){
        var options= 
        {
            body: 'Push Notification',
            icon: 'icons/android-chrome-192x192.png',
            badge: 'icons/android-chrome-192x192.png'
        };event.waitUntil(
            self.registration.showNotification('Ei tem novas notificações', options)
        );
        setTimeout(function(){
            event.notification.close();
        }, 2000);
    });

})();