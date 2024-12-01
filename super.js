// Fungsi untuk menambahkan script dengan type="text/babel"
        function addBabelScript(src) {
            var script = document.createElement('script');
            script.type = 'text/babel';
            script.src = src;
            document.body.appendChild(script);
        }

        // Tambahkan script.js dan main.js dengan type="text/babel"
        addBabelScript('./content/setData.js');
        addBabelScript('./content/shape.js');
        addBabelScript('./content/index.js');
        addBabelScript('./content/nav.js');
        
        
