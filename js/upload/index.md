 var ajx = new XMLHttpRequest();
        ajx.open("post", "/oms-bp/api/v1/saleOrder/import", true);
        var fd = new FormData();
         ajx.setRequestHeader('X-XSRF-TOKEN', 'b6d749ff-71ad-4a98-8c87-db2f3889e654');
 ajx.setRequestHeader('mid', 100);
        fd.append('templateId', -1);
        fd.append('goodsType',3);
           fd.append('file',file);
        ajx.onreadystatechange = function () {
            if (ajx.readyState == 4 && ajx.status == 200) {
                console.log(ajx,'===');
            }
        }
        ajx.send(fd);

function  xml_openSelectionBox() {
                var inputObj=document.createElement('input')
                inputObj.setAttribute('id','my_inputObj');
                inputObj.setAttribute('type','file');
                inputObj.setAttribute("style",'visibility:hidden');
                document.body.appendChild(inputObj);
                 inputObj.onchange = xml_parse
             
                inputObj.click();


function xml_parse  ()  {
    if (window.FileReader) {   
                    var  file = inputObj.files[0];  
var ajx = new XMLHttpRequest();
        ajx.open("post", "/oms-bp/api/v1/saleOrder/import", true);
        var fd = new FormData();
         ajx.setRequestHeader('X-XSRF-TOKEN', 'b6d749ff-71ad-4a98-8c87-db2f3889e654');
 ajx.setRequestHeader('mid', 100);
        fd.append('templateId', -1);
        fd.append('goodsType',3);
           fd.append('file',file);
        ajx.onreadystatechange = function () {
            if (ajx.readyState == 4 && ajx.status == 200) {
                console.log(ajx,'===');
            }
        }
        ajx.send(fd);
//                     var reader = new FileReader();
//                     reader.onload = function(event) {
//                         var dom = new DOMParser().parseFromString(event.target.result, "text/xml");
//                         console.log("dom: ", dom);
//                         //根据自己实际情况进行解析
//                     }
//                     reader.readAsText(file);
    }
}

            }

            xml_openSelectionBox()