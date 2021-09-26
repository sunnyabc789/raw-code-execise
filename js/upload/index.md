 var ajx = new XMLHttpRequest();
        ajx.open("post", "/oms-bp/api/v1/saleOrder/import", true);
        var fd = new FormData();
        fd.append('templateId', -1);
        fd.append('goodsType',3);
        ajx.onreadystatechange = function () {
            if (ajx.readyState == 4 && ajx.status == 200) {
                console.log(ajx,'===');
            }
        }
        ajx.send(fd);