<script nonce="yT0LOFQVtdhYYMLkPmJzsA">
            var iframe = document.getElementById('i');
            var w = 484;
            var h = 208;
            window.onresize = function() {
                var isLandscape = window.innerWidth > window.innerHeight;
                document.getElementById('t').style.display = isLandscape ? 'none' : '';
                document.getElementById('st').style.display = isLandscape ? 'none' : '';
                window.scrollTo(0, 0);
                var scale = Math.min(window.innerWidth / w, window.innerHeight / h);
                iframe.style.webkitTransform = 'scale(' + scale + ')';
                var padding = Math.ceil((window.innerWidth / scale - w) / 2) + 'px';
                iframe.style.paddingLeft = padding;
                iframe.style.paddingRight = padding;
            }
            ;
            window.onresize();
            document.addEventListener('touchstart', function() {});
        </script>
