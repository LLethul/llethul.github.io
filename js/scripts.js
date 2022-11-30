function fetchFiles(name) {
    let fileNames = [];
    $.ajax({
        url: name,
        success: function(data){
           $(data).find("a:contains(.lua)").each(function(f){
                fileNames.push(f)
           });
        }
      });
    
    return fileNames
}

window.onload = () => {
    console.log(fetchFiles('scripts/'))
}