function createIntegratePoin(datas) {
    var initPoinIfrm = document.createElement("iframe"),
        poinIfrmUrl = "https://gpoin.com",
        urlIfrmPoin = poinIfrmUrl + "?id=" + datas.ps_id + "&name=" + datas.client_name + "&user_id=" + datas.user_id + "&url=" + encodeURIComponent(datas.client_domain),
        targetPoinIfrmElm = document.getElementById(datas.target_id),
        clientPoinDocHeight = window.innerHeight,
        clientPoinHeaderHeight = 0,
        clientPoinIfrmHeight = clientPoinDocHeight + "px",
        clientPoinIfrmWidth = "100%",
        calcPoinIfrmHeight = clientPoinIfrmHeight;

    if (datas.header_height) {
        clientPoinHeaderHeight = datas.header_height;
        calcPoinIfrmHeight = (clientPoinDocHeight - clientPoinHeaderHeight) + "px";
    }

    if (datas.height) {
        datas.height = parseInt(datas.height.replace("px", "").replace("%", ""));
        calcPoinIfrmHeight = (datas.height - clientPoinHeaderHeight) + "px";
    }

    if (datas.width) {
        clientPoinIfrmWidth = datas.width;
    }

    initPoinIfrm.setAttribute("src", urlIfrmPoin);
    initPoinIfrm.style.width = clientPoinIfrmWidth;
    initPoinIfrm.style.height = calcPoinIfrmHeight;
    targetPoinIfrmElm.appendChild(initPoinIfrm);

    var poinIfrmCss = '#'+datas.target_id+' iframe {border:none;}',
        initPoinIfrmStyle = document.createElement('style');

    initPoinIfrmStyle.type = 'text/css';
    if (initPoinIfrmStyle.styleSheet) {
        initPoinIfrmStyle.styleSheet.cssText = poinIfrmCss;
    } else {
        initPoinIfrmStyle.appendChild(document.createTextNode(poinIfrmCss));
    }
    targetPoinIfrmElm.appendChild(initPoinIfrmStyle);
}