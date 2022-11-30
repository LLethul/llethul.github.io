function httpGet(theUrl, doWhenDone)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.onload = () => {
        doWhenDone(xmlHttp)
    }
    xmlHttp.send( null );
    return xmlHttp;
}

window.onload = () => {
    const githubBaseReqURL = "https://api.github.com/repos/LLethul/Scripts/git/trees/main"
httpGet(githubBaseReqURL, function(xmlHttp){
    console.log("Done")
    var code = JSON.parse(xmlHttp.responseText)
    code.tree.forEach(item => {
        if (item.path != ".gitattributes") {
            var name = item.path;
            var URL = item.url
            httpGet(URL, function(xmlHtt){
                var ting = JSON.parse(xmlHtt.responseText).tree
                let desc;

                httpGet(ting[1].url, function(xmlHt){
                    desc = atob(JSON.parse(xmlHt.responseText).content)
                    ///console.log(desc)
                    var o = document.getElementById('scripts-list')
                    var btn = document.createElement("a")
                    btn.href = `https://raw.githubusercontent.com/LLethul/Scripts/main/${name}/Main.lua`
                    btn.innerHTML = `${name} | ${desc}`
                    btn.className = "button"

                    o.appendChild(btn)

                    console.log('yes')
                })

                
            })
        }
    });
})
}