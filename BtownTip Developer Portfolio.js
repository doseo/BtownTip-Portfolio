<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    
    <meta charset="utf-8"/>
    
<!-- META DATA -->
    <script type="text/javascript"></script>
	
<script>
            // BEAT MESSAGE
            var wixBiSession = {
                requestId: (function(r){for(var t=document.cookie.split(';'),e=0;e<t.length;e++){for(var n=t[e].split('='),o=n[0],u=n[1];' '===o[0];)o=o.substr(1);if(r===o)return u}return''})('requestId'),
                viewerSessionId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                })
                , initialTimestamp: Date.now(),
                initialRequestTimestamp: (function() {
                    if (window.performance) {
                        if (window.performance.timeOrigin) {
                            return performance.timeOrigin;
                        } else if (performance.now) {
                            return Date.now() - performance.now();
                        }
                    }
                    return Date.now()
                })()
                , visitorId: publicModel.sessionInfo.visitorId
                
                , is_rollout: 0
                , is_platform_loaded: 1
                , dc: '42'
                , renderType: 'santa'
                , wixBoltExclusionReason: 'User Code'
                , wixBoltExclusionReasonMoreInfo: ''
                , sendBeacon: /(\?|\&)suppressbi\=true(\&|$)/.test(location.search) ?
                    function () {} :
                    function(url) {
                        var sent = false;
                        try {
                            sent = navigator.sendBeacon(url);
                        } catch (e) {}
                        if (!sent) {
                            (new Image()).src = url;
                        }
                    }
                , sendBeat: function (et, name, extra) {
                    var tts = '';
                    if (window.performance) {
                        if (performance.now) {
                            tts = '&tts=' + Math.round(performance.now());
                        }
                        if (name && performance.mark) {
                            performance.mark(name + ' (beat ' + et + ')');
                        }
                    }
                    var ts = et === 1 ? 0 : Date.now() - wixBiSession.initialTimestamp;
                    extra = extra || ''
                    if (extra.indexOf('pn=') === -1) {
                        extra = '&pn=1' + extra
                    }
                    if (!wixBiSession.beatUrl) {
                        wixBiSession.beatUrl = 'https://frog.wix.com/bt?src=29&evid=3'
                            + '&v=1.6808.3'
                            + '&msid=b3ca57c7-43db-4c5f-994a-2f07fd3e6988'
                            + '&vsi=' + wixBiSession.viewerSessionId
                            + '&rid=' + wixBiSession.requestId
                            + '&viewer_name=santa'
                            + '&isp=0'
                            + '&st=2'
                            + '&is_rollout=0'
                            + '&dc=42'
                            + '&iss=1'
                                + '&vid=' + wixBiSession.visitorId
                                
                            + '&url=' + encodeURIComponent(location.href.replace(/^http(s)?:\/\/(www\.)?/, ''));
                        var referrer = document.referrer;
                        if (referrer) {
                            wixBiSession.beatUrl += '&ref=' + encodeURIComponent(referrer);
                        }
                    }
                    wixBiSession.sendBeacon(wixBiSession.beatUrl
                        + '&et=' + et
                        + (name ? '&event_name=' + encodeURIComponent(name) : '')
                        + '&ts=' + ts + tts
                        + extra
                    );
                }
            };
            wixBiSession.sendBeat(1, 'Init');
            // BEAT MESSAGE END
        </script>
    
    
    
