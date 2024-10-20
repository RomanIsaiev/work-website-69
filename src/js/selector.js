document.querySelectorAll('input[name="personal-tariff"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const selectedTariff = this.value;
    const buyLink = document.getElementById('buyLink');

    switch (selectedTariff) {
      case '3month':
        buyLink.href = 'https://secure.wayforpay.com/button/b304ad35f47b0';
        break;
      case '6month':
        buyLink.href = 'https://secure.wayforpay.com/button/bb5eeb9bb7883';
        break;
      case '12month':
        buyLink.href = 'https://secure.wayforpay.com/button/b60edd30ec4ac';
        break;
    }
  });
});

document.querySelectorAll('input[name="personal-consul"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const selectedConsul = this.value;
    const buyLinkConsul = document.getElementById('buyLinkConsul');

    switch (selectedConsul) {
      case 'consul1':
        buyLinkConsul.href =
          'https://secure.wayforpay.com/button/bbe2dc0f6e367';
        break;
      case 'consul2':
        buyLinkConsul.href =
          'https://secure.wayforpay.com/button/b31b698a348de';
        break;
      case 'consul3':
        buyLinkConsul.href =
          'https://secure.wayforpay.com/button/b8d1a2d250350';
        break;
    }
  });
});
