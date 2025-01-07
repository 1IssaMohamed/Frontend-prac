// since the imports were done in the html file, we dotn have to worry ab them ehre
// babel (type we chose in the html file for this js file) essentially allows us to use jsx which is esenitally html syntax along with all
// the other nice js stuff
// seems like he can get iit to work on scrimab jsut fine, but I cant seem to get the imports to wrok well whenI try it on my won in beign2.html,jss,css
// either way, babel adn jsx is much more optimal then using createElemetn(x,y,z) either way, not stressign
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <h1>Hello from React!</h1>
);
const list=ReactDOM.createRoot(document.getElementById("list"))
list.render(        <ul>
    <li>hi</li>
    <li>hii</li>
</ul>,document.getElementById("list"))