self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://tua-plataforma-vendoo.com") // muda para o link real do dashboard
  );
});
