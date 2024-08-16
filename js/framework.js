// Importation de jQuery
(function() {
    var script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    script.integrity = "sha384-o6NkQ2+M8HOf1j8Zsv/Ce9Q5wFkDlA/E8mxfRgyEuW7Xz3q8vyo2n5hl2y3/hvs7";
    script.crossOrigin = "anonymous";
    script.onload = function() {
        console.log('jQuery loaded');
    };
    document.head.appendChild(script);
})();

// Importation de Bootstrap JS
(function() {
    var script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-o6NkQ2+M8HOf1j8Zsv/Ce9Q5wFkDlA/E8mxfRgyEuW7Xz3q8vyo2n5hl2y3/hvs7";
    script.crossOrigin = "anonymous";
    script.onload = function() {
        console.log('Bootstrap JS loaded');
    };
    document.head.appendChild(script);
})();
