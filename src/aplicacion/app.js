import appHtml from '../htmlCrudo/app.html?raw';

export const app = (elementId) => {

    

    (() => {
        const App = document.createElement('div');
          App.innerHTML = appHtml; //mandando la importacion de html en crudo
          document.querySelector(elementId).append(App);
    })();

};