### Meydan Okuma: Cümledeki Her Kelimenin Harflerini Ters Çevirme

**Amaç:** `reverseWords` JavaScript fonksiyonunu, bir cümledeki her kelimenin harflerini orijinal kelime sırasını koruyarak ters çevirmesi ve giriş stringi boş olduğunda belirli bir mesaj döndürmesi için modifiye edin.

**Tanım:**
`reverseWords` fonksiyonunu, girişi bir string (cümle) olarak alan bir fonksiyon olarak geliştirin. Fonksiyon, cümledeki her kelimenin harflerini tersine çevirmeli ve kelimelerin orijinal sırasını korumalıdır. Eğer giriş stringi boş ise, fonksiyon "Lütfen bir cümle giriniz." mesajını döndürmelidir. Cümledeki kelimeler boşluklarla ayrılmıştır ve bu boşluklar döndürülen stringde korunmalıdır.

**Gereklilikler:**

1. Fonksiyon, tek bir giriş almalıdır: cümleyi temsil eden bir string. Eğer string boş ise, fonksiyon "Lütfen bir cümle giriniz." döndürmelidir.
2. Döndürülen string, her kelimenin harflerinin ters çevrilmiş olmalı, ancak kelimelerin orijinal sırası değişmemelidir.
3. Giriş stringi, başında veya sonunda boşluk olmayacak şekilde ve kelimeler her zaman tek bir boşlukla ayrılacak şekilde düzenlenmelidir.
4. Boş stringler "Lütfen bir cümle giriniz." mesajı döndürülerek ele alınmalıdır.
5. Kodunuzda, mantığınızı açıklayan yorumlar ekleyin.

**Örnek Kullanım:**

```javascript
console.log(reverseWords("JavaScript is awesome"));
// Beklenen çıktı: "tpircSavaJ si emosewa"

console.log(reverseWords("Hello, World!"));
// Beklenen çıktı: "olleH, !dlroW"

console.log(reverseWords(""));
// Beklenen çıktı: "Lütfen bir cümle giriniz."
```

**İpuçları:**

- İlk olarak, giriş stringinin boş olup olmadığını kontrol edin. Eğer öyleyse, hemen "Lütfen bir cümle giriniz." döndürün.
- Boş olmayan girişler için, cümleyi kelimeler dizisine ayırın.
- Her kelimenin harflerini, kelimeyi karakterler dizisine ayırarak, bu diziyi tersine çevirerek ve sonra karakterleri tekrar birleştirerek ters çevirin.
- Son olarak, ters çevrilen kelimeleri tek bir stringe birleştirin, kelimeler arasındaki boşlukları koruyarak.