<meta name="fragment" content="!"/>
    
    
    <!-- DATA -->
    <script type="text/javascript">
        
            var adData = {};
            var mobileAdData = {};
        
        var usersDomain = "https://users.wix.com/wix-users";
        
    </script>
    
    
    <script type="text/javascript">
      var santaBase = 'https://static.parastorage.com/services/santa/1.6808.3';
      var boltBase = 'https://static.parastorage.com/services/wix-bolt/1.1756.0';
    </script>
    

    
    
    <script>
      var requirejs = {
        onNodeCreated: function(node) {
          var src = node.getAttribute('src');
          var shouldIgnore = ['googletagmanager.com', 'google-analytics.com', 'googleadservices.com', 'doubleclick.net', 'connect.facebook.net'].some(function (domain) {
              return src.indexOf(domain) !== -1;
          });
          if (!shouldIgnore) {
              node.setAttribute('crossorigin', 'anonymous')
          }
        }
      }
    </script>

    
    <script>
      window.messageBuffer = [];
      window.messageHandler = function(event) {messageBuffer.push(event)};
      window.addEventListener('message', window.messageHandler, false);
    </script>
    

    
    
    <script async data-main="https://static.parastorage.com/services/santa/1.6808.3/app/main-r.min.js" src="https://static.parastorage.com/services/third-party/requirejs/2.1.15/require.min.js"></script>
    
    <script>
      function polyfillsAreLoaded() {
        var script = document.createElement('script');
        script.src = 'https://static.parastorage.com/services/santa/1.6808.3/app/main-r.min.js';
        
        document.head.appendChild(script);
      }
    </script>

    
    
    
    <style id="viewerMainStyle"></style>

 <title>Btowntip</title>
                
                
                    <meta name="fb_admins_meta_tag" content=""/>
                
                    <meta name="robots" content="index"/>
                
                
                    
                    <meta property="og:title" content="Btowntip"/>
                    
                
                    
                    <meta property="og:url" content="https://btowntip.wixsite.com/btowntip"/>
                    
                
                    
                    <meta property="og:type" content="article"/>
                    
                
                    
                    <meta property="og:site_name" content="btowntip"/>
                    
                
                
                
                
                    
                        <link rel="canonical" href="https://btowntip.wixsite.com/btowntip"/>
                    
                
            

            
            

            </head>
            
                <body class="prewarmup">
            
    

    <script type="text/javascript">
          
              var htmlClassList = document.documentElement.classList;
              
          

      
      var clientSideRender = false;
      
      
      
    </script>

    
    
    
    

    <div id="SITE_CONTAINER"><div style="position:relative" class="noop" data-reactroot=""><script id="meshEligibilityBeat">
            if (wixBiSession && !wixBiSession.sentMeshEligibilityBeat) {
                wixBiSession.sentMeshEligibilityBeat = true;
                
                if (wixBiSession.sendBeat) {
                    wixBiSession.sendBeat(13, 'Meshable');
                } else {
                    var tts = '';
                    if (performance) {
                        if (performance.now) {
                            tts = '&tts=' + Math.round(performance.now());
                        }
                        if (performance.mark) {
                            performance.mark('Meshable (beat 13)');
                        }
                    }
                    (new Image()).src = 'https://frog.wix.com/bt?src=29&evid=3&pn=1&et=13&v=1.6808.3&msid=b3ca57c7-43db-4c5f-994a-2f07fd3e6988&vsi=' + wixBiSession.viewerSessionId +
                        '&is_rollout=' + (wixBiSession.is_rollout ? 1 : 0) +
                        '&url=' + encodeURIComponent(location.href.replace(/^http(s)?:\/\/(www\.)?/, '')) +
                        '&isp=0&st=2&ts=' + (Date.now() - new Date(wixBiSession.initialTimestamp)) + tts + '&iss=1&c=' + Date.now();                
                }
            }
        </script><div><style type="text/css" data-styleid="theme_fonts">.font_0 {font: normal normal normal 40px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_1 {font: normal normal normal 16px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif ;color:#999997;} 
.font_2 {font: normal normal normal 28px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_3 {font: normal normal normal 60px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_4 {font: normal normal normal 40px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_5 {font: normal normal normal 25px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_6 {font: normal normal normal 22px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_7 {font: normal normal normal 17px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_8 {font: normal normal normal 15px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_9 {font: normal normal normal 14px/1.4em proxima-n-w01-reg,sans-serif ;color:#414141;} 
.font_10 {font: normal normal normal 12px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif ;color:#999997;} 
</style><style type="text/css" data-styleid="theme_colors">.color_0 {color: #FFFFFF;}

<script type="text/javascript">
      var timeSpentInSSR = 340;
    </script>
    
</body>
</html>

#main
#SITE_HEADERinlineContent {
    height: auto;
    width: 100%;
    position: relative;
}

#SITE_HEADERinlineContent-gridWrapper {
    pointer-events: none;
}

#SITE_HEADERinlineContent-gridContainer {
    position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: min-content min-content 1fr;
    grid-template-columns: 100%;
}

#comp-jkcxawbp {
    position: relative;
    margin: 34px 0px 26px calc((100% - 980px) * 0.5);
    left: 6px;
    grid-area: 1 / 1 / 4 / 2;
    justify-self: start;
    align-self: start;
}

#comp-jkdam6w6 {
    position: relative;
    margin: 34px 0px 0 calc((100% - 980px) * 0.5);
    left: 845px;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    align-self: start;
}

#comp-jkfuoccj {
    position: relative;
    margin: 0px 0px 16px calc((100% - 980px) * 0.5);
    left: 671px;
    grid-area: 2 / 1 / 3 / 2;
    justify-self: start;
    align-self: start;
}

#SITE_HEADERcenteredContent {
    position: relative;
}

#SITE_HEADERinlineContent-gridContainer > * {
    pointer-events: initial;
}

#SITE_HEADERinlineContent-gridContainer > [id$="-rotated-wrapper"] {
    pointer-events: none;
}

#SITE_HEADERinlineContent-gridContainer > [id$="-rotated-wrapper"] > * {
    pointer-events: initial;
	


