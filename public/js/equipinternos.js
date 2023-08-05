let input_pdf = document.getElementById("file_equip");
let texto = input_pdf.value;

function compromir_pdf () {
    JSZipUtils.getBinaryContent("texto", function (err, data) {
        if (err) {
            throw err;
        }
        var zip = new JSZip();
        zip.file("texto", data, { binary: true });
        zip.generateAsync({ type: "blob" }).then(function (content) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            var url = window.URL.createObjectURL(content);
            a.href = url;
            a.download = "arquivo_compactado.zip";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    })

}
