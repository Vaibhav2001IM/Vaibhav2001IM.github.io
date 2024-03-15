'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5c944503fafcf93887e0829a5cd8268b",
"assets/AssetManifest.bin.json": "96996827e1fbf46f4e626a29b8d20475",
"assets/AssetManifest.json": "7f1626b551ce2e6b3ababa7ef079ad1e",
"assets/assets/AssetManifest.bin": "5c944503fafcf93887e0829a5cd8268b",
"assets/assets/AssetManifest.bin.json": "96996827e1fbf46f4e626a29b8d20475",
"assets/assets/AssetManifest.json": "7f1626b551ce2e6b3ababa7ef079ad1e",
"assets/assets/assets/fonts/Inter/static/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/assets/fonts/Inter/static/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-Bold.ttf": "72af20bd8438de5f0e5f8a8d75fc4bd4",
"assets/assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-BoldItalic.ttf": "a35221c53525fd1d57beb447165825da",
"assets/assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-Italic.ttf": "f264e36f9419562f1605901418716d43",
"assets/assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/assets/assets/images/add.png": "737ec290471f789e58b8e1e10cd45789",
"assets/assets/assets/images/dashboard-images/bartender.png": "999566ae64db78af72f5e389b50c41c7",
"assets/assets/assets/images/dashboard-images/discount.png": "68934266e3d31d41574974e9d4e32d1b",
"assets/assets/assets/images/dashboard-images/expenses.png": "92c285166e08f282807db05b983cbc12",
"assets/assets/assets/images/dashboard-images/heart.png": "77162ab81cfc8b2af83fe35cfa36034c",
"assets/assets/assets/images/dashboard-images/revenue.png": "2576e06594dc3f44f6cc91ac0362b82c",
"assets/assets/assets/images/dashboard-images/save-water.png": "df8ce7bb44bd2db98f1706f2723874af",
"assets/assets/assets/images/dashboard-images/wine-bottle.png": "7a9b2f62270bfbd3e703988ab098f266",
"assets/assets/assets/images/dashboard.png": "a4c100803375901efef2280a545fcd19",
"assets/assets/assets/images/edit.png": "e5746e6163957c3a900efbb64e1d1e5f",
"assets/assets/assets/images/inventory-management.png": "743c5776ff7956f6490f5c854546116d",
"assets/assets/assets/images/order.png": "28c3eae9c27d6d7c56bb8f5e59213f89",
"assets/assets/assets/images/payment-method.png": "1785fc934c477392dbb25a32cb12a50d",
"assets/assets/assets/images/replace-images/amstel_bier.png": "8018f081dc2bdbd73b85e31a40aa12f9",
"assets/assets/assets/images/replace-images/heineken.png": "4e5fd0c48edfdfeaacfe6165c9846c37",
"assets/assets/assets/images/replace-images/Kingfisher.png": "8c7e72d14b10c9f3f70bd596627766c1",
"assets/assets/assets/images/replace-images/kingfisher_ultra.png": "8c189186154ea2e72b00c3ddf640b7c2",
"assets/assets/assets/images/report.png": "704d3b3b98627c20153aa2430c30823d",
"assets/assets/assets/images/reports-images/box.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/assets/images/reports-images/product-sales.png": "811efac4aa14947c970c9f5af5cf2c4d",
"assets/assets/assets/images/reports-images/ruppe.png": "a56514418bc42ea8f6e50af3b237cb51",
"assets/assets/assets/images/staff.png": "45ab86895666e0864898fc0da7be4db7",
"assets/assets/assets/images/staffs-screen-images/user.png": "69bb0ec11e240e166a968e0635462a2c",
"assets/assets/FontManifest.json": "618fb7fa00ed8db88b485258ce8be40d",
"assets/assets/fonts/Inter/static/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter/static/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/MaterialIcons-Regular.otf": "746fb894d0530dba80e2e7de61c5cfc9",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-Bold.ttf": "72af20bd8438de5f0e5f8a8d75fc4bd4",
"assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-BoldItalic.ttf": "a35221c53525fd1d57beb447165825da",
"assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-Italic.ttf": "f264e36f9419562f1605901418716d43",
"assets/assets/fonts/PT_Serif/PT_Serif/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/assets/images/add.png": "737ec290471f789e58b8e1e10cd45789",
"assets/assets/images/dashboard-images/bartender.png": "999566ae64db78af72f5e389b50c41c7",
"assets/assets/images/dashboard-images/discount.png": "68934266e3d31d41574974e9d4e32d1b",
"assets/assets/images/dashboard-images/expenses.png": "92c285166e08f282807db05b983cbc12",
"assets/assets/images/dashboard-images/heart.png": "77162ab81cfc8b2af83fe35cfa36034c",
"assets/assets/images/dashboard-images/revenue.png": "2576e06594dc3f44f6cc91ac0362b82c",
"assets/assets/images/dashboard-images/save-water.png": "df8ce7bb44bd2db98f1706f2723874af",
"assets/assets/images/dashboard-images/wine-bottle.png": "7a9b2f62270bfbd3e703988ab098f266",
"assets/assets/images/dashboard.png": "a4c100803375901efef2280a545fcd19",
"assets/assets/images/edit.png": "e5746e6163957c3a900efbb64e1d1e5f",
"assets/assets/images/inventory-management.png": "743c5776ff7956f6490f5c854546116d",
"assets/assets/images/order.png": "28c3eae9c27d6d7c56bb8f5e59213f89",
"assets/assets/images/payment-method.png": "1785fc934c477392dbb25a32cb12a50d",
"assets/assets/images/replace-images/amstel_bier.png": "8018f081dc2bdbd73b85e31a40aa12f9",
"assets/assets/images/replace-images/heineken.png": "4e5fd0c48edfdfeaacfe6165c9846c37",
"assets/assets/images/replace-images/Kingfisher.png": "8c7e72d14b10c9f3f70bd596627766c1",
"assets/assets/images/replace-images/kingfisher_ultra.png": "8c189186154ea2e72b00c3ddf640b7c2",
"assets/assets/images/report.png": "704d3b3b98627c20153aa2430c30823d",
"assets/assets/images/reports-images/box.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/images/reports-images/product-sales.png": "811efac4aa14947c970c9f5af5cf2c4d",
"assets/assets/images/reports-images/ruppe.png": "a56514418bc42ea8f6e50af3b237cb51",
"assets/assets/images/staff.png": "45ab86895666e0864898fc0da7be4db7",
"assets/assets/images/staffs-screen-images/user.png": "69bb0ec11e240e166a968e0635462a2c",
"assets/assets/NOTICES": "365e0c9f71aa35a52fb55556ae1765f9",
"assets/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"assets/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"assets/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"assets/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"assets/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"assets/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"assets/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"assets/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"assets/FontManifest.json": "618fb7fa00ed8db88b485258ce8be40d",
"assets/fonts/MaterialIcons-Regular.otf": "746fb894d0530dba80e2e7de61c5cfc9",
"assets/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/index.html": "adfb353b31d2f3659b4bb71a97d1dd0d",
"/": "6a916c766069d8ce4360b0339079992c",
"assets/main.dart.js": "5b73c028528f747ccc114050ecf3b1ca",
"assets/manifest.json": "b0fe1d109589fdd23d1010b5b216e0c1",
"assets/NOTICES": "365e0c9f71aa35a52fb55556ae1765f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/version.json": "21ec3c4208ce023a462a8715b832b77e",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a916c766069d8ce4360b0339079992c",
"main.dart.js": "5b73c028528f747ccc114050ecf3b1ca",
"manifest.json": "b0fe1d109589fdd23d1010b5b216e0c1",
"version.json": "21ec3c4208ce023a462a8715b832b77e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
