// const apiKey = '6608abb9efe38933b951936d'; // API anahtarı
//         let currentCurrency = 'USD';

//         // Döviz kuru verisini çek
//         async function fetchExchangeRate() {
//             const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();

//                 if (data.result === "success") {
//                     updateUI(data.conversion_rates[currentCurrency]);
//                     fetchCryptoPrices(); // Kripto fiyatlarını da al
//                 } else {
//                     console.error("API'den geçerli bir yanıt alınamadı:", data);
//                 }
//             } catch (error) {
//                 console.error("API Hatası:", error);
//             }
//         }

//         // Kripto para fiyatlarını çek
//         async function fetchCryptoPrices() {
//             try {
//                 const cryptoUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';
//                 const cryptoResponse = await fetch(cryptoUrl);
//                 const cryptoData = await cryptoResponse.json();
                
//                 if (cryptoData.bitcoin && cryptoData.ethereum) {
//                     updateCryptoUI(cryptoData.bitcoin.usd, cryptoData.ethereum.usd);
//                 } else {
//                     console.error("Kripto para verileri alınamadı:", cryptoData);
//                 }
//             } catch (error) {
//                 console.error("Kripto Para API Hatası:", error);
//             }
//         }

//         // Arayüzü güncelle (Döviz Kuru)
//         function updateUI(rate) {
//             if (!rate) return;
//             const value = rate.toFixed(2).split(".");
//             document.getElementById("main-value").innerText = value[0];
//             document.getElementById("decimal-value").innerText = value[1];
//         }

//         // Para birimini değiştir
//         function changeCurrency(currency) {
//             currentCurrency = currency;
//             document.querySelectorAll(".currency-selector span").forEach(el => el.classList.remove("active"));
//             document.querySelector(`[onclick="changeCurrency('${currency}')"]`).classList.add("active");
//             fetchExchangeRate();
//         }

//         // İlk veriyi çek
//         fetchExchangeRate();

//         // Her 60 saniyede bir verileri güncelle
//         setInterval(fetchExchangeRate, 60000);