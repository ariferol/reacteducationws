--Kaynak reposu:
https://github.com/carpediem23/reactjs-corporate-learning-materials

--------------------------------------------------------------------------------------------------------------------------
npm i -g npm (nodejs kurulumundan sonra hata alinirsa npm paketlerinin force olarak install edilmesini sagliyor )
npx create-react-app my-react-app
cd my-react-app
npm start
http://localhost:3000/

--java compile = react transpile

--class ve functional olmak uzere iki tur component yapisi var;

--vs code extentions:
1) Simple React Snippets

-- repodan react kodunu ayaklandirma islemi:
--repodan kodu pull cekip sonra ; "npm install" komutu ile node_modules u yani dependency leri install ediyoruz
-- npm install
-- npm run build
-- npm start

-- bootstrap ve axios api implementation;
npm install bootstrap
npm i axios
--seklinde paket bagimliliklari node_modules e ekleniyor. sonra;


--devtools kurulumu;(https://react.dev/learn/react-developer-tools)
npm install -g react-devtools
--sonra browser extention u nu install ediyoruz

--manuel kurulum:
1) npm init
2) npm i react-dom –save
3) npm config set registry http://registry.npmjs.org
4) npm install webpack webpack-cli webpack-dev-server - save-dev
5) npm i –save-dev babel-core
6) npm i –save-dev babel-loader
7) npm i –save-dev babel-preset-react
8) npm i –save-dev babel-preset-es2015

--Sonra "src" folder i olusturuyoruz. Icine ; "App.jsx,App.module.css ve index.js" dosyalarini create ediyoruz.

--Sonra "public" folder i olusturup icine "index.html" dosyasi olusturup bos template html yaziyoruz.
(vs code de "!" + enter tusu otomatik html sablonu olusturuyor)

--Sonra ".babelrc.json" ve "webpack.config.js" file larini olusturuyoruz.

-- enson alttaki install komutu ile eksik paketler varsa installation u teyit ediyoruz;
9) npm install
10) npm init @eslint/config
komutu ile eslint toolkit extention unu ekliyoruz;
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JSON

--default sonuc yukaridaki ornek kullanilabilir.

--sonra eslint i kontrol amacli "npx eslint ./src/App.jsx" komutu ile calistirabiliriz.
-- ".eslintrc.json" config file i ekliyoruz.
Note: "https://eslint.org/docs/latest/use/getting-started" linkinden kurulum adimlarini inceleyebilirsiniz
