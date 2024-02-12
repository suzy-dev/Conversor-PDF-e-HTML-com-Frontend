const btnGeneratePDF = document.querySelector('#generate-pdf')
const btnGenerateHTML = document.querySelector('#generate-html')

// Gerar PDF
btnGeneratePDF.addEventListener("click", ()=>{

    //conteudo do PDF
    const content = document.querySelector('#content')

    const options = {
        filename: "file.pdf",
        html2canvas: {scale:2},
        jsPDF: {unit:"mm", format:"a4", orientation:"portrait"}
    }

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save()

})
