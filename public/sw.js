if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[n]) return;
    let t = {};
    const f = (e) => a(e, n),
      r = { module: { uri: n }, exports: t, require: f };
    s[n] = Promise.all(c.map((e) => r[e] || f(e))).then((e) => (i(...e), t));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  importScripts('fallback-z4yme3WHBSJmUR1uufyTB.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/dynamic-css-manifest.json',
          revision: 'd751713988987e9331980363e24189ce',
        },
        {
          url: '/_next/static/chunks/1276-4276ba5f12fec555.js',
          revision: '4276ba5f12fec555',
        },
        {
          url: '/_next/static/chunks/1951-491f942fac982236.js',
          revision: '491f942fac982236',
        },
        {
          url: '/_next/static/chunks/2215-4927a4454709ecdc.js',
          revision: '4927a4454709ecdc',
        },
        {
          url: '/_next/static/chunks/2718-26b7fd59c3b10b65.js',
          revision: '26b7fd59c3b10b65',
        },
        {
          url: '/_next/static/chunks/272-0a437d6be595efcb.js',
          revision: '0a437d6be595efcb',
        },
        {
          url: '/_next/static/chunks/2787-c83e77ddb61f8821.js',
          revision: 'c83e77ddb61f8821',
        },
        {
          url: '/_next/static/chunks/3677-91ed609c39ad5978.js',
          revision: '91ed609c39ad5978',
        },
        {
          url: '/_next/static/chunks/3d9afa74-67383cce7e3c6e81.js',
          revision: '67383cce7e3c6e81',
        },
        {
          url: '/_next/static/chunks/3fff60f1-1651aad077e70847.js',
          revision: '1651aad077e70847',
        },
        {
          url: '/_next/static/chunks/4114ead1-dc3a7f075067130a.js',
          revision: 'dc3a7f075067130a',
        },
        {
          url: '/_next/static/chunks/5239-b84f0f070cd39040.js',
          revision: 'b84f0f070cd39040',
        },
        {
          url: '/_next/static/chunks/5384-c2ed6b95b00bac79.js',
          revision: 'c2ed6b95b00bac79',
        },
        {
          url: '/_next/static/chunks/5d3be04d-08b70c7fbc07712e.js',
          revision: '08b70c7fbc07712e',
        },
        {
          url: '/_next/static/chunks/7154-fbea95ddf9e5d78f.js',
          revision: 'fbea95ddf9e5d78f',
        },
        {
          url: '/_next/static/chunks/8128-911c02451e6fa725.js',
          revision: '911c02451e6fa725',
        },
        {
          url: '/_next/static/chunks/8208-327097231b1638aa.js',
          revision: '327097231b1638aa',
        },
        {
          url: '/_next/static/chunks/8351-ee336009f8e3eb67.js',
          revision: 'ee336009f8e3eb67',
        },
        {
          url: '/_next/static/chunks/8358-0f5bbb04ce026fdc.js',
          revision: '0f5bbb04ce026fdc',
        },
        {
          url: '/_next/static/chunks/951-32cf1c9347d215ba.js',
          revision: '32cf1c9347d215ba',
        },
        {
          url: '/_next/static/chunks/9594-fd8b86324938c00e.js',
          revision: 'fd8b86324938c00e',
        },
        {
          url: '/_next/static/chunks/ddb80a4a-94e06a97c7f3c7ad.js',
          revision: '94e06a97c7f3c7ad',
        },
        {
          url: '/_next/static/chunks/framework-6fdede65d4460b51.js',
          revision: '6fdede65d4460b51',
        },
        {
          url: '/_next/static/chunks/main-6e48ba32137a308e.js',
          revision: '6e48ba32137a308e',
        },
        {
          url: '/_next/static/chunks/pages/404-5284024a849061f8.js',
          revision: '5284024a849061f8',
        },
        {
          url: '/_next/static/chunks/pages/500-99f6ca2f7b433695.js',
          revision: '99f6ca2f7b433695',
        },
        {
          url: '/_next/static/chunks/pages/_app-896a6c85a074a1b5.js',
          revision: '896a6c85a074a1b5',
        },
        {
          url: '/_next/static/chunks/pages/_error-b831748314e7b65b.js',
          revision: 'b831748314e7b65b',
        },
        {
          url: '/_next/static/chunks/pages/apps-e863a135c2bb8bc0.js',
          revision: 'e863a135c2bb8bc0',
        },
        {
          url: '/_next/static/chunks/pages/apps/all-86b0e4013cc9e080.js',
          revision: '86b0e4013cc9e080',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator-344e8e8ec060027d.js',
          revision: '344e8e8ec060027d',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator/forex-f518281990b05431.js',
          revision: 'f518281990b05431',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator/length-ff68ad8029719c6e.js',
          revision: 'ff68ad8029719c6e',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator/math-84dafca6e0e0687d.js',
          revision: '84dafca6e0e0687d',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator/screen-f148465d589def33.js',
          revision: 'f148465d589def33',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator/temperature-258c9d9edb1e1bc3.js',
          revision: '258c9d9edb1e1bc3',
        },
        {
          url: '/_next/static/chunks/pages/apps/calculator/weight-d89495fe409832f7.js',
          revision: 'd89495fe409832f7',
        },
        {
          url: '/_next/static/chunks/pages/apps/calendar-3a881314586c0756.js',
          revision: '3a881314586c0756',
        },
        {
          url: '/_next/static/chunks/pages/apps/camera-d3909a8577c21a05.js',
          revision: 'd3909a8577c21a05',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess-692b469cf183708b.js',
          revision: '692b469cf183708b',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/chess960-60d13a94b6034c7e.js',
          revision: '60d13a94b6034c7e',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/openings-7f6bf66980666939.js',
          revision: '7f6bf66980666939',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/players-057628b6dc5f049e.js',
          revision: '057628b6dc5f049e',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/players/2800-5e5612d67a3dedd0.js',
          revision: '5e5612d67a3dedd0',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/players/2800/%5Busername%5D-9eeacdc611513c2c.js',
          revision: '9eeacdc611513c2c',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/players/titled-6c36b07a2405957b.js',
          revision: '6c36b07a2405957b',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/tools-dcf129306c7cbbc1.js',
          revision: 'dcf129306c7cbbc1',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/tools/clock-6fc78b39fae755b0.js',
          revision: '6fc78b39fae755b0',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/tools/elo-f02cb1a034604b64.js',
          revision: 'f02cb1a034604b64',
        },
        {
          url: '/_next/static/chunks/pages/apps/chess/tools/swiss-391bda57e34da820.js',
          revision: '391bda57e34da820',
        },
        {
          url: '/_next/static/chunks/pages/apps/clock-2f2db5aa8ee772aa.js',
          revision: '2f2db5aa8ee772aa',
        },
        {
          url: '/_next/static/chunks/pages/apps/clock/pomodoro-1081feb8095eb1c0.js',
          revision: '1081feb8095eb1c0',
        },
        {
          url: '/_next/static/chunks/pages/apps/clock/world-3cac8c84c79bb240.js',
          revision: '3cac8c84c79bb240',
        },
        {
          url: '/_next/static/chunks/pages/apps/colors-654fd38b738c9f8f.js',
          revision: '654fd38b738c9f8f',
        },
        {
          url: '/_next/static/chunks/pages/apps/colors/converter-23b2e236c5319793.js',
          revision: '23b2e236c5319793',
        },
        {
          url: '/_next/static/chunks/pages/apps/colors/picker-407274a2997f7276.js',
          revision: '407274a2997f7276',
        },
        {
          url: '/_next/static/chunks/pages/apps/colors/randomiser-173fc4d7d21d3088.js',
          revision: '173fc4d7d21d3088',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries-e9f6b436b91215d5.js',
          revision: 'e9f6b436b91215d5',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/all-caed2291de57457f.js',
          revision: 'caed2291de57457f',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/usa-b6acbad819daf7bd.js',
          revision: 'b6acbad819daf7bd',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/usa/congress-15bfe336520de6ef.js',
          revision: '15bfe336520de6ef',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/usa/presidents-3457a707a9d3bdf9.js',
          revision: '3457a707a9d3bdf9',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/usa/states-3c2d3430c573b76e.js',
          revision: '3c2d3430c573b76e',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/vietnam-cb9a6b7fd118e9dc.js',
          revision: 'cb9a6b7fd118e9dc',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/vietnam/licenses-4e19df74685bbbee.js',
          revision: '4e19df74685bbbee',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/vietnam/provinces-a4fcf74b1c11947c.js',
          revision: 'a4fcf74b1c11947c',
        },
        {
          url: '/_next/static/chunks/pages/apps/countries/vietnam/vnindex-6e2bbaf912a5d315.js',
          revision: '6e2bbaf912a5d315',
        },
        {
          url: '/_next/static/chunks/pages/apps/csv-06b1c3c12ae6ad8e.js',
          revision: '06b1c3c12ae6ad8e',
        },
        {
          url: '/_next/static/chunks/pages/apps/csv/html-26bc23a2239f90ed.js',
          revision: '26bc23a2239f90ed',
        },
        {
          url: '/_next/static/chunks/pages/apps/csv/json-ace2a65ea0bec35c.js',
          revision: 'ace2a65ea0bec35c',
        },
        {
          url: '/_next/static/chunks/pages/apps/csv/md-918959363afe0a36.js',
          revision: '918959363afe0a36',
        },
        {
          url: '/_next/static/chunks/pages/apps/csv/sql-b059217eff4a4e9a.js',
          revision: 'b059217eff4a4e9a',
        },
        {
          url: '/_next/static/chunks/pages/apps/editor-31e758afc1ea7ca7.js',
          revision: '31e758afc1ea7ca7',
        },
        {
          url: '/_next/static/chunks/pages/apps/editor/manifest-1bce363c142dff2c.js',
          revision: '1bce363c142dff2c',
        },
        {
          url: '/_next/static/chunks/pages/apps/editor/markdown-98746b7c7e9f8453.js',
          revision: '98746b7c7e9f8453',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance-9f13fb7909126da4.js',
          revision: '9f13fb7909126da4',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto-4071ef111db4c2a3.js',
          revision: '4071ef111db4c2a3',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto/coins-38ad444fe30882fa.js',
          revision: '38ad444fe30882fa',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto/dao-b9f999d0cc87014c.js',
          revision: 'b9f999d0cc87014c',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto/football-b6e9c3f38f1da5d8.js',
          revision: 'b6e9c3f38f1da5d8',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto/meme-b07dde14d24aee03.js',
          revision: 'b07dde14d24aee03',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto/privacy-c168b39482cbc1ae.js',
          revision: 'c168b39482cbc1ae',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/crypto/stable-a3f49e496c484b09.js',
          revision: 'a3f49e496c484b09',
        },
        {
          url: '/_next/static/chunks/pages/apps/finance/forex-8f85751f18ae2e5f.js',
          revision: '8f85751f18ae2e5f',
        },
        {
          url: '/_next/static/chunks/pages/apps/games-acef7393a4bd78d3.js',
          revision: 'acef7393a4bd78d3',
        },
        {
          url: '/_next/static/chunks/pages/apps/games/flipism-d90f3bce1716555c.js',
          revision: 'd90f3bce1716555c',
        },
        {
          url: '/_next/static/chunks/pages/apps/games/rock-paper-scissors-6a1948501ffd8b9a.js',
          revision: '6a1948501ffd8b9a',
        },
        {
          url: '/_next/static/chunks/pages/apps/games/wheel-of-fortune-758b8ccb75573a0e.js',
          revision: '758b8ccb75573a0e',
        },
        {
          url: '/_next/static/chunks/pages/apps/generator-8191e807b501cc4d.js',
          revision: '8191e807b501cc4d',
        },
        {
          url: '/_next/static/chunks/pages/apps/generator/qrcode-1efd776828e0231f.js',
          revision: '1efd776828e0231f',
        },
        {
          url: '/_next/static/chunks/pages/apps/generator/uuid-bfa2a1cceee9cd12.js',
          revision: 'bfa2a1cceee9cd12',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages-38b91a5cc938c457.js',
          revision: '38b91a5cc938c457',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/detection-9c826a5a6bd8d1d9.js',
          revision: '9c826a5a6bd8d1d9',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words-32940a30e9bc54f1.js',
          revision: '32940a30e9bc54f1',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/arabic-14f15ce455832058.js',
          revision: '14f15ce455832058',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/chinese-47be812f7f6060fd.js',
          revision: '47be812f7f6060fd',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/dutch-264cd1a3ce9097d3.js',
          revision: '264cd1a3ce9097d3',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/english-dbba91ee85df4c4b.js',
          revision: 'dbba91ee85df4c4b',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/french-b0f1cba707daba4c.js',
          revision: 'b0f1cba707daba4c',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/german-f73fdc9d4bc30a5e.js',
          revision: 'f73fdc9d4bc30a5e',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/hebrew-f2bd92618a98e529.js',
          revision: 'f2bd92618a98e529',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/italian-c1c6cb54a5533086.js',
          revision: 'c1c6cb54a5533086',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/japanese-dd530cbb1be567aa.js',
          revision: 'dd530cbb1be567aa',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/korean-b6af8fc8da91436e.js',
          revision: 'b6af8fc8da91436e',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/spanish-b11ee47d75431b8c.js',
          revision: 'b11ee47d75431b8c',
        },
        {
          url: '/_next/static/chunks/pages/apps/languages/words/vietnamese-502f81df326f7ab4.js',
          revision: '502f81df326f7ab4',
        },
        {
          url: '/_next/static/chunks/pages/apps/media-e31478012a84cc20.js',
          revision: 'e31478012a84cc20',
        },
        {
          url: '/_next/static/chunks/pages/apps/media/photos-8fe4097d49c04c87.js',
          revision: '8fe4097d49c04c87',
        },
        {
          url: '/_next/static/chunks/pages/apps/media/videos-8d676a8d05e34669.js',
          revision: '8d676a8d05e34669',
        },
        {
          url: '/_next/static/chunks/pages/apps/news-0eed3fe7d5e9ffa0.js',
          revision: '0eed3fe7d5e9ffa0',
        },
        {
          url: '/_next/static/chunks/pages/apps/news/%5Bcountry%5D-a66138ec3adae478.js',
          revision: 'a66138ec3adae478',
        },
        {
          url: '/_next/static/chunks/pages/apps/news/%5Bcountry%5D/%5Bcategory%5D-bc785a1f493022ac.js',
          revision: 'bc785a1f493022ac',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences-6a12fc462209f2b5.js',
          revision: '6a12fc462209f2b5',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences/biology-890a7049bdb8fe65.js',
          revision: '890a7049bdb8fe65',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences/chemistry-84aebe64d200d803.js',
          revision: '84aebe64d200d803',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences/mathematics-bb411d958f8057cb.js',
          revision: 'bb411d958f8057cb',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences/physics-492ffd9fbfc4868b.js',
          revision: '492ffd9fbfc4868b',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences/psychology-625f103034dc2673.js',
          revision: '625f103034dc2673',
        },
        {
          url: '/_next/static/chunks/pages/apps/sciences/sociology-4e62d753c37fe57d.js',
          revision: '4e62d753c37fe57d',
        },
        {
          url: '/_next/static/chunks/pages/apps/settings-4ffefac3f3da7d7b.js',
          revision: '4ffefac3f3da7d7b',
        },
        {
          url: '/_next/static/chunks/pages/apps/status-e1d09d5190ddb629.js',
          revision: 'e1d09d5190ddb629',
        },
        {
          url: '/_next/static/chunks/pages/apps/telegram-d8c2cb501ca0a763.js',
          revision: 'd8c2cb501ca0a763',
        },
        {
          url: '/_next/static/chunks/pages/apps/tools-134e0d947526d1d6.js',
          revision: '134e0d947526d1d6',
        },
        {
          url: '/_next/static/chunks/pages/apps/tools/compass-2998d29f9e69f93a.js',
          revision: '2998d29f9e69f93a',
        },
        {
          url: '/_next/static/chunks/pages/apps/tools/tasks-c3afc40c4f5f017f.js',
          revision: 'c3afc40c4f5f017f',
        },
        {
          url: '/_next/static/chunks/pages/apps/transfer-67a2b569f6de8d90.js',
          revision: '67a2b569f6de8d90',
        },
        {
          url: '/_next/static/chunks/pages/apps/transfer/bluetooth-bf1d06e8c96e6178.js',
          revision: 'bf1d06e8c96e6178',
        },
        {
          url: '/_next/static/chunks/pages/apps/transfer/nfc-d57c9ea83a5448d8.js',
          revision: 'd57c9ea83a5448d8',
        },
        {
          url: '/_next/static/chunks/pages/apps/trends-25e3fce27a3afee9.js',
          revision: '25e3fce27a3afee9',
        },
        {
          url: '/_next/static/chunks/pages/apps/trends/google-ec6b3c06c5e24f31.js',
          revision: 'ec6b3c06c5e24f31',
        },
        {
          url: '/_next/static/chunks/pages/apps/trends/youtube-441b6b7364e8c5cf.js',
          revision: '441b6b7364e8c5cf',
        },
        {
          url: '/_next/static/chunks/pages/apps/weather-d5b0a99222979c1a.js',
          revision: 'd5b0a99222979c1a',
        },
        {
          url: '/_next/static/chunks/pages/index-c9fd4d01e9991a75.js',
          revision: 'c9fd4d01e9991a75',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-be3388bc0051773a.js',
          revision: 'be3388bc0051773a',
        },
        {
          url: '/_next/static/css/456d5bd9b9a9c5b5.css',
          revision: '456d5bd9b9a9c5b5',
        },
        {
          url: '/_next/static/css/c4abef9016962c55.css',
          revision: 'c4abef9016962c55',
        },
        {
          url: '/_next/static/css/facb6b1ff164e2c3.css',
          revision: 'facb6b1ff164e2c3',
        },
        {
          url: '/_next/static/media/04451feb67d77917-s.woff2',
          revision: '2154a15884309c55811dcf72180f94a2',
        },
        {
          url: '/_next/static/media/05c8469b26e39571-s.woff2',
          revision: '431266f65aadc1b88118aa6b294078c9',
        },
        {
          url: '/_next/static/media/05d30fccf6dfb4ed-s.woff2',
          revision: 'f44737ff64388df273b8277a256e2dae',
        },
        {
          url: '/_next/static/media/07ce98f0c2830616-s.p.woff2',
          revision: '7b98d3a05951bc5a91864850059bff13',
        },
        {
          url: '/_next/static/media/096abdcccd118ea6-s.woff2',
          revision: '88502ac4fb0f89de229a70b9c7f5ea01',
        },
        {
          url: '/_next/static/media/09b0c31dae5dfae7-s.woff2',
          revision: '59fce428c4b5764b6c7b483e599dafc5',
        },
        {
          url: '/_next/static/media/0cf580864ae59341-s.woff2',
          revision: '9dc5c6da3314b5ad3e00ccbf3ef10513',
        },
        {
          url: '/_next/static/media/0d580af215996300-s.woff2',
          revision: '1b4e0c906931eba085fd5d104278ae7e',
        },
        {
          url: '/_next/static/media/0e34421fe2babf9e-s.woff2',
          revision: '6c060fb23cfdc38f6f45914d131ef08c',
        },
        {
          url: '/_next/static/media/0ebba97e8299cf24-s.p.woff2',
          revision: '2330430de94c4c3931b4ef1ffabcd6fa',
        },
        {
          url: '/_next/static/media/10fe798399dd9318-s.woff2',
          revision: '07f3a46217803243376c63af2e748274',
        },
        {
          url: '/_next/static/media/12d86e8d7e1c2769-s.p.woff2',
          revision: '365576734a1d6fcf0ba8ce8ee218c9e7',
        },
        {
          url: '/_next/static/media/14254a1c498c2b09-s.woff2',
          revision: '19df4586a39088c1c039fc19a4a2cef5',
        },
        {
          url: '/_next/static/media/16abb8bb0ef64dbe-s.woff2',
          revision: 'e67bc15984a5f2e84c1a81556d53f795',
        },
        {
          url: '/_next/static/media/27ab0aa55a83ad87-s.woff2',
          revision: 'b9728a8a714ddd96ff923aeb61190fb8',
        },
        {
          url: '/_next/static/media/2a72e34cb7eaec0a-s.woff2',
          revision: '63fc84f0a145c59dc4018bbab61c8c98',
        },
        {
          url: '/_next/static/media/3177b6515efb77fe-s.woff2',
          revision: '58fb53a9a450e85641183ed87111100d',
        },
        {
          url: '/_next/static/media/320d9f5d177d6ec2-s.woff2',
          revision: 'edb08e267fa53ebe11118e14d4ab92cb',
        },
        {
          url: '/_next/static/media/3380d1d7054a93c7-s.woff2',
          revision: '5b954acb2527811314a9edee8c5f0210',
        },
        {
          url: '/_next/static/media/3794f505ceb4aef5-s.woff2',
          revision: 'e783af02de5a70124d57c22bf74a1bbe',
        },
        {
          url: '/_next/static/media/3e815986a00815c7-s.woff2',
          revision: '3da5714dcf6b63fe4343de5d23e4d59c',
        },
        {
          url: '/_next/static/media/4036a8cc6ad3520f-s.woff2',
          revision: '9b4446cc7a11fea252f9a2c566dbf07b',
        },
        {
          url: '/_next/static/media/443826f37f277086-s.woff2',
          revision: 'c2e5830527418f887b6e4c7aff964ebd',
        },
        {
          url: '/_next/static/media/4c7fdd2cb1250485-s.woff2',
          revision: '362398725678b4ed4a1824af48a0d5bc',
        },
        {
          url: '/_next/static/media/4de1fea1a954a5b6-s.p.woff2',
          revision: 'b7d6b48d8d12946dc808ff39aed6c460',
        },
        {
          url: '/_next/static/media/5536c2b71f31f4c7-s.woff2',
          revision: 'a249fc31bd37ca2fed2511e9175a4df7',
        },
        {
          url: '/_next/static/media/5a267fbac99863a6-s.woff2',
          revision: '84e2183e4322a790d29b010c88972500',
        },
        {
          url: '/_next/static/media/5c2a00aea3870db6-s.woff2',
          revision: '169b15dccdbfc2f52c238d565f40d837',
        },
        {
          url: '/_next/static/media/605489086c4b3388-s.woff2',
          revision: '316ea6776a90b83f4b6d3b0a71780aaf',
        },
        {
          url: '/_next/static/media/692f97053c97ad82-s.woff2',
          revision: 'f9ece11e61349a20b3ecde15d5b5190f',
        },
        {
          url: '/_next/static/media/69f639318a288687-s.woff2',
          revision: 'f743aa03b62d95151d2738aba962f693',
        },
        {
          url: '/_next/static/media/6e5e69ce8a001790-s.p.woff2',
          revision: '37731f79e8db2086b080671fd9f1922f',
        },
        {
          url: '/_next/static/media/6f36c9e577ba7e4a-s.woff2',
          revision: 'dc5425e788794a545d7d2b70d192a19e',
        },
        {
          url: '/_next/static/media/7cb331c8ee46479c-s.p.woff2',
          revision: 'fd2ad878fd44314b779d857ae4d6cc89',
        },
        {
          url: '/_next/static/media/80512c49369d7ad3-s.woff2',
          revision: 'e9f525ef86eeb6236b3cf0176967e6f1',
        },
        {
          url: '/_next/static/media/8904b649424fc2b6-s.woff2',
          revision: '0cfe36cbffee9ec5e9d847857ad6b2e2',
        },
        {
          url: '/_next/static/media/8bb90efd1b2442e0-s.woff2',
          revision: '87f09b862d14319724588218fc942688',
        },
        {
          url: '/_next/static/media/8ea6d73be4df1015-s.woff2',
          revision: '853efe04b7a3633d95dcb66ebdc24e9b',
        },
        {
          url: '/_next/static/media/950a521f297881a3-s.woff2',
          revision: 'daaeece4b5218319d962309a96f2461e',
        },
        {
          url: '/_next/static/media/979203ba8a3742d5-s.woff2',
          revision: 'dd94763fa0437f376a5d3642470dd446',
        },
        {
          url: '/_next/static/media/9b0806ad5f3ca1f1-s.woff2',
          revision: 'c5ba3eef5a1f6c881a2a9256acb3b550',
        },
        {
          url: '/_next/static/media/9c00aaca17e573eb-s.woff2',
          revision: '0b223a90340aa67ac78bc6a875fa67c6',
        },
        {
          url: '/_next/static/media/a77098e8cb4a92b8-s.woff2',
          revision: 'b501b8a146ac301b7b2cf21b925c21ab',
        },
        {
          url: '/_next/static/media/b03b3c7045190eda-s.p.woff2',
          revision: 'fcadc67483620b4a772ec4020e5a5198',
        },
        {
          url: '/_next/static/media/b3e13a4ac57b538e-s.woff2',
          revision: '06dcf6e4964584269071da60f523e129',
        },
        {
          url: '/_next/static/media/b56940d80fddaebf-s.woff2',
          revision: 'e01cc11348ba924c3d1403a7e3c4cc04',
        },
        {
          url: '/_next/static/media/b82c0038f5b398f5-s.woff2',
          revision: 'e68e0efd1b599711788518b7178d74b0',
        },
        {
          url: '/_next/static/media/bacd1fe82afba745-s.woff2',
          revision: '2d35e847ed29319bfcab6fe2b69b07b4',
        },
        {
          url: '/_next/static/media/c0d4d818724e2828-s.p.woff2',
          revision: '27bcfafa4ff591abcff9d4d293b6ef18',
        },
        {
          url: '/_next/static/media/c4a2ca76cbcd952a-s.p.woff2',
          revision: '1645ef0e68c3629802316a12c8dc36a9',
        },
        {
          url: '/_next/static/media/c7128a8004343716-s.woff2',
          revision: '1d1455e6f30163ebeecec95f6e78c131',
        },
        {
          url: '/_next/static/media/ca9e8d8193aed290-s.woff2',
          revision: '06c8635446455bbe6ea905f06e98910c',
        },
        {
          url: '/_next/static/media/cb6f448281d0c282-s.woff2',
          revision: 'af93dfb1312ecb3b98b31d2297739188',
        },
        {
          url: '/_next/static/media/d2c6723ae5582fc0-s.woff2',
          revision: 'e7ece9a5b17d3dd07709c270f6901c84',
        },
        {
          url: '/_next/static/media/e9e27552bbbd049b-s.woff2',
          revision: '8321b4e87e2be6c1de4aac8e9166f793',
        },
        {
          url: '/_next/static/media/eafabf029ad39a43-s.p.woff2',
          revision: '43751174b6b810eb169101a20d8c26f8',
        },
        {
          url: '/_next/static/media/f1c58dedecee123b-s.p.woff2',
          revision: 'ef83282c6263512235856432c25803d5',
        },
        {
          url: '/_next/static/media/f1df658da56627d0-s.woff2',
          revision: '372d9cf6e4822b41d014fcc9de0a979a',
        },
        {
          url: '/_next/static/media/f2b5b57939015ea4-s.woff2',
          revision: '20c1bdd49030fefd69ca0a5858d0ff0e',
        },
        {
          url: '/_next/static/media/f2fa6d7398e61d46-s.woff2',
          revision: '9100886c15016aaff47cb7fbfb203398',
        },
        {
          url: '/_next/static/media/f74a3dcc44b954df-s.woff2',
          revision: 'a259d6c7671cd554c6666198023660b4',
        },
        {
          url: '/_next/static/media/f7dd447b9493d363-s.woff2',
          revision: '33b7c159e6b9189413f02f327ea45dad',
        },
        {
          url: '/_next/static/media/f884d4ea94220255-s.p.woff2',
          revision: '764c83e6b726b9604b89b81974219735',
        },
        {
          url: '/_next/static/media/fb3d4f9492d39101-s.woff2',
          revision: 'd4831dd83581f1d91182d0b53a70a3cd',
        },
        {
          url: '/_next/static/media/fbc3fd05f7853d67-s.woff2',
          revision: '06c2717119b9a0a575350f3f7ed77bb2',
        },
        {
          url: '/_next/static/media/fe0777f1195381cb-s.woff2',
          revision: 'f2a04185547c36abfa589651236a9849',
        },
        {
          url: '/_next/static/media/profile.640cd92b.jpg',
          revision: '5e33790d5722b8d728d4269dc629a8c4',
        },
        {
          url: '/_next/static/z4yme3WHBSJmUR1uufyTB/_buildManifest.js',
          revision: 'cfc0323e8ddafd5bbf1aba1822759cf9',
        },
        {
          url: '/_next/static/z4yme3WHBSJmUR1uufyTB/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/apps', revision: 'z4yme3WHBSJmUR1uufyTB' },
        { url: '/favicon.ico', revision: 'e2cff4502779c8302cd4b493f40fd8d6' },
        {
          url: '/icons/png/128x128.png',
          revision: '7fcc6ffa7d40fb20bb7e7e210875910c',
        },
        {
          url: '/icons/png/16x16.png',
          revision: '99efc3bea7572f5b6a3b73b872cd87c6',
        },
        {
          url: '/icons/png/256x256.png',
          revision: '12836d0e11fe30da77f74fed7c0edab8',
        },
        {
          url: '/icons/png/32x32.png',
          revision: '789cae03e08f00e5d37f5cd413248340',
        },
        {
          url: '/icons/png/512x512.png',
          revision: 'fdb624ac309283b77dc8283beb137f6f',
        },
        {
          url: '/icons/png/64x64.png',
          revision: '0b5d6293590c4a51398058068a7c722b',
        },
        {
          url: '/icons/svg/fx.svg',
          revision: '70f34181df01659308b7b98f2b5d88dd',
        },
        {
          url: '/icons/svg/next.svg',
          revision: '8e061864f388b47f33a1c3780831193e',
        },
        { url: '/manifest.json', revision: '868e1e81e8337255b2ce6560fce58a28' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/robots.txt', revision: '3e042940d36d3b7142e5d790c68f4a39' },
        { url: '/sitemap.xml', revision: '87cc10741326b8db7c900261716c3549' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    );
});
