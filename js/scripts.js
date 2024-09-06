/* eslint-disable @typescript-eslint/no-unused-vars */
function exportTableToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adiciona título
    doc.setFontSize(22);
    doc.text('Plano de Estudos', 14, 20);

    // Adiciona a tabela
    const table = document.querySelector('.table-custom');
    if (table) {
        doc.autoTable({ html: table });
    } else {
        console.error('Tabela não encontrada!');
    }

    // Salva o PDF
    doc.save('plano_de_estudos.pdf');
}
